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

  getExperience(): ExperienceEntry[] {
    return [
      {
        id: 'deloitte',
        company: 'Deloitte',
        role: 'SDE 2 / Designation says Consultant',
        roleStyle: 'tag',
        description:
          'Writing microservices and over-engineering solutions because simple CRUD doesn\'t spark joy. Designation says Consultant but I haven\'t consulted anyone — just shipping code and pretending the architecture diagram makes sense.',
        sortOrder: 1,
      },
      {
        id: 'maxxton',
        company: 'Maxxton',
        role: 'SDE → Lead → SDE 2',
        roleStyle: 'tag',
        description:
          'Where I actually became a developer. Broke prod, fixed prod, led the team that broke prod again. Asked enough dumb questions to mass produce an FAQ. Everything I know about real engineering, I learned here.',
        sortOrder: 2,
      },
      {
        id: 'tcs',
        company: 'TCS',
        role: 'Implementation Consultant / Dayforce',
        roleStyle: 'tag',
        description:
          'Zero code written. 100% config. Learned how corporate hierarchies work by clicking dropdowns in Dayforce and filling timesheets with a straight face. Technically "tech" but let\'s not kid ourselves.',
        sortOrder: 3,
      },
      {
        id: 'jec',
        company: 'JEC - Mech Eng',
        role: 'Fee < 1 Lakh',
        roleStyle: 'badge',
        description:
          'Spent 4 years and less than 1L to learn how to ignore physics and write code instead. Best ROI of my life.',
        sortOrder: 4,
      },
    ];
  }

  getAchievements(): Achievement[] {
    return [
      {
        id: 'deloitte-hire',
        title: 'Deloitte Hired Me',
        subtitle: 'Managed to trick their filters',
        emoji: '🏢',
        progressPercent: 100,
        variant: 'indigo',
        statLabel: 'Luck',
        statValue: '100%',
      },
      {
        id: 'bike',
        title: 'Bought a Bike',
        subtitle: 'Satisfying childhood nostalgia for no reason',
        emoji: '🏍️',
        progressPercent: 40,
        variant: 'orange',
        statLabel: 'Utilization',
        statValue: '40%',
      },
    ];
  }

  getAspirations(): Aspiration[] {
    return [
      {
        id: 'girlfriend',
        title: 'Get a Girlfriend',
        subtitle: 'Log(n) complexity, 0 results',
        statusText: '404 NOT FOUND',
        progressPercent: 1,
        variant: 'red',
        footerText: 'Status: Actively Failing',
        animated: true,
      },
      {
        id: 'google',
        title: 'Get into Google',
        subtitle: 'Because why not get rejected by the best?',
        statusText: 'STATUS: QUEUED',
        progressPercent: 15,
        variant: 'blue',
      },
      {
        id: 'travel',
        title: 'Roam the World',
        subtitle: 'Traveling via street view since 2018',
        statusText: 'GOOGLE MAPS ONLY',
        progressPercent: 5,
        variant: 'emerald',
      },
      {
        id: 'money',
        title: 'Have Fuck You Money',
        subtitle: 'So I can finally write code for fun, not food',
        statusText: '-98% TO GO',
        progressPercent: 2,
        variant: 'yellow',
      },
      {
        id: 'gym',
        title: 'Get Fit Without Gym',
        subtitle: 'My fingers are shredded from typing',
        statusText: 'RUNNING CODE ONLY',
        progressPercent: 10,
        variant: 'cyan',
      },
    ];
  }

  getFeed(): FeedPost[] {
    return [
      {
        id: 'post-1',
        author: 'sanskar_dev',
        avatar: 'S',
        timestamp: 'Just now',
        location: 'Amsterdam',
        contentType: 'code',
        codeSnippet: {
          lines: [
            {
              segments: [
                { text: 'func ', type: 'keyword' },
                { text: 'fixLife', type: 'function' },
                { text: '() {', type: 'plain' },
              ],
            },
            {
              segments: [
                { text: '  // TODO: Implement happiness', type: 'comment' },
              ],
            },
            {
              segments: [
                { text: '  return ', type: 'keyword' },
                { text: 'nil', type: 'value' },
              ],
            },
            {
              segments: [{ text: '}', type: 'plain' }],
            },
          ],
        },
        caption: 'Redis Redlock latency > execution time. Why do I do this to myself? 🤡',
        hashtags: ['#backend', '#regret'],
      },
      {
        id: 'post-2',
        author: 'sanskar_dev',
        avatar: 'S',
        timestamp: '2h ago',
        location: 'Office',
        contentType: 'image',
        imageContent: {
          emoji: '☕',
          title: 'Caffeine Critical',
          variant: 'orange',
        },
        caption: 'Code quality is inversely proportional to the time since my last coffee. Currently at 0.',
        hashtags: ['#coffee', '#bug'],
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
