"use client";

import Link from "next/link";
import { ArrowRight, Briefcase, Settings, Layers, Zap, Headphones, Cpu, UserCheck, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Text3DBounce } from "@/components/animations/SplitTextAnimations";

const features = [
  {
    title: "Industry-Focused Solutions",
    desc: "Tailored solutions built for your industry needs.",
    icon: <Briefcase className="w-5 h-5" style={{ color: "var(--primary)" }} />
  },
  {
    title: "Custom Development",
    desc: "Built around your unique business goals.",
    icon: <Settings className="w-5 h-5" style={{ color: "var(--primary)" }} />
  },
  {
    title: "Scalable Architecture",
    desc: "Systems designed to grow with your business.",
    icon: <Layers className="w-5 h-5" style={{ color: "var(--primary)" }} />
  },
  {
    title: "Fast Delivery",
    desc: "Quick turnaround without compromising quality.",
    icon: <Zap className="w-5 h-5" style={{ color: "var(--primary)" }} />
  },
  {
    title: "Dedicated Support",
    desc: "Reliable support whenever you need it.",
    icon: <Headphones className="w-5 h-5" style={{ color: "var(--primary)" }} />
  },
  {
    title: "Modern Tech Stack",
    desc: "Built using the latest secure technologies.",
    icon: <Cpu className="w-5 h-5" style={{ color: "var(--primary)" }} />
  },
  {
    title: "User-Centric Design",
    desc: "Experiences designed for better usability.",
    icon: <UserCheck className="w-5 h-5" style={{ color: "var(--primary)" }} />
  },
  {
    title: "AI-Driven Innovation",
    desc: "Smart AI solutions that drive efficiency.",
    icon: <Sparkles className="w-5 h-5" style={{ color: "var(--primary)" }} />
  }
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-12 px-6 bg-transparent font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-8 items-center">
        
        {/* Left Content Column */}
        <div className="w-full lg:w-1/2 flex flex-col pr-0 lg:pr-12 relative z-10">
          {/* Pill Tag */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] w-max mb-8 border border-gray-100"
          >
             <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "var(--primary)" }}></div>
             <span className="text-sm font-bold text-gray-800 tracking-wide uppercase">Our Commitment. Your Advantage.</span>
          </motion.div>

          {/* Heading */}
          <Text3DBounce as="h2" className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0A0A0A] leading-[1.1] tracking-tight mb-6 uppercase">
            Why Businesses Choose Us
          </Text3DBounce>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 leading-relaxed font-medium text-lg mb-12 max-w-xl"
          >
            We combine expertise, technology, and dedication to deliver solutions that help your business grow faster and smarter.
          </motion.p>

          {/* Sleek Features List replacing the bulky boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 mb-14">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + (idx * 0.05) }}
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-white shadow-sm border border-gray-100 group-hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10" style={{ backgroundColor: "var(--primary)" }}></div>
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1 leading-tight group-hover:text-[--primary] transition-colors">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-10"
          >
            {/* Contact Button matching design */}
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-4 text-white font-bold p-2 pr-8 rounded-full shadow-lg hover:shadow-xl btn-default"
              style={{ background: "linear-gradient(90deg, var(--primary), var(--secondary))" }}
            >
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                <ArrowRight className="w-5 h-5" />
              </div>
              <span className="tracking-wide">Contact Us</span>
            </Link>
          </motion.div>
        </div>

        {/* Right Images Column with Creative Animation */}
        <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-[700px] mt-16 lg:mt-0">
          
          {/* Top Right Image */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-[85%] h-[65%] rounded-[2rem] overflow-hidden shadow-2xl z-0 image-anime"
          >
             <div className="absolute inset-0 bg-[url('/why_choose_us_1.png')] bg-cover bg-center hover:scale-105 transition-transform duration-700" />
          </motion.div>
          
          {/* Bottom Left Image */}
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 left-0 w-[85%] h-[65%] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-10 border-[12px] border-[#FCFBFA] image-anime"
          >
             <div className="absolute inset-0 bg-[url('/why_choose_us_2.png')] bg-cover bg-center hover:scale-105 transition-transform duration-700" />
          </motion.div>

          {/* Creative Floating Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="absolute top-[45%] -left-8 md:-left-12 bg-white px-6 py-4 rounded-2xl shadow-xl z-20 flex items-center gap-4 border border-gray-100 gsap-float"
          >
             <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center">
               <CheckCircle2 className="w-6 h-6 text-green-500" />
             </div>
             <div>
               <div className="font-black text-gray-900 text-xl leading-none mb-1">100%</div>
               <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Client Satisfaction</div>
             </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
