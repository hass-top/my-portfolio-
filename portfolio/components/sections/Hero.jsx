"use client";

import { useRef } from "react";
import AnimationBrand2 from "../animations/AnimationBrand2";
import AnimatedText from "../animations/AnimatedText"; 
import AnimationBrand from  "../animations/AnimationBrand";
import About from "./About";
import Card from "../ui/Card"; 
export default function Hero() {
    const containerRef = useRef(null);

    const status = "SCAN FOR VULNERABILITIES";

    return (
        <>
        <section id="hero" className="scroll-mt-24 w-full pt-10 pb-16">
            <div ref={containerRef} className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 min-h-[60vh]">
                {/* Text Content - Left Side */}
                <div className="flex-1 flex flex-col items-start gap-6 w-full relative z-10">
                    <div className="flex items-center gap-5">
                        <div className="h-24 w-24 rounded-full overflow-hidden border-4 border-zinc-800/50 relative shadow-lg shadow-blue-500/20">
                            <img src="/image/sec.jpg" alt="Profile Picture" className="w-full h-full object-cover" onError={(e) => { e.target.src = "https://github.com/hass-top.png" }} />
                        </div>
                        <div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white">
                                hassine <span className="text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">trigui</span>
                            </h1>
                            <p className="text-zinc-500 mt-2 font-medium tracking-wide">@snofy</p>
                        </div>
                    </div>
                    <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 max-w-xl leading-relaxed mt-2">
                        Cybersecurity and cloud computing student with a passion for learning and sharing knowledge.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-4">
                        <a href="#contact" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors shadow-lg shadow-blue-500/30">
                            Get in touch
                        </a>
                        <a href="#projects" className="px-6 py-3 bg-zinc-800 dark:bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg font-medium transition-colors">
                            View Work
                        </a>
                    </div>
                </div>

                {/* Animation/Brand - Right Side */}
                <div className="flex-1 w-full max-w-lg lg:max-w-none flex justify-center lg:justify-end">
                    <div className="w-full transform hover:scale-105 transition-transform duration-500">
                        <AnimationBrand2 />
                    </div>
                </div>
            </div>
            
           
        </section>
<section>
    <About />
<div className="relative overflow-hidden w-full h-[2px] bg-zinc-800 my-10">
  {/* Blue line */}
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse" />

  {/* Moving scanner */}
  <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-12 h-8 rotate-45 bg-gradient-to-r from-transparent via-white to-transparent animate-scan" />
</div>

{/* Separator */}
<div className="flex items-center justify-center py-12">
  <div className="h-px flex-1 bg-zinc-700" />

  <div className="relative overflow-hidden mx-6 px-4 py-2 border border-blue-500/30 rounded-full bg-zinc-900">
    {/* Moving ribbon inside badge */}
    <div className="absolute top-[-20px] left-[-40px] h-[80px] w-[10px] rotate-45 bg-white/80 blur-[1px] animate-ribbon" />

    <p className="relative z-10 text-blue-400 text-sm tracking-widest">
      {status}
    </p>

  </div>

  <div className="h-px flex-1 bg-zinc-700" />
</div>

<div className="relative overflow-hidden w-full h-[2px] bg-zinc-800 my-10">
  {/* Blue line */}
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse" />

  {/* Moving scanner */}
  <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-12 h-8 rotate-45 bg-gradient-to-r from-transparent via-white to-transparent animate-scan" />
</div>
</section>
<section className="relative w-full  overflow-hidden">
    <AnimationBrand />
   
</section>
<div className="h-10"></div>
        </> 
    )
}