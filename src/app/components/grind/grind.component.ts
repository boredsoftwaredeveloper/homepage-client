import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { ExperienceEntry } from '../../models/experience.model';

@Component({
  selector: 'app-grind',
  standalone: true,
  templateUrl: './grind.component.html',
  styleUrl: './grind.component.scss',
})
export class GrindComponent {
  readonly experience: ExperienceEntry[] = inject(PortfolioDataService).getExperience();
}
