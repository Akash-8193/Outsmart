"use client";

import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const phoneNumber = "919599342525"; // From user's schema metadata
  const message = "Hello Outsmart Technology! I would like to discuss a project.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-center animate-bounce">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] hover:bg-[#128C7E] transition-all duration-300 group relative"
        aria-label="Chat with us on WhatsApp"
      >
        <svg 
          viewBox="0 0 24 24" 
          width="30" 
          height="30" 
          fill="currentColor"
          className="group-hover:scale-110 transition-transform duration-300"
        >
          <path d="M12.01 2.014a9.99 9.99 0 00-8.52 15.24l-1.39 4.14 4.26-1.38a9.985 9.985 0 005.65 1.73h.01c5.52 0 10-4.48 10-10S17.53 2.014 12.01 2.014zm0 18.33h-.01a8.336 8.336 0 01-4.24-1.15l-.3-.18-3.15 1.02 1.04-3.08-.2-.31a8.32 8.32 0 01-1.46-4.71c0-4.6 3.75-8.35 8.34-8.35 2.22 0 4.31.87 5.89 2.44 1.57 1.57 2.43 3.66 2.43 5.89 0 4.59-3.74 8.34-8.33 8.34zm4.58-6.24c-.25-.13-1.49-.74-1.72-.82-.23-.08-.4-.13-.57.13-.17.25-.65.82-.8.99-.15.17-.3.19-.55.06-1.48-.75-2.52-1.42-3.48-3.02-.12-.21-.01-.32.11-.45.1-.11.23-.25.35-.38.12-.13.16-.21.24-.36.08-.15.04-.28-.02-.4-.06-.13-.57-1.38-.78-1.89-.2-.5-.41-.43-.57-.44h-.48c-.17 0-.44-.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.31 3.8.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.06 1.49-.61 1.7-1.2.21-.59.21-1.1.15-1.2-.06-.1-.23-.16-.48-.28z" />
        </svg>
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-bold py-2 px-3 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap hidden md:block">
          Chat with us!
          <span className="absolute top-1/2 -mt-1.5 -right-1.5 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-white"></span>
        </span>
      </a>
    </div>
  );
}
