import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { FeedPost } from '../../models/feed-post.model';

@Component({
  selector: 'app-regret-stream',
  standalone: true,
  templateUrl: './regret-stream.component.html',
  styleUrl: './regret-stream.component.scss',
})
export class RegretStreamComponent {
  readonly feed: FeedPost[] = inject(PortfolioDataService).getFeed();
}
