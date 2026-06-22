"use client";

import { motion } from "framer-motion";
import { Cpu, Target, Globe, Lightbulb } from "lucide-react";
import { Text3DBounce } from "@/components/animations/SplitTextAnimations";
import { ImageReveal } from "@/components/animations/ImageReveal";

export default function MissionVisionSection() {
  return (
    <section className="bg-transparent w-full pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col">
        
        {/* Mission Row */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 py-12 border-b border-gray-200">
          {/* Left: Image */}
          <div className="w-full lg:w-1/2">
            <ImageReveal className="w-full aspect-[16/10] rounded-[2rem] shadow-2xl">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/mission_img.png')" }}
              />
            </ImageReveal>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--primary)" }}></span>
              <span className="text-sm font-bold tracking-widest uppercase text-gray-800">Our Mission</span>
            </motion.div>
            
            <Text3DBounce 
              as="h2"
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-gray-900 leading-[1.1] mb-6 tracking-tight"
            >
              Delivering scalable and intelligent software products
            </Text3DBounce>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 leading-relaxed mb-10 max-w-xl"
            >
              To deliver scalable, intelligent, and user-focused software products that create measurable business impact for organizations worldwide.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full"
            >
              <div className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 bg-white shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center shrink-0 bg-transparent rounded-xl">
                  <Cpu className="text-[--primary] w-6 h-6" strokeWidth={2} />
                </div>
                <h4 className="font-bold text-gray-900 leading-tight">Scalable<br/>Solutions</h4>
              </div>
              <div className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 bg-white shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center shrink-0 bg-transparent rounded-xl">
                  <Target className="text-[--primary] w-6 h-6" strokeWidth={2} />
                </div>
                <h4 className="font-bold text-gray-900 leading-tight">Measurable<br/>Impact</h4>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Vision Row */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20 py-12">
          {/* Right (Visual): Image */}
          <div className="w-full lg:w-1/2">
            <ImageReveal className="w-full aspect-[16/10] rounded-[2rem] shadow-2xl">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/vision_img.png')" }}
              />
            </ImageReveal>
          </div>

          {/* Left (Visual): Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--primary)" }}></span>
              <span className="text-sm font-bold tracking-widest uppercase text-gray-800">Our Vision</span>
            </motion.div>
            
            <Text3DBounce 
              as="h2"
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-gray-900 leading-[1.1] mb-6 tracking-tight"
            >
              Your trusted global technology partner
            </Text3DBounce>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 leading-relaxed mb-10 max-w-xl"
            >
              To become a trusted global technology partner enabling businesses through innovative digital solutions that drive future growth and efficiency.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full"
            >
              <div className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 bg-white shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center shrink-0 bg-transparent rounded-xl">
                  <Globe className="text-[--primary] w-6 h-6" strokeWidth={2} />
                </div>
                <h4 className="font-bold text-gray-900 leading-tight">Global<br/>Reach</h4>
              </div>
              <div className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 bg-white shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center shrink-0 bg-transparent rounded-xl">
                  <Lightbulb className="text-[--primary] w-6 h-6" strokeWidth={2} />
                </div>
                <h4 className="font-bold text-gray-900 leading-tight">Innovative<br/>Tech</h4>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
