export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  image: string;
}

export interface Skill {
  category: string;
  items: string[];
}
