export interface Aspiration {
  id: string;
  title: string;
  subtitle: string;
  statusText: string;
  progressPercent: number;
  variant: 'red' | 'blue' | 'emerald' | 'yellow' | 'cyan';
  footerText?: string;
  animated?: boolean;
}
