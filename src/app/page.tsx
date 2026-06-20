"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ThreeDBackground from "@/components/ThreeDBackground";
import PageTransition from "@/components/PageTransition";
import AboutUsSection from "@/components/AboutUsSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import { ArrowRight, Code, Cpu, Smartphone, Server } from "lucide-react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray(".service-card");
    gsap.fromTo(
      cards,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-section",
          start: "top 75%",
        },
      }
    );

    gsap.fromTo(
      ".stat-item",
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        stagger: 0.2,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <PageTransition>
      <div className="relative min-h-screen overflow-hidden" ref={containerRef}>
        {/* Hero Section */}
        <motion.section 
          className="relative h-screen flex flex-col items-center justify-center text-center px-6"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <ThreeDBackground />
          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6" style={{ color: "var(--primary)" }}>
                We Build Software <br className="hidden md:block" /> That Thinks Ahead.
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-[--foreground] mb-10 max-w-2xl mx-auto font-medium"
            >
              Outsmart Technology partners with forward-thinking leaders to create custom AI solutions and scalable software systems that redefine the possible.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link 
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full text-white font-semibold text-lg transition-transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
                style={{ background: "linear-gradient(90deg, var(--primary), var(--secondary))" }}
              >
                Book a Free Consultation
                <ArrowRight size={20} />
              </Link>
              <Link 
                href="/portfolio"
                className="w-full sm:w-auto px-8 py-4 rounded-full text-[--primary] border-2 border-[--primary] font-semibold text-lg transition-colors hover:bg-[--primary] hover:text-white flex items-center justify-center"
              >
                View Our Work
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* About Us Section */}
        <AboutUsSection />

        {/* Services Preview */}
        <section className="py-32 px-6 services-section relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--primary)" }}>Our Core Services</h2>
                <p className="text-lg text-gray-600 max-w-lg">Comprehensive technology solutions tailored for modern businesses aiming to lead their industry.</p>
              </div>
              <Link href="/services" className="hidden md:inline-flex items-center text-[--secondary] font-semibold hover:underline group">
                View All Services <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Custom Software", icon: <Code size={32} />, desc: "Scalable web apps, SaaS products, and enterprise systems." },
                { title: "AI Agents", icon: <Cpu size={32} />, desc: "Autonomous AI agents for business and workflow automation." },
                { title: "AI Apps", icon: <Smartphone size={32} />, desc: "Intelligent mobile and web applications powered by LLMs." },
                { title: "IT Solutions", icon: <Server size={32} />, desc: "Cloud infrastructure, DevOps, and strategic IT consulting." },
              ].map((service, idx) => (
                <div key={idx} className="service-card bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center text-white" style={{ background: "linear-gradient(135deg, var(--primary), var(--secondary))" }}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.desc}</p>
                  <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-[--primary] group-hover:border-[--primary] group-hover:text-white transition-colors">
                    <ArrowRight size={14} />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center md:hidden">
              <Link href="/services" className="inline-flex items-center text-[--secondary] font-semibold hover:underline">
                View All Services <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section ref={statsRef} className="py-20 relative overflow-hidden text-white" style={{ background: "linear-gradient(90deg, var(--primary), var(--secondary))" }}>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "150+", label: "Projects Delivered" },
                { value: "45+", label: "AI Agents Built" },
                { value: "99%", label: "Happy Clients" },
                { value: "10+", label: "Years Experience" },
              ].map((stat, idx) => (
                <div key={idx} className="stat-item flex flex-col items-center justify-center p-6 bg-white/10 rounded-3xl backdrop-blur-md border border-white/20">
                  <span className="text-4xl md:text-5xl font-black mb-2">{stat.value}</span>
                  <span className="text-sm md:text-base font-medium text-white/80 uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />
        </section>

        {/* Portfolio Preview */}
        <section className="py-32 px-6 bg-[#F2EFE7]">
          <div className="max-w-7xl mx-auto text-center">
             <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--primary)" }}>Featured Work</h2>
             <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">Explore how we've helped forward-thinking companies implement robust software and AI solutions to dominate their markets.</p>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
               {[
                 { title: "Nexus AI Chatbot", category: "AI App Development", img: "bg-gray-300" },
                 { title: "FinTech Dashboard", category: "Custom Software", img: "bg-gray-400" },
                 { title: "AutoVoice Agent", category: "AI Agents", img: "bg-gray-500" },
               ].map((project, idx) => (
                 <div key={idx} className="group relative rounded-3xl overflow-hidden aspect-[4/3] shadow-lg">
                   <div className={`absolute inset-0 ${project.img} transition-transform duration-700 group-hover:scale-105`} />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                   <div className="absolute bottom-0 left-0 right-0 p-8 text-left">
                     <p className="text-[--secondary] text-sm font-bold uppercase tracking-wider mb-2">{project.category}</p>
                     <h3 className="text-2xl font-bold text-white mb-0">{project.title}</h3>
                   </div>
                 </div>
               ))}
             </div>
             
             <Link 
                href="/portfolio"
                className="inline-flex px-8 py-4 rounded-full text-white font-semibold text-lg transition-transform hover:scale-105 shadow-xl items-center justify-center gap-2"
                style={{ background: "linear-gradient(90deg, var(--primary), var(--secondary))" }}
              >
                View Complete Portfolio
             </Link>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-32 px-6 bg-white relative z-10">
          <div className="max-w-7xl mx-auto">
             <div className="text-center mb-16">
               <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--primary)" }}>Client Success</h2>
               <p className="text-lg text-gray-600 max-w-2xl mx-auto">Don't just take our word for it. Here's what our partners have to say.</p>
             </div>
             
             <div className="flex overflow-x-auto pb-8 snap-x snap-mandatory gap-6" style={{ scrollbarWidth: "none" }}>
               {[
                 { quote: "Outsmart completely transformed our customer service pipeline with their AI agents. We've cut response times by 80%.", author: "Sarah Jenkins", role: "CTO, Nexus E-Commerce" },
                 { quote: "Their engineering team is world-class. The scalable architecture they built handles millions of our daily transactions flawlessly.", author: "Michael Chang", role: "VP Engineering, GlobalPay" },
                 { quote: "The generative AI tools Outsmart developed for our internal team have boosted productivity by an order of magnitude.", author: "Elena Rodriguez", role: "Operations Director, MedCare" },
                 { quote: "A rare combination of cutting-edge AI expertise and rock-solid software engineering principles.", author: "David Kim", role: "Founder, Logistics Pro" },
               ].map((test, idx) => (
                 <div key={idx} className="min-w-[85vw] md:min-w-[400px] snap-center bg-[#F2EFE7]/30 p-8 rounded-3xl border border-gray-100 flex flex-col justify-between">
                   <div className="mb-6">
                     <div className="flex gap-1 mb-4 text-[#8E44AD]">
                       {[1,2,3,4,5].map(star => <svg key={star} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>)}
                     </div>
                     <p className="text-xl text-gray-800 font-medium leading-relaxed italic">"{test.quote}"</p>
                   </div>
                   <div>
                     <h4 className="font-bold text-lg">{test.author}</h4>
                     <p className="text-sm text-gray-600">{test.role}</p>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />

        {/* Blog Section */}
        <BlogSection />

        {/* Final CTA */}
        <section className="py-32 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Outsmart the Competition?</h2>
            <p className="text-xl text-gray-600 mb-12">Let's build something extraordinary together.</p>
            <Link 
              href="/contact"
              className="inline-block px-10 py-5 rounded-full text-white font-bold text-xl transition-all hover:scale-105 shadow-2xl hover:shadow-[--primary]/50"
              style={{ background: "linear-gradient(90deg, var(--primary), var(--secondary))" }}
            >
              Start Your Project
            </Link>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
