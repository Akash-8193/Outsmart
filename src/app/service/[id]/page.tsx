"use client";

import { useParams, notFound } from "next/navigation";
import PageTransition from "@/components/PageTransition";

const servicesData = {
  "custom-software": {
    title: "Custom Software",
    subtitle: "Precision, Impact, and Technical Excellence.",
    desc: "From massive enterprise architectures to intimate internal tools, we deliver custom software that aligns perfectly with your strategic vision. We handle every technical detail—from backend engineering and database optimization to intuitive front-end interfaces—ensuring a seamless, high-performance experience that leaves a lasting impression on your users.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1920&q=80",
    color: "var(--primary)",
  },
  "ai-agents": {
    title: "AI Agents",
    subtitle: "Autonomy, Intelligence, and Relentless Execution.",
    desc: "From complex multi-agent workflows to targeted virtual assistants, we deliver AI agents that align perfectly with your operational needs. We handle every conversational detail—from LLM fine-tuning and context window management to seamless API integrations—ensuring an autonomous, hyper-intelligent system that leaves a lasting impact on your efficiency.",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1920&q=80",
    color: "var(--primary)",
  },
  "cloud-architecture": {
    title: "Cloud Architecture",
    subtitle: "Scalability, Security, and Flawless Reliability.",
    desc: "From massive global deployments to secure private networks, we deliver cloud architectures that align perfectly with your scaling vision. We handle every infrastructural detail—from zero-trust security and load balancing to CI/CD pipelines—ensuring a resilient, high-availability foundation that leaves your enterprise immune to downtime.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80",
    color: "var(--primary)",
  },
  "mobile-apps": {
    title: "Mobile Apps",
    subtitle: "Fluidity, Engagement, and Native Performance.",
    desc: "From massive consumer applications to specialized B2B tools, we deliver mobile experiences that align perfectly with your brand's vision. We handle every interaction detail—from fluid 120hz animations and gesture controls to offline-first architectures—ensuring a seamless, premium mobile experience that leaves a lasting impression on your users.",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1920&q=80",
    color: "var(--primary)",
  },
  "data-analytics": {
    title: "Data Analytics",
    subtitle: "Foresight, Clarity, and Strategic Advantage.",
    desc: "From massive real-time pipelines to intimate predictive models, we deliver data analytics solutions that align perfectly with your decision-making vision. We handle every analytical detail—from data warehousing and ETL processes to interactive dashboards—ensuring a crystal-clear, actionable data ecosystem that leaves you perpetually ahead of the curve.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80",
    color: "var(--primary)",
  },
  "saas-platforms": {
    title: "SaaS Platforms",
    subtitle: "Multi-tenant, Robust, and Market-Ready.",
    desc: "From massive enterprise rollouts to disruptive consumer offerings, we deliver SaaS platforms that align perfectly with your monetization vision. We handle every product detail—from secure multi-tenant architectures and subscription billing to onboarding flows—ensuring a flawless, highly-scalable platform that leaves a lasting impression on your subscribers.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80",
    color: "var(--primary)",
  }
};

export default function ServiceDetail() {
  const params = useParams();
  const id = params?.id as string;
  const service = servicesData[id as keyof typeof servicesData];

  if (!service) {
    return notFound();
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#050505] text-white selection:bg-[--primary] selection:text-white">
        
        {/* Hero Section */}
        <div className="relative h-[75vh] w-full flex flex-col justify-end pb-16 md:pb-32 px-6 md:px-16 lg:px-24">
          
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
            style={{ 
              backgroundImage: `url(${service.img})`,
              backgroundAttachment: "fixed" 
            }}
          />
          
          {/* Gradients to fade smoothly into black */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-[#050505] z-0" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-0" />

          {/* Content */}
          <div className="relative z-10 max-w-5xl">
            {/* Tag */}
            <div className="flex items-center gap-4 mb-6">
              <span 
                className="tracking-[0.3em] text-sm font-bold uppercase"
                style={{ color: service.color }}
              >
                Service Details
              </span>
            </div>

            {/* Title */}
            <h1 className="text-6xl md:text-8xl lg:text-[8rem] leading-[0.9] tracking-tight font-serif mb-6 drop-shadow-2xl">
              {service.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-3xl lg:text-4xl italic text-white/90 font-serif drop-shadow-lg font-light">
              {service.subtitle}
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative z-10 max-w-5xl px-6 md:px-16 lg:px-24 py-16 md:py-24">
          <p className="text-lg md:text-2xl lg:text-3xl leading-relaxed md:leading-[1.8] text-white/80 font-serif">
            {service.desc}
          </p>
        </div>
        
        {/* Extra spacing at bottom */}
        <div className="h-32"></div>
      </div>
    </PageTransition>
  );
}
