import { Injectable } from '@angular/core';
import { HeroData } from '../models/hero.model';
import { AboutData } from '../models/about.model';
import { PaperTrailItem } from '../models/paper-trail.model';
import { ExperienceEntry } from '../models/experience.model';
import { Achievement } from '../models/achievement.model';
import { Aspiration } from '../models/aspiration.model';
import { FeedPost } from '../models/feed-post.model';
import { NavLink } from '../models/nav-link.model';
import { FooterData } from '../models/footer.model';

/**
 * Portfolio data service.
 * Returns dummy data for now. Will eventually call `GET /api/v1/homepage`.
 */
@Injectable({ providedIn: 'root' })
export class PortfolioDataService {

  getHero(): HeroData {
    return {
      name: 'Sanskar',
      tagline: 'SYSTEM: OVER-COMPLICATING',
      description:
        'I built this because the alternative was staring at a wall. I\'ve decided to over-engineer my entire existence for the sake of "learning." This overly complex system solves exactly zero real-world problems but runs on Kubernetes.',
      imageUrl: 'seth_photo.jpeg',
      systemStatus: 'SYSTEM: OVER-COMPLICATING',
      serverResponse: '12ms (Cached in Redis for no reason)',
      currentStatus: 'Life is boring',
    };
  }

  getAbout(): AboutData {
    return {
      quote:
        '"Personally an introvert. Professionally a shameless extrovert. I ask dumb (and occasionally smart) questions to everyone from interns to CTOs."',
      verifiedBy: 'Rob from Maxxton can verify.',
      philosophy: "Philosophy: If it works, don't touch it.",
    };
  }

  getPaperTrail(): PaperTrailItem[] {
    return [
      {
        id: 'codebase',
        title: 'The Codebase',
        description: 'My public GitHub repo where spaghetti code goes to die.',
        icon: 'code',
        iconStyle: 'material',
        actionIcon: 'arrow_outward',
        footerText: '404 Issues Found',
        href: 'https://github.com/boredsoftwaredeveloper',
        action: 'link',
        variant: 'dark',
      },
      {
        id: 'chaos',
        title: 'The Chaos Management',
        description: 'GitHub Projects. Where I organize my procrastination into Kanban boards.',
        icon: 'folder_special',
        iconStyle: 'material',
        actionIcon: 'arrow_outward',
        footerText: 'Moving Tickets to Done > Doing work',
        href: 'https://github.com/orgs/boredsoftwaredeveloper/projects/1',
        action: 'link',
        variant: 'primary',
      },
      {
        id: 'architecture',
        title: 'The System Architecture',
        description: 'Click to visualize the absolute mess of microservices.',
        icon: 'account_tree',
        iconStyle: 'material-symbol',
        actionIcon: 'visibility',
        footerText: 'View Architecture Diagram',
        action: 'dialog',
        dialogContent: 'Currently everything is static HTML/CSS/JS. Future plans include adding some React and maybe a microservice or two for the sake of it.',
        variant: 'violet',
      },
    ];
  }

  getNavLinks(): NavLink[] {
    return [
      { label: 'GitHub', href: 'https://github.com/sethiyasanskar63', iconClass: 'devicon-github-original' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sanskar-sethiya/', iconClass: 'devicon-linkedin-plain' },
      { label: 'Instagram', href: 'https://www.instagram.com/sanskar_sethiya/', iconClass: 'devicon-instagram-plain' },
    ];
  }

  getFooter(): FooterData {
    return {
      disclaimer: 'Generated this by AI, copied the rest from god knows where and anyone can copy.',
      links: [
        { label: '/github', href: 'https://github.com/boredsoftwaredeveloper' },
        { label: '/linkedin', href: 'https://www.linkedin.com/in/sanskar-sethiya/' },
      ],
    };
  }
}
