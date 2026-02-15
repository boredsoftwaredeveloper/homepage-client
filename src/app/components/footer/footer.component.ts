import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { FooterData } from '../../models/footer.model';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly footer: FooterData = inject(PortfolioDataService).getFooter();
}
