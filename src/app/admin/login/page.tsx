"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Mail, Loader2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage("Please enter both email and password.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      // Simulate network request
      await new Promise(resolve => setTimeout(resolve, 800));

      if (email === "Outsmart" && password === "Outsmart@123") {
        setStatus("success");
        // Set an authentication cookie that expires in 1 day
        document.cookie = "admin_auth=true; path=/; max-age=86400; SameSite=Strict";
        
        // Redirect to admin dashboard
        router.push("/admin");
        router.refresh();
      } else {
        throw new Error("Invalid admin credentials");
      }
    } catch (err: any) {
      setErrorMessage(err.message || "Invalid login credentials");
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-white">
      
      {/* Background Decorative Elements matching Outsmart theme */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply pointer-events-none" style={{ backgroundImage: "url('/dotted_world_map_bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
      <div className="absolute top-0 right-0 w-2/3 h-full opacity-5 pointer-events-none" style={{ background: "linear-gradient(to bottom left, var(--primary), transparent)" }}></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#8a198c]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-md px-6 animate-in fade-in zoom-in-95 duration-700">
        
        {/* Logo & Header */}
        <div className="flex flex-col items-center justify-center mb-8 text-center">
          <Link href="/" className="mb-6 inline-block hover:scale-105 transition-transform">
            <img src="/logo.png" alt="Outsmart Technology" className="h-12 w-auto" />
          </Link>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-2">Admin Login</h1>
          <p className="text-gray-500 font-medium text-sm">Secure access to your content management system.</p>
        </div>

        {/* Login Card */}
        <div className="bg-white/80 backdrop-blur-xl border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.05)] rounded-[2rem] p-8 relative overflow-hidden">
          
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8a198c] to-pink-500"></div>

          <form onSubmit={handleLogin} className="space-y-6 mt-2">
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">Admin ID</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Mail size={18} />
                </div>
                <input 
                  suppressHydrationWarning
                  type="text" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={(status === "loading" || status === "success") ? true : undefined}
                  className="w-full bg-gray-50/50 border border-gray-200 focus:border-[#8a198c] focus:bg-white rounded-xl py-3.5 pl-11 pr-4 outline-none transition-all text-gray-900 font-medium"
                  placeholder="e.g. Outsmart"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">Password</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Lock size={18} />
                </div>
                <input 
                  suppressHydrationWarning
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={(status === "loading" || status === "success") ? true : undefined}
                  className="w-full bg-gray-50/50 border border-gray-200 focus:border-[#8a198c] focus:bg-white rounded-xl py-3.5 pl-11 pr-4 outline-none transition-all text-gray-900 font-medium font-sans"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {status === "error" && (
              <div className="bg-red-50 text-red-600 border border-red-100 p-3 rounded-xl text-sm font-bold animate-in slide-in-from-top-2">
                {errorMessage}
              </div>
            )}

            <button 
              type="submit" 
              disabled={status === "loading" || status === "success"}
              className="w-full py-4 px-4 bg-gradient-to-r from-[#8a198c] to-pink-600 hover:opacity-90 text-white rounded-xl text-sm font-bold transition-all shadow-lg shadow-pink-500/25 flex items-center justify-center gap-2 group hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0"
            >
              {status === "loading" ? (
                <><Loader2 className="animate-spin" size={18} /> Authenticating...</>
              ) : status === "success" ? (
                "Success! Redirecting..."
              ) : (
                <>Secure Login <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></>
              )}
            </button>
            
          </form>

        </div>

        {/* Footer text */}
        <p className="text-center text-xs font-bold text-gray-400 mt-8 uppercase tracking-widest">
          Protected System &copy; {new Date().getFullYear()} Outsmart
        </p>

      </div>
    </div>
  );
}
