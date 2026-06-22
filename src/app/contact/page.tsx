"use client";

import PageTransition from "@/components/PageTransition";
import ContactSection from "@/components/ContactSection";

export default function Contact() {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 px-6 min-h-screen relative overflow-hidden flex items-center justify-center">
        {/* Animated Background Gradient */}
        <div 
          className="absolute right-0 top-0 w-1/2 h-full opacity-20 pointer-events-none" 
          style={{ 
            background: "radial-gradient(circle at center, var(--secondary) 0%, transparent 70%)",
            filter: "blur(100px)",
          }} 
        />
        
        <ContactSection />
      </div>
    </PageTransition>
  );
}
