import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Have a project in mind or want to discuss collaboration opportunities? I'd love to hear from you!
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-slate-50 dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="p-6 sm:p-10">
              <ContactForm />
              
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <motion.div 
                  className="text-center"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mx-auto mb-3">
                    <i className="fas fa-envelope text-primary-600 dark:text-primary-400"></i>
                  </div>
                  <h3 className="text-sm font-medium mb-1">Email</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">jane.doe@example.com</p>
                </motion.div>
                
                <motion.div 
                  className="text-center"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mx-auto mb-3">
                    <i className="fas fa-map-marker-alt text-primary-600 dark:text-primary-400"></i>
                  </div>
                  <h3 className="text-sm font-medium mb-1">Location</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">San Francisco, CA</p>
                </motion.div>
                
                <motion.div 
                  className="text-center"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mx-auto mb-3">
                    <i className="fas fa-user-clock text-primary-600 dark:text-primary-400"></i>
                  </div>
                  <h3 className="text-sm font-medium mb-1">Availability</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Open to new projects</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
