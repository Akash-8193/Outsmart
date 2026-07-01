"use client";

import { motion } from "framer-motion";
import { Text3DBounce } from "@/components/animations/SplitTextAnimations";
import { ImageReveal } from "@/components/animations/ImageReveal";
import { Rocket, Cpu, Sparkles, Layers, Zap } from "lucide-react";

export default function AboutPageUniqueSection() {
  return (
    <section className="py-24 px-6 bg-[var(--background)] relative overflow-hidden mb-12">

      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        
        {/* Left Side: Text Content */}
        <div className="w-full lg:w-[55%] flex flex-col">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full mb-8 text-[11px] font-bold tracking-widest uppercase text-gray-800 shadow-sm w-max border border-gray-100"
          >
            <Sparkles className="w-4 h-4 text-[var(--primary)]" />
            Who We Are
          </motion.div>
          
          <Text3DBounce as="h2" className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.05] tracking-tight mb-8">
            Engineering the <br />
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, var(--primary), var(--secondary))" }}>Future of Tech</span>
          </Text3DBounce>
          
          <div className="space-y-6 text-gray-600 text-lg md:text-xl leading-relaxed font-medium mb-12 max-w-2xl">
            <p>
              Outsmart Technology is a collective of elite software engineers, AI researchers, and digital strategists. We don't just write code; we engineer competitive advantages.
            </p>
            <p>
              From intelligent automation to highly scalable enterprise SaaS platforms, we architect robust solutions designed specifically to solve your operational challenges and accelerate your growth trajectory.
            </p>
          </div>
          
          {/* Creative Stat/Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-2">
            <div className="bg-white/40 backdrop-blur-sm border border-gray-200 rounded-[2rem] p-6 hover:shadow-lg transition-all hover:bg-white group">
              <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center mb-5 group-hover:scale-110 transition-transform border border-gray-100">
                <Layers className="w-6 h-6 text-[var(--primary)]" />
              </div>
              <h4 className="text-gray-900 font-black text-xl mb-2">Zero Tech Debt</h4>
              <p className="text-gray-500 text-sm font-medium leading-relaxed">Clean, scalable, and maintainable enterprise architectures.</p>
            </div>
            
            <div className="bg-white/40 backdrop-blur-sm border border-gray-200 rounded-[2rem] p-6 hover:shadow-lg transition-all hover:bg-white group">
              <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center mb-5 group-hover:scale-110 transition-transform border border-gray-100">
                <Zap className="w-6 h-6 text-[var(--secondary)]" />
              </div>
              <h4 className="text-gray-900 font-black text-xl mb-2">Rapid Execution</h4>
              <p className="text-gray-500 text-sm font-medium leading-relaxed">Agile development cycles with lightning-fast delivery.</p>
            </div>
          </div>
          
        </div>

        {/* Right Side: Creative Image Composition */}
        <div className="w-full lg:w-[45%] relative flex justify-center mt-10 lg:mt-0">
          
          <div className="relative w-full max-w-[650px] aspect-square flex items-center justify-center">
            
            {/* Outer Decorative Ring */}
            <div className="absolute inset-0 rounded-full border-[1px] border-gray-200 border-dashed animate-[spin_40s_linear_infinite]"></div>
            
            {/* Soft backdrop glow to enhance the image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full blur-3xl -z-10 opacity-30" style={{ backgroundColor: "var(--primary)" }}></div>

            {/* Main Image */}
            <div className="relative z-10 w-[85%] h-[85%] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-white image-anime">
              <img 
                src="/about_light_creative.png" 
                alt="Elite Engineering Team" 
                className="w-full h-full object-cover transform scale-105 transition-transform duration-700 hover:scale-100"
              />
            </div>

            {/* Floating Tech Badges */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
              className="absolute top-10 -right-4 md:-right-8 bg-white border border-gray-100 p-4 rounded-2xl shadow-xl flex items-center gap-4 gsap-float z-20"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center">
                <Cpu className="w-6 h-6 text-[var(--primary)]" />
              </div>
              <div>
                <p className="text-gray-400 text-[10px] font-bold tracking-widest uppercase">Powered By</p>
                <p className="text-gray-900 font-black text-sm">Advanced AI</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
              className="absolute bottom-16 -left-4 md:-left-8 bg-white border border-gray-100 p-4 rounded-2xl shadow-xl flex items-center gap-4 gsap-float z-20"
              style={{ animationDelay: "1.5s" }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, var(--secondary), var(--primary))" }}>
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-gray-400 text-[10px] font-bold tracking-widest uppercase">Engineered For</p>
                <p className="text-gray-900 font-black text-sm">Maximum Scale</p>
              </div>
            </motion.div>
            
          </div>
        </div>

      </div>
    </section>
  );
}
