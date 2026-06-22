"use client";

import { use } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import { notFound } from "next/navigation";

// Define the service data mapping
const serviceData: Record<string, any> = {
  "custom-software": {
    id: "01",
    category: "Software Engineering",
    title: "Custom Software",
    subtitle: "Precision, Impact, and Brand Excellence.",
    desc: "We engineer high-performance web applications, SaaS platforms, and enterprise systems tailored to your unique operational workflows.",
    features: ["ERP Systems", "CRM Solutions", "HRMS Platforms", "Inventory & Warehouse Systems", "Workflow Automation"],
    image: "/service_custom_software.png",
    longDesc: "From massive enterprise systems to intimate internal tools, we deliver custom software that aligns perfectly with your brand's vision. We handle every technical detail—from architecture design and API integration to scalable deployments and post-launch analytics—ensuring a seamless, professional experience that leaves a lasting impact on your operations."
  },
  "web-mobile": {
    id: "02",
    category: "Digital Platforms",
    title: "Web & Mobile Apps",
    subtitle: "Intuitive & Powerful Interfaces.",
    desc: "From sleek consumer apps to complex business portals, we build cross-platform applications that deliver seamless user experiences.",
    features: ["Android/iOS Apps", "Customer Portals", "Business Dashboards", "Multi-Vendor Platforms"],
    image: "/service_web_mobile.png",
    longDesc: "Our team crafts highly engaging, intuitive web and mobile applications designed to perform flawlessly across all devices. We focus on stunning UI/UX, robust performance, and scalable backends to ensure your digital products provide exceptional value to your users."
  },
  "ai-automation": {
    id: "03",
    category: "Intelligence",
    title: "AI & Automation",
    subtitle: "Transformative Autonomous Workflows.",
    desc: "Transform your operations with intelligent automation and AI. We build custom solutions that handle support and predict trends.",
    features: ["AI Integrations", "Chatbots", "Predictive Analytics", "Process Automation"],
    image: "/service_ai_automation.png",
    longDesc: "Embrace the future with our advanced AI and automation solutions. We integrate cutting-edge machine learning models, autonomous chatbots, and predictive analytics directly into your business processes, dramatically reducing manual effort and uncovering new opportunities for growth."
  },
  "cloud-saas": {
    id: "04",
    category: "Infrastructure",
    title: "Cloud & SaaS Products",
    subtitle: "Infrastructure you can trust.",
    desc: "We design, build, and deploy highly scalable cloud-native products and multi-tenant SaaS platforms ready for global audiences.",
    features: ["Multi-Tenant SaaS", "Subscription Platforms", "Scalable Cloud Apps", "Cloud Infrastructure Setup"],
    image: "/service_cloud_saas.png",
    longDesc: "Build your digital empire on a solid foundation. We architect and deploy multi-tenant SaaS platforms and cloud infrastructures using AWS, Azure, and Google Cloud. Enjoy unparalleled scalability, bulletproof security, and seamless continuous delivery for your most critical products."
  }
};

export default function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const service = serviceData[resolvedParams.id];

  if (!service) {
    notFound();
  }

  return (
    <PageTransition>
      <div className="bg-[#FCFBFA] min-h-screen font-sans text-gray-900 pb-12">
        
        {/* Hero Section */}
        <div className="relative w-full h-[70vh] min-h-[600px] flex flex-col justify-end overflow-hidden">
          
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0 bg-[#FCFBFA]">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
              style={{ backgroundImage: `url(${service.image})` }}
            />
          </div>

          {/* Top Navigation */}
          <div className="absolute top-0 left-0 w-full p-8 z-20">
            <div className="max-w-7xl mx-auto flex justify-start">
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-md shadow-sm border border-gray-200 text-sm font-bold tracking-widest uppercase transition-all hover:bg-gray-900 hover:text-white group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                Back To Home
              </Link>
            </div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-20">
            <div className="bg-white/40 backdrop-blur-md border border-white/60 p-8 md:p-10 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] inline-flex flex-col max-w-full">
              <h4 className="text-sm font-bold tracking-[0.2em] uppercase mb-4 flex items-center gap-3" style={{ color: "var(--primary)" }}>
                <span>{service.id}</span>
                <span className="w-8 h-[1px] bg-[--primary]"></span>
                <span>{service.category}</span>
              </h4>
              
              <h1 className="text-4xl md:text-6xl lg:text-5xl font-serif tracking-tight text-gray-900 leading-[1.1] mb-4 drop-shadow-sm whitespace-nowrap">
                {service.title}
              </h1>
              
              <p className="text-lg md:text-2xl text-gray-800 font-medium italic tracking-wide max-w-xl">
                {service.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-6 pt-12">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Left Column - Label */}
            <div className="w-full lg:w-1/4 shrink-0">
              <h3 className="text-sm font-bold tracking-[0.2em] uppercase sticky top-32" style={{ color: "var(--primary)" }}>
                Service Details
              </h3>
            </div>
            
            {/* Right Column - Details */}
            <div className="w-full lg:w-3/4 flex flex-col">
              <h2 className="text-2xl md:text-3xl font-medium text-gray-900 leading-[1.6] mb-12">
                {service.longDesc}
              </h2>
              
              <div className="w-full h-[1px] bg-gray-200 mb-12" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-6">Overview</h4>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100">
                  <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "var(--primary)" }}></span>
                    Included Offerings
                  </h4>
                  <ul className="space-y-4">
                    {service.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700 font-medium">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "var(--primary)" }} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
            </div>
          </div>
        </div>

      </div>
    </PageTransition>
  );
}
