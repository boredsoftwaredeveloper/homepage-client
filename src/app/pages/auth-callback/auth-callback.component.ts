import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

/**
 * Handles the OAuth callback redirect from Supabase.
 * Extracts the auth code from the URL, exchanges it for tokens,
 * then navigates back to the homepage.
 */
@Component({
  selector: 'app-auth-callback',
  standalone: true,
  template: `
    <div class="callback-container">
      <p class="callback-text">Completing login…</p>
    </div>
  `,
  styles: [`
    .callback-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    .callback-text {
      font-size: 16px;
      color: var(--color-subtext);
    }
  `],
})
export class AuthCallbackComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly auth = inject(AuthService);

  async ngOnInit(): Promise<void> {
    const code = this.route.snapshot.queryParamMap.get('code');
    if (code) {
      await this.auth.handleOAuthCallback(code);
    }
    // If opened in a popup, close it; otherwise navigate home
    if (window.opener) {
      window.close();
    } else {
      await this.router.navigate(['/']);
    }
  }
}
