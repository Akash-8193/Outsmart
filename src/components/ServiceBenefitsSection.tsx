"use client";

import { motion } from "framer-motion";
import { Text3DBounce } from "@/components/animations/SplitTextAnimations";
import { HeartHandshake, Zap, Scale, Sparkles } from "lucide-react";

export default function ServiceBenefitsSection() {
  const benefits = [
    {
      title: "We Don't Ghost You",
      desc: "Communication is our strongest technical skill. We keep you in the loop constantly, so you never have to wonder 'what's going on with my project?'",
      icon: <HeartHandshake className="w-8 h-8 text-[var(--primary)]" />
    },
    {
      title: "Your Goals Are Our KPIs",
      desc: "We aren't just here to build features. We are here to solve your business problems. If it doesn't move the needle for you, we don't build it.",
      icon: <Scale className="w-8 h-8 text-[var(--primary)]" />
    },
    {
      title: "Built for Tomorrow",
      desc: "We don't cut corners. We write clean, scalable code and use modern architecture so your app doesn't break when you get your first 100,000 users.",
      icon: <Zap className="w-8 h-8 text-[var(--primary)]" />
    },
    {
      title: "The 'Wow' Factor",
      desc: "We believe software should be beautiful and intuitive. We obsess over every pixel and interaction to ensure your users fall in love with your product.",
      icon: <Sparkles className="w-8 h-8 text-[var(--primary)]" />
    }
  ];

  return (
    <section className="py-12 bg-gray-50 border-t border-gray-100 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--primary)] rounded-full blur-[150px] opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white px-5 py-2.5 rounded-full border border-gray-100 mb-6 shadow-sm"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--primary)] animate-pulse"></span>
              <span className="text-sm font-bold tracking-widest text-gray-800 uppercase">The Value We Bring</span>
            </motion.div>
            <Text3DBounce as="h2" className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
              Why working with us feels different.
            </Text3DBounce>
            <p className="text-lg text-gray-500 font-medium leading-relaxed">
              Anyone can write code. We provide peace of mind, strategic guidance, and a relentless focus on your success.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-xl transition-shadow group flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
