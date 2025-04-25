import { motion } from "framer-motion";
import { scrollToSection } from "@/lib/utils";
import { socialLinks } from "@/data/social";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen pt-24 pb-16 flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="text-primary">Hello, I'm Ahmed</span>
              <div className="mt-2">Mechatronics & Robotics Engineer</div>
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl">
              I specialize in developing high-performance automation and AI-driven solutions 
              for complex industrial applications. My expertise spans robotics, computer vision, 
              and embedded systems engineering.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("projects");
                }}
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View my work
                <i className="fas fa-arrow-right ml-2"></i>
              </motion.a>
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in touch
              </motion.a>
            </div>
            <div className="mt-10 flex gap-5">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  whileHover={{ y: -3 }}
                  aria-label={`${link.name} Profile`}
                >
                  <i className={`${link.icon} text-2xl`}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto lg:ml-auto rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/assets/profile.png" 
                alt="Ahmed Hisham - Mechatronics & Robotics Engineer" 
                className="w-full h-full object-cover"
              />
              {/* Decorative elements */}
              <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-primary/20 z-0"></div>
              <div className="absolute -bottom-12 -left-12 w-32 h-32 rounded-full bg-primary/10 z-0"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
