import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import { AntigravityEffect } from "@/components/animations/AntigravityEffect";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Outsmart Technology | Custom Software & AI Development Company",
  description: "Top enterprise software development agency specializing in custom SaaS, AI automation, and scalable mobile apps. We build technology that solves complex business challenges.",
  keywords: ["Custom Software Development", "AI Automation Solutions", "Enterprise SaaS Development", "Mobile App Developers Noida", "Top Tech Agency India", "B2B Software Company"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Outsmart Technology",
              "url": "https://outsmarttechnology.com",
              "logo": "https://outsmarttechnology.com/logo.png",
              "description": "Enterprise software development agency specializing in custom SaaS, AI automation, and mobile apps.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "F-111, 2nd floor, Sector 8",
                "addressLocality": "Noida",
                "addressRegion": "UP",
                "postalCode": "201301",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9599-34-2525",
                "contactType": "customer service",
                "email": "info@outsmarttechnology.com"
              }
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} antialiased`}
        suppressHydrationWarning
      >
        <Preloader />
        <LenisProvider>
          <CustomCursor />
          <AntigravityEffect />
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
