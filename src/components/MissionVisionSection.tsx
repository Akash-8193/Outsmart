"use client";

import { motion } from "framer-motion";
import { Cpu, Target, Globe, Lightbulb, Heart, Shield, Users, Rocket, History } from "lucide-react";
import { Text3DBounce } from "@/components/animations/SplitTextAnimations";
import { ImageReveal } from "@/components/animations/ImageReveal";

export default function MissionVisionSection() {
  return (
    <section className="bg-transparent w-full py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col">
        
        {/* Journey Row (New) */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 py-12 border-b border-gray-200">
          {/* Left: Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--primary)" }}></span>
              <span className="text-sm font-bold tracking-widest uppercase text-gray-800">Our Story</span>
            </motion.div>
            
            <Text3DBounce 
              as="h2"
              className="text-4xl md:text-5xl lg:text-5xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight"
            >
              From a small team to a global partner
            </Text3DBounce>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 leading-relaxed mb-6 max-w-xl"
            >
              Our journey began with a simple belief: technology should empower people, not complicate their lives. Started by a group of passionate engineers, we set out to bridge the gap between complex software architecture and intuitive human experiences.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-600 leading-relaxed max-w-xl"
            >
              Over the years, we've grown into a global technology partner. But no matter how much we scale, our core ethos remains the same—we build digital foundations that help visionary teams turn their biggest ideas into reality.
            </motion.p>
          </div>

          {/* Right: Image */}
          <div className="w-full lg:w-1/2">
            <ImageReveal className="w-full aspect-[16/10] rounded-[2rem] shadow-2xl relative overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')" }}
              />
            </ImageReveal>
          </div>
        </div>

        {/* Mission Row */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20 py-12 border-b border-gray-200">
          {/* Right (Visual): Image */}
          <div className="w-full lg:w-1/2">
            <ImageReveal className="w-full aspect-[16/10] rounded-[2rem] shadow-2xl relative overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/mission_img.png')" }}
              />
            </ImageReveal>
          </div>

          {/* Left: Content */}
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
              className="text-4xl md:text-5xl lg:text-5xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight"
            >
              Empowering visionary teams with technology
            </Text3DBounce>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 leading-relaxed mb-10 max-w-xl"
            >
              To deliver intelligent, scalable, and deeply user-focused software products. We don't just write code; we solve real human problems, creating measurable impact that elevates the way your business operates.
            </motion.p>
          </div>
        </div>

        {/* Vision Row */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 py-12">
          {/* Left: Image */}
          <div className="w-full lg:w-1/2">
            <ImageReveal className="w-full aspect-[16/10] rounded-[2rem] shadow-2xl relative overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/vision_img.png')" }}
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
              <span className="text-sm font-bold tracking-widest uppercase text-gray-800">Our Vision</span>
            </motion.div>
            
            <Text3DBounce 
              as="h2"
              className="text-4xl md:text-5xl lg:text-5xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight"
            >
              Making complex tech feel invisible
            </Text3DBounce>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 leading-relaxed mb-10 max-w-xl"
            >
              To create a world where technology acts as the seamless, invisible engine behind every successful business—allowing human creativity and connection to take the forefront.
            </motion.p>
          </div>
        </div>

        {/* Core Values Row */}
        <div className="py-16 border-t border-gray-200">
          <div className="text-center mb-12 flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--primary)" }}></span>
              <span className="text-sm font-bold tracking-widest uppercase text-gray-800">Our Values</span>
            </motion.div>
            <Text3DBounce as="h2" className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
              The principles that drive us
            </Text3DBounce>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {/* Value 1 */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 text-[--primary]">
                <Heart className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Empathy First</h3>
              <p className="text-gray-600 font-medium leading-relaxed text-sm">We listen to understand. Every product we build is deeply rooted in human needs and real-world challenges.</p>
            </div>
            {/* Value 2 */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 text-[--primary]">
                <Shield className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600 font-medium leading-relaxed text-sm">We believe in complete transparency. No hidden costs, no technical jargon—just honest partnerships.</p>
            </div>
            {/* Value 3 */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 text-[--primary]">
                <Rocket className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Relentless Innovation</h3>
              <p className="text-gray-600 font-medium leading-relaxed text-sm">We are always exploring the edge of what's possible, ensuring you stay ahead of the digital curve.</p>
            </div>
            {/* Value 4 */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 text-[--primary]">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Collaboration</h3>
              <p className="text-gray-600 font-medium leading-relaxed text-sm">Great software isn't built in a silo. We act as an extension of your team, aligned entirely with your goals.</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
