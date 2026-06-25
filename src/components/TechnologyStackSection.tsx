"use client";

import { motion } from "framer-motion";
import { Monitor, Server, Smartphone, Cloud, Database, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Text3DBounce } from "@/components/animations/SplitTextAnimations";

export default function TechnologyStackSection() {
  const stack = [
    {
      id: "frontend",
      title: "FRONTEND",
      icon: <Monitor className="w-8 h-8" />,
      image: "/projects_hero_3d.png",
      desc: "Building responsive, dynamic, and intuitive user interfaces that deliver exceptional user experiences.",
      techs: ["React", "Angular", "Vue"],
      colSpan: "lg:col-span-7"
    },
    {
      id: "backend",
      title: "BACKEND",
      icon: <Server className="w-8 h-8" />,
      image: "/services_hero_3d.png",
      desc: "Creating robust APIs, microservices, and secure server-side logic to power complex applications.",
      techs: ["Node.js", "Python", "PHP", ".NET"],
      colSpan: "lg:col-span-5"
    },
    {
      id: "mobile",
      title: "MOBILE",
      icon: <Smartphone className="w-8 h-8" />,
      image: "/service_web_mobile.png",
      desc: "Developing cross-platform and native mobile applications for iOS and Android devices.",
      techs: ["Flutter", "React Native"],
      colSpan: "lg:col-span-4"
    },
    {
      id: "cloud",
      title: "CLOUD",
      icon: <Cloud className="w-8 h-8" />,
      image: "/projects_hexagon_hero.png",
      desc: "Deploying highly available, scalable, and secure cloud infrastructure architectures.",
      techs: ["AWS", "Azure", "Google Cloud"],
      colSpan: "lg:col-span-4"
    },
    {
      id: "database",
      title: "DATABASE",
      icon: <Database className="w-8 h-8" />,
      image: "/project_inventory.png",
      desc: "Designing secure, high-performance data storage and real-time database solutions.",
      techs: ["MySQL", "PostgreSQL", "MongoDB"],
      colSpan: "lg:col-span-4"
    }
  ];

  return (
    <section className="relative py-16 px-6 bg-transparent overflow-hidden">
      
      {/* Creative Dot Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.04]" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', 
          backgroundSize: '32px 32px' 
        }}
      ></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-8">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-sm border border-gray-100 mb-6"
            >
              <span className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ backgroundColor: "var(--primary)" }}></span>
              <span className="text-sm font-bold tracking-[0.15em] uppercase text-gray-800">Technology Stack</span>
            </motion.div>
            
            <Text3DBounce as="h2" className="text-4xl md:text-5xl lg:text-5xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight uppercase">
              Future-Ready <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, var(--primary), var(--secondary))" }}>Tech Solutions</span>
            </Text3DBounce>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium"
            >
              We use modern, reliable, and scalable technologies to build high-performance solutions tailored to your business needs.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-lg shadow-xl hover:shadow-[--primary]/30 btn-default"
              style={{ background: "linear-gradient(90deg, var(--primary), var(--secondary))" }}
            >
              Discuss Your Project
              <ArrowUpRight className="w-5 h-5 ml-2 relative z-10" />
            </Link>
          </motion.div>
        </div>

        {/* Creative Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
          {stack.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 * idx, duration: 0.5 }}
              className={`bg-white/70 backdrop-blur-md rounded-[2.5rem] p-8 lg:p-10 relative overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 group flex flex-col h-full hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 md:col-span-6 ${item.colSpan}`}
            >
              <img
                src={item.image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover opacity-25 scale-105 pointer-events-none select-none"
              />

              <div className="absolute inset-0 bg-gradient-to-br from-white/65 via-white/35 to-white/75 pointer-events-none" />

              {/* Creative Glow Blob on Hover */}
              <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" style={{ backgroundColor: "var(--primary)" }}></div>
              <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" style={{ backgroundColor: "var(--secondary)" }}></div>

              <div className="relative z-10 flex flex-col h-full">
                
                {/* Header of Card */}
                <div className="flex items-start justify-between gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-gray-50 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 border-zooming" style={{ backgroundColor: "rgba(var(--primary-rgb, 100, 100, 255), 0.05)", color: "var(--primary)" }}>
                    {item.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-4 tracking-tight group-hover:text-[var(--primary)] transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed font-medium mb-10 text-lg">
                  {item.desc}
                </p>

                {/* Tech Pills Row */}
                <div className="mt-auto flex flex-wrap gap-2 pt-6 border-t border-gray-50">
                  {item.techs.map((tech, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-4 py-2 rounded-xl text-sm font-bold shadow-sm transition-all duration-300 hover:-translate-y-0.5 border border-transparent hover:border-[var(--primary)]"
                      style={{ 
                        backgroundColor: "rgba(var(--primary-rgb, 100,100,255), 0.06)", 
                        color: "var(--primary)" 
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
