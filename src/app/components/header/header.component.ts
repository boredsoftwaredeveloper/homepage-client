import { Component, inject, signal } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { AuthService } from '../../services/auth.service';
import { NavLink } from '../../models/nav-link.model';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LoginDialogComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly theme = inject(ThemeService);
  readonly auth = inject(AuthService);
  private readonly data = inject(PortfolioDataService);
  readonly navLinks: NavLink[] = this.data.getNavLinks();
  readonly showLoginDialog = signal(false);

  openLogin(): void {
    this.showLoginDialog.set(true);
  }

  closeLogin(): void {
    this.showLoginDialog.set(false);
  }

  async logout(): Promise<void> {
    await this.auth.logout();
  }
}
