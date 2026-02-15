export interface PaperTrailItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  iconStyle: 'material' | 'material-symbol';
  actionIcon: string;
  footerText: string;
  href?: string;
  action: 'link' | 'dialog';
  dialogContent?: string;
  variant: 'dark' | 'primary' | 'violet';
}
