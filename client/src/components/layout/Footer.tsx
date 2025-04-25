import { scrollToSection } from "@/lib/utils";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <a href="#home" onClick={() => scrollToSection("home")} className="text-2xl font-bold text-white">
              <span className="font-mono">&lt;</span>Jane Doe<span className="font-mono">/&gt;</span>
            </a>
            <p className="mt-4 text-slate-400 max-w-md">
              A software engineer specializing in interactive web applications and creative animations.
            </p>
            <div className="mt-6 flex space-x-5">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-white transition duration-300"
                aria-label="GitHub Profile"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-white transition duration-300"
                aria-label="LinkedIn Profile"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-white transition duration-300"
                aria-label="Twitter Profile"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a 
                href="https://codepen.io" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-white transition duration-300"
                aria-label="CodePen Profile"
              >
                <i className="fab fa-codepen text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Site Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home" 
                  onClick={() => scrollToSection("home")} 
                  className="text-slate-400 hover:text-white transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  onClick={() => scrollToSection("projects")} 
                  className="text-slate-400 hover:text-white transition duration-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={() => scrollToSection("about")} 
                  className="text-slate-400 hover:text-white transition duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={() => scrollToSection("contact")} 
                  className="text-slate-400 hover:text-white transition duration-300"
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
                <i className="fas fa-envelope text-primary-500 mt-1 mr-2"></i>
                <span className="text-slate-400">jane.doe@example.com</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-primary-500 mt-1 mr-2"></i>
                <span className="text-slate-400">San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-slate-500">
            &copy; {currentYear} Jane Doe. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0">
            <button 
              onClick={handleScrollToTop}
              className="px-4 py-2 text-sm text-slate-400 hover:text-white transition duration-300 focus:outline-none"
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
