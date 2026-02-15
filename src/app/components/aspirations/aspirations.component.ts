import { Component, inject, signal, OnInit } from '@angular/core';
import { AspirationApiService } from '../../services/aspiration-api.service';
import { Aspiration } from '../../models/aspiration.model';

@Component({
  selector: 'app-aspirations',
  standalone: true,
  templateUrl: './aspirations.component.html',
  styleUrl: './aspirations.component.scss',
})
export class AspirationsComponent implements OnInit {
  private readonly api = inject(AspirationApiService);

  readonly aspirations = signal<Aspiration[]>([]);

  ngOnInit(): void {
    this.api.getAll().subscribe({
      next: (data) => this.aspirations.set(data),
    });
  }
}
