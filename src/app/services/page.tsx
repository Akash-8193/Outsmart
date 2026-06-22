"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";

export default function Services() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const panels = gsap.utils.toArray(".fullscreen-panel");
    
    panels.forEach((panel: any) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top", 
        pin: true, 
        pinSpacing: false, // Allows the next section to scroll over this one
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const services = [
    {
      id: "custom-software",
      category: "Software Engineering",
      title: "Custom Software",
      subtitle: "Scalable. Secure. Bespoke.",
      image: "/service_custom_software.png"
    },
    {
      id: "web-mobile",
      category: "Digital Platforms",
      title: "Web & Mobile Apps",
      subtitle: "Intuitive & Powerful Interfaces.",
      image: "/service_web_mobile.png"
    },
    {
      id: "ai-automation",
      category: "Intelligence",
      title: "AI & Automation",
      subtitle: "Transformative Autonomous Workflows.",
      image: "/service_ai_automation.png"
    },
    {
      id: "cloud-saas",
      category: "Infrastructure",
      title: "Cloud & SaaS Products",
      subtitle: "Infrastructure you can trust.",
      image: "/service_cloud_saas.png"
    }
  ];

  return (
    <PageTransition>
      {/* Intro Panel */}
      <div className="fullscreen-panel h-screen w-full flex items-center justify-center px-6 relative z-10 shadow-[0_10px_30px_rgba(0,0,0,0.1)]" style={{ background: "var(--background)" }}>
        <div className="max-w-4xl mx-auto text-center mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-8"
            style={{ color: "var(--primary)" }}
          >
            Engineering the <br className="hidden md:block" /> Impossible.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-700 leading-relaxed"
          >
            We don't do off-the-shelf. We provide tailored, high-end technology services designed to give your business an unfair advantage. Scroll down to explore.
          </motion.p>
        </div>
      </div>

      {/* Full-Screen Service Cards */}
      {services.map((service, idx) => (
        <div 
          key={service.id} 
          className="fullscreen-panel h-screen w-full relative overflow-hidden flex items-center justify-center"
          style={{ zIndex: 20 + idx }}
        >
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0 bg-[#FCFBFA]">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] ease-out hover:scale-110"
              style={{ backgroundImage: `url(${service.image})` }}
            />
          </div>

          <div className="relative z-10 w-full max-w-7xl px-6 flex flex-col items-start justify-center h-full pt-16">
            <div className="bg-white/40 backdrop-blur-md border border-white/60 p-8 md:p-10 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] inline-flex flex-col max-w-full">
              <h4 className="text-sm font-bold tracking-[0.2em] uppercase mb-4 flex items-center gap-3" style={{ color: "var(--primary)" }}>
                <span>0{idx + 1} / {service.category}</span>
              </h4>
              
              <h2 className="text-4xl md:text-6xl lg:text-[5.5rem] font-serif tracking-tight text-gray-900 leading-[1.1] mb-4 drop-shadow-sm whitespace-nowrap">
                {service.title}
              </h2>
              
              <p className="text-lg md:text-2xl text-gray-800 font-medium italic tracking-wide mb-8 max-w-xl">
                {service.subtitle}
              </p>
              
              <Link
                href={`/service/${service.id}`}
                className="group inline-flex items-center gap-4 text-sm font-bold tracking-widest uppercase text-gray-900"
              >
                <span>Explore Experience</span>
                <span className="w-12 h-[1px] bg-gray-900 transition-all duration-300 group-hover:w-24 group-hover:bg-[--primary]"></span>
              </Link>
            </div>
          </div>
        </div>
      ))}
      
      {/* Subsequent Sections wrapper with z-30 and bg-white to slide over the pinned panels */}
      <div className="relative z-30 bg-white pt-20">
        <ProcessSection />

        {/* Final CTA / Contact Form */}
        <div className="bg-[#F2EFE7] mt-20 pt-10">
          <ContactSection />
        </div>
      </div>
    </PageTransition>
  );
}
