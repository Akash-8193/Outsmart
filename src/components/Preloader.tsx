"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show the preloader for 2.5 seconds to let the beautiful animation play out
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#F2EFE7]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex flex-col items-center"
          >
            {/* Animated glowing ring behind the logo */}
            <motion.div 
              animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0, 0.2] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute inset-[-40px] rounded-full bg-[--primary] blur-2xl pointer-events-none"
            />
            
            {/* Logo Image */}
            <img 
              src="/logo.png" 
              alt="Outsmart Technology" 
              className="relative z-10 w-auto h-16 md:h-24 object-contain"
              onError={(e) => {
                // Fallback text if the logo image isn't placed in the public folder yet
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.parentElement!.innerHTML += '<span class="text-3xl font-bold text-[--primary]">Outsmart.</span>';
              }}
            />
            
            {/* Progress Bar */}
            <div className="mt-12 w-48 h-1 bg-gray-200 rounded-full overflow-hidden relative z-10">
              <motion.div 
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-full"
                style={{ background: "linear-gradient(90deg, var(--primary), var(--secondary))" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
