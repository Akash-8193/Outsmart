"use client";

import PageTransition from "@/components/PageTransition";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import { motion } from "framer-motion";
import { Text3DBounce } from "@/components/animations/SplitTextAnimations";

export default function BlogPage() {
  return (
    <PageTransition>
      <main className="relative w-full min-h-screen bg-white pt-24 pb-0 overflow-hidden flex flex-col">
        {/* Hero Section matching other pages */}
        <section className="relative w-full flex items-center bg-white overflow-hidden pb-12 pt-8">
          {/* Dotted Background */}
          <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply pointer-events-none" style={{ backgroundImage: "url('/dotted_world_map_bg.png')", backgroundSize: "cover", backgroundPosition: "center" }} />
          
          {/* Soft primary gradient */}
          <div className="absolute top-0 left-0 w-1/2 h-full opacity-[0.03] z-0 pointer-events-none" style={{ background: "linear-gradient(to bottom right, var(--primary), transparent)" }} />

          <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32 mx-auto flex flex-col lg:flex-row items-center relative z-10 gap-0 md:gap-10 lg:gap-16 min-h-[60vh] md:min-h-[70vh]">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-start text-left z-20">
              <h3 className="text-lg font-bold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--primary)" }}>
                Knowledge Base
              </h3>
              
              <div className="w-16 h-1 mb-8 mt-2" style={{ backgroundColor: "var(--primary)" }}></div>
              
              <div className="flex flex-wrap gap-x-4">
                <Text3DBounce as="h1" className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-black leading-[1.1] mb-2 tracking-tight drop-shadow-sm font-sans" style={{ color: "var(--foreground)" }}>
                  Our
                </Text3DBounce>
                <Text3DBounce as="h1" className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-black leading-[1.1] mb-2 tracking-tight drop-shadow-sm font-sans" style={{ color: "var(--primary)" }}>
                  Blog
                </Text3DBounce>
              </div>
              
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-8 md:mb-10 mt-6 max-w-md font-medium">
                Explore our latest articles, insights, and perspectives on software engineering, digital transformation, and AI.
              </p>
              
              <button 
                onClick={() => {
                  document.getElementById('blog-grid')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-3 text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 btn-default"
                style={{ background: "linear-gradient(90deg, var(--primary), var(--secondary))" }}
              >
                <span className="relative z-10">Read Articles</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="relative z-10">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Right Image */}
            <div className="w-full lg:w-1/2 relative flex justify-center items-center mt-12 md:mt-16 lg:mt-0">
              <div className="relative z-10 w-full max-w-[700px] ml-auto mix-blend-multiply">
                <img src="/blog_hero_3d.png" alt="Blog Hero Illustration" className="w-full h-auto object-contain brightness-105 contrast-105 gsap-float" />
              </div>
              
              {/* Soft backdrop glow to enhance the 3D effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] rounded-full blur-3xl -z-10 pointer-events-none opacity-20" style={{ backgroundColor: "var(--primary)" }}></div>
            </div>
          </div>
          
          {/* Scroll Down Indicator */}
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center z-30 opacity-60 hover:opacity-100 transition-opacity cursor-pointer hidden md:flex"
            onClick={() => {
              document.getElementById('blog-grid')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="text-[--primary] text-[0.65rem] font-bold tracking-[0.3em] uppercase mb-3 drop-shadow-sm">Scroll Down</span>
            <div className="w-[28px] h-[46px] border-2 rounded-full flex justify-center p-1.5 shadow-sm" style={{ borderColor: 'var(--primary)' }}>
              <motion.div 
                animate={{ y: [0, 16, 0] }} 
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="w-1.5 h-3 rounded-full" style={{ backgroundColor: 'var(--primary)' }}
              />
            </div>
          </motion.div>
        </section>

        {/* Anchor for scroll */}
        <div id="blog-grid" className="pt-12 relative z-10 flex-grow bg-white">
          <BlogSection hideHeader={true} />
        </div>

        {/* Contact Section at the bottom */}
        <div className="relative z-10 bg-[#F2EFE7] mt-12 pt-12">
          <ContactSection />
        </div>
      </main>
    </PageTransition>
  );
}
