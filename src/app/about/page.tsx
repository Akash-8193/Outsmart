"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageTransition from "@/components/PageTransition";
import { Shield, Zap, Target, Lightbulb, Users, Globe } from "lucide-react";

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
      <div className="pt-32 pb-20 px-6 min-h-screen">
        {/* Header */}
        <section className="max-w-4xl mx-auto text-center mb-32">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-8"
            style={{ color: "var(--primary)" }}
          >
            Pioneering the <br/> AI Frontier.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-700 leading-relaxed"
          >
            Outsmart Technology was founded on a simple premise: the software of tomorrow will write itself, heal itself, and think for itself. We are a collective of engineers, data scientists, and designers dedicated to helping ambitious companies outpace their competition by embracing the AI revolution.
          </motion.p>
        </section>

        {/* Why Choose Us */}
        <section className="max-w-7xl mx-auto mb-32 usps-section">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-600">The Outsmart Advantage</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {usps.map((usp, idx) => (
              <div key={idx} className="usp-card bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full mb-6 flex items-center justify-center text-[--primary] bg-[--primary]/10">
                  {usp.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{usp.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{usp.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Process */}
        <section className="max-w-4xl mx-auto mb-32" ref={processRef}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-lg text-gray-600">How we turn complex problems into elegant solutions.</p>
          </div>
          
          <div className="relative pl-8 md:pl-0">
            {/* Vertical Line */}
            <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform md:-translate-x-1/2 origin-top">
              <div ref={timelineLineRef} className="w-full h-full origin-top" style={{ background: "linear-gradient(to bottom, var(--primary), var(--secondary))" }} />
            </div>

            {processSteps.map((step, idx) => (
              <div key={idx} className={`relative flex items-center mb-16 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="hidden md:block md:w-1/2" />
                
                {/* Node */}
                <div className="absolute left-0 md:left-1/2 w-10 h-10 bg-white border-4 rounded-full transform -translate-x-[5px] md:-translate-x-1/2 z-10 flex items-center justify-center font-bold text-sm" style={{ borderColor: "var(--primary)", color: "var(--primary)" }}>
                  {idx + 1}
                </div>
                
                {/* Content */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}>
                  <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                    <h3 className="text-xl font-bold mb-2 text-[--primary]">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
