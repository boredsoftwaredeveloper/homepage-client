export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  roleStyle: 'tag' | 'badge';
  description: string;
  sortOrder: number;
}
