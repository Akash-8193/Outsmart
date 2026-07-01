"use client";

import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Target, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Text3DBounce } from "@/components/animations/SplitTextAnimations";

export default function WhyChooseUsSection() {
  return (
    <section className="py-16 md:py-24 px-6 bg-white font-sans overflow-hidden">
      <div className="max-w-[1320px] mx-auto">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Left Content Column */}
          <div className="w-full lg:w-1/2 flex flex-col pt-4">
            
            {/* Pill Tag */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 w-max mb-6"
            >
               <div className="w-2 h-2 rounded-full bg-[#4ba835]"></div>
               <span className="text-sm font-bold text-gray-800 tracking-wide">Why Choose Us</span>
            </motion.div>

            {/* Heading */}
            <Text3DBounce as="h2" className="text-4xl md:text-[2.75rem] font-black text-[#0f172a] leading-[1.15] tracking-tight mb-6">
              Expert driven digital solutions built for efficiency & trust
            </Text3DBounce>
            
            {/* Paragraph */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-500 leading-relaxed font-medium text-[1.1rem] mb-8 max-w-[500px]"
            >
              We are committed to delivering reliable, high-quality digital marketing solutions you can trust. With expert guidance, advanced strategies, and end-to-end support.
            </motion.p>

            {/* Highlight Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#f8f9fc] rounded-2xl p-6 mb-10 border-l-[6px] border-[#4ba835] flex items-start gap-5"
            >
              <div className="w-12 h-12 rounded-full bg-[#4ba835] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-[1.35rem] font-bold text-[#0f172a] mb-2 leading-tight">Trusted Growth Partner</h3>
                <p className="text-gray-500 text-[0.95rem] font-medium leading-relaxed">
                  We deliver reliable marketing solutions through expert planning, quality execution, and ongoing support.
                </p>
              </div>
            </motion.div>

            {/* Statistics */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-y-8 gap-x-8 lg:gap-x-12 mb-10 py-8 border-t border-b border-gray-100"
            >
              <div>
                <div className="text-4xl font-black text-[#0f172a] mb-2">1K+</div>
                <div className="text-sm font-semibold text-gray-500">Happy Clients</div>
              </div>
              <div className="w-[1px] h-12 bg-gray-200 hidden sm:block"></div>
              <div>
                <div className="text-4xl font-black text-[#0f172a] mb-2">$1M+</div>
                <div className="text-sm font-semibold text-gray-500">Revenue Generated</div>
              </div>
              <div className="w-[1px] h-12 bg-gray-200 hidden sm:block"></div>
              <div>
                <div className="text-4xl font-black text-[#0f172a] mb-2">100+</div>
                <div className="text-sm font-semibold text-gray-500">Successful Campaigns</div>
              </div>
            </motion.div>

            {/* Learn More Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link 
                href="/about" 
                className="inline-flex items-center gap-2 bg-[#4ba835] hover:bg-[#3d8c2b] text-white font-bold py-3.5 px-8 rounded-lg transition-colors duration-300"
              >
                Learn More
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </motion.div>

          </div>

          {/* Right Images Column */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:mt-0 mt-8">
            
            {/* Top Wide Image Area */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full h-[280px] md:h-[320px] rounded-[1.5rem] overflow-hidden group"
            >
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Team collaborating" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              
              {/* Overlay Tags */}
              <div className="absolute bottom-6 left-0 w-full flex flex-wrap justify-center gap-2.5 px-4">
                {["SEO Services", "Performance Ads", "UI/UX Design", "Content Strategy"].map((tag, i) => (
                  <span key={i} className="bg-black/40 backdrop-blur-md border border-white/20 text-white text-[13px] font-medium px-4 py-1.5 rounded-[4px] cursor-pointer hover:bg-black/60 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Bottom Two Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto md:h-[320px]">
              
              {/* Bottom Left Vertical Image */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="w-full h-[250px] md:h-full rounded-[1.5rem] overflow-hidden group"
              >
                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Professional working" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </motion.div>

              {/* Bottom Right Green Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="w-full h-full rounded-[1.5rem] bg-[#4ba835] p-8 flex flex-col justify-end relative overflow-hidden"
              >
                {/* Decoration Icon */}
                <div className="absolute top-8 left-8">
                  <div className="w-16 h-16 bg-white/10 flex items-center justify-center rounded-xl">
                     <Target className="w-8 h-8 text-white drop-shadow-md" />
                  </div>
                </div>
                
                <h3 className="text-[1.35rem] font-bold text-white mb-2 leading-tight">Long Term Support</h3>
                <p className="text-white/90 font-medium text-[0.95rem] leading-relaxed">
                  We provide dependable after sales support to ensure your growth continues uninterrupted.
                </p>
              </motion.div>

            </div>

          </div>

        </div>

        {/* Footer Area with tags and contact text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 flex flex-col items-center justify-center gap-8"
        >
          {/* Tags */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-5">
            {["Digital Strategy", "Social Media", "Paid Advertising", "Brand Identity"].map((tag, i) => (
              <div key={i} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow cursor-default">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4ba835]"></div>
                <span className="text-sm font-bold text-gray-700">{tag}</span>
              </div>
            ))}
          </div>

          {/* Contact Row */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-center">
            <div className="flex -space-x-3 mr-1">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" alt="Avatar" className="w-8 h-8 rounded-full border-2 border-white shadow-sm object-cover" />
              <div className="w-8 h-8 rounded-full bg-[#4ba835] border-2 border-white shadow-sm flex items-center justify-center z-10">
                <Phone className="w-3.5 h-3.5 text-white" />
              </div>
            </div>
            <p className="text-gray-700 font-medium text-[15px]">
              Let's make something great work together. <Link href="/contact" className="text-[#4ba835] font-bold underline underline-offset-4 decoration-2 hover:text-[#3d8c2b] transition-colors">Let's Talk</Link>
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
