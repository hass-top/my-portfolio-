"use client";
import React, { useEffect, useRef, useState } from "react";
import { projects } from "../../data/projects";
import ProjectList from "../projects/ProjectList";
import Card from "../ui/Card";

export default function ProjectsPreview() {
  const [isVisible, setIsVisible] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHeaderVisible(true);
      },
      { threshold: 0.2 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      className="scroll-mt-24 relative py-16 sm:py-24 overflow-hidden"
      ref={sectionRef}
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px]" />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`
            mb-12 sm:mb-16 transition-all duration-1000 ease-out
            ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          {/* Eyebrow badge */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-gradient-to-r from-cyan-500 to-transparent" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-cyan-400/80 font-mono">
              Portfolio
            </span>
          </div>

          {/* Title with gradient */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            <span className="text-white">Featured</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">
              Projects
            </span>
          </h2>

          {/* Description */}
          <p className="text-zinc-400 text-base sm:text-lg max-w-xl leading-relaxed">
            A curated selection of recent work spanning security tools, web
            applications, and infrastructure experiments.
          </p>

          {/* Animated divider */}
          <div className="flex items-center gap-2 mt-8">
            <div className="h-px w-12 bg-gradient-to-r from-zinc-700 to-transparent" />
            <div className="w-1.5 h-1.5 rotate-45 bg-indigo-500/60" />
            <div className="h-px w-20 bg-zinc-800" />
            <div className="w-1.5 h-1.5 rotate-45 bg-cyan-500/60" />
            <div className="h-px w-12 bg-gradient-to-l from-zinc-700 to-transparent" />
          </div>
        </div>

        {/* Projects Grid */}
        <div
          className={`
            transition-all duration-1000 delay-300 ease-out
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
          `}
        >
          <ProjectList projects={projects} limit={3} />
        </div>

        {/* Footer CTA */}
        <div
          className={`
            mt-14 sm:mt-20 flex flex-col sm:flex-row items-center justify-between 
            gap-6 p-6 sm:p-8 rounded-2xl border border-zinc-800/60 bg-zinc-900/30 backdrop-blur-sm
            transition-all duration-1000 delay-500 ease-out
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-white/10 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-cyan-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-semibold tracking-tight">
                Explore the full archive
              </h3>
              <p className="text-zinc-500 text-sm mt-0.5">
                {projects.length} projects available in the complete portfolio
              </p>
            </div>
          </div>

          <a
            href="/projects"
            className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl 
              bg-white/5 border border-white/10 text-sm font-semibold text-white 
              hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 
              hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] overflow-hidden"
          >
            {/* Hover glow */}
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            
            <span className="relative z-10">View All Projects</span>
            <svg
              className="relative z-10 w-4 h-4 text-zinc-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}