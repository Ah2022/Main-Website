import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Interactive MDR Game",
    description: "A psychological mystery game inspired by the Severance series, featuring number sorting puzzles and an eerie atmosphere.",
    riveAnimation: {
      // Using a simple, well-known example that should work properly
      src: "https://public.rive.app/hosted/145347/41495/aK9Hc4zTRXmsBWNiL6N1xA.riv",
      // Don't specify artboard or stateMachine unless we know they exist
    },
    tags: [
      { name: "React", bgClass: "bg-blue-100 dark:bg-blue-900/30", textClass: "text-blue-800 dark:text-blue-300" },
      { name: "Rive", bgClass: "bg-purple-100 dark:bg-purple-900/30", textClass: "text-purple-800 dark:text-purple-300" },
      { name: "Framer Motion", bgClass: "bg-green-100 dark:bg-green-900/30", textClass: "text-green-800 dark:text-green-300" },
    ],
    demoUrl: "#",
    codeUrl: "#",
    icon: "fas fa-brain",
    gradientFrom: "from-blue-500/20 group-hover:from-blue-500/30",
    gradientTo: "to-violet-500/20 group-hover:to-violet-500/30",
  },
  {
    id: 2,
    title: "AI Companion Bot",
    description: "Industrial maintenance AI assistant with voice control, real-time diagnostics, and augmented visualization.",
    riveAnimation: {
      // Using another simple example animation
      src: "https://public.rive.app/hosted/145347/41537/GJ9vjCJ0SXmpYEpJ7knrBQ.riv",
    },
    tags: [
      { name: "ROS2", bgClass: "bg-blue-100 dark:bg-blue-900/30", textClass: "text-blue-800 dark:text-blue-300" },
      { name: "OpenAI", bgClass: "bg-purple-100 dark:bg-purple-900/30", textClass: "text-purple-800 dark:text-purple-300" },
      { name: "Unity", bgClass: "bg-green-100 dark:bg-green-900/30", textClass: "text-green-800 dark:text-green-300" },
    ],
    demoUrl: "#",
    codeUrl: "#",
    icon: "fas fa-robot",
    gradientFrom: "from-emerald-500/20 group-hover:from-emerald-500/30",
    gradientTo: "to-blue-500/20 group-hover:to-blue-500/30",
  },
  {
    id: 3,
    title: "AI Design Release Workflow",
    description: "A tool that generates technical documentation from CAD files with collaborative review and approval workflows.",
    riveAnimation: {
      // Using another reliable example
      src: "https://public.rive.app/hosted/145347/41493/FnWvrzELQem_5abuV3GYyg.riv",
    },
    tags: [
      { name: "Python", bgClass: "bg-blue-100 dark:bg-blue-900/30", textClass: "text-blue-800 dark:text-blue-300" },
      { name: "Next.js", bgClass: "bg-purple-100 dark:bg-purple-900/30", textClass: "text-purple-800 dark:text-purple-300" },
      { name: "LangChain", bgClass: "bg-green-100 dark:bg-green-900/30", textClass: "text-green-800 dark:text-green-300" },
    ],
    demoUrl: "#",
    codeUrl: "#",
    icon: "fas fa-cogs",
    gradientFrom: "from-amber-500/20 group-hover:from-amber-500/30",
    gradientTo: "to-red-500/20 group-hover:to-red-500/30",
  }
];
