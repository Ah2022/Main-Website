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
  { id: "services", label: "Services" },
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
      className={`fixed top-0 left-0 right-0 bg-background/90 backdrop-blur-md border-b border-border z-50 transition-all duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#home" onClick={(e) => {
              e.preventDefault();
              handleNavClick("home");
            }} className="flex items-center">
              <div className="w-10 mr-2">
                <img src="./assets/logo.png" alt="Ahmed Hisham Logo" className="w-full h-auto" />
              </div>
              <span className="font-bold text-lg">Ahmed Hisham</span>
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
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                    className={`transition duration-300 ${
                      activeSection === item.id
                        ? "text-primary font-medium"
                        : "text-muted-foreground hover:text-primary"
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
              className="ml-2 p-2 rounded-md text-muted-foreground hover:text-primary md:hidden focus:outline-none focus:ring-2 focus:ring-primary"
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
