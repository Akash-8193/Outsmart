"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageTransition from "@/components/PageTransition";
import { Text3DBounce } from "@/components/animations/SplitTextAnimations";
import PageHero from "@/components/PageHero";
import { Shield, Zap, Target, Lightbulb, Users, Globe } from "lucide-react";
import AboutUsSection from "@/components/AboutUsSection";
import MissionVisionSection from "@/components/MissionVisionSection";
import OurExpertiseSection from "@/components/OurExpertiseSection";
import OtherSolutionsSection from "@/components/OtherSolutionsSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";

export default function About() {
  const processRef = useRef<HTMLDivElement>(null);
  const timelineLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // USPs reveal animation
    const usps = gsap.utils.toArray(".usp-card");
    gsap.fromTo(
      usps,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".usps-section",
          start: "top 80%",
        },
      }
    );

    // Vertical timeline animation
    if (timelineLineRef.current && processRef.current) {
      gsap.fromTo(
        timelineLineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: processRef.current,
            start: "top 50%",
            end: "bottom 80%",
            scrub: 1,
          },
        }
      );
    }
  }, []);

  const usps = [
    { icon: <Shield />, title: "Enterprise Security", desc: "Military-grade encryption and compliance built into every app we deploy." },
    { icon: <Zap />, title: "Lightning Fast", desc: "Optimized architectures ensuring sub-second response times globally." },
    { icon: <Target />, title: "Precision Engineering", desc: "Codebases built to scale without technical debt." },
    { icon: <Lightbulb />, title: "AI-First Approach", desc: "We integrate state-of-the-art LLMs natively into your workflows." },
    { icon: <Users />, title: "Dedicated Teams", desc: "Your project gets our undivided attention and elite engineering talent." },
    { icon: <Globe />, title: "Global Reach", desc: "Infrastructure designed to support users anywhere in the world." },
  ];

  const processSteps = [
    { title: "Discovery", desc: "We analyze your business needs and technical requirements." },
    { title: "Design", desc: "Architecting the solution and mapping out the user experience." },
    { title: "Development", desc: "Agile sprints building the core application foundation." },
    { title: "AI Integration", desc: "Training and connecting intelligent autonomous agents." },
    { title: "Deployment", desc: "Seamless launch to robust, auto-scaling infrastructure." },
    { title: "Support", desc: "24/7 monitoring, maintenance, and iterative improvements." },
  ];

  return (
    <PageTransition>
      {/* Custom About Hero matching the user's 3D image layout & theme colors */}
      <section className="relative w-full min-h-screen flex items-center bg-white overflow-hidden pt-24 pb-12">
        {/* Dotted Background using the dedicated world map image */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply" style={{ backgroundImage: "url('/dotted_world_map_bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
        
        {/* Soft primary gradient matching the vibe */}
        <div className="absolute top-0 left-0 w-1/2 h-full opacity-[0.03] z-0 pointer-events-none" style={{ background: "linear-gradient(to bottom right, var(--primary), transparent)" }}></div>

        <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32 mx-auto flex flex-col lg:flex-row items-center relative z-10 gap-0 md:gap-10 lg:gap-16">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left z-20">
            <Text3DBounce as="h1" className="text-4xl md:text-5xl lg:text-5xl font-black leading-[1.1] mb-4 tracking-tight drop-shadow-sm font-sans" style={{ color: "var(--foreground)" }}>
              About us
            </Text3DBounce>
            
            <div className="text-xl md:text-2xl font-bold mb-6 md:mb-8 tracking-tight flex gap-2">
              <span style={{ color: "var(--primary)" }}>Home</span>
              <span className="text-gray-400">/</span>
              <span style={{ color: "var(--foreground)" }}>About Us</span>
            </div>
            
            <div className="w-16 h-1 mb-6 md:mb-8" style={{ backgroundColor: "var(--primary)" }}></div>
            
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-4 md:mb-10 max-w-md font-medium">
              We build intelligent software and AI-powered solutions that help businesses grow.
            </p>
          </div>
          
          {/* Right Image */}
          <div className="w-full lg:w-1/2 relative flex justify-center items-center mt-4 md:mt-16 lg:mt-0">
            <img src="/about_hero_3d.png" alt="About Us 3D Illustration" className="relative z-10 w-full max-w-[850px] ml-auto h-auto object-contain gsap-float scale-105 lg:scale-110 lg:translate-x-8" style={{ filter: "hue-rotate(15deg) saturate(1.1)" }} />
            
            {/* Soft backdrop glow to enhance the 3D effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] rounded-full blur-3xl -z-10 pointer-events-none opacity-20" style={{ backgroundColor: "var(--primary)" }}></div>
          </div>
        </div>
        
        {/* Scroll Down Indicator */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center z-30 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
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
      <div className="pb-10 px-6">

        {/* Sections from Home Page as requested */}
        <div>
          <AboutUsSection />
        </div>

        {/* Mission & Vision */}
        <MissionVisionSection />

        {/* Our Expertise */}
        <OurExpertiseSection />

        {/* What We Do */}
        <WhatWeDoSection />

        {/* Other Solutions We Build */}
        <OtherSolutionsSection />
      </div>
    </PageTransition>
  );
}
