"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { ExternalLink, ArrowRight } from "lucide-react";

const categories = ["All", "Enterprise SaaS", "Custom Software", "Web Apps", "Operations"];

const projects = [
  { id: 1, title: "FOVESTTA HRMS", category: "Enterprise SaaS", img: "bg-[url('/project_hrms.png')] bg-cover bg-center", client: "Corporate Enterprises", desc: "Advanced human resource management platform simplifying workforce operations through automation." },
  { id: 2, title: "Complaint Management Software", category: "Custom Software", img: "bg-[url('/project_complaint.png')] bg-cover bg-center", client: "NBCC", desc: "Streamlines complaint registration, tracking, escalation, and resolution across departments." },
  { id: 3, title: "Inventory Management System", category: "Operations", img: "bg-[url('/project_inventory.png')] bg-cover bg-center", client: "Retail & Logistics", desc: "Helps businesses track, manage, and optimize inventory operations with real-time visibility." },
  { id: 4, title: "Global Supply Chain ERP", category: "Custom Software", img: "bg-[url('https://images.unsplash.com/photo-1586528116311-ad8ed7c663be?auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center", client: "Logistics", desc: "Automated workflows and accurate stock control across multiple warehouse locations." },
  { id: 5, title: "Multi-Vendor E-Commerce", category: "Web Apps", img: "bg-[url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center", client: "Retail", desc: "Scalable digital platforms that accelerate growth and modernize retail operations." },
  { id: 6, title: "Patient Data Management SaaS", category: "Enterprise SaaS", img: "bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center", client: "Healthcare", desc: "HIPAA-compliant patient data management and predictive analytics dashboards." },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = projects.filter((project) => {
    if (activeTab === "All") return true;
    return project.category === activeTab;
  });

  return (
    <PageTransition>
      <div className="pt-32 pb-20 px-6 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold mb-6"
              style={{ color: "var(--primary)" }}
            >
              Our Work.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              A selection of our latest projects and technical achievements.
            </motion.p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors relative ${activeTab === category ? "text-white" : "text-gray-600 hover:text-[--primary]"}`}
              >
                {activeTab === category && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute inset-0 rounded-full z-[-1]"
                    style={{ background: "linear-gradient(90deg, var(--primary), var(--secondary))" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group cursor-pointer"
                >
                  <div className="relative rounded-3xl overflow-hidden aspect-[4/3] mb-6 shadow-sm group-hover:shadow-xl transition-shadow">
                    <div className={`absolute inset-0 ${project.img} transition-transform duration-700 group-hover:scale-105`} />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                      <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[--primary] transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        <ExternalLink />
                      </div>
                    </div>
                  </div>
                  <div className="px-2">
                    <p className="text-[--secondary] text-xs font-bold uppercase tracking-wider mb-2">{project.category} • {project.client}</p>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-[--primary] transition-colors">{project.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{project.desc}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <div className="mt-24 text-center">
             <div className="inline-flex items-center justify-center w-full max-w-2xl bg-white p-10 rounded-3xl shadow-lg border border-gray-100">
               <div className="text-left">
                  <h3 className="text-3xl font-bold mb-4">Have a project in mind?</h3>
                  <p className="text-gray-600">We're currently taking on new projects for Q3.</p>
               </div>
               <div className="ml-auto">
                 <a href="/contact" className="w-14 h-14 rounded-full text-white flex items-center justify-center transition-transform hover:scale-110 shadow-lg" style={{ background: "linear-gradient(135deg, var(--primary), var(--secondary))" }}>
                   <ArrowRight />
                 </a>
               </div>
             </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
