import { motion } from "framer-motion";
import { scrollToSection } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen pt-24 pb-16 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="text-primary-600 dark:text-primary-400">Hello, I'm Jane</span>
              <div className="mt-2">Software Engineer</div>
            </h1>
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-8 max-w-xl">
              I build interactive, high-performance web applications with a focus on creative animations and seamless user experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("projects");
                }}
                className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition duration-300 shadow-lg hover:shadow-xl"
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
                className="inline-flex items-center px-6 py-3 bg-transparent border border-slate-300 dark:border-slate-600 hover:border-primary-500 dark:hover:border-primary-400 text-slate-800 dark:text-slate-200 font-medium rounded-lg transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in touch
              </motion.a>
            </div>
            <div className="mt-10 flex gap-5">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 transition duration-300"
                whileHover={{ y: -3 }}
                aria-label="GitHub Profile"
              >
                <i className="fab fa-github text-2xl"></i>
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 transition duration-300"
                whileHover={{ y: -3 }}
                aria-label="LinkedIn Profile"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 transition duration-300"
                whileHover={{ y: -3 }}
                aria-label="Twitter Profile"
              >
                <i className="fab fa-twitter text-2xl"></i>
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto lg:ml-auto rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                    <i className="fas fa-code text-5xl"></i>
                  </div>
                  <p className="text-xl font-semibold">Interactive Animation</p>
                  <p className="text-sm mt-2 opacity-80">Creative Web Development</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
