"use client";

import Link from "next/link";

const projects = [
  {
    category: "Enterprise HRMS",
    title: "FOVESTTA HR Management Platform",
    image: "/project_hrms.png",
  },
  {
    category: "Custom Software",
    title: "NBCC Complaint Management System",
    image: "/project_complaint.png",
  },
  {
    category: "Logistics & Operations",
    title: "Automated Inventory Management",
    image: "/project_inventory.png",
  }
];

export default function ProjectsSection() {
  return (
    <section className="py-24 px-6 bg-[#FCFBFA] font-sans">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
          <div className="max-w-2xl">
            {/* Pill */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--primary)" }}></span>
              <span className="text-[13px] font-bold uppercase tracking-widest text-gray-800">Our Projects</span>
            </div>
            
            {/* Heading */}
            <h2 className="text-4xl md:text-[3.5rem] font-bold text-[#0A0A0A] leading-[1.1] tracking-tight">
              Our expert software<br/>and successful projects
            </h2>
          </div>
          
          <Link 
            href="/portfolio" 
            className="px-8 py-3.5 rounded-lg font-bold text-[#0A0A0A] transition-transform hover:-translate-y-1"
            style={{ backgroundColor: "var(--primary)" }}
          >
            View All Project
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group cursor-pointer">
              {/* Image Container */}
              <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Text Content */}
              <p className="text-gray-500 font-medium text-[15px] mb-2">{project.category}</p>
              <h3 className="text-[22px] font-bold text-gray-900 group-hover:text-[--primary] transition-colors">{project.title}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
