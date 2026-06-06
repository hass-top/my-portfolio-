"use client";
import React, { useEffect, useRef, useState } from 'react';

export default function SkillsLoaderBar({ totalSkills }) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [bootText, setBootText] = useState("INITIALIZING...");
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const messages = [
      "INITIALIZING...",
      "LOADING MODULES...",
      "CRYPTOGRAPHY... OK",
      "NETWORKING... OK",
      "FRONTEND... OK",
      "BACKEND... OK",
      "DATABASES... OK",
      "SYSTEM READY"
    ];

    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      const pct = Math.min((current / messages.length) * 100, 100);
      setProgress(pct);
      setBootText(messages[Math.min(current, messages.length - 1)]);
    }, 180);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <div ref={ref} className="w-full max-w-md mx-auto mt-14">
      {/* Terminal frame */}
      <div className="relative rounded-xl border border-zinc-800/80 bg-zinc-950/80 backdrop-blur-sm overflow-hidden">
        
        {/* Top bar */}
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-zinc-800/60 bg-zinc-900/50">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-[10px] font-mono text-zinc-600 tracking-widest uppercase">skill_loader.exe</span>
        </div>

        {/* Body */}
        <div className="px-4 py-4 sm:px-5 sm:py-5">
          
          {/* Status text */}
          <div className="flex items-center justify-between mb-3 font-mono text-xs">
            <span className="text-cyan-400/90 animate-pulse tracking-wider">
              {bootText}
            </span>
            <span className="text-zinc-500 tabular-nums">
              {Math.round(progress)}%
            </span>
          </div>

          {/* Progress track */}
          <div className="relative h-2.5 rounded-full bg-zinc-800/80 overflow-hidden">
            {/* Background grid lines */}
            <div className="absolute inset-0 opacity-20" 
              style={{
                backgroundImage: 'linear-gradient(90deg, transparent 98%, rgba(255,255,255,0.3) 98%)',
                backgroundSize: '10% 100%'
              }}
            />
            
            {/* Fill bar */}
            <div 
              className="h-full rounded-full relative transition-all duration-300 ease-out"
              style={{ 
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #06b6d4 0%, #8b5cf6 50%, #10b981 100%)'
              }}
            >
              {/* Leading glow */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-white rounded-full blur-[6px] opacity-80" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-3 bg-white rounded-full opacity-60" />
              
              {/* Shimmer */}
              <div className="absolute inset-0 opacity-30 animate-[shimmer_2s_infinite]"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                  backgroundSize: '200% 100%'
                }}
              />
            </div>
          </div>

          {/* Bottom stats */}
          <div className="flex items-center justify-between mt-3 text-[10px] font-mono text-zinc-600 tracking-wider">
            <span>MODULES: {totalSkills}</span>
            <span className={progress >= 100 ? 'text-emerald-500' : 'text-zinc-600'}>
              {progress >= 100 ? '● COMPLETE' : '○ LOADING...'}
            </span>
          </div>
        </div>

        {/* Scanline overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px]" />
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
}

// Drop this in your SkillsMatrix return, replacing the old footer badge:
// <SkillsLoaderBar totalSkills={totalSkills} />