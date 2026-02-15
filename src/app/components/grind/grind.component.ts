import { Component, inject, signal, OnInit } from '@angular/core';
import { ExperienceApiService } from '../../services/experience-api.service';
import { ExperienceEntry } from '../../models/experience.model';

@Component({
  selector: 'app-grind',
  standalone: true,
  templateUrl: './grind.component.html',
  styleUrl: './grind.component.scss',
})
export class GrindComponent implements OnInit {
  private readonly api = inject(ExperienceApiService);

  readonly experience = signal<ExperienceEntry[]>([]);

  ngOnInit(): void {
    this.api.getAll().subscribe({
      next: (data) => this.experience.set(data),
    });
  }
}
