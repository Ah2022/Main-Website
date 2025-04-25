import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";
import { scrollToSection } from "@/lib/utils";

interface HeaderProps {
  activeSection: string;
}

const navItems = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Header({ activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#home" onClick={() => handleNavClick("home")} className="flex items-center text-primary-600 dark:text-primary-400 font-bold text-xl">
              <span className="font-mono mr-2">&lt;</span>Jane Doe<span className="font-mono ml-2">/&gt;</span>
            </a>
          </motion.div>
          
          <nav className="hidden md:block">
            <motion.ul 
              className="flex space-x-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {navItems.map((item) => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`transition duration-300 ${
                      activeSection === item.id
                        ? "text-primary-600 dark:text-primary-400 font-medium"
                        : "text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          </nav>
          
          <div className="flex items-center">
            <ThemeToggle />
            
            <button 
              aria-label="Toggle mobile menu"
              onClick={toggleMobileMenu}
              className="ml-2 p-2 rounded-md text-slate-600 hover:text-primary-500 dark:text-slate-400 dark:hover:text-primary-400 md:hidden focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
            </button>
          </div>
        </div>
      </div>
      
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        activeSection={activeSection} 
        navItems={navItems} 
        onNavItemClick={handleNavClick} 
      />
    </header>
  );
}
