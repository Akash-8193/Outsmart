"use client";

import Link from "next/link";
import { ArrowRight, Code, ShieldCheck } from "lucide-react";

export default function WhyChooseUsSection() {
  return (
    <section className="py-24 px-6 bg-[#FCFBFA] font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-8 items-center">
        
        {/* Left Content Column */}
        <div className="w-full lg:w-1/2 flex flex-col pr-0 lg:pr-12">
          {/* Pill Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] w-max mb-8">
             <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--primary)" }}></div>
             <span className="text-sm font-bold text-gray-800 tracking-wide">Why Choose Us</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0A0A0A] leading-[1.1] tracking-tight mb-6">
            Why enterprises trust our engineering
          </h2>
          
          <p className="text-gray-600 leading-relaxed font-medium text-lg mb-12 max-w-xl">
            We stand out by delivering scalable, secure, and future-proof software solutions designed to give your business an unfair competitive advantage.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-black/5">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 bg-gray-50 border border-gray-100">
                <Code className="w-6 h-6" style={{ color: "var(--primary)" }} />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3 tracking-tight">Elite Talent</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-medium">
                From frontend to architecture, our senior engineers write flawless code for every project.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-black/5">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 bg-gray-50 border border-gray-100">
                <ShieldCheck className="w-6 h-6" style={{ color: "var(--primary)" }} />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3 tracking-tight">Zero Tech Debt</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-medium">
                We build scalable systems that are secure, documented, and exceptionally easy to maintain.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10">
            {/* Contact Button matching design */}
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-4 text-white font-bold p-2 pr-8 rounded-full shadow-lg transition-transform hover:-translate-y-1"
              style={{ backgroundColor: "var(--primary)" }}
            >
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white">
                <ArrowRight className="w-5 h-5" />
              </div>
              <span className="tracking-wide">Contact Us</span>
            </Link>

            {/* Profile Block */}
            <div className="flex items-center gap-4">
              <img src="https://i.pravatar.cc/150?img=32" alt="CEO" className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md" />
              <div>
                <h4 className="font-bold text-gray-900 text-lg leading-tight">Alex Mercer</h4>
                <p className="text-sm text-gray-500 font-medium">CEO & Founder</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Images Column */}
        <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-[700px] mt-16 lg:mt-0">
          {/* Top Right Image */}
          <div className="absolute top-0 right-0 w-[85%] h-[65%] rounded-[2rem] overflow-hidden shadow-2xl z-0">
             <div className="absolute inset-0 bg-[url('/why_choose_us_1.png')] bg-cover bg-center" />
          </div>
          
          {/* Bottom Left Image */}
          <div className="absolute bottom-10 left-0 w-[85%] h-[65%] rounded-[2rem] overflow-hidden shadow-2xl z-10 border-[12px] border-[#FCFBFA]">
             <div className="absolute inset-0 bg-[url('/why_choose_us_2.png')] bg-cover bg-center" />
          </div>
        </div>

      </div>
    </section>
  );
}
