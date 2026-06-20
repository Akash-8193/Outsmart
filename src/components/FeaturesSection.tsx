"use client";

import { Sparkles, MessageSquare, LayoutDashboard, Mic, Globe } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Nexus AI Chatbot",
      desc: "AI App Development",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "var(--primary)"
    },
    {
      title: "FinTech Dashboard",
      desc: "Custom Software",
      icon: <LayoutDashboard className="w-8 h-8" />,
      color: "var(--primary)"
    },
    {
      title: "AutoVoice Agent",
      desc: "AI Agents",
      icon: <Mic className="w-8 h-8" />,
      color: "#1A1A1A" // Dark accent mimicking the blue in the screenshot
    },
    {
      title: "Global Supply Chain ERP",
      desc: "Enterprise SaaS Platforms",
      icon: <Globe className="w-8 h-8" />,
      color: "var(--primary)"
    }
  ];

  return (
    <section className="py-24 px-6 bg-white font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Left Column: Overlapping Circle Images */}
        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-start pt-10 pl-10">
          
          {/* Dashed Circle Decorative */}
          <div className="absolute top-0 left-0 w-[95%] aspect-square rounded-full border-2 border-dashed opacity-40 z-0 pointer-events-none" style={{ borderColor: "var(--primary)" }} />
          
          {/* Main Large Circle Image */}
          <div className="relative w-[85%] aspect-square rounded-full overflow-hidden z-10 border-[12px] border-white shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center" />
          </div>

          {/* Small Overlapping Circle Image */}
          <div className="absolute bottom-[-5%] right-0 w-[50%] aspect-square rounded-full overflow-hidden z-20 border-[12px] border-white shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center" />
          </div>
          
          {/* Decorative Sparkle Lines */}
          <div className="absolute bottom-[15%] right-[-8%] z-0" style={{ color: "var(--primary)" }}>
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M10 50 L20 40 M25 55 L30 45 M5 35 L15 30" />
            </svg>
          </div>
          
        </div>

        {/* Right Column: Content */}
        <div className="w-full lg:w-1/2 flex flex-col pt-10">
          
          {/* Pill Label */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-100 shadow-sm w-max mb-6 bg-white">
            <Sparkles className="w-4 h-4" style={{ color: "var(--primary)" }} />
            <span className="text-xs font-bold uppercase tracking-widest text-gray-800">Featured Work</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0A0A0A] leading-[1.1] tracking-tight mb-6">
            Featured <span style={{ color: "var(--primary)" }}>Work</span>
          </h2>
          <p className="text-gray-600 leading-relaxed font-medium text-lg mb-12">
            Explore how we've helped forward-thinking companies implement robust software and AI solutions to dominate their markets.
          </p>

          {/* Grid of Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12">
            {features.map((feature, idx) => (
              <div key={idx} className="flex flex-col items-start">
                {/* Icon Box */}
                <div 
                  className="w-16 h-16 rounded-[1.25rem] flex items-center justify-center text-white mb-6 shadow-xl transition-transform hover:-translate-y-2"
                  style={{ backgroundColor: feature.color }}
                >
                  {feature.icon}
                </div>
                
                {/* Text Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed font-medium text-sm md:text-base uppercase tracking-widest">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
