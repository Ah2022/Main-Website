export interface RiveAnimationConfig {
  src: string;
  artboard?: string;
  stateMachine?: string;
}

export interface Tag {
  name: string;
  bgClass: string;
  textClass: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  riveAnimation: RiveAnimationConfig;
  tags: Tag[];
  demoUrl: string;
  codeUrl: string;
  icon: string;
  gradientFrom: string;
  gradientTo: string;
}
