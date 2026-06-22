"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageTransition from "@/components/PageTransition";
import { Shield, Zap, Target, Lightbulb, Users, Globe } from "lucide-react";
import AboutUsSection from "@/components/AboutUsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";

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

        {/* Sections from Home Page as requested */}
        <div className="mt-20">
          <AboutUsSection />
        </div>
        <div className="mt-10 mb-20">
          <WhyChooseUsSection />
        </div>
      </div>
    </PageTransition>
  );
}
