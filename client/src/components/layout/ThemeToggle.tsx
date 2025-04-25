import { useTheme } from "@/hooks/use-theme";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button 
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="p-2 rounded-full text-slate-600 hover:text-primary-500 dark:text-slate-400 dark:hover:text-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition duration-300"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        key={theme}
      >
        {theme === "light" ? (
          <i className="fas fa-sun text-lg"></i>
        ) : (
          <i className="fas fa-moon text-lg"></i>
        )}
      </motion.div>
    </button>
  );
}
