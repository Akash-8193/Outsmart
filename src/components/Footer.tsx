"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#F2EFE7] py-16 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div className="md:col-span-1">
          <Link href="/" className="text-3xl font-bold tracking-tighter block mb-4">
            Outsmart<span style={{ color: "var(--primary)" }}>.</span>
          </Link>
          <p className="text-[#F2EFE7]/60 text-sm mb-6 leading-relaxed">
            We Build Software That Thinks Ahead. Partner with us to outsmart the competition.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[--primary] transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a href="#" className="hover:text-[--primary] transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" className="hover:text-[--primary] transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Services</h4>
          <ul className="space-y-3 text-sm text-[#F2EFE7]/70">
            <li><Link href="/services#custom-software" className="hover:text-[--secondary] transition-colors">Custom Software</Link></li>
            <li><Link href="/services#ai-agents" className="hover:text-[--secondary] transition-colors">AI Agents</Link></li>
            <li><Link href="/services#ai-apps" className="hover:text-[--secondary] transition-colors">AI Apps</Link></li>
            <li><Link href="/services#it-solutions" className="hover:text-[--secondary] transition-colors">IT Solutions</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-3 text-sm text-[#F2EFE7]/70">
            <li><Link href="/about" className="hover:text-[--secondary] transition-colors">About Us</Link></li>
            <li><Link href="/portfolio" className="hover:text-[--secondary] transition-colors">Portfolio</Link></li>
            <li><Link href="/contact" className="hover:text-[--secondary] transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
          <p className="text-sm text-[#F2EFE7]/60 mb-4">Stay updated with our latest AI insights.</p>
          <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-white/10 px-4 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[--primary] text-sm w-full"
            />
            <button className="px-4 py-2 rounded-r-md text-white transition-opacity hover:opacity-90" style={{ background: "linear-gradient(90deg, var(--primary), var(--secondary))" }}>
              <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-[#F2EFE7]/40 relative z-10">
        <p>© {new Date().getFullYear()} Outsmart Technology. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
        </div>
      </div>

      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
    </footer>
  );
}
