"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Box, Banknote, Warehouse, Barcode, LineChart, Bell,
  FileText, Ticket, ArrowUpRight, LayoutDashboard, PieChart, BellRing,
  CalendarClock, Coins, UserPlus, UserCog, TrendingUp, BarChart3,
  CheckCircle2, ArrowLeft, ArrowRight, Sparkles
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
      {/* 1. Hero Section - Premium Tech Style */}
      <section className="relative pt-32 pb-16 px-6 bg-[#FCFBFA] overflow-hidden">
        {/* Tech Dotted Background */}
        <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--primary)] rounded-full blur-[150px] opacity-10 pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute top-40 left-0 w-[400px] h-[400px] bg-[var(--secondary)] rounded-full blur-[120px] opacity-10 pointer-events-none -translate-x-1/2"></div>

        <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col md:flex-row gap-16 items-center">

          <div className="flex-1 w-full flex flex-col items-start text-left">
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-gray-400 hover:text-[--primary] font-bold mb-8 transition-colors group">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-sm border border-gray-100 mb-8"
            >
              <span className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ backgroundColor: "var(--primary)" }}></span>
              <span className="text-xs font-black tracking-widest text-gray-800 uppercase">{project.category}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-[5rem] font-black text-[#0A0A0A] leading-[1.05] tracking-tight mb-8"
            >
              {project.title.split(" ").map((word: string, i: number) => (
                <span key={i} className={i === 0 ? "text-transparent bg-clip-text" : ""} style={i === 0 ? { backgroundImage: "linear-gradient(90deg, var(--primary), var(--secondary))" } : {}}>
                  {word}{" "}
                </span>
              ))}
            </motion.h1>
          </div>

          <div className="flex-1 w-full">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 relative"
            >
              <Sparkles className="absolute -top-5 -left-5 w-10 h-10 text-[--secondary] opacity-50" />
              {project.overview}
            </motion.p>
          </div>

        </div>
      </section>

      {/* 2. Main Cinematic Showcase Image */}
      <section className="px-6 pb-16 bg-[#FCFBFA] relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full aspect-[16/7] md:aspect-[3/1] rounded-[2.5rem] overflow-hidden shadow-2xl relative group"
          >
            {/* Dark overlay for cinematic effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out" />
          </motion.div>
        </div>
      </section>

      {/* 3. Why We Built It (Conditional) - Creative Grid */}
      {project.whyWeBuilt && (
        <section className="py-12 px-6 bg-[#0A0A0A] text-white relative overflow-hidden">
          {/* Subtle Grid Background for Dark Mode */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

          <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">WHY WE BUILT <br className="md:hidden" /><span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, var(--primary), var(--secondary))" }}>FOVESTTA</span></h2>
              <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto">Tackling the real-world operational challenges businesses face every single day.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.whyWeBuilt.map((item: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-[#141414] p-10 rounded-[2.5rem] border border-gray-800 hover:border-gray-600 transition-colors relative overflow-hidden group"
                >
                  {/* Giant Watermark Number */}
                  <div className="absolute -bottom-10 -right-6 text-[10rem] font-black text-gray-800/30 group-hover:text-[--primary] group-hover:opacity-20 transition-all duration-500 italic leading-none pointer-events-none select-none">
                    0{item.num}
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-4 pr-12">{item.title}</h3>
                    <p className="text-gray-400 font-medium leading-relaxed text-lg">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. Core Modules - Modern Bento Grid layout */}
      <section className="py-12 px-6 bg-[#FCFBFA] relative">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight mb-4">Core Modules</h2>
              <p className="text-xl text-gray-500 font-medium">The essential building blocks that power the entire ecosystem.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.coreModules.map((module: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-[2.5rem] p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 cursor-pointer relative overflow-hidden"
              >
                {/* Glow Blob on Hover */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[var(--primary)] rounded-full blur-[60px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"></div>

                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6" style={{ backgroundColor: "rgba(var(--primary-rgb, 100,100,255), 0.05)", color: "var(--primary)" }}>
                  {getIcon(module.icon)}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[--primary] transition-colors">
                  {module.title}
                </h3>

                {/* Visual Connector / Decorative line */}
                <div className="w-12 h-1 bg-gray-100 rounded-full mt-6 group-hover:w-full group-hover:bg-[var(--primary)] transition-all duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Modern CTA */}
      <section className="py-12 px-6 bg-white relative overflow-hidden">
        {/* Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-[var(--primary)] rounded-full blur-[150px] opacity-5 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 tracking-tight">Ready to transform your business?</h2>
          <p className="text-xl text-gray-500 mb-12">Let's discuss how we can build a similar custom solution tailored perfectly for your specific needs.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-white font-bold text-xl shadow-2xl hover:scale-105 transition-transform"
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
