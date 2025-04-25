import { useEffect, useRef, useState } from "react";

interface RiveAnimationProps {
  src: string;
  artboard?: string;
  stateMachine?: string;
  isActive?: boolean;
  className?: string;
  fallback: React.ReactNode;
}

// Simple fallback component that doesn't rely on Rive at all
export default function RiveAnimation({
  fallback,
  className = "",
}: RiveAnimationProps) {
  const [isAttempted, setIsAttempted] = useState(false);
  
  // Attempt to load but don't actually use Rive
  useEffect(() => {
    // Mark that we've attempted to load
    setIsAttempted(true);
  }, []);
  
  // Just render the fallback content
  return (
    <div className={`relative ${className}`}>
      {!isAttempted && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100 dark:bg-slate-800">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
        </div>
      )}
      
      {isAttempted && fallback}
    </div>
  );
}
