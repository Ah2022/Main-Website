export interface Tag {
  name: string;
  bgClass: string;
  textClass: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  tags: Tag[];
  features?: string[];
  demoUrl: string;
  codeUrl: string;
  icon: string;
  gradientFrom: string;
  gradientTo: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
