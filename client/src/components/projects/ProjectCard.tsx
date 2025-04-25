import { useState } from "react";
import { motion } from "framer-motion";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="project-card flex flex-col h-full"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      {/* Project Image/Gradient Banner */}
      <div className="relative w-full pt-[56.25%] overflow-hidden">
        <div 
          className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} transition-all duration-300`}
        >
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-2 rounded-lg bg-white/20 flex items-center justify-center">
              <i className={`${project.icon} text-white text-2xl`}></i>
            </div>
          </div>
        </div>
      </div>
      
      {/* Project Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Project Title */}
        <h3 className="text-xl font-bold mb-3 text-foreground">{project.title}</h3>
        
        {/* Project Description */}
        <p className="text-muted-foreground mb-4 text-sm">
          {project.description}
        </p>
        
        {/* Project Features */}
        {project.features && project.features.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold mb-2 text-foreground">Key Features:</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 pl-1">
              {project.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="text-sm">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Project Tags */}
        <div className="flex flex-wrap gap-2 mb-5 mt-auto">
          {project.tags.map((tag) => (
            <span 
              key={tag.name}
              className={`px-2.5 py-1 text-xs font-medium ${tag.bgClass} ${tag.textClass} rounded-full`}
            >
              {tag.name}
            </span>
          ))}
        </div>
        
        {/* Project Links */}
        <div className="flex gap-3 pt-2">
          {project.demoUrl && project.demoUrl !== "#" && (
            <motion.a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-xs px-3 py-2 rounded-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Demo
              <i className="fas fa-external-link-alt ml-2 text-xs"></i>
            </motion.a>
          )}
          
          <motion.a
            href={project.codeUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline text-xs px-3 py-2 rounded-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fab fa-github mr-2"></i>
            Source Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
