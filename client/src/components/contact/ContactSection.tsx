import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import { socialLinks } from "@/data/social";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to discuss collaboration opportunities? I'd love to hear from you!
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-card rounded-2xl shadow-xl overflow-hidden border border-border"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="p-6 sm:p-10">
              <ContactForm />
              
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <motion.div 
                  className="text-center"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <i className="fas fa-envelope text-primary"></i>
                  </div>
                  <h3 className="text-sm font-medium mb-1">Email</h3>
                  <p className="text-sm text-muted-foreground">ahmed.hisham2000.ah@gmail.com</p>
                </motion.div>
                
                <motion.div 
                  className="text-center"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <i className="fas fa-code-branch text-primary"></i>
                  </div>
                  <h3 className="text-sm font-medium mb-1">GitHub</h3>
                  <a 
                    href="https://github.com/Ah2022" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    github.com/Ah2022
                  </a>
                </motion.div>
                
                <motion.div 
                  className="text-center"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <i className="fas fa-user-clock text-primary"></i>
                  </div>
                  <h3 className="text-sm font-medium mb-1">Availability</h3>
                  <p className="text-sm text-muted-foreground">Open to new projects</p>
                </motion.div>
              </div>
              
              <div className="mt-12 text-center">
                <h3 className="text-base font-medium mb-4">Connect with me</h3>
                <div className="flex justify-center space-x-6">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center rounded-full bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                      whileHover={{ y: -5 }}
                      aria-label={link.name}
                    >
                      <i className={`${link.icon} text-xl`}></i>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
