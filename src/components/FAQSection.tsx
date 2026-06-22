"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X, Star } from "lucide-react";
import { Text3DBounce } from "@/components/animations/SplitTextAnimations";
import { ImageReveal } from "@/components/animations/ImageReveal";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "WHAT KIND OF SOFTWARE SOLUTIONS DO YOU BUILD?",
      answer: "We specialize in custom web applications, SaaS platforms, and enterprise software designed to scale. Our team uses modern frameworks like Next.js to ensure top-tier performance and reliability for your business operations."
    },
    {
      question: "HOW CAN AI AGENTS IMPROVE MY BUSINESS?",
      answer: "AI agents can automate repetitive tasks, provide 24/7 intelligent customer support, and execute complex workflows autonomously. This allows your human team to focus on high-value, strategic work."
    },
    {
      question: "WHAT IS THE TYPICAL TIMELINE FOR A PROJECT?",
      answer: "Project timelines vary based on complexity. A standard AI integration might take 4-6 weeks, while a full-scale enterprise software build can take 3-6 months from discovery to launch."
    },
    {
      question: "DO YOU PROVIDE ONGOING SUPPORT AND MAINTENANCE?",
      answer: "Absolutely. We offer dedicated maintenance contracts, ensuring your software remains secure, up-to-date, and fully optimized long after the initial launch."
    },
    {
      question: "HOW DO YOU ENSURE DATA PRIVACY AND SECURITY?",
      answer: "Security is our top priority. We implement industry-standard encryption, strict access controls, and follow compliance frameworks to keep your proprietary data completely safe."
    }
  ];

  return (
    <section className="py-12 px-6 bg-transparent">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
        
        {/* Left Column - Image & Stats */}
        <div className="w-full lg:w-1/2 relative pt-8 lg:pt-0">
          <ImageReveal className="w-full h-[500px] lg:h-[800px] rounded-[2rem] shadow-md">
            {/* High-quality tech/office stock image as a placeholder for the church image */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center" />
          </ImageReveal>
          
          {/* Stats Card overlapping bottom-left */}
          <div className="absolute -bottom-8 left-4 md:-left-4 text-white p-6 md:p-8 rounded-[1.5rem] shadow-xl w-64 md:w-72 border-8 border-[#F2EFE7] gsap-float" style={{ backgroundColor: "var(--primary)" }}>
            <div className="flex -space-x-3 mb-6">
              <img src="https://i.pravatar.cc/100?img=3" alt="Reviewer" className="w-12 h-12 rounded-full border-[3px] bg-white" style={{ borderColor: "var(--primary)" }} />
              <img src="https://i.pravatar.cc/100?img=4" alt="Reviewer" className="w-12 h-12 rounded-full border-[3px] bg-white" style={{ borderColor: "var(--primary)" }} />
              <img src="https://i.pravatar.cc/100?img=5" alt="Reviewer" className="w-12 h-12 rounded-full border-[3px] bg-white" style={{ borderColor: "var(--primary)" }} />
            </div>
            <div className="text-3xl font-black flex items-center mb-2 tracking-tight">
              <Star className="w-6 h-6 mr-2 fill-white text-white" />
              4.9/5
            </div>
            <div className="text-sm font-semibold opacity-90 leading-tight">
              Based on <AnimatedCounter value={2500} suffix="+" /><br/>reviews
            </div>
          </div>
        </div>

        {/* Right Column - FAQ Accordion */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center pt-16 lg:pt-0">
          {/* Label Pill */}
          <div className="inline-flex items-center gap-3 bg-white px-5 py-2.5 rounded-full mb-8 text-[11px] font-bold tracking-widest uppercase shadow-sm w-max">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "var(--primary)" }}></span>
            Frequently Asked Questions
          </div>
          
          <Text3DBounce as="h2" className="text-4xl md:text-5xl lg:text-5xl font-black uppercase leading-[1.05] mb-12 tracking-tight text-gray-900">
            Answers To The Question You Might Have About Us
          </Text3DBounce>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  key={idx}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className={`rounded-xl overflow-hidden cursor-pointer transition-all duration-300 shadow-sm ${
                    isOpen ? 'text-white' : 'bg-white text-gray-900 hover:bg-gray-50'
                  }`}
                  style={isOpen ? { backgroundColor: "var(--primary)" } : {}}
                >
                  <div className="px-6 md:px-8 py-5 flex items-center justify-between">
                    <h3 className={`text-sm md:text-base font-bold uppercase tracking-wide pr-4 ${isOpen ? 'text-white' : 'text-gray-900'}`}>
                      {idx + 1}. {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {isOpen ? <X strokeWidth={3} size={20} /> : <Plus strokeWidth={3} size={20} />}
                    </div>
                  </div>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 text-white/90 text-sm md:text-base leading-relaxed font-medium">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
