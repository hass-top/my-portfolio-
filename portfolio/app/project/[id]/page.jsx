"use client";
import React, { use, useEffect, useRef, useState } from "react";
import Layout from "@/components/layout/Layout";
import Button from "@/components/ui/Button";
import { projects } from "@/data/projects";
// ─── Custom SVG Icons (no external deps) ───
const ArrowLeftIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M19 12H5M12 19l-7-7 7-7"/>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const CodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const TagIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/>
    <line x1="7" y1="7" x2="7.01" y2="7"/>
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const FolderIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>
  </svg>
);

// ─── Animated Tag ───
function TechTag({ tag, index }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const colors = [
    "from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-300",
    "from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-300",
    "from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-300",
    "from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-300",
    "from-rose-500/20 to-red-500/20 border-rose-500/30 text-rose-300",
    "from-indigo-500/20 to-violet-500/20 border-indigo-500/30 text-indigo-300",
  ];
  const colorClass = colors[index % colors.length];

  return (
    <span
      ref={ref}
      className={`
        inline-flex items-center px-3 py-1.5 rounded-none text-xs font-semibold tracking-wide
        bg-gradient-to-r ${colorClass} border backdrop-blur-sm
        transition-all duration-500 ease-out
        hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
      `}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {tag}
    </span>
  );
}

// ─── Stat Card ───
function StatCard({ icon, label, value, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
        flex items-center gap-3 p-4 rounded-none border border-zinc-800/60 bg-zinc-900/40 backdrop-blur-sm
        transition-all duration-700 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-8 h-8 rounded-none bg-zinc-800/80 flex items-center justify-center text-zinc-400">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">{label}</p>
        <p className="text-sm font-semibold text-white">{value}</p>
      </div>
    </div>
  );
}

// ─── Main ───
export default function ProjectPage({ params }) {
  // FIX: Unwrap params Promise with React.use()
  const { id } = use(params);
  
  const project = projects.find((p) => p.slug === id);

  const [isLoaded, setIsLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!project) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-none blur-[120px]" />
          </div>
          
          <div className="text-center relative z-10">
            <div className="w-20 h-20 mx-auto mb-6 rounded-none bg-zinc-900/50 border border-zinc-800 flex items-center justify-center">
              <FolderIcon />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">Project Not Found</h1>
            <p className="text-zinc-400 mb-8 max-w-md mx-auto">
              The requested project node does not exist in the system.
            </p>
            <Button href="/" variant="primary" className="inline-flex items-center gap-2">
              <ArrowLeftIcon />
              Return to Base
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen relative overflow-hidden">
        {/* Ambient background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-cyan-500/5 rounded-none blur-[150px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-500/5 rounded-none blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-32">
          
          {/* Back Navigation */}
          <div
            className={`
              mb-12 transition-all duration-700 ease-out
              ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
          >
            <a
              href="/#projects"
              className="group inline-flex items-center gap-2 text-sm font-mono text-zinc-500 hover:text-cyan-400 transition-colors duration-300"
            >
              <span className="w-8 h-8 rounded-none border border-zinc-800 group-hover:border-cyan-500/30 bg-zinc-900/50 flex items-center justify-center transition-all duration-300 group-hover:bg-cyan-500/10">
                <ArrowLeftIcon />
              </span>
              <span className="uppercase tracking-wider">Back to Projects</span>
            </a>
          </div>

          {/* Header */}
          <div
            className={`
              mb-16 transition-all duration-1000 delay-100 ease-out
              ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-cyan-500 to-transparent" />
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-cyan-400/80 font-mono">
                Project Node
              </span>
              <span className="px-2 py-0.5 rounded-none text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                ACTIVE
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white">
              {project.title}
            </h1>
            
            {project.subtitle && (
              <p className="text-xl sm:text-2xl text-zinc-400 max-w-3xl leading-relaxed">
                {project.subtitle}
              </p>
            )}

            <div className="flex items-center gap-3 mt-10">
              <div className="h-px w-16 bg-gradient-to-r from-zinc-700 to-transparent" />
              <div className="w-2 h-2 rotate-45 bg-cyan-500/40" />
              <div className="h-px w-24 bg-zinc-800" />
              <div className="w-2 h-2 rotate-45 bg-purple-500/40" />
              <div className="h-px w-16 bg-gradient-to-l from-zinc-700 to-transparent" />
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Left: Content */}
            <div className="lg:col-span-2 space-y-10">
              
              {/* Image */}
              <div
                className={`
                  relative rounded-none overflow-hidden border border-zinc-800/60 bg-zinc-900/50 backdrop-blur-sm
                  transition-all duration-1000 delay-200 ease-out
                  ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-90 translate-y-10'}
                `}
              >
                <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-cyan-500/30 rounded-none z-20 pointer-events-none" />
                <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-cyan-500/30 rounded-none z-20 pointer-events-none" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-cyan-500/30 rounded-none z-20 pointer-events-none" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-cyan-500/30 rounded-none z-20 pointer-events-none" />

                {project.image ? (
                  <>
                    
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-cover "
                      
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent pointer-events-none" />
                  </>
                ) : (
                  <div className="w-full h-[400px] flex flex-col items-center justify-center gap-4">
                    <div className="w-16 h-16 rounded-none bg-zinc-800/50 flex items-center justify-center text-zinc-600">
                      <FolderIcon />
                    </div>
                    <span className="text-zinc-600 font-mono text-sm">No Visual Data Available</span>
                  </div>
                )}

                <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px]" />
              </div>

              {/* Overview */}
              <div
                className={`
                  transition-all duration-1000 delay-300 ease-out
                  ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-none bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <ShieldIcon />
                  </div>
                  <h2 className="text-2xl font-bold text-white tracking-tight">System Overview</h2>
                </div>
                
                <div className="p-6 sm:p-8 rounded-none border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-transparent" />
                  <p className="text-zinc-300 leading-relaxed text-base sm:text-lg">
                    {project.description || "No description data available in system memory."}
                  </p>
                </div>
              </div>

              {project.longDescription && (
                <div
                  className={`
                    transition-all duration-1000 delay-400 ease-out
                    ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                  `}
                >
                  <h3 className="text-xl font-bold text-white mb-4 tracking-tight">Technical Specifications</h3>
                  <div className="prose prose-invert prose-zinc max-w-none">
                    <p className="text-zinc-400 leading-relaxed">{project.longDescription}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Right: Sidebar */}
            <div className="space-y-6">
              
              {/* Metadata Card */}
              <div
                className={`
                  p-6 rounded-none border border-zinc-800/60 bg-zinc-900/40 backdrop-blur-sm relative overflow-hidden
                  transition-all duration-1000 delay-200 ease-out
                  ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}
                `}
              >
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-none opacity-10">
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-500 rotate-45" />
                </div>

                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-none bg-cyan-400 animate-pulse" />
                  Node Metadata
                </h3>

                <div className="space-y-4">
                  {project.year && (
                    <StatCard icon={<CalendarIcon />} label="Deployment Year" value={project.year} delay={300} />
                  )}
                  
                  {project.status && (
                    <StatCard icon={<ShieldIcon />} label="System Status" value={project.status} delay={400} />
                  )}

                  {project.category && (
                    <StatCard icon={<FolderIcon />} label="Classification" value={project.category} delay={500} />
                  )}
                </div>

                {project.tags && project.tags.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-zinc-800/50">
                    <div className="flex items-center gap-2 mb-4 text-zinc-500">
                      <TagIcon />
                      <span className="text-[10px] font-mono uppercase tracking-wider">Tech Stack</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <TechTag key={tag} tag={tag} index={i} />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Cards */}
              <div
                className={`
                  space-y-3 transition-all duration-1000 delay-400 ease-out
                  ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}
                `}
              >
                {project.links?.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between p-4 rounded-none border border-zinc-800/60 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-none bg-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                        <ExternalLinkIcon />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">Live Deployment</p>
                        <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Production Environment</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-none border border-zinc-700 flex items-center justify-center text-zinc-500 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-all">
                      <ExternalLinkIcon />
                    </div>
                  </a>
                )}

                {project.links?.source && (
                  <a
                    href={project.links.source}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between p-4 rounded-none border border-zinc-800/60 bg-zinc-900/40 backdrop-blur-sm hover:border-zinc-600 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-none bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:scale-110 transition-transform">
                        <CodeIcon />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">Source Code</p>
                        <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Repository Access</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-none border border-zinc-700 flex items-center justify-center text-zinc-500 group-hover:text-white group-hover:border-zinc-500 transition-all">
                      <ExternalLinkIcon />
                    </div>
                  </a>
                )}
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}