"use client";

import Link from "next/link";
import { CheckSquare, Code, Layers, Server, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutUsSection() {
  return (
    <section className="py-24 px-6 bg-[#F9F8F6] font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        
        {/* Left Column - Image Grid */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 md:gap-6 relative">
          
          {/* Top Left Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] overflow-hidden aspect-[4/5] relative shadow-lg"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center" />
          </motion.div>
          
          {/* Top Right Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-[2rem] overflow-hidden flex flex-col shadow-lg relative"
          >
            {/* Top Half */}
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-white text-center pb-12" style={{ backgroundColor: "var(--primary)" }}>
               <h3 className="text-4xl md:text-5xl font-black mb-1">10+</h3>
               <p className="font-bold uppercase tracking-widest text-xs md:text-sm opacity-90">Years of<br/>experience</p>
            </div>
            
            {/* Bottom Half */}
            <div className="bg-[#0A0A0A] flex-1 flex items-end justify-center pb-8 pt-12 text-white">
               <p className="font-bold text-sm md:text-base tracking-wide">24/7 technical support</p>
            </div>
            
            {/* Center Overlapping Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black w-[88px] h-[88px] rounded-full flex items-center justify-center shadow-xl z-10 border-4 border-[#F9F8F6]">
               {/* Decorative Circular Text could go here, but using an icon for clean tech look */}
               <Code className="w-8 h-8" style={{ color: "var(--primary)" }} />
               <svg className="absolute inset-0 w-full h-full animate-[spin_10s_linear_infinite]" viewBox="0 0 100 100">
                  <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                  <text className="text-[10px] font-bold uppercase tracking-widest fill-gray-800">
                    <textPath href="#circlePath" startOffset="0%">
                      • OUTSMART • TECHNOLOGY • INNOVATION
                    </textPath>
                  </text>
               </svg>
            </div>
          </motion.div>
          
          {/* Bottom Full Width Image */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="col-span-2 rounded-[2rem] overflow-hidden aspect-[21/9] relative shadow-lg"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center" />
          </motion.div>
          
        </div>

        {/* Right Column - Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          
          {/* Label Pill */}
          <div className="inline-flex items-center gap-3 bg-white px-5 py-2.5 rounded-full mb-8 text-[11px] font-bold tracking-widest uppercase shadow-sm w-max border border-gray-100">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "var(--primary)" }}></span>
            About Us
          </div>
          
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.05] tracking-tight mb-6 uppercase">
            Our Purpose. Our Commitment.
          </h2>
          
          {/* Paragraph */}
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10 font-medium">
            <strong className="text-gray-900">Vision:</strong> To become a trusted global technology partner enabling businesses through innovative digital solutions.<br/><br/>
            <strong className="text-gray-900">Mission:</strong> To deliver scalable, intelligent, and user-focused software products that create measurable business impact.
          </p>
          
          {/* Two Horizontal Cards */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-10">
            {/* Card 1 */}
            <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 group hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors" style={{ backgroundColor: "var(--primary)" }}>
                <Layers className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 text-sm md:text-base leading-tight">Innovative Digital<br/>Solutions</h4>
            </div>
            
            {/* Card 2 */}
            <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 group hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors" style={{ backgroundColor: "var(--primary)" }}>
                <Server className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 text-sm md:text-base leading-tight">Measurable Business<br/>Impact</h4>
            </div>
          </div>
          
          {/* Checkboxes */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-12">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 shrink-0" style={{ color: "var(--primary)" }} />
              <span className="text-sm font-semibold text-gray-700">Comprehensive Security Audits</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 shrink-0" style={{ color: "var(--primary)" }} />
              <span className="text-sm font-semibold text-gray-700">High-Quality Code Standards</span>
            </div>
          </div>
          
          {/* Bottom Row: Button */}
          <div className="pt-6 border-t border-gray-200">
            <Link 
              href="/about" 
              className="inline-block text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-1"
              style={{ backgroundColor: "var(--primary)" }}
            >
              More About Us
            </Link>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
