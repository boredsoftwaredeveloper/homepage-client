import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { Achievement } from '../../models/achievement.model';

@Component({
  selector: 'app-achievements',
  standalone: true,
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.scss',
})
export class AchievementsComponent {
  readonly achievements: Achievement[] = inject(PortfolioDataService).getAchievements();
}
