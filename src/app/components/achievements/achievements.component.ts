import { Component, inject, signal, OnInit } from '@angular/core';
import { AchievementApiService } from '../../services/achievement-api.service';
import { Achievement } from '../../models/achievement.model';

@Component({
  selector: 'app-achievements',
  standalone: true,
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.scss',
})
export class AchievementsComponent implements OnInit {
  private readonly api = inject(AchievementApiService);

  readonly achievements = signal<Achievement[]>([]);

  ngOnInit(): void {
    this.api.getAll().subscribe({
      next: (data) => this.achievements.set(data),
    });
  }
}
