import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import ServicesSection from "@/components/services/ServicesSection";
import AboutSection from "@/components/about/AboutSection";
import ContactSection from "@/components/contact/ContactSection";
import { getActiveSection } from "@/lib/utils";
import EntrancePage from "@/pages/entrance.tsx";

function App() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [hasEntered, setHasEntered] = useState<boolean>(false);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentSection = getActiveSection();
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {!hasEntered ? (
        <EntrancePage onEnter={() => setHasEntered(true)} />
      ) : (
        <motion.div
          className="flex flex-col min-h-screen bg-background text-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Header activeSection={activeSection} />

          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <HeroSection />
                <ServicesSection />
                <ProjectsSection />
                <AboutSection />
                <ContactSection />
              </motion.div>
            </AnimatePresence>
          </main>

          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
