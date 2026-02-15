export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  emoji: string;
  progressPercent: number;
  variant: 'indigo' | 'orange';
  statLabel: string;
  statValue: string;
}
