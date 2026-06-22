"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Text3DBounce } from "@/components/animations/SplitTextAnimations";
import { ImageReveal } from "@/components/animations/ImageReveal";

export default function OurExpertiseSection() {
  const skills = [
    { name: "Frontend & Backend", value: 95 },
    { name: "UI/UX Design", value: 90 },
    { name: "Cloud Deployment", value: 92 },
    { name: "AI Integration", value: 88 },
  ];

  return (
    <section className="py-12 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Left Side - Image Card */}
        <div className="w-full lg:w-1/2">
          <ImageReveal className="w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[2.5rem] shadow-2xl">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/expertise_bg.png')" }}
            />
            
            {/* Bottom Dark Bar */}
            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 bg-gray-900/95 backdrop-blur-md p-5 md:p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 gsap-float z-10">
              <p className="text-white font-bold text-sm md:text-base leading-tight max-w-[200px] md:max-w-[250px]">
                Reach out for robust software and trusted IT support
              </p>
              <div 
                className="px-5 py-3 rounded-xl font-black text-sm text-white shrink-0 shadow-lg"
                style={{ backgroundColor: "var(--primary)" }}
              >
                +91 9599 34 2525
              </div>
            </div>
          </ImageReveal>
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 mb-8"
          >
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--primary)" }}></span>
            <span className="text-sm font-bold tracking-widest uppercase text-gray-800">Our Expertise</span>
          </motion.div>
          
          <Text3DBounce as="h2" className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight">
            Our expertise in reliable digital transformation
          </Text3DBounce>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12 max-w-xl"
          >
            Outsmart Technology's expertise ensures a smooth, secure, and scalable digital transformation journey for every business. We build robust enterprise solutions.
          </motion.p>

          {/* Progress Bars */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 mb-14">
            {skills.map((skill, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (idx * 0.1) }}
                className="w-full"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-gray-900">{skill.name}</span>
                  <span className="font-bold text-gray-700">{skill.value}%</span>
                </div>
                <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: "var(--primary)" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <Link 
              href="/contact"
              className="inline-flex items-center gap-4 px-8 py-4 rounded-full text-white font-bold text-lg shadow-xl hover:shadow-[--primary]/50 btn-default"
              style={{ background: "linear-gradient(90deg, var(--primary), var(--secondary))" }}
            >
              <span className="w-8 h-8 rounded-full bg-white text-[--primary] flex items-center justify-center">
                <ArrowRight className="w-5 h-5" />
              </span>
              Get Started Today
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
