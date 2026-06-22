"use client";

import { motion } from "framer-motion";
import { MessageSquareWarning, Users, Network, PackageSearch, Bot, ShoppingBag, Database, CalendarCheck } from "lucide-react";

const solutions = [
  {
    num: "1",
    title: "Complaint Management Software",
    desc: "Manage complaints efficiently with real-time tracking, faster resolution, and improved customer satisfaction.",
    icon: <MessageSquareWarning className="w-8 h-8" />
  },
  {
    num: "2",
    title: "CRM Platforms",
    desc: "Build stronger customer relationships and improve sales with smart CRM solutions tailored to your business.",
    icon: <Users className="w-8 h-8" />
  },
  {
    num: "3",
    title: "Vendor Management System",
    desc: "Onboard, evaluate and manage vendors efficiently with transparency and real-time tracking.",
    icon: <Network className="w-8 h-8" />
  },
  {
    num: "4",
    title: "Inventory & Stock Control",
    desc: "Track stock in real-time, reduce wastage and maintain optimal inventory levels across locations.",
    icon: <PackageSearch className="w-8 h-8" />
  },
  {
    num: "5",
    title: "AI Chat Support Tools",
    desc: "Deliver instant, intelligent support with AI-powered chatbots trained for your business needs.",
    icon: <Bot className="w-8 h-8" />
  },
  {
    num: "6",
    title: "E-commerce Platforms",
    desc: "Launch scalable and secure online stores that deliver seamless shopping experiences and drive conversions.",
    icon: <ShoppingBag className="w-8 h-8" />
  },
  {
    num: "7",
    title: "Custom ERP Modules",
    desc: "Extend your ERP with custom modules built to fit your unique workflows and business goals.",
    icon: <Database className="w-8 h-8" />
  },
  {
    num: "8",
    title: "Appointment & Booking Systems",
    desc: "Simplify scheduling and bookings with user-friendly systems that save time and improve productivity.",
    icon: <CalendarCheck className="w-8 h-8" />
  }
];

export default function OtherSolutionsSection() {
  return (
    <section className="relative py-28 px-6 bg-transparent overflow-hidden">
      {/* Decorative Trendy Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[var(--primary)] opacity-5 blur-[120px]"></div>
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-blue-500 opacity-5 blur-[100px]"></div>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-10 max-w-4xl mx-auto flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white shadow-sm border border-gray-100 mb-6"
          >
             <span className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ backgroundColor: "var(--primary)" }}></span>
             <span className="text-sm font-extrabold text-gray-800 tracking-[0.15em] uppercase">Beyond Software. Built For Impact.</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-[#0A0A0A] leading-tight tracking-tight mb-6 uppercase">
              Other Solutions <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, var(--primary), var(--secondary))" }}>We Build</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed max-w-3xl">
              From enterprise systems to customer-focused platforms, we build powerful digital solutions that streamline operations, drive growth, and create meaningful experiences.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid layout for solutions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative bg-white rounded-[2rem] p-8 overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              {/* Giant Number Watermark (like in the slide) */}
              <div className="absolute -bottom-6 -right-4 text-[8rem] font-black leading-none z-0 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 text-gray-200">
                {item.num}
              </div>

              {/* Hover Top Border Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 z-10"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-md" style={{ backgroundColor: "rgba(var(--primary-rgb, 100,100,255), 0.08)", color: "var(--primary)" }}>
                  {item.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-snug group-hover:text-[var(--primary)] transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
