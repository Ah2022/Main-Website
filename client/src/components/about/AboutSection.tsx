import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import profileImg from "@assets/Profile pic.png";

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
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <div className="relative w-full aspect-square max-w-md mx-auto lg:ml-auto rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={profileImg} 
                  alt="Ahmed Hisham - Mechatronics & Robotics Engineer" 
                  className="w-full h-full object-cover"
                />

                {/* Decorative elements */}
                <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-primary/20 z-0"></div>
                <div className="absolute -bottom-12 -left-12 w-32 h-32 rounded-full bg-primary/10 z-0"></div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
