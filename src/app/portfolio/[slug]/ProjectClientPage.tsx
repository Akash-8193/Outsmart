"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Box, Banknote, Warehouse, Barcode, LineChart, Bell,
  FileText, Ticket, ArrowUpRight, LayoutDashboard, PieChart, BellRing,
  CalendarClock, Coins, UserPlus, UserCog, TrendingUp, BarChart3,
  CheckCircle2, ArrowLeft, ArrowRight, Sparkles, Target, Zap
} from "lucide-react";
import PageTransition from "@/components/PageTransition";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "box": return <Box className="w-8 h-8" />;
    case "banknote": return <Banknote className="w-8 h-8" />;
    case "warehouse": return <Warehouse className="w-8 h-8" />;
    case "barcode": return <Barcode className="w-8 h-8" />;
    case "line-chart": return <LineChart className="w-8 h-8" />;
    case "bell": return <Bell className="w-8 h-8" />;
    case "file-text": return <FileText className="w-8 h-8" />;
    case "ticket": return <Ticket className="w-8 h-8" />;
    case "arrow-up-right": return <ArrowUpRight className="w-8 h-8" />;
    case "layout-dashboard": return <LayoutDashboard className="w-8 h-8" />;
    case "pie-chart": return <PieChart className="w-8 h-8" />;
    case "bell-ring": return <BellRing className="w-8 h-8" />;
    case "calendar-clock": return <CalendarClock className="w-8 h-8" />;
    case "coins": return <Coins className="w-8 h-8" />;
    case "user-plus": return <UserPlus className="w-8 h-8" />;
    case "user-cog": return <UserCog className="w-8 h-8" />;
    case "trending-up": return <TrendingUp className="w-8 h-8" />;
    case "bar-chart-3": return <BarChart3 className="w-8 h-8" />;
    default: return <CheckCircle2 className="w-8 h-8" />;
  }
};

export default function ProjectClientPage({ project }: { project: any }) {
  return (
    <PageTransition>
      {/* 1. Creative Hero Section */}
      <section className="relative pt-32 pb-24 px-6 bg-[#FCFBFA] overflow-hidden min-h-[80vh] flex flex-col justify-center">
        {/* Dynamic Glowing Backgrounds */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[var(--primary)] to-transparent rounded-full blur-[150px] opacity-10 pointer-events-none translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[var(--secondary)] to-transparent rounded-full blur-[120px] opacity-10 pointer-events-none -translate-x-1/4 translate-y-1/4"></div>

        <div className="max-w-[1400px] mx-auto relative z-10 w-full">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-gray-500 hover:text-[var(--primary)] font-bold mb-12 transition-all hover:-translate-x-2">
            <ArrowLeft className="w-5 h-5" />
            Back to All Projects
          </Link>

          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 w-full flex flex-col items-start text-left">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg border border-[var(--primary)]/10 mb-8"
              >
                <Target className="w-5 h-5 text-[var(--primary)]" />
                <span className="text-sm font-black tracking-[0.2em] text-gray-900 uppercase">{project.category}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.05] tracking-tight mb-8"
              >
                {project.title}
              </motion.h1>
            </div>

            <div className="flex-1 w-full">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/60 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-white relative overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[var(--primary)] rounded-full blur-3xl opacity-20"></div>
                <Sparkles className="w-8 h-8 text-[var(--primary)] mb-6" />
                <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed relative z-10">
                  {project.overview}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Abstract Tech Design (Replaces Image) */}
      <section className="px-6 pb-20 bg-[#FCFBFA] relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="w-full h-48 md:h-64 rounded-[3rem] bg-gray-900 overflow-hidden relative flex flex-col items-center justify-center shadow-2xl border border-gray-800 group">
            
            {/* Animated Grid lines */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
            
            {/* Glowing moving orbs */}
            <motion.div 
              animate={{ x: [-100, 100, -100], scale: [1, 1.2, 1] }} 
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }} 
              className="absolute left-1/4 w-64 h-64 bg-[var(--primary)] rounded-full blur-[100px] opacity-40"
            ></motion.div>
            
            <motion.div 
              animate={{ x: [100, -100, 100], scale: [1.2, 1, 1.2] }} 
              transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 }} 
              className="absolute right-1/4 w-64 h-64 bg-[var(--secondary)] rounded-full blur-[100px] opacity-30"
            ></motion.div>

            {/* Central Typography & Icon */}
            <div className="relative z-10 text-center px-6 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                <Sparkles className="w-8 h-8 text-[var(--primary)]" />
              </div>
              <h3 className="text-white text-xl md:text-3xl font-black tracking-[0.2em] uppercase opacity-90 drop-shadow-lg">
                {project.category} Ecosystem
              </h3>
            </div>
            
          </div>
        </div>
      </section>

      {/* 3. Why We Built It (Dynamic Title) */}
      {project.whyWeBuilt && (
        <section className="py-24 px-6 bg-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-[var(--primary)] rounded-full blur-[200px] opacity-[0.05] pointer-events-none"></div>

          <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white">
                WHY WE BUILT <br className="md:hidden" />
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, var(--primary), var(--secondary))" }}>
                  {project.title.toUpperCase()}
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-400 font-medium max-w-2xl mx-auto">Solving real-world operational bottlenecks through intelligent engineering.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.whyWeBuilt.map((item: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/5 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 hover:bg-white/10 hover:border-[var(--primary)]/50 transition-all duration-500 relative overflow-hidden group hover:-translate-y-2"
                >
                  {/* Background Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  
                  {/* Large Stylized Number */}
                  <div className="absolute -top-4 -right-2 text-[8rem] font-black text-white/5 group-hover:text-[var(--primary)]/10 transition-colors duration-500 italic leading-none pointer-events-none select-none">
                    0{item.num}
                  </div>

                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full bg-[var(--primary)]/20 flex items-center justify-center mb-6 text-[var(--primary)] group-hover:scale-110 transition-transform duration-500">
                      <Zap className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 pr-8">{item.title}</h3>
                    <p className="text-gray-400 font-medium leading-relaxed text-base group-hover:text-gray-300 transition-colors">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. Core Modules - Premium Layout */}
      <section className="py-24 px-6 bg-white relative">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
               <div className="flex items-center gap-4 mb-4">
                 <span className="w-8 h-[2px] bg-[var(--primary)] rounded-full"></span>
                 <h3 className="text-lg font-black text-[var(--primary)] tracking-widest uppercase">The Features</h3>
               </div>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">Core Modules</h2>
              <p className="text-lg text-gray-500 font-medium leading-relaxed">The essential building blocks and features that power this entire digital ecosystem.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.coreModules.map((module: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-100 hover:border-[var(--primary)]/30 transition-all duration-300 relative overflow-hidden"
              >
                {/* Sleek left accent line */}
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gray-100 group-hover:bg-[var(--primary)] transition-colors duration-500"></div>
                
                <div className="flex items-start gap-5 relative z-10 pl-2">
                  <div className="shrink-0 w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[var(--primary)]/10 group-hover:text-[var(--primary)] transition-all duration-500 group-hover:scale-110">
                    {getIcon(module.icon)}
                  </div>
                  <div className="pt-1">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[var(--primary)] transition-colors mb-2 leading-tight">
                      {module.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-500 leading-relaxed">
                      Essential core capability engineered for high performance.
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Modern CTA */}
      <section className="py-24 px-6 bg-[#F2EFE7] relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">Ready to build something similar?</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-10 font-medium">Let's discuss how we can engineer a custom solution tailored perfectly for your specific business needs.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-white font-bold text-xl shadow-xl hover:shadow-[var(--primary)]/30 hover:scale-105 transition-all duration-300"
            style={{ background: "linear-gradient(90deg, var(--primary), var(--secondary))" }}
          >
            Start Your Project
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>

    </PageTransition>
  );
}
