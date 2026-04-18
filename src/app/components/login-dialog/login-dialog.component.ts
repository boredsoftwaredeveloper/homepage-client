import { Component, EventEmitter, Output, signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

/**
 * Admin-only login dialog styled as a terminal/dev console.
 *
 * Provides three auth methods:
 * 1. Email + password
 * 2. Google OAuth
 * 3. GitHub OAuth
 *
 * No sign-up — this is a single-user admin panel.
 * Emits `closed` when the user dismisses or completes login.
 */
@Component({
  selector: 'app-login-dialog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-dialog.component.html',
  styleUrl: './login-dialog.component.scss',
})
export class LoginDialogComponent {
  @Output() closed = new EventEmitter<void>();

  readonly auth = inject(AuthService);

  email = '';
  password = '';
  loading = signal(false);
  error = signal<string | null>(null);

  /** Submit email + password form. */
  async submit(): Promise<void> {
    this.loading.set(true);
    this.error.set(null);
    try {
      await this.auth.login(this.email, this.password);
      this.closed.emit();
    } catch (err: unknown) {
      this.error.set(this.extractMessage(err));
    } finally {
      this.loading.set(false);
    }
  }

  /** Start OAuth flow with given provider. */
  async oauthLogin(provider: 'google' | 'github'): Promise<void> {
    this.loading.set(true);
    this.error.set(null);
    try {
      await this.auth.loginWithOAuth(provider);
    } catch (err: unknown) {
      this.error.set(this.extractMessage(err));
    } finally {
      this.loading.set(false);
    }
  }

  /** Close the dialog. */
  close(): void {
    this.closed.emit();
  }

  /** Stop overlay clicks from closing the modal inner content. */
  stopPropagation(event: Event): void {
    event.stopPropagation();
  }

  private extractMessage(err: unknown): string {
    if (err && typeof err === 'object' && 'error' in err) {
      const inner = (err as Record<string, unknown>)['error'];
      if (inner && typeof inner === 'object' && 'message' in inner) {
        return String((inner as Record<string, unknown>)['message']);
      }
    }
    return 'Lol nope. Wrong credentials, try harder.';
  }
}
