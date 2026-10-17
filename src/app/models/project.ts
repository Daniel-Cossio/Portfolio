export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category?: string;
  highlight?: string;
  repoUrl?: string;
  demoUrl?: string;
}
