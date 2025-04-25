import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Interactive MDR Game",
    description: "A psychological mystery game inspired by the Severance series, featuring number sorting puzzles and an eerie atmosphere.",
    image: "/assets/mdr-game.jpg", // Placeholder - we'll update with real images
    tags: [
      { name: "React", bgClass: "bg-blue-100 dark:bg-blue-900/30", textClass: "text-blue-800 dark:text-blue-300" },
      { name: "Tailwind", bgClass: "bg-blue-100 dark:bg-blue-900/30", textClass: "text-blue-800 dark:text-blue-300" },
      { name: "Framer Motion", bgClass: "bg-green-100 dark:bg-green-900/30", textClass: "text-green-800 dark:text-green-300" },
      { name: "Rive", bgClass: "bg-purple-100 dark:bg-purple-900/30", textClass: "text-purple-800 dark:text-purple-300" },
    ],
    features: [
      "Simulated MDR terminal environment",
      "Number sorting puzzle mechanic based on 'scary' numbers",
      "Eerie soundtrack + distorted visuals as stress builds",
      "Personal progress tracking with 'Innie' vs 'Outie' perspective switch"
    ],
    demoUrl: "#",
    codeUrl: "https://github.com/Ah2022",
    icon: "fas fa-brain",
    gradientFrom: "from-blue-500/20 group-hover:from-blue-500/30",
    gradientTo: "to-violet-500/20 group-hover:to-violet-500/30",
  },
  {
    id: 2,
    title: "AI Companion Bot",
    description: "Industrial maintenance AI assistant with voice control, real-time diagnostics, and augmented visualization.",
    image: "/assets/ai-bot.jpg", // Placeholder - we'll update with real images
    tags: [
      { name: "ROS2", bgClass: "bg-blue-100 dark:bg-blue-900/30", textClass: "text-blue-800 dark:text-blue-300" },
      { name: "OpenAI", bgClass: "bg-purple-100 dark:bg-purple-900/30", textClass: "text-purple-800 dark:text-purple-300" },
      { name: "Unity", bgClass: "bg-green-100 dark:bg-green-900/30", textClass: "text-green-800 dark:text-green-300" },
      { name: "Gazebo", bgClass: "bg-amber-100 dark:bg-amber-900/30", textClass: "text-amber-800 dark:text-amber-300" },
    ],
    features: [
      "Conversational agent embedded in a factory simulation",
      "Voice-controlled inspections & part identification",
      "On-screen augmented visualization of diagnostics",
      "Chatbot learns from maintenance logs over time"
    ],
    demoUrl: "#",
    codeUrl: "https://github.com/Ah2022",
    icon: "fas fa-robot",
    gradientFrom: "from-emerald-500/20 group-hover:from-emerald-500/30",
    gradientTo: "to-blue-500/20 group-hover:to-blue-500/30",
  },
  {
    id: 3,
    title: "AI Design Release Workflow",
    description: "A tool that generates technical documentation from CAD files with collaborative review and approval workflows.",
    image: "/assets/workflow-tool.jpg", // Placeholder - we'll update with real images
    tags: [
      { name: "Python", bgClass: "bg-blue-100 dark:bg-blue-900/30", textClass: "text-blue-800 dark:text-blue-300" },
      { name: "LangChain", bgClass: "bg-purple-100 dark:bg-purple-900/30", textClass: "text-purple-800 dark:text-purple-300" },
      { name: "Next.js", bgClass: "bg-green-100 dark:bg-green-900/30", textClass: "text-green-800 dark:text-green-300" },
      { name: "Streamlit", bgClass: "bg-red-100 dark:bg-red-900/30", textClass: "text-red-800 dark:text-red-300" },
    ],
    features: [
      "Upload CAD or specs → generate release doc with part specs, tolerances, test cases",
      "Interactive interface for engineers to tweak AI-suggested content",
      "Real-time collaboration with version control simulation",
      "Integration with Jira or GitHub issues (mocked or real)"
    ],
    demoUrl: "#",
    codeUrl: "https://github.com/Ah2022",
    icon: "fas fa-cogs",
    gradientFrom: "from-amber-500/20 group-hover:from-amber-500/30",
    gradientTo: "to-red-500/20 group-hover:to-red-500/30",
  }
];