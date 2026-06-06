"use client";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const pageRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden">
      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px] animate-pulse delay-1000" />
        <div className="absolute top-[40%] left-[-5%] w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px]" />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Noise texture overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <Navbar />

      {/* Main content */}
      <main
        ref={pageRef}
        className="relative z-10 min-h-screen flex flex-col"
      >
        {/* Hero Header */}
        <div
          className={`
            pt-32 pb-12 px-6 transition-all duration-1000 ease-out
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          <div className="max-w-4xl mx-auto text-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800/50 mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-zinc-400 font-mono">
                Open for Opportunities
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              <span className="text-white">Let's</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">
                Connect
              </span>
            </h1>

            {/* Description */}
            <p className="text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              Have a project in mind or want to discuss cybersecurity? 
              Drop a message and I'll get back to you.
            </p>

            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-zinc-700" />
              <div className="w-2 h-2 rotate-45 bg-cyan-500/40" />
              <div className="h-px w-24 bg-zinc-800" />
              <div className="w-2 h-2 rotate-45 bg-purple-500/40" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-zinc-700" />
            </div>
          </div>
        </div>

        {/* Contact Component Container */}
        <div
          className={`
            flex-1 px-6 pb-24 transition-all duration-1000 delay-300 ease-out
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
          `}
        >
          <div className="max-w-4xl mx-auto">
            {/* Glassmorphism wrapper around Contact */}
            <div className="relative rounded-3xl border border-zinc-800/50 bg-zinc-900/20 backdrop-blur-xl overflow-hidden">
              {/* Top gradient accent */}
              <div className="h-1 w-full bg-gradient-to-r from-cyan-500/50 via-indigo-500/50 to-purple-500/50" />

              {/* Corner decorations */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l border-t border-zinc-700/50 rounded-tl-lg" />
              <div className="absolute top-4 right-4 w-8 h-8 border-r border-t border-zinc-700/50 rounded-tr-lg" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l border-b border-zinc-700/50 rounded-bl-lg" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-zinc-700/50 rounded-br-lg" />

              {/* Inner glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/[0.02] to-transparent pointer-events-none" />

              {/* Contact component */}
              <div className="relative z-10 p-6 sm:p-10">
                <Contact />
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}