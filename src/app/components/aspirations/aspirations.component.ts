import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { Aspiration } from '../../models/aspiration.model';

@Component({
  selector: 'app-aspirations',
  standalone: true,
  templateUrl: './aspirations.component.html',
  styleUrl: './aspirations.component.scss',
})
export class AspirationsComponent {
  readonly aspirations: Aspiration[] = inject(PortfolioDataService).getAspirations();
}
