import { scrollToSection } from "@/lib/utils";
import { socialLinks } from "@/data/social";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-muted/30 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }} 
              className="flex items-center"
            >
              <div className="w-10 mr-2">
                <img src="./assets/logo.png" alt="Ahmed Hisham Logo" className="w-full h-auto" />
              </div>
              <span className="font-bold text-lg">Ahmed Hisham</span>
            </a>
            <p className="mt-4 text-muted-foreground max-w-md">
              A Mechatronics & Robotics Engineer specializing in automation, computer vision, and AI-driven solutions for complex industrial applications.
            </p>
            <div className="mt-6 flex space-x-5">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-primary transition duration-300"
                  aria-label={`${link.name} Profile`}
                >
                  <i className={`${link.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Site Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("home");
                  }} 
                  className="text-muted-foreground hover:text-primary transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("services");
                  }} 
                  className="text-muted-foreground hover:text-primary transition duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("projects");
                  }} 
                  className="text-muted-foreground hover:text-primary transition duration-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("about");
                  }} 
                  className="text-muted-foreground hover:text-primary transition duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }} 
                  className="text-muted-foreground hover:text-primary transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="fas fa-envelope text-primary mt-1 mr-2"></i>
                <span className="text-muted-foreground">ahmed.hisham2000.ah@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground">
            &copy; {currentYear} Ahmed Hisham. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0">
            <button 
              onClick={handleScrollToTop}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-primary transition duration-300 focus:outline-none"
              aria-label="Scroll to top"
            >
              <i className="fas fa-arrow-up mr-2"></i>
              Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
