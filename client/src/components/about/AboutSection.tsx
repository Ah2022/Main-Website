import { motion } from "framer-motion";
import { skills } from "@/data/skills";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passion for combining robotics, automation, and intelligent systems to solve real-world challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                I'm a Mechatronics & Robotics Engineer specializing in automation and AI-driven solutions for 
                complex industrial applications. My expertise spans robotics, computer vision, and embedded systems 
                engineering.
              </p>
              <p>
                With a background in both mechanical and software engineering, I approach problems holistically, 
                creating solutions that are both technically robust and highly efficient. I'm passionate about 
                applying cutting-edge technologies to solve real-world challenges in automation and manufacturing.
              </p>
            </div>
            
            <h3 className="text-xl font-bold mt-10 mb-4">Technical Skills</h3>
            <div className="flex flex-wrap gap-3 mb-8">
              {skills.map((skill, index) => (
                <motion.span 
                  key={skill} 
                  className="px-3 py-1.5 bg-muted text-foreground rounded-full text-sm font-medium"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
            
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn btn-primary mt-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-paper-plane mr-2"></i>
              Get In Touch
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-primary/10 to-primary/5 p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div 
                  className="bg-card p-5 rounded-xl shadow-md"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-primary mb-4">
                    <i className="fas fa-robot text-3xl"></i>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Robotics Focus</h3>
                  <p className="text-sm text-muted-foreground">
                    Design and implementation of autonomous robotics systems for industrial applications
                  </p>
                </motion.div>
                
                <motion.div 
                  className="bg-card p-5 rounded-xl shadow-md"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-primary mb-4">
                    <i className="fas fa-microchip text-3xl"></i>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Embedded Systems</h3>
                  <p className="text-sm text-muted-foreground">
                    Developing specialized computing systems for mechanical and electrical applications
                  </p>
                </motion.div>
                
                <motion.div 
                  className="bg-card p-5 rounded-xl shadow-md"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-primary mb-4">
                    <i className="fas fa-eye text-3xl"></i>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Computer Vision</h3>
                  <p className="text-sm text-muted-foreground">
                    Building vision systems that enable machines to perceive and analyze their environment
                  </p>
                </motion.div>
                
                <motion.div 
                  className="bg-card p-5 rounded-xl shadow-md"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-primary mb-4">
                    <i className="fas fa-brain text-3xl"></i>
                  </div>
                  <h3 className="text-lg font-bold mb-2">AI Integration</h3>
                  <p className="text-sm text-muted-foreground">
                    Implementing machine learning algorithms to enhance automation with intelligent capabilities
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
