import { Component, EventEmitter, inject, Output } from '@angular/core';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { PaperTrailItem } from '../../models/paper-trail.model';

@Component({
  selector: 'app-paper-trail',
  standalone: true,
  templateUrl: './paper-trail.component.html',
  styleUrl: './paper-trail.component.scss',
})
export class PaperTrailComponent {
  @Output() openArchitecture = new EventEmitter<void>();

  readonly items: PaperTrailItem[] = inject(PortfolioDataService).getPaperTrail();

  onItemClick(item: PaperTrailItem): void {
    if (item.action === 'dialog' && item.id === 'architecture') {
      this.openArchitecture.emit();
    }
  }
}
