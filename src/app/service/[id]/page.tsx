"use client";

import { use } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Target } from "lucide-react";
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
    longDesc: "From massive enterprise systems to intimate internal tools, we deliver custom software that aligns perfectly with your brand's vision. We handle every technical detail—from architecture design and API integration to scalable deployments and post-launch analytics—ensuring a seamless, professional experience that leaves a lasting impact on your operations.",
    benefits: ["Eliminate manual bottlenecks with custom automation", "Scale effortlessly without paying per-user software licenses", "Enterprise-grade security tailored to your industry", "Zero technical debt with modern, clean architecture"],
    howItWorks: [
      { title: "Discovery", desc: "We map out your business workflow and identify bottlenecks." },
      { title: "Architecture", desc: "We design a scalable technical blueprint and UI/UX prototype." },
      { title: "Development", desc: "We build your software in rapid, transparent weekly sprints." }
    ],
    technologies: ["React", "Node.js", "Python", "AWS", "Docker", "PostgreSQL"],
    idealFor: "Medium to large enterprises looking to automate complex workflows, reduce operational costs, or replace expensive legacy software.",
    bannerDirection: "bg-gradient-to-tr"
  },
  "web-mobile": {
    id: "02",
    category: "Digital Platforms",
    title: "Web & Mobile Apps",
    subtitle: "Intuitive & Powerful Interfaces.",
    desc: "From sleek consumer apps to complex business portals, we build cross-platform applications that deliver seamless user experiences.",
    features: ["Android/iOS Apps", "Customer Portals", "Business Dashboards", "Multi-Vendor Platforms"],
    image: "/service_web_mobile.png",
    longDesc: "Our team crafts highly engaging, intuitive web and mobile applications designed to perform flawlessly across all devices. We focus on stunning UI/UX, robust performance, and scalable backends to ensure your digital products provide exceptional value to your users.",
    benefits: ["Native-like performance on all platforms", "Higher user retention through stunning, intuitive UI/UX", "Offline capabilities and real-time syncing", "Seamless integration with your existing backend systems"],
    howItWorks: [
      { title: "UX Strategy", desc: "We wireframe the entire user journey for maximum engagement." },
      { title: "UI Design", desc: "We craft visually stunning, pixel-perfect interfaces." },
      { title: "Engineering", desc: "We code robust frontend and backend systems." }
    ],
    technologies: ["React Native", "Flutter", "Next.js", "Swift", "Kotlin", "Firebase"],
    idealFor: "Startups launching a new digital product, or businesses needing a dedicated mobile presence to engage their customers on the go.",
    bannerDirection: "bg-gradient-to-bl"
  },
  "ai-automation": {
    id: "03",
    category: "Intelligence",
    title: "AI & Automation",
    subtitle: "Transformative Autonomous Workflows.",
    desc: "Transform your operations with intelligent automation and AI. We build custom solutions that handle support and predict trends.",
    features: ["AI Integrations", "Chatbots", "Predictive Analytics", "Process Automation"],
    image: "/service_ai_automation.png",
    longDesc: "Embrace the future with our advanced AI and automation solutions. We integrate cutting-edge machine learning models, autonomous chatbots, and predictive analytics directly into your business processes, dramatically reducing manual effort and uncovering new opportunities for growth.",
    benefits: ["Reduce manual human labor by up to 80%", "Provide 24/7 intelligent customer support", "Make data-driven decisions with predictive analytics", "Stay ahead of competitors by leveraging cutting-edge LLMs"],
    howItWorks: [
      { title: "Data Audit", desc: "We analyze your data sources and operational bottlenecks." },
      { title: "Model Training", desc: "We fine-tune AI models specific to your business context." },
      { title: "Integration", desc: "We seamlessly connect the AI into your existing workflows." }
    ],
    technologies: ["OpenAI", "TensorFlow", "PyTorch", "LangChain", "Vector DBs", "Python"],
    idealFor: "Forward-thinking companies that want to dramatically cut operational costs, automate customer service, or extract insights from large datasets.",
    bannerDirection: "bg-gradient-to-t"
  },
  "cloud-saas": {
    id: "04",
    category: "Infrastructure",
    title: "Cloud & SaaS Products",
    subtitle: "Infrastructure you can trust.",
    desc: "We design, build, and deploy highly scalable cloud-native products and multi-tenant SaaS platforms ready for global audiences.",
    features: ["Multi-Tenant SaaS", "Subscription Platforms", "Scalable Cloud Apps", "Cloud Infrastructure Setup"],
    image: "/service_cloud_saas.png",
    longDesc: "Build your digital empire on a solid foundation. We architect and deploy multi-tenant SaaS platforms and cloud infrastructures using AWS, Azure, and Google Cloud. Enjoy unparalleled scalability, bulletproof security, and seamless continuous delivery for your most critical products.",
    benefits: ["99.99% guaranteed uptime for mission-critical apps", "Auto-scaling infrastructure that grows with your user base", "Secure multi-tenant data isolation", "Optimized cloud costs to prevent budget overruns"],
    howItWorks: [
      { title: "Cloud Strategy", desc: "We design an architecture optimized for cost and scale." },
      { title: "Core Build", desc: "We develop the multi-tenant backend and subscription logic." },
      { title: "Deployment", desc: "We set up automated CI/CD pipelines for secure rollouts." }
    ],
    technologies: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform", "Stripe API"],
    idealFor: "Founders building the next big SaaS product, or enterprises migrating legacy on-premise systems to a secure cloud environment.",
    bannerDirection: "bg-gradient-to-br"
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
        
        {/* Dynamic Themed Hero Section */}
        <div className="relative w-full h-[70vh] min-h-[600px] flex flex-col justify-end overflow-hidden">
          
          {/* Background Image & Dramatic Overlays */}
          <div className="absolute inset-0 z-0 bg-gray-900">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[15s] scale-105 opacity-60"
              style={{ backgroundImage: `url(${service.image})` }}
            />
            {/* Themed gradient multiplier based on brand colors, changing direction per service to differentiate */}
            <div className={`absolute inset-0 ${service.bannerDirection} from-[var(--primary)] to-[var(--secondary)] opacity-60 mix-blend-multiply`}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-90"></div>
          </div>

          {/* Top Navigation / SEO Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="absolute top-0 left-0 w-full p-8 z-20">
            <div className="max-w-7xl mx-auto flex items-center gap-4 text-xs md:text-sm font-bold tracking-widest uppercase">
              <Link href="/" className="text-white/50 hover:text-white transition-colors">Home</Link>
              <span className="text-white/20">/</span>
              <Link href="/services" className="text-white/50 hover:text-white transition-colors">Services</Link>
              <span className="text-white/20">/</span>
              <span className="text-[var(--primary)]" aria-current="page">{service.title}</span>
            </div>
          </nav>

          {/* Hero Content */}
          <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-24">
            <div className="bg-black/30 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl inline-flex flex-col max-w-full">
              <h4 className="text-sm font-bold tracking-[0.2em] uppercase mb-4 flex items-center gap-3" style={{ color: "var(--primary)" }}>
                <span>{service.id}</span>
                <span className="w-8 h-[2px]" style={{ backgroundColor: "var(--primary)" }}></span>
                <span className="text-white/80">{service.category}</span>
              </h4>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight text-white leading-[1.05] mb-6 drop-shadow-lg whitespace-nowrap">
                {service.title}
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 font-medium tracking-wide max-w-2xl leading-relaxed">
                {service.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-6 pt-16">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Left Column - Sticky Label */}
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
                
                <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 relative overflow-hidden">
                  <div className={`absolute -right-10 -bottom-10 w-32 h-32 rounded-full blur-3xl opacity-20 bg-[var(--primary)]`}></div>
                  <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "var(--primary)" }}></span>
                    Included Offerings
                  </h4>
                  <ul className="space-y-4 relative z-10">
                    {service.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700 font-medium">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "var(--primary)" }} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Target Audience / Ideal For */}
              <div className={`mt-16 relative overflow-hidden rounded-[2.5rem] bg-gray-900 p-10 md:p-14 shadow-2xl group`}>
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] opacity-10 group-hover:opacity-20 transition-opacity duration-1000"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000 pointer-events-none"></div>
                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
                  <div className="w-20 h-20 shrink-0 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-inner group-hover:rotate-12 transition-transform duration-500">
                    <Target className="w-10 h-10 text-[var(--primary)]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold tracking-[0.2em] uppercase text-gray-400 mb-3">Ideal Profile</h4>
                    <p className="text-white text-xl md:text-2xl font-medium leading-relaxed max-w-3xl">
                      {service.idealFor}
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Benefits */}
              <div className="mt-20">
                <div className="flex items-center gap-4 mb-10">
                  <span className="w-10 h-[2px]" style={{ backgroundColor: "var(--primary)" }}></span>
                  <h3 className="text-3xl font-black text-gray-900 tracking-tight">The Value You Get</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {service.benefits.map((ben: string, idx: number) => (
                    <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-[0_5px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
                      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] opacity-0 group-hover:opacity-5 rounded-bl-[100%] transition-opacity duration-500`}></div>
                      <div className={`w-12 h-12 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                         <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <p className="text-gray-900 text-xl font-bold leading-snug relative z-10">{ben}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* How It Works */}
              <div className="mt-20">
                <div className="flex items-center gap-4 mb-12">
                  <span className="w-10 h-[2px]" style={{ backgroundColor: "var(--primary)" }}></span>
                  <h3 className="text-3xl font-black text-gray-900 tracking-tight">How We Deliver</h3>
                </div>
                <div className="space-y-4">
                  {service.howItWorks.map((step: any, idx: number) => (
                    <div key={idx} className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 rounded-[2rem] hover:bg-white border border-transparent hover:border-[var(--primary)]/20 hover:shadow-lg transition-all duration-300 group">
                       <div className="w-20 h-20 shrink-0 rounded-[1.5rem] bg-gray-50 border border-gray-100 flex items-center justify-center relative overflow-hidden group-hover:shadow-md transition-all duration-500">
                         <div className={`absolute inset-0 bg-[var(--primary)] opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                         <span className={`text-3xl font-black text-gray-300 group-hover:text-[var(--primary)] transition-colors duration-500 relative z-10`}>0{idx+1}</span>
                       </div>
                       <div>
                         <h4 className="text-xl font-black text-gray-900 mb-2 transition-colors">{step.title}</h4>
                         <p className="text-gray-600 font-medium text-lg leading-relaxed">{step.desc}</p>
                       </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mt-20">
                <div className="flex items-center gap-4 mb-10">
                  <span className="w-10 h-[2px]" style={{ backgroundColor: "var(--primary)" }}></span>
                  <h3 className="text-3xl font-black text-gray-900 tracking-tight">Tech Stack</h3>
                </div>
                <div className="flex flex-wrap gap-4">
                  {service.technologies.map((tech: string, idx: number) => (
                    <div key={idx} className="group relative px-6 py-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-[var(--primary)]/50 hover:-translate-y-1 transition-all duration-300 cursor-default overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                      <span className="relative z-10 text-gray-700 font-black tracking-wide group-hover:text-[var(--primary)]">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Internal Linking / Next Steps (SEO & Navigation) */}
              <div className="mt-24 mb-24 pt-16 border-t border-gray-100 relative">
                <h3 className="text-2xl font-black text-gray-900 mb-8">Keep Exploring</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  {/* Internal Link to Portfolio */}
                  <Link href="/portfolio" className="group p-8 rounded-[2rem] bg-gray-50 hover:bg-[var(--primary)]/5 border border-gray-100 hover:border-[var(--primary)]/20 transition-all duration-300">
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-[var(--primary)] mb-3 flex items-center justify-between transition-colors">
                      Our Work
                      <ArrowRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[var(--primary)]" />
                    </h4>
                    <p className="text-gray-600 font-medium leading-relaxed">See our recent case studies and success stories.</p>
                  </Link>

                  {/* Internal Link to About Us */}
                  <Link href="/about" className="group p-8 rounded-[2rem] bg-gray-50 hover:bg-[var(--primary)]/5 border border-gray-100 hover:border-[var(--primary)]/20 transition-all duration-300">
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-[var(--primary)] mb-3 flex items-center justify-between transition-colors">
                      About Us
                      <ArrowRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[var(--primary)]" />
                    </h4>
                    <p className="text-gray-600 font-medium leading-relaxed">Learn about our team, culture, and expertise.</p>
                  </Link>

                  {/* Internal Link to Contact (CTA) */}
                  <Link href="/contact" className="group p-8 rounded-[2rem] bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-white shadow-lg shadow-[var(--primary)]/20 hover:shadow-xl hover:shadow-[var(--primary)]/30 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                    <h4 className="text-xl font-bold mb-3 flex items-center justify-between relative z-10">
                      Get in Touch
                      <ArrowRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </h4>
                    <p className="text-white/80 font-medium leading-relaxed relative z-10">Ready to start your next big project?</p>
                  </Link>
                  
                </div>
              </div>
              
            </div>
          </div>
        </div>

      </div>
    </PageTransition>
  );
}
