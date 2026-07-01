"use client";

import { motion } from "framer-motion";
import { Text3DBounce } from "@/components/animations/SplitTextAnimations";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function ClientSuccessStories() {
  const stories = [
    {
      client: "Global Logistics Corp",
      metric: "3x",
      metricLabel: "Faster Daily Workflows",
      desc: "They were buried in manual spreadsheets and chaos. We built a custom system that automated their warehouse, freeing up their team to finally focus on what matters.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80"
    },
    {
      client: "HealthPlus Solutions",
      metric: "40%",
      metricLabel: "Money Saved Monthly",
      desc: "Running physical servers was costing them a fortune and causing headaches. We moved everything to a secure, modern cloud setup, slashing their bills almost in half.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <Text3DBounce as="h2" className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
              Real Results for Real People
            </Text3DBounce>
            <p className="text-lg text-gray-500 font-medium">
              We don't just write code; we solve actual problems. Here is a glimpse of how we've helped everyday businesses thrive.
            </p>
          </div>
          <Link href="/portfolio" className="inline-flex items-center gap-2 font-bold text-[--primary] hover:text-gray-900 transition-colors">
            See More Client Stories <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group flex flex-col"
            >
              <div className="h-64 overflow-hidden relative shrink-0">
                <img src={story.image} alt={story.client} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-black text-white">{story.client}</h3>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                  <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100">
                    <TrendingUp className="w-8 h-8 text-[--primary]" />
                  </div>
                  <div>
                    <div className="text-3xl font-black text-gray-900">{story.metric}</div>
                    <div className="text-sm font-bold text-gray-500 uppercase tracking-wide">{story.metricLabel}</div>
                  </div>
                </div>
                <p className="text-gray-600 font-medium text-lg leading-relaxed mb-8 flex-1">
                  "{story.desc}"
                </p>
                <Link href="/portfolio" className="inline-flex items-center gap-2 font-bold text-gray-900 hover:text-[--primary] transition-colors mt-auto">
                  Read Full Story <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
