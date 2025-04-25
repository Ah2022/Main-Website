import { useState } from "react";
import { motion } from "framer-motion";
import RiveAnimation from "@/components/ui/RiveAnimation";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="group rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition duration-300 flex flex-col h-full"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      <div className="relative w-full pt-[56.25%] bg-slate-100 dark:bg-slate-800 overflow-hidden">
        <RiveAnimation
          src={project.riveAnimation.src}
          artboard={project.riveAnimation.artboard}
          stateMachine={project.riveAnimation.stateMachine}
          isActive={isHovered}
          className="absolute inset-0"
          fallback={
            <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} transition-all duration-300`}>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 rounded-lg bg-primary-500/20 flex items-center justify-center">
                  <i className={`${project.icon} text-primary-600 dark:text-primary-400 text-2xl`}></i>
                </div>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{project.title} Animation</p>
              </div>
            </div>
          }
        />
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{project.title}</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-4 flex-1">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span 
              key={tag.name}
              className={`px-3 py-1 text-xs font-medium ${tag.bgClass} ${tag.textClass} rounded-full`}
            >
              {tag.name}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          <motion.a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium text-sm rounded-lg transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Live Demo
            <i className="fas fa-external-link-alt ml-2"></i>
          </motion.a>
          
          <motion.a
            href={project.codeUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 font-medium text-sm rounded-lg transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fab fa-github mr-2"></i>
            Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
