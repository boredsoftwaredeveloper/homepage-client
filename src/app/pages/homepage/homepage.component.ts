import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutComponent } from '../../components/about/about.component';
import { PaperTrailComponent } from '../../components/paper-trail/paper-trail.component';
import { GrindComponent } from '../../components/grind/grind.component';
import { AchievementsComponent } from '../../components/achievements/achievements.component';
import { AspirationsComponent } from '../../components/aspirations/aspirations.component';
import { RegretStreamComponent } from '../../components/regret-stream/regret-stream.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ArchitectureDialogComponent } from '../../components/architecture-dialog/architecture-dialog.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    PaperTrailComponent,
    GrindComponent,
    AchievementsComponent,
    AspirationsComponent,
    RegretStreamComponent,
    FooterComponent,
    ArchitectureDialogComponent,
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  expandedCard: string | null = null;

  openCard(card: string): void {
    this.expandedCard = card;
    document.body.style.overflow = 'hidden';
  }

  closeCard(): void {
    this.expandedCard = null;
    document.body.style.overflow = '';
  }

  onOverlayClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.closeCard();
    }
  }
}
