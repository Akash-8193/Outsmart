"use client";

import { motion } from "framer-motion";
import { Globe, Code2, Cpu, Zap, ArrowUpRight } from "lucide-react";
import { Text3DBounce } from "@/components/animations/SplitTextAnimations";

export default function AboutBentoGrid() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="text-center mb-16">
          <Text3DBounce as="h2" className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
            The Anatomy of Excellence
          </Text3DBounce>
          <p className="text-lg text-gray-500 font-medium max-w-2xl mx-auto">
            What makes us different isn't just what we build, but how we think. Here is the DNA of our digital agency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[500px]">
          
          {/* Card 1: Large Mission (Spans 2 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-1 bg-gradient-to-br from-[var(--primary)] to-purple-700 rounded-[2rem] p-8 md:p-10 relative overflow-hidden group shadow-xl hover:shadow-2xl transition-shadow"
          >
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col justify-between h-full text-white">
              <Globe className="w-10 h-10 mb-6 opacity-80" />
              <div>
                <h3 className="text-3xl font-black mb-3 tracking-tight">Global Impact</h3>
                <p className="text-white/80 font-medium text-lg max-w-md leading-relaxed">
                  Delivering cutting-edge solutions to businesses across 3 continents, transforming local ideas into worldwide success stories.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Small Tech (Spans 1 col) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gray-900 rounded-[2rem] p-8 relative overflow-hidden group shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black opacity-50 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="relative z-10 h-full flex flex-col justify-between text-white">
              <Code2 className="w-10 h-10 mb-4 text-emerald-400 group-hover:rotate-12 transition-transform" />
              <div>
                <h3 className="text-2xl font-black mb-2 tracking-tight">Zero Tech Debt</h3>
                <p className="text-gray-400 font-medium text-sm leading-relaxed">
                  We write clean, modular, and future-proof code that scales effortlessly as you grow.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Small Stats (Spans 1 col) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gray-50 border border-gray-100 rounded-[2rem] p-8 relative group hover:shadow-lg transition-shadow"
          >
            <div className="h-full flex flex-col justify-center items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                <Zap className="w-6 h-6 text-[var(--primary)]" />
              </div>
              <div className="text-5xl font-black text-gray-900 mb-2 tracking-tighter group-hover:text-[var(--primary)] transition-colors">99.9%</div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Uptime Guaranteed</h3>
              <p className="text-gray-500 font-medium text-sm">
                Enterprise-grade reliability for mission-critical apps.
              </p>
            </div>
          </motion.div>

          {/* Card 4: AI & Innovation (Spans 2 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 md:row-span-1 bg-white border border-gray-100 rounded-[2rem] p-8 md:p-10 relative overflow-hidden group hover:shadow-xl transition-shadow flex flex-col md:flex-row items-center gap-8"
          >
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-50 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-100 transition-colors"></div>
            
            <div className="w-24 h-24 shrink-0 rounded-2xl bg-blue-50 flex items-center justify-center border border-blue-100 group-hover:scale-105 group-hover:shadow-md transition-all duration-500 relative z-10">
              <Cpu className="w-10 h-10 text-blue-600" />
            </div>
            <div className="relative z-10 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full text-xs font-bold text-gray-600 uppercase tracking-widest mb-3">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span> Future Ready
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-3 tracking-tight">AI-First Engineering</h3>
              <p className="text-gray-600 font-medium text-lg leading-relaxed">
                We integrate advanced machine learning models directly into your workflow, automating the mundane and unlocking entirely new business capabilities.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
