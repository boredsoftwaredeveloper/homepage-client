import { Component, inject, signal, OnInit } from '@angular/core';
import { FeedApiService } from '../../services/feed-api.service';
import { FeedPost } from '../../models/feed-post.model';

@Component({
  selector: 'app-regret-stream',
  standalone: true,
  templateUrl: './regret-stream.component.html',
  styleUrl: './regret-stream.component.scss',
})
export class RegretStreamComponent implements OnInit {
  private readonly api = inject(FeedApiService);

  readonly feed = signal<FeedPost[]>([]);

  ngOnInit(): void {
    this.api.getAll().subscribe({
      next: (data) => this.feed.set(data),
    });
  }
}
