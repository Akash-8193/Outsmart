"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { blogs } from "@/lib/blogData";

export default function BlogSection() {

  return (
    <section className="py-24 px-6 bg-[#F2EFE7] font-sans">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-3 bg-white px-5 py-2.5 rounded-full mb-8 text-[11px] font-bold tracking-widest uppercase shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "var(--primary)" }}></span>
            Latest Blog
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black uppercase leading-[1.05] tracking-tight text-gray-900 max-w-4xl mx-auto">
            INSIGHTS AND INSPIRATION FROM OUR LATEST BLOG
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {blogs.map((blog, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col group h-full"
            >
              {/* HD 3D Image */}
              <Link href={`/blog/${blog.slug}`} className="block overflow-hidden rounded-[2rem] mb-8 relative aspect-[4/3] shadow-lg shadow-black/5">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url(${blog.image})` }}
                />
              </Link>
              
              {/* Title */}
              <Link href={`/blog/${blog.slug}`} className="hover:opacity-80 transition-opacity">
                <h3 className="text-xl lg:text-2xl font-black uppercase leading-[1.2] text-gray-900 mb-8 min-h-[4rem]">
                  {blog.title}
                </h3>
              </Link>
              
              {/* Footer / Read More with Line Divider */}
              <div className="mt-auto border-b border-gray-300 pb-6">
                <Link 
                  href={`/blog/${blog.slug}`} 
                  className="inline-flex items-center font-bold text-sm tracking-widest uppercase text-gray-900 transition-colors"
                  style={{ transitionProperty: "color", transitionDuration: "300ms" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "var(--primary)"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "#111827"} // text-gray-900
                >
                  READ MORE 
                  <ArrowUpRight className="ml-1 w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
