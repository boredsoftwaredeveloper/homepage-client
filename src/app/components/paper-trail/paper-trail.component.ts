import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { PaperTrailItem } from '../../models/paper-trail.model';

@Component({
  selector: 'app-paper-trail',
  standalone: true,
  templateUrl: './paper-trail.component.html',
  styleUrl: './paper-trail.component.scss',
})
export class PaperTrailComponent {
  readonly items: PaperTrailItem[] = inject(PortfolioDataService).getPaperTrail();

  onItemClick(item: PaperTrailItem): void {
    if (item.action === 'dialog' && item.dialogContent) {
      alert(item.dialogContent);
    }
  }
}
