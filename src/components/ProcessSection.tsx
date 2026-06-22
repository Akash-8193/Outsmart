"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Text3DBounce } from "@/components/animations/SplitTextAnimations";
import { ImageReveal } from "@/components/animations/ImageReveal";

const steps = [
  {
    num: "01",
    subtitle: "INITIAL PHASE",
    title: "Discovery",
    desc: "We understand your business, goals, and challenges. Every great product begins with a deep dive where we listen intensely to build a strategic foundation that aligns perfectly with your real-world needs.",
    quote: "\"A thorough understanding is the difference between an average app and an industry-disrupting platform.\"",
    img: "/process_step1.png",
  },
  {
    num: "02",
    subtitle: "PLANNING",
    title: "Strategy",
    desc: "We plan the right approach to achieve your objectives. Our architects transform your requirements into a robust, scalable blueprint designed uniquely for your enterprise.",
    quote: "\"Every component is intentional. Every choice is optimized. Nothing is left to chance.\"",
    img: "/process_step2.png",
  },
  {
    num: "03",
    subtitle: "USER EXPERIENCE",
    title: "Design",
    desc: "We create intuitive designs focused on user experience. From API contracts to UI/UX mockups, everything is engineered to ensure zero bottlenecks at scale.",
    quote: "\"Beautiful interfaces that guide the user seamlessly through complex workflows.\"",
    img: "/process_step3.png",
  },
  {
    num: "04",
    subtitle: "ENGINEERING",
    title: "Development",
    desc: "We build robust, scalable, and secure solutions. Our elite developers execute the blueprint with meticulous precision using agile methodologies.",
    quote: "\"Clean code, automated testing, and zero technical debt. All working for your product.\"",
    img: "/process_step4.png",
  },
  {
    num: "05",
    subtitle: "QUALITY ASSURANCE",
    title: "Testing",
    desc: "We ensure quality through thorough testing and QA. We run exhaustive QA cycles, security audits, load testing, and staging walkthroughs.",
    quote: "\"Our mantra: Prepare for every contingency, then deliver flawlessly.\"",
    img: "/process_step1.png",
  },
  {
    num: "06",
    subtitle: "GO LIVE",
    title: "Deployment",
    desc: "We deploy smoothly and ensure a seamless go-live. When deployment day arrives, every system parameter is dialed in and ready for users.",
    quote: "\"Your software launches flawlessly, ready to handle massive scale from day one.\"",
    img: "/process_step2.png",
  },
  {
    num: "07",
    subtitle: "LONG TERM",
    title: "Support",
    desc: "We provide ongoing support to keep you growing. 24/7 monitoring, maintenance, and iterative improvements ensure your product stays ahead.",
    quote: "\"We keep you informed, involved, and confident at every step of the journey.\"",
    img: "/process_step3.png",
  }
];

export default function ProcessSection() {
  return (
    <section className="relative w-full bg-transparent py-16 overflow-hidden font-sans text-[#1A1A1A]">
      
      {/* Background large text - made darker to be visible */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0">
        <h1 className="text-[10rem] md:text-[18rem] font-black text-black/[0.08] tracking-tighter leading-none mt-4">
          PROCESS
        </h1>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-10 max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-[--primary] uppercase tracking-[0.3em] font-bold text-sm mb-4">
            OUR APPROACH
          </span>
          <Text3DBounce as="h2" className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#050505] leading-tight mb-6 drop-shadow-sm uppercase">
            Our Development Process
          </Text3DBounce>
          <p className="text-base md:text-lg text-gray-600 font-medium max-w-2xl leading-relaxed">
            A structured, transparent process that keeps you informed at every stage — from initial discovery through long-term support.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full">
          {/* Vertical Line - Hidden on small mobile, visible from md upwards */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 -translate-x-1/2 z-0" />
          
          <div className="flex flex-col gap-16 md:gap-24 relative z-10">
            {steps.map((step, index) => {
              const isEven = index % 2 === 1; // 0-indexed, so index 1 is "02" (even step)
              
              return (
                <div 
                  key={step.num} 
                  className={`flex flex-col md:flex-row items-center w-full gap-12 md:gap-0 ${isEven ? "md:flex-row-reverse" : ""}`}
                >
                  
                  {/* Timeline Center Node (Desktop only) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-[4px] border-[--primary] bg-white z-20 shadow-sm items-center justify-center">
                  </div>

                  {/* Text Content Block */}
                  <div className={`w-full md:w-1/2 flex flex-col ${isEven ? "md:items-start md:text-left md:pl-16 lg:pl-24" : "md:items-end md:text-right md:pr-16 lg:pr-24"} text-center`}>
                    <div className="max-w-lg w-full">
                      <span className="text-4xl md:text-6xl font-black block mb-2 text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, var(--primary), var(--secondary))" }}>
                        {step.num}
                      </span>
                      <span className="uppercase tracking-widest text-[--secondary] font-bold text-xs md:text-sm mb-2 block">
                        {step.subtitle}
                      </span>
                      <h3 className="text-3xl md:text-4xl font-serif text-[#050505] mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 font-medium">
                        {step.desc}
                      </p>
                      <div className={`relative ${isEven ? "pl-5 border-l-4 border-[--primary]" : "md:pr-5 md:border-r-4 md:border-l-0 border-l-4 pl-5 md:pl-0 border-[--primary]"}`}>
                        <p 
                          className="text-lg md:text-xl italic font-serif leading-relaxed text-transparent bg-clip-text"
                          style={{ backgroundImage: "linear-gradient(90deg, var(--primary), var(--secondary))" }}
                        >
                          {step.quote}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Image Block */}
                  <div className={`w-full md:w-1/2 flex ${isEven ? "md:justify-end md:pr-16 lg:pr-24" : "md:justify-start md:pl-16 lg:pl-24"} justify-center`}>
                    <ImageReveal className="w-full max-w-[450px] lg:max-w-[500px] aspect-[4/3] rounded-[2rem] shadow-2xl relative z-10">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                        style={{ backgroundImage: `url(${step.img})` }}
                      />
                    </ImageReveal>
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
