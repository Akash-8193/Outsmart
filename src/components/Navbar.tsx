"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 bg-[#F2EFE7]/80 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter" style={{ color: "var(--primary)" }}>
          Outsmart<span style={{ color: "var(--secondary)" }}>.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium transition-colors hover:opacity-70"
            >
              {link.name}
              {pathname === link.href && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute left-0 right-0 -bottom-1 h-0.5"
                  style={{ background: "linear-gradient(90deg, var(--primary), var(--secondary))" }}
                />
              )}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-6 py-2.5 rounded-full text-white text-sm font-semibold transition-transform hover:scale-105 shadow-lg"
            style={{ background: "linear-gradient(90deg, var(--primary), var(--secondary))" }}
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#F2EFE7] p-6 shadow-xl border-t border-black/5 md:hidden"
          >
            <div className="flex flex-col space-y-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={clsx(
                    "text-lg font-medium py-2 border-b border-black/5",
                    pathname === link.href ? "text-[--primary]" : "text-[--foreground]"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
