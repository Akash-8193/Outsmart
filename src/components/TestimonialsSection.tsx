"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Outsmart Technology streamlined our operations with a seamless digital solution.",
    company: "JCA Digitech"
  },
  {
    quote: "The solution simplified operations and improved workflow management.",
    company: "AM Foods"
  },
  {
    quote: "Professional execution, timely delivery, and a user-friendly system that added real value to our business.",
    company: "Gayatri Textiles"
  },
  {
    quote: "The platform improved both customer experience and daily operations.",
    company: "YuTurn Restaurant"
  },
  {
    quote: "Reliable technology backed by excellent support and scalability.",
    company: "Electra Wires"
  },
  {
    quote: "A modern solution that enhanced productivity across our teams.",
    company: "Amsys Infocom Pvt. Ltd."
  },
  {
    quote: "A robust and scalable solution focused on performance and usability.",
    company: "NBCC"
  },
  {
    quote: "A dependable partner for digitizing and streamlining operations.",
    company: "Cornerstone Buildcom"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="relative w-full bg-transparent py-12 overflow-hidden font-sans text-[#1A1A1A]">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% - 1.5rem)); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .marquee-container:hover .animate-marquee {
          animation-play-state: paused !important;
        }
      `}} />

      {/* Background large text */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0">
        <h1 className="text-[7rem] md:text-[14rem] lg:text-[18rem] font-black text-black/[0.05] tracking-tighter leading-none mt-4 uppercase">
          TESTIMONIALS
        </h1>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-10 max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-[#C18A58] uppercase tracking-[0.3em] font-bold text-sm mb-4">
            TRUSTED BY GROWING BUSINESSES
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#050505] leading-tight mb-6 drop-shadow-sm uppercase">
            What Our Clients Say
          </h2>
          <p className="text-base md:text-lg text-gray-600 font-medium max-w-3xl leading-relaxed">
            We take pride in delivering solutions that drive success. Here's what our clients have to say about working with <span className="font-bold" style={{ color: "var(--primary)" }}>Outsmart Technology.</span>
          </p>
        </div>

      </div>

      {/* Marquee Container */}
      <div 
        className="w-full relative overflow-hidden flex gap-6 py-4 marquee-container"
        style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
      >
        {/* First Group */}
        <div className="flex gap-6 min-w-max animate-marquee">
          {testimonials.map((test, idx) => (
            <div 
              key={`g1-${idx}`} 
              className="w-[320px] md:w-[380px] lg:w-[420px] shrink-0 bg-white rounded-[2rem] p-8 flex flex-col h-full shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 relative transition-transform hover:-translate-y-2 cursor-pointer"
            >
              
              {/* Decorative Quote Icon */}
              <div className="absolute top-6 right-6 text-[#C18A58] opacity-10">
                <Quote size={40} strokeWidth={2} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-[#C18A58]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 font-serif text-base leading-relaxed flex-grow mb-6 relative z-10">
                "{test.quote}"
              </p>

              {/* Divider Line */}
              <div className="w-full h-px bg-gray-100 mb-5 relative z-10"></div>

              {/* Company Info */}
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold text-white shadow-sm" style={{ background: "linear-gradient(135deg, var(--primary), var(--secondary))" }}>
                  {test.company.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-[#050505] text-sm leading-tight">{test.company}</h4>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Second Group (Duplicate for seamless loop) */}
        <div className="flex gap-6 min-w-max animate-marquee" aria-hidden="true">
          {testimonials.map((test, idx) => (
            <div 
              key={`g2-${idx}`} 
              className="w-[320px] md:w-[380px] lg:w-[420px] shrink-0 bg-white rounded-[2rem] p-8 flex flex-col h-full shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 relative transition-transform hover:-translate-y-2 cursor-pointer"
            >
              
              {/* Decorative Quote Icon */}
              <div className="absolute top-6 right-6 text-[#C18A58] opacity-10">
                <Quote size={40} strokeWidth={2} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-[#C18A58]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 font-serif text-base leading-relaxed flex-grow mb-6 relative z-10">
                "{test.quote}"
              </p>

              {/* Divider Line */}
              <div className="w-full h-px bg-gray-100 mb-5 relative z-10"></div>

              {/* Company Info */}
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold text-white shadow-sm" style={{ background: "linear-gradient(135deg, var(--primary), var(--secondary))" }}>
                  {test.company.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-[#050505] text-sm leading-tight">{test.company}</h4>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
