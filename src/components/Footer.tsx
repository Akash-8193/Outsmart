"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-20 pb-8 px-6 font-sans border-t border-gray-900">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Top Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start mb-14">
          
          {/* Logo & Description */}
          <div className="col-span-1">
            <Link href="/" className="inline-flex items-center mb-6 bg-white/95 p-3 rounded-xl shadow-lg">
              <img src="/logo.png" alt="Outsmart Technology" className="h-10 w-auto object-contain" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              We Build Software That Thinks Ahead. Partner with us to outsmart the competition.
            </p>
          </div>
          
          {/* Location */}
          <Link href="/contact#location-map" className="col-span-1 flex items-start gap-5 lg:justify-center group cursor-pointer">
            <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform" style={{ backgroundColor: "var(--primary)" }}>
              <MapPin className="text-white w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2 group-hover:text-[--primary] transition-colors">Location:</h4>
              <p className="text-gray-400 text-sm leading-relaxed max-w-[250px] group-hover:text-gray-200 transition-colors">
                F-111, 2nd floor, Sector 8, Noida,<br />
                U.P.-201301
              </p>
            </div>
          </Link>
          
          {/* Socials */}
          <div className="col-span-1 flex flex-col lg:items-end">
            <h4 className="text-xl font-bold mb-4">Follow Us On:</h4>
            <div className="flex items-center gap-3">
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full flex items-center justify-center hover:-translate-y-1 transition-transform shadow-lg" style={{ backgroundColor: "var(--primary)" }}>
                <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full flex items-center justify-center hover:-translate-y-1 transition-transform shadow-lg" style={{ backgroundColor: "var(--primary)" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full flex items-center justify-center hover:-translate-y-1 transition-transform shadow-lg" style={{ backgroundColor: "var(--primary)" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full flex items-center justify-center hover:-translate-y-1 transition-transform shadow-lg" style={{ backgroundColor: "var(--primary)" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="w-full h-px bg-gray-800 mb-14"></div>
        
        {/* Bottom Body Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          
          {/* Contacts Column */}
          <div className="md:col-span-4 flex flex-col gap-8">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 shadow-lg" style={{ backgroundColor: "var(--primary)" }}>
                <Phone className="text-white w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">Urgent Support?</h4>
                <a href="tel:+919599342525" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                  +91-9599-34-2525
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 shadow-lg" style={{ backgroundColor: "var(--primary)" }}>
                <Mail className="text-white w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">E-Mail Us</h4>
                <a href="mailto:info@outsmarttechnology.com" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                  info@outsmarttechnology.com
                </a>
              </div>
            </div>
          </div>
          
          {/* Quick Links Column */}
          <div className="md:col-span-2">
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Contact Us', href: '/contact' }
              ].map((item) => (
                <li key={item.name} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--primary)" }}></span>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services Column */}
          <div className="md:col-span-3">
            <h4 className="text-xl font-bold mb-6">Our Services</h4>
            <ul className="flex flex-col gap-4">
              {[
                { name: 'AI Agents', href: '/services' },
                { name: 'Custom Software', href: '/services' },
                { name: 'SaaS Platforms', href: '/services' },
                { name: 'Data Transformation', href: '/services' }
              ].map((item) => (
                <li key={item.name} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--primary)" }}></span>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter Column */}
          <div className="md:col-span-3">
            <h4 className="text-xl font-bold mb-6">Subscribe Our Newsletter</h4>
            <form className="flex flex-col sm:flex-row gap-3 mb-5" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your Email" 
                className="bg-[#1A1A1A] border border-gray-800 rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:border-gray-500 w-full text-white placeholder:text-gray-600"
                required
                suppressHydrationWarning
              />
              <button 
                type="submit" 
                suppressHydrationWarning
                className="text-white font-bold px-6 py-3.5 rounded-lg whitespace-nowrap transition-opacity hover:opacity-90 shadow-lg"
                style={{ backgroundColor: "var(--primary)" }}
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500 leading-relaxed font-medium">
              *Stay updated with the latest tech trends, expert tips, and software insights in your inbox.
            </p>
          </div>
          
        </div>
        
        {/* Copyright */}
        <div className="text-center border-t border-gray-800 pt-8 pb-2">
          <p className="text-gray-500 text-sm font-medium tracking-wide">
            Copyright © 2026 Outsmart Technology. All Rights Reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
}
