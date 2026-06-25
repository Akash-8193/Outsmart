"use client";

import { motion } from "framer-motion";
import { 
  HeartPulse, GraduationCap, Users, Landmark, ShoppingCart, 
  Truck, Factory, Home, Hotel, Rocket, Building2, ArrowRight
} from "lucide-react";

export default function IndustriesWeServeSection() {
  const industries = [
    { name: "Healthcare", icon: <HeartPulse className="w-8 h-8" />, color: "from-pink-500 to-rose-500", image: "/domain-bgs/tech_bg_healthcare_1782393182262.png" },
    { name: "Education", icon: <GraduationCap className="w-8 h-8" />, color: "from-blue-500 to-cyan-500", image: "/domain-bgs/tech_bg_education_1782393195300.png" },
    { name: "HR & Recruitment", icon: <Users className="w-8 h-8" />, color: "from-purple-500 to-indigo-500", image: "/domain-bgs/tech_bg_hr_1782393208787.png" },
    { name: "Finance", icon: <Landmark className="w-8 h-8" />, color: "from-emerald-500 to-teal-500", image: "/domain-bgs/tech_bg_finance_1782393220064.png" },
    { name: "Retail & E-comm", icon: <ShoppingCart className="w-8 h-8" />, color: "from-orange-500 to-amber-500", image: "/domain-bgs/tech_bg_retail_1782393231502.png" },
    { name: "Logistics", icon: <Truck className="w-8 h-8" />, color: "from-sky-500 to-blue-600", image: "/domain-bgs/tech_bg_logistics_1782393243150.png" },
    { name: "Manufacturing", icon: <Factory className="w-8 h-8" />, color: "from-slate-500 to-gray-700", image: "/domain-bgs/tech_bg_manufacturing_1782393252038.png" },
    { name: "Real Estate", icon: <Home className="w-8 h-8" />, color: "from-fuchsia-500 to-pink-600", image: "/domain-bgs/tech_bg_real_estate_1782393262136.png" },
    { name: "Hospitality", icon: <Hotel className="w-8 h-8" />, color: "from-red-500 to-rose-600", image: "/domain-bgs/tech_bg_hospitality_1782393272681.png" },
    { name: "Startups & SaaS", icon: <Rocket className="w-8 h-8" />, color: "from-violet-500 to-purple-600", image: "/domain-bgs/tech_bg_finance_1782393220064.png" },
    { name: "Enterprises", icon: <Building2 className="w-8 h-8" />, color: "from-teal-500 to-emerald-600", image: "/domain-bgs/tech_bg_education_1782393195300.png" }
  ];

  // Helper to split industries into 3 columns for a staggered masonry effect
  const col1 = [industries[0], industries[3], industries[6], industries[9]];
  const col2 = [industries[1], industries[4], industries[7], industries[10]];
  const col3 = [industries[2], industries[5], industries[8]];

  return (
    <section className="py-16 px-6 bg-transparent relative overflow-hidden">
      {/* Background Animated Gradient Blobs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--primary)] rounded-full blur-[200px] opacity-[0.03] animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--secondary)] rounded-full blur-[150px] opacity-[0.03] animate-pulse" style={{ animationDelay: "2s" }}></div>

      <div className="max-w-[1500px] mx-auto flex flex-col lg:flex-row gap-16 relative z-10">
        
        {/* Left Side: Sticky Header Block */}
        <div className="w-full lg:w-1/3 flex flex-col items-start lg:sticky lg:top-32 h-fit">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-sm border border-gray-100 mb-8"
          >
            <span className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ backgroundColor: "var(--primary)" }}></span>
            <span className="text-sm font-bold tracking-widest text-gray-800 uppercase">Domains</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-5xl font-black text-gray-900 leading-[1.05] tracking-tight mb-8"
          >
            Industries <br/>
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, var(--primary), var(--secondary))" }}>We Serve.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 font-medium leading-relaxed mb-12 max-w-md"
          >
            Powering digital transformation across diverse sectors. We build tailored, scalable, and intelligent software solutions for unique operational challenges.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <a href="/contact" className="group inline-flex items-center gap-4 text-lg font-bold text-gray-900 hover:text-[--primary] transition-colors mb-12">
              Discuss Your Industry
              <div className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center group-hover:border-[--primary] group-hover:bg-[--primary] group-hover:text-white transition-all duration-300">
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </motion.div>

          {/* Character Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring" }}
            className="hidden lg:block w-full max-w-[450px] mt-10 relative left-[-20px]"
          >
             {/* Glow behind character */}
             <div className="absolute inset-0 bg-[var(--primary)] rounded-full blur-[80px] opacity-[0.15] mix-blend-multiply"></div>
             <img 
               src="https://illustrations.popsy.co/amber/student-going-to-school.svg" 
               alt="Industry Expert" 
               className="w-[120%] max-w-none h-auto drop-shadow-2xl object-contain relative z-10 hover:scale-105 transition-transform duration-500 origin-bottom" 
             />
          </motion.div>
        </div>

        {/* Right Side: Staggered Dynamic Grid */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-6 md:pt-16">
            {col1.map((item, idx) => <IndustryCard key={idx} item={item} index={idx} />)}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            {col2.map((item, idx) => <IndustryCard key={idx} item={item} index={idx + 4} />)}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6 md:pt-12">
            {col3.map((item, idx) => <IndustryCard key={idx} item={item} index={idx + 8} />)}
          </div>

        </div>
      </div>
    </section>
  );
}

// Sub-component for individual cards to keep code clean
function IndustryCard({ item, index }: { item: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: (index % 4) * 0.1, type: "spring", stiffness: 100, damping: 20 }}
      className="group relative bg-white p-8 rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden aspect-square flex flex-col justify-between"
    >
      {/* Background Image */}
      {item.image && (
        <div className="absolute inset-0 z-0">
          <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500 mix-blend-multiply" />
        </div>
      )}

      {/* Dynamic Hover Gradient Border via pseudo-element illusion */}
      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-0`}></div>
      
      {/* Icon Badge */}
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${item.color} text-white shadow-lg transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 relative z-10`}>
        {item.icon}
      </div>
      
      {/* Card Content */}
      <div className="relative z-10">
        <h3 className="font-bold text-gray-900 text-2xl leading-tight mb-2 group-hover:text-[--primary] transition-colors">
          {item.name}
        </h3>
        
        {/* Subtle decorative line */}
        <div className="w-10 h-1 bg-gray-200 rounded-full group-hover:w-full transition-all duration-500" style={{ backgroundImage: "linear-gradient(90deg, var(--primary), var(--secondary))" }}></div>
      </div>

      {/* Large faint background icon */}
      <div className="absolute -bottom-6 -right-6 text-gray-100/50 group-hover:text-[--primary]/5 transform scale-[2.5] transition-colors duration-500 z-0 pointer-events-none">
        {item.icon}
      </div>
    </motion.div>
  );
}
