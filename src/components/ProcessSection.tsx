"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    num: "01",
    subtitle: "UNDERSTANDING YOUR VISION",
    title: "Discovery & Strategy",
    desc: "Every great product begins with a deep dive. We listen intensely—your business goals, your target audience, your specific challenges, and the legacy systems we need to integrate. This strategic foundation ensures that our architecture perfectly aligns with your real-world needs.",
    quote: "\"A thorough technical brief is the difference between an average app and an industry-disrupting platform.\"",
    img: "/process_step1.png",
  },
  {
    num: "02",
    subtitle: "BUILDING THE BLUEPRINT",
    title: "Architecture & Design",
    desc: "Our senior architects transform your requirements into a robust, scalable blueprint. We craft detailed system designs, API contracts, UI/UX mockups, and database schemas—all engineered uniquely for your enterprise to ensure zero bottlenecks at scale.",
    quote: "\"Every component is intentional. Every database index is optimized. Nothing is left to chance.\"",
    img: "/process_step2.png",
  },
  {
    num: "03",
    subtitle: "WRITING THE CODE",
    title: "Development & Engineering",
    desc: "Frontend mastery, backend resilience, cloud integrations, and AI model fine-tuning—our elite developers execute the blueprint with meticulous precision. We employ agile methodologies with continuous integration to keep every thread connected and moving fast.",
    quote: "\"Clean code, automated testing, and zero technical debt. All working seamlessly for your product.\"",
    img: "/process_step3.png",
  },
  {
    num: "04",
    subtitle: "ZERO SURPRISES ON LAUNCH",
    title: "Deployment & Scaling",
    desc: "We run exhaustive QA cycles, security audits, load testing, and staging walkthroughs. When deployment day arrives, every system parameter is dialed in. Your software launches flawlessly, ready to handle thousands of concurrent users from day one.",
    quote: "\"Our mantra: Prepare for every contingency, automate the infrastructure, then deliver flawlessly.\"",
    img: "/process_step4.png",
  }
];

export default function ProcessSection() {
  return (
    <section className="relative w-full bg-[#FCFBFA] py-16 overflow-hidden font-sans text-[#1A1A1A]">
      
      {/* Background large text - made darker to be visible */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0">
        <h1 className="text-[10rem] md:text-[18rem] font-black text-black/[0.08] tracking-tighter leading-none mt-4">
          PROCESS
        </h1>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Header Section - reduced mb to save space */}
        <div className="text-center mb-20 max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-[#C18A58] uppercase tracking-[0.3em] font-bold text-sm mb-4">
            OUR PROCESS
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#050505] leading-tight mb-6 drop-shadow-sm">
            From Vision to Deployment,<br />
            <span className="italic text-[#C18A58]">We Build Everything</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 font-medium max-w-2xl leading-relaxed">
            Our proven 4-step engineering process ensures every scalable system is delivered on time, within budget, and beyond expectations.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full">
          {/* Vertical Line - Hidden on small mobile, visible from md upwards */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#E5DCCF] -translate-x-1/2 z-0" />
          
          {/* Reduced gap between steps to reduce scrolling */}
          <div className="flex flex-col gap-16 md:gap-24 relative z-10">
            {steps.map((step, index) => {
              const isEven = index % 2 === 1; // 0-indexed, so index 1 is "02" (even step)
              
              return (
                <div 
                  key={step.num} 
                  className={`flex flex-col md:flex-row items-center w-full gap-8 md:gap-0 ${isEven ? "md:flex-row-reverse" : ""}`}
                >
                  
                  {/* Timeline Center Node (Desktop only) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-[4px] border-[#C18A58] bg-[#FCFBFA] z-20 shadow-sm items-center justify-center">
                  </div>

                  {/* Text Content Block */}
                  <div className={`w-full md:w-1/2 flex flex-col ${isEven ? "md:items-start md:pl-16" : "md:items-end md:text-right md:pr-16"} text-center md:text-left`}>
                    <div className="max-w-xl">
                      <span className="text-5xl md:text-7xl font-serif text-[#4A3628] block mb-2">
                        {step.num}
                      </span>
                      <span className="uppercase tracking-widest text-[#C18A58] font-bold text-xs md:text-sm mb-2 block">
                        {step.subtitle}
                      </span>
                      <h3 className="text-3xl md:text-4xl font-serif text-[#050505] mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 font-medium">
                        {step.desc}
                      </p>
                      <div className={`relative ${isEven ? "pl-5 border-l-2 border-[#C18A58]" : "md:pr-5 md:border-r-2 md:border-l-0 border-l-2 pl-5 md:pl-0 border-[#C18A58]"}`}>
                        <p className="text-lg md:text-xl text-[#C18A58] italic font-serif leading-relaxed">
                          {step.quote}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Image Block */}
                  <div className={`w-full md:w-1/2 flex ${isEven ? "md:justify-end md:pr-8" : "md:justify-start md:pl-8"} justify-center`}>
                    <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                        style={{ backgroundImage: `url(${step.img})` }}
                      />
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
