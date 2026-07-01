import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Custom Software, App & AI Development",
  description: "Explore our premium enterprise software engineering services. From custom web and mobile applications to intelligent AI automation and scalable SaaS cloud platforms.",
  keywords: ["Software Engineering Services", "Web App Development", "Mobile App Development", "AI Integrations", "Cloud Infrastructure", "SaaS Solutions Noida"],
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
