"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageTransition from "@/components/PageTransition";
import { CheckCircle2 } from "lucide-react";

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
      title: "Custom Software Development",
      subtitle: "Scalable. Secure. Bespoke.",
      desc: "We engineer high-performance web applications, SaaS platforms, and enterprise systems tailored to your unique operational workflows. Our tech stack is modern, our architecture is robust, and our code is clean.",
      features: ["Next.js & React Native App Development", "Microservices Architecture", "Cloud-native deployments (AWS/GCP)", "Legacy system modernization"],
      color: "var(--primary)"
    },
    {
      id: "ai-agents",
      title: "AI Agent Development",
      subtitle: "Autonomous Digital Workers.",
      desc: "Transform your operations with autonomous AI agents capable of reasoning, executing complex workflows, and integrating with your existing APIs. We build custom agents that handle support, sales, and internal automation.",
      features: ["Custom LLM Integration & Fine-tuning", "Autonomous Task Execution", "Multi-agent System Architecture", "Data Privacy & Compliance"],
      color: "var(--secondary)"
    },
    {
      id: "ai-apps",
      title: "AI App Development",
      subtitle: "Intelligence built-in.",
      desc: "We infuse generative AI into consumer and B2B applications. From intelligent chatbots and content generators to predictive analytics dashboards, we make your software smarter.",
      features: ["Conversational AI Interfaces", "RAG (Retrieval-Augmented Generation)", "AI-driven Predictive Analytics", "Generative Image & Text Pipelines"],
      color: "var(--primary)"
    },
    {
      id: "it-solutions",
      title: "Full IT Solutions",
      subtitle: "Infrastructure you can trust.",
      desc: "Beyond software development, we provide complete IT consulting, robust DevOps pipelines, and 24/7 maintenance. We ensure your digital backbone is secure, scalable, and fully optimized.",
      features: ["Cloud Infrastructure Setup", "CI/CD Pipeline Automation", "Cybersecurity Audits", "24/7 Monitoring & Support"],
      color: "var(--secondary)"
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
          className="fullscreen-panel h-screen w-full flex items-center justify-center px-6 md:px-12 relative shadow-[0_-20px_40px_rgba(0,0,0,0.05)] border-t border-black/5"
          style={{ 
            // Alternate colors so the overlap is visually distinct
            background: idx % 2 === 0 ? "#ffffff" : "#F2EFE7",
            zIndex: 20 + idx 
          }}
        >
          <div className="max-w-7xl w-full flex flex-col md:flex-row gap-10 md:gap-16 items-center pt-20">
            {/* Text Content */}
            <div className="w-full md:w-1/2">
              <h3 className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: service.color }}>
                0{idx + 1}. {service.subtitle}
              </h3>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[--foreground] leading-tight">
                {service.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                {service.desc}
              </p>
            </div>
            
            {/* Feature List Card */}
            <div className="w-full md:w-1/2 bg-white/60 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-white/80 flex flex-col justify-center">
              <h4 className="text-2xl font-bold mb-8">What's Included</h4>
              <ul className="space-y-6">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-4">
                    <CheckCircle2 className="mt-1 flex-shrink-0" style={{ color: service.color }} />
                    <span className="text-gray-700 text-lg font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
      
      {/* Spacer to allow the footer to scroll up over the last pinned panel.
          The footer is 100vh below us effectively, so we just need an empty block 
          that pushes the scroll height so the footer can come into view. 
          Without a spacer, we couldn't scroll past the last pinned panel.
      */}
      <div className="h-screen w-full relative" style={{ zIndex: 10 }} />
    </PageTransition>
  );
}
