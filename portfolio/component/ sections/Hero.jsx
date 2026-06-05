"use client";

import { useRef } from "react";

export default function Hero() { 
    const containerRef = useRef(null); 
    
    return ( 
         
        <section id="hero" className="scroll-mt-24"> 
            <div ref={containerRef} className="flex flex-col items-start gap-6">  
                <div className="flex items-center gap-5">
                    <div className="h-24 w-24 rounded-full overflow-hidden border-4 border-zinc-800/50 relative">
                        <img src="/image/sec.jpg" alt="Profile Picture" className="w-full h-full object-cover" onError={(e) => { e.target.src = "https://github.com/hass-top.png" }} />
                    </div>
                    <div>
                        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                            hassine <span className="text-blue-500">trigui</span>
                        </h1>
                        <p className="text-zinc-500 mt-2 font-medium tracking-wide">@snofy</p>
                    </div>
                </div>
                <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl leading-relaxed mt-2">
                    Cybersecurity and cloud computing student with a passion for learning and sharing knowledge.
                </p>
            </div> 

          
        </section> 
    ) 
}