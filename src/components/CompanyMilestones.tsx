"use client";

import { motion } from "framer-motion";
import { Text3DBounce } from "@/components/animations/SplitTextAnimations";

export default function CompanyMilestones() {
  const milestones = [
    { year: "2018", title: "Where It All Started", desc: "A few engineers, a tiny office, and a big idea: to build software that actually helps people instead of frustrating them." },
    { year: "2020", title: "Finding Our Groove", desc: "Word spread quickly! Before we knew it, we were helping over 100 incredible businesses and growing our team across borders." },
    { year: "2022", title: "Embracing the Future", desc: "We realized AI was going to change everything. We started weaving smart, autonomous tools into our clients' daily lives." },
    { year: "2024", title: "A Global Family", desc: "Today, we're proud to partner with teams across three continents. The tech has evolved, but our heart remains the same." },
  ];

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Text3DBounce as="h2" className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
            How We Got Here
          </Text3DBounce>
          <p className="text-lg text-gray-500 font-medium max-w-2xl mx-auto">
            Every big dream starts somewhere. Here's a look at our journey and the moments that shaped who we are today.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-100 -translate-x-1/2"></div>
          
          <div className="flex flex-col gap-12 md:gap-0">
            {milestones.map((item, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Center Dot */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[--primary] border-4 border-white z-10 shadow-md"></div>
                
                {/* Content */}
                <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'} mb-4 md:mb-0`}>
                  <motion.div 
                    initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow text-left"
                  >
                    <span className="text-3xl font-black text-[--primary] mb-2 block">{item.year}</span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 font-medium">{item.desc}</p>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
