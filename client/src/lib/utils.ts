import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop - 80,
      behavior: "smooth",
    });
  }
}

export function handleFormSubmit(event: React.FormEvent, callback?: () => void) {
  event.preventDefault();
  if (callback) {
    callback();
  }
}

// Manages active section based on scroll position
export function getActiveSection(): string {
  const sections = document.querySelectorAll("section[id]");
  const scrollY = window.scrollY;
  
  let currentSection = "home";
  
  sections.forEach((section) => {
    const sectionTop = (section as HTMLElement).offsetTop - 100;
    const sectionBottom = sectionTop + (section as HTMLElement).offsetHeight;
    const sectionId = section.getAttribute("id") as string;
    
    if (scrollY >= sectionTop && scrollY < sectionBottom) {
      currentSection = sectionId;
    }
  });
  
  return currentSection;
}
