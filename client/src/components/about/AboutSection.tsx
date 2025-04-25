import { motion } from "framer-motion";
import { skills } from "@/data/skills";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
              I'm a software engineer with a passion for creating interactive, user-focused web applications. With expertise in front-end development and interactive animations, I bridge the gap between technical functionality and engaging user experiences.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
              My background in both design and engineering allows me to approach problems holistically, creating solutions that are both technically robust and aesthetically pleasing.
            </p>
            
            <h3 className="text-xl font-bold mt-10 mb-4">My Skills</h3>
            <div className="flex flex-wrap gap-3 mb-8">
              {skills.map((skill) => (
                <motion.span 
                  key={skill} 
                  className="px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-full text-sm font-medium"
                  whileHover={{ scale: 1.05, backgroundColor: "#3b82f6", color: "#ffffff" }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
            
            <motion.a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-file-alt mr-2"></i>
              Download Resume
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Developer working on code" 
                className="w-full h-auto"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <motion.div 
                className="bg-white dark:bg-slate-800 p-5 rounded-xl shadow-lg"
                whileHover={{ y: -5 }}
              >
                <div className="text-primary-600 dark:text-primary-400 mb-2">
                  <i className="fas fa-code text-2xl"></i>
                </div>
                <h3 className="text-lg font-bold mb-1">Front-End Focus</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Creating responsive, accessible, and performant interfaces
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white dark:bg-slate-800 p-5 rounded-xl shadow-lg"
                whileHover={{ y: -5 }}
              >
                <div className="text-secondary-500 mb-2">
                  <i className="fas fa-lightbulb text-2xl"></i>
                </div>
                <h3 className="text-lg font-bold mb-1">Creative Problem Solver</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Finding innovative solutions to technical challenges
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
