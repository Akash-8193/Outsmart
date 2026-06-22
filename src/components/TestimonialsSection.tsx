"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "From the very first deployment, I felt we had a true engineering partner. The architecture they built scales flawlessly, and their AI integrations have revolutionized our workflow every single day.",
    author: "Sarah Jenkins",
    role: "CTO at Nexus",
    image: "https://i.pravatar.cc/150?img=44"
  },
  {
    quote: "From the moment we engaged them, I knew we were in good hands. This team has helped us eliminate technical debt and find a software foundation that genuinely performs. The results are incredible.",
    author: "Michael Chang",
    role: "VP Engineering",
    image: "https://i.pravatar.cc/150?img=11"
  },
  {
    quote: "From the very first sprint, I felt understood and supported. The custom dashboards inspire our team, and the automated pipelines have helped me grow our platform's capacity exponentially.",
    author: "Elena Rodriguez",
    role: "Operations Director",
    image: "https://i.pravatar.cc/150?img=5"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="relative w-full bg-[#FCFBFA] py-24 overflow-hidden font-sans text-[#1A1A1A]">
      
      {/* Background large text */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0">
        <h1 className="text-[7rem] md:text-[14rem] lg:text-[18rem] font-black text-black/[0.05] tracking-tighter leading-none mt-4">
          TESTIMONIALS
        </h1>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Header Section matching ProcessSection */}
        <div className="text-center mb-20 max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-[#C18A58] uppercase tracking-[0.3em] font-bold text-sm mb-4">
            OUR TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#050505] leading-tight mb-6 drop-shadow-sm">
            Trusted by Industry Leaders,<br />
            <span className="italic text-[#C18A58]">Driving Real Growth</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 font-medium max-w-2xl leading-relaxed">
            Don't just take our word for it. Here is how our engineering and AI solutions are making a meaningful difference in their businesses.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-[2rem] p-10 flex flex-col h-full shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 relative group transition-transform hover:-translate-y-1"
            >
              
              {/* Decorative Quote Icon */}
              <div className="absolute top-8 right-8 text-[#C18A58] opacity-10">
                <Quote size={60} strokeWidth={2} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-[#C18A58]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 font-serif text-lg leading-relaxed flex-grow mb-8 relative z-10">
                "{test.quote}"
              </p>

              {/* Divider Line */}
              <div className="w-full h-px bg-gray-100 mb-6 relative z-10"></div>

              {/* Author Info */}
              <div className="flex items-center gap-4 relative z-10">
                <img 
                  src={test.image} 
                  alt={test.author} 
                  className="w-14 h-14 rounded-full object-cover shadow-sm border-2 border-white"
                />
                <div>
                  <h4 className="font-bold text-[#050505] text-base">{test.author}</h4>
                  <p className="text-[#C18A58] text-sm font-semibold uppercase tracking-wide mt-0.5">{test.role}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
