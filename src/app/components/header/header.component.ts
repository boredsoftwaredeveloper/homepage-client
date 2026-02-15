import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { NavLink } from '../../models/nav-link.model';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly theme = inject(ThemeService);
  private readonly data = inject(PortfolioDataService);
  readonly navLinks: NavLink[] = this.data.getNavLinks();
}
