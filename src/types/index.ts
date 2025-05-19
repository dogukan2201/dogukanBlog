export interface Post {
  id: string;
  title: string;
  date: string;
  readTime: number;
  category: string;
  tags: string[];
  excerpt: string;
  coverImage: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
}