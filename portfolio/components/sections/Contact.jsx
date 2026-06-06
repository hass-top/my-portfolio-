"use client";
import React, { useEffect, useRef, useState } from "react";

// ─── Icons (unchanged) ───
const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const ShieldCheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <polyline points="9 12 12 15 16 10"/>
  </svg>
);

// ─── Cyber Button ───
function CyberButton({ href, children, icon, variant = "primary", delay = 0 }) {
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

  const baseClasses = `
    group relative inline-flex items-center gap-3 px-6 py-3.5 rounded-xl
    font-mono text-sm font-semibold tracking-wide uppercase
    transition-all duration-500 ease-out overflow-hidden
    border border-white/10 backdrop-blur-sm
    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
  `;

  const variants = {
    primary: `
      bg-gradient-to-r from-cyan-500/20 to-indigo-500/20
      text-cyan-100 hover:text-white
      hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]
      hover:-translate-y-1
    `,
    secondary: `
      bg-white/5 text-zinc-300 hover:text-white
      hover:border-zinc-500/40 hover:bg-white/10
      hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]
    `
  };

  const content = (
    <div
      ref={ref}
      className={`${baseClasses} ${variants[variant]}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="absolute top-0 left-0 w-2 h-2 border-l border-t border-current opacity-30 group-hover:opacity-80 transition-opacity rounded-tl-lg" />
      <span className="absolute top-0 right-0 w-2 h-2 border-r border-t border-current opacity-30 group-hover:opacity-80 transition-opacity rounded-tr-lg" />
      <span className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-current opacity-30 group-hover:opacity-80 transition-opacity rounded-bl-lg" />
      <span className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-current opacity-30 group-hover:opacity-80 transition-opacity rounded-br-lg" />
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-out" />
      <span className="relative z-10 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">{icon}</span>
      <span className="relative z-10">{children}</span>
      <span className={`w-1.5 h-1.5 rounded-full ${variant === 'primary' ? 'bg-cyan-400' : 'bg-zinc-500'} opacity-50 group-hover:opacity-100 group-hover:shadow-[0_0_8px_currentColor] transition-all duration-300`} />
    </div>
  );

  if (href) return <a href={href} target="_blank" rel="noreferrer" className="inline-block">{content}</a>;
  return content;
}

// ─── Hex Decoration ───
function HexDecoration({ className = "" }) {
  return (
    <div className={`absolute pointer-events-none opacity-10 ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="0.5">
        <path d="M50 5 L95 30 L95 75 L50 100 L5 75 L5 30 Z" />
        <path d="M50 20 L80 37 L80 70 L50 87 L20 70 L20 37 Z" />
        <path d="M50 35 L65 45 L65 62 L50 72 L35 62 L35 45 Z" />
      </svg>
    </div>
  );
}

// ─── CORRECTED: Orbiting Dots ───
function OrbitingDots() {
  const orbitRadius = 140; // Distance from center in px
  const duration = 8; // Seconds for full rotation
  
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[0, 1, 2, 3].map((i) => {
        const delay = (i * duration) / 4; // Evenly spaced: 0, 2, 4, 6 seconds
        const angleOffset = (i * 90); // 0°, 90°, 180°, 270° start positions
        
        return (
          <div
            key={i}
            className="absolute top-1/2 left-1/2"
            style={{
              width: 0,
              height: 0,
              animation: `orbitRotate ${duration}s linear infinite`,
              animationDelay: `-${delay}s`, // Negative delay = already in motion
            }}
          >
            <div
              className="absolute w-3 h-3 rounded-full bg-cyan-400/80 shadow-[0_0_12px_rgba(34,211,238,0.6)]"
              style={{
                // Position dot at orbit radius, offset by starting angle
                transform: `translate(-50%, -50%) rotate(${angleOffset}deg) translateX(${orbitRadius}px)`,
              }}
            />
          </div>
        );
      })}
      
      {/* Orbit path visualization (subtle ring) */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/10"
        style={{ width: orbitRadius * 2, height: orbitRadius * 2 }}
      />
    </div>
  );
}

// ─── Main ───
export default function Contact() {
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setSectionVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="scroll-mt-24 relative">
      <HexDecoration className="w-64 h-64 text-cyan-500 -top-20 -right-20 rotate-12" />
      <HexDecoration className="w-48 h-48 text-purple-500 -bottom-10 -left-10 -rotate-12" />

      <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        
        {/* LEFT: Content */}
        <div className="w-full lg:w-3/5 flex-1">
          <h2
            className={`
              text-4xl sm:text-5xl font-bold tracking-tight mb-6
              transition-all duration-700 delay-100 ease-out
              ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
            `}
          >
            <span className="text-white">Initiate</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Transmission
            </span>
          </h2>

          <p
            className={`
              text-zinc-400 text-base sm:text-lg leading-relaxed max-w-xl mb-10
              transition-all duration-700 delay-200 ease-out
              ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
            `}
          >
            Encrypted communication channel established. Transmit your inquiry via 
            direct email or connect through verified social nodes. All protocols active.
          </p>

          <div className="flex flex-col gap-4 mb-10">
            <CyberButton href="mailto:hassinetrigui5@gmail.com" icon={<MailIcon />} variant="primary" delay={300}>
              hassinetrigui5@gmail.com
            </CyberButton>
            
            <div className="flex flex-wrap gap-3 mt-2">
              <CyberButton href="https://github.com/hass-top" icon={<GithubIcon />} variant="secondary" delay={400}>
                GitHub
              </CyberButton>
              <CyberButton href="https://www.linkedin.com/in/hassine-trigui/" icon={<LinkedinIcon />} variant="secondary" delay={500}>
                LinkedIn
              </CyberButton>
              <CyberButton href="https://twitter.com/snofy_" icon={<TwitterIcon />} variant="secondary" delay={600}>
                Twitter/X
              </CyberButton>
            </div>
          </div>
        </div>

        {/* RIGHT: Visual with CORRECTED orbit */}
        <div
          className={`
            w-full lg:w-2/5 flex items-center justify-center
            transition-all duration-1000 delay-300 ease-out
            ${sectionVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-10 scale-95'}
          `}
        >
          <div className="relative w-full max-w-sm aspect-square">
            {/* Outer rotating ring */}
            <div className="absolute inset-0 rounded-full border border-dashed border-zinc-700/50 animate-[spin_20s_linear_infinite]" />
            
            {/* Inner rotating ring (reverse) */}
            <div className="absolute inset-4 rounded-full border border-dotted border-cyan-500/20 animate-[spin_15s_linear_infinite_reverse]" />
            
            {/* CORRECTED: Orbiting dots container */}
            <OrbitingDots />
            
            {/* Center shield */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40">
                <div
                  className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 flex items-center justify-center"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                  <div className="text-cyan-400/80 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                    <ShieldCheckIcon />
                  </div>
                </div>
                
                {/* Pulse ring */}
                <div className="absolute inset-0 rounded-full border border-cyan-500/30 animate-ping" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
              </div>
            </div>

            {/* Corner brackets */}
            <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-cyan-500/30 rounded-tl-lg" />
            <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-cyan-500/30 rounded-tr-lg" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-cyan-500/30 rounded-bl-lg" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-cyan-500/30 rounded-br-lg" />

            {/* Status text */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <span className="text-[10px] font-mono text-zinc-600 tracking-[0.2em] uppercase">
                Identity Verified
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes orbitRotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </section>
  );
}