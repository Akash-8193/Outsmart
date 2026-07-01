"use client";

import { motion } from "framer-motion";
import { Text3DBounce } from "@/components/animations/SplitTextAnimations";
import { MessageCircle, PenTool, Code, Rocket } from "lucide-react";

export default function ServiceProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Listen & Understand",
      desc: "We don't just jump into code. We sit down with you, understand your business bottlenecks, and align on what success actually looks like.",
      icon: <MessageCircle className="w-8 h-8 text-white" />
    },
    {
      num: "02",
      title: "Blueprint & Design",
      desc: "We design the user experience and the technical foundation. You'll see exactly how the product will look and flow before we build it.",
      icon: <PenTool className="w-8 h-8 text-white" />
    },
    {
      num: "03",
      title: "Build & Iterate",
      desc: "Our engineers get to work. We build in fast sprints, showing you progress every week so there are zero surprises.",
      icon: <Code className="w-8 h-8 text-white" />
    },
    {
      num: "04",
      title: "Launch & Support",
      desc: "We deploy your product securely to the world. And we don't disappear—we stay right by your side to monitor, scale, and improve it.",
      icon: <Rocket className="w-8 h-8 text-white" />
    }
  ];

  return (
    <section className="py-12 bg-white relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gray-50 px-5 py-2.5 rounded-full border border-gray-100 mb-6"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--primary)] animate-pulse"></span>
            <span className="text-sm font-bold tracking-widest text-gray-800 uppercase">How We Work</span>
          </motion.div>
          <Text3DBounce as="h2" className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
            A Partnership, Not Just a Process
          </Text3DBounce>
          <p className="text-lg text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Building great software takes more than just coding. It takes deep understanding, transparent communication, and a shared vision. Here is how we turn ideas into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="relative flex flex-col group"
            >
              {/* Connecting Line (Desktop) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-[2px] bg-gray-100 z-0">
                  <div className="h-full bg-[var(--primary)] w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                </div>
              )}
              
              {/* Icon Circle */}
              <div className="w-20 h-20 rounded-full bg-gray-900 flex items-center justify-center shrink-0 mb-8 relative z-10 group-hover:bg-[var(--primary)] transition-colors duration-500 shadow-xl border-4 border-white">
                {step.icon}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white text-gray-900 font-black text-sm flex items-center justify-center shadow-sm border border-gray-100">
                  {step.num}
                </div>
              </div>
              
              {/* Content */}
              <div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
