"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
}

export default function PageHero({ title, subtitle, description, image }: PageHeroProps) {
  return (
    <div className="relative w-full h-screen min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('${image}')` }}
      />
      {/* Dark Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      
      {/* Content Box (Glassmorphism style) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 flex flex-col items-center text-center px-8 py-16 md:py-20 max-w-4xl w-[90%] md:w-auto"
        style={{
          background: "rgba(20, 20, 20, 0.4)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderRadius: "2rem",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
        }}
      >
        {subtitle && (
          <span className="text-white/80 uppercase tracking-[0.3em] font-bold text-xs md:text-sm mb-4">
            {subtitle}
          </span>
        )}
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-white uppercase tracking-tight leading-none mb-6 drop-shadow-lg">
          {title}
        </h1>
        
        {description && (
          <>
            <div className="w-16 h-[1px] bg-white/40 mb-6" />
            <p className="text-white/90 text-sm md:text-base font-medium max-w-2xl italic font-serif leading-relaxed">
              {description}
            </p>
          </>
        )}
      </motion.div>

      {/* Scroll to Explore indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <span className="text-white/70 text-xs font-bold tracking-[0.2em] uppercase mb-4">
          Scroll to Explore
        </span>
        <motion.div 
          animate={{ height: ["0px", "40px", "0px"], opacity: [0, 1, 0], y: [0, 20, 40] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] bg-white/50"
          style={{ height: "40px" }}
        />
      </div>
    </div>
  );
}
