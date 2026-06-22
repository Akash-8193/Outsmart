"use client";

import PageTransition from "@/components/PageTransition";
import ContactSection from "@/components/ContactSection";
import { Text3DBounce } from "@/components/animations/SplitTextAnimations";
import { ImageReveal } from "@/components/animations/ImageReveal";

export default function Contact() {
  return (
    <PageTransition>
      {/* Custom Contact Hero matching the user's 3D image layout */}
      <section className="relative w-full min-h-screen flex items-center bg-[var(--background)] overflow-hidden pt-24 pb-12">
        {/* Dotted Background to simulate the map texture */}
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 3px 3px, var(--foreground) 1px, transparent 0)", backgroundSize: "24px 24px" }}></div>
        
        {/* Soft primary gradient matching the vibe */}
        <div className="absolute top-0 left-0 w-1/2 h-full opacity-[0.05] z-0 pointer-events-none" style={{ background: "linear-gradient(to bottom right, var(--primary), transparent)" }}></div>

        <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32 mx-auto flex flex-col lg:flex-row items-center relative z-10 gap-10 lg:gap-16">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left z-20">
            <Text3DBounce as="h1" className="text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] font-black leading-[1.1] mb-2 tracking-tight drop-shadow-sm font-sans" style={{ color: "var(--foreground)" }}>
              Contact Us
            </Text3DBounce>
            
            <h2 className="text-[1.75rem] md:text-[2.5rem] lg:text-[3.25rem] font-bold leading-[1.2] mb-6 tracking-tight" style={{ color: "var(--foreground)" }}>
              Start Your Digital <br className="hidden lg:block" />
              <span style={{ color: "var(--primary)" }}>Transformation Journey</span>
            </h2>
            
            <div className="w-16 h-1 mb-8" style={{ backgroundColor: "var(--primary)" }}></div>
            
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-10 max-w-md font-medium">
              Whether it's custom software, AI solutions, or enterprise systems, our team is ready to help you grow.
            </p>
            
            <button 
              onClick={() => {
                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-3 text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 btn-default"
              style={{ background: "linear-gradient(90deg, var(--primary), var(--secondary))" }}
            >
              <span className="relative z-10">Schedule A Consultation</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="relative z-10">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Right Image */}
          <div className="w-full lg:w-1/2 relative flex justify-center items-center mt-16 lg:mt-0">
            <ImageReveal className="relative z-10 w-full max-w-[850px] ml-auto">
              <img src="/contact_hero_3d.png" alt="Contact Us 3D Illustration" className="w-full h-auto object-contain mix-blend-multiply scale-105 lg:scale-110 lg:translate-x-8 gsap-float" style={{ filter: "hue-rotate(105deg)" }} />
            </ImageReveal>
            
            {/* Soft backdrop glow to enhance the 3D effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] rounded-full blur-3xl -z-10 pointer-events-none opacity-20" style={{ backgroundColor: "var(--primary)" }}></div>
          </div>
        </div>
      </section>

      <div id="contact-form" className="pb-20 px-6 min-h-screen relative overflow-hidden flex flex-col items-center justify-start pt-24 bg-white">
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
