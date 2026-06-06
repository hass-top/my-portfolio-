"use client";
import React from 'react';

export default function AnimationBrand2() {
    return (
        <div className="radar-container relative flex items-center justify-center w-full min-h-[400px] overflow-hidden rounded-xl bg-[#0a0f1a] radar-grid-bg">
            <style dangerouslySetInnerHTML={{ __html: `
                @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap');
                
                .radar-container {
                    --cyan: #00a8e8;
                    --cyan-glow: #00d4ff;
                    --cyan-dim: #006994;
                    font-family: 'JetBrains Mono', monospace;
                }
                
                /* Shield */
                .radar-shield {
                    clip-path: polygon(50% 0%, 100% 12%, 100% 55%, 50% 100%, 0% 55%, 0% 12%);
                }
                
                .radar-shield-outline {
                    clip-path: polygon(50% 0%, 100% 12%, 100% 55%, 50% 100%, 0% 55%, 0% 12%);
                    border: 2px solid var(--cyan);
                    box-shadow: 0 0 20px var(--cyan-dim), inset 0 0 20px rgba(0,168,232,0.1);
                    animation: radar-shieldPulse 3s ease-in-out infinite;
                }
                
                @keyframes radar-shieldPulse {
                    0%, 100% { 
                        box-shadow: 0 0 10px var(--cyan-dim), inset 0 0 10px rgba(0,168,232,0.05);
                        border-color: var(--cyan);
                    }
                    50% { 
                        box-shadow: 0 0 30px var(--cyan), inset 0 0 30px rgba(0,168,232,0.15);
                        border-color: var(--cyan-glow);
                    }
                }
                
                /* Concentric circles */
                .radar-circle {
                    border: 1px solid var(--cyan);
                    border-radius: 50%;
                    position: absolute;
                    animation: radar-circleExpand 4s ease-in-out infinite;
                }
                
                .radar-circle-1 { width: 60px; height: 60px; animation-delay: 0s; }
                .radar-circle-2 { width: 100px; height: 100px; animation-delay: 0.5s; opacity: 0.7; }
                .radar-circle-3 { width: 140px; height: 140px; animation-delay: 1s; opacity: 0.5; }
                .radar-circle-4 { width: 180px; height: 180px; animation-delay: 1.5s; opacity: 0.3; }
                
                @keyframes radar-circleExpand {
                    0%, 100% { transform: scale(1); opacity: inherit; }
                    50% { transform: scale(1.08); opacity: 1; }
                }
                
                /* Dashed circle */
                .radar-dashed-circle {
                    width: 220px;
                    height: 220px;
                    border: 1px dashed var(--cyan);
                    border-radius: 50%;
                    position: absolute;
                    opacity: 0.4;
                    animation: radar-dashSpin 20s linear infinite;
                }
                
                @keyframes radar-dashSpin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                
                /* Crosshairs */
                .radar-crosshair-h {
                    position: absolute;
                    width: 200px;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, var(--cyan), transparent);
                    animation: radar-crosshairPulse 2s ease-in-out infinite;
                }
                
                .radar-crosshair-v {
                    position: absolute;
                    width: 1px;
                    height: 200px;
                    background: linear-gradient(180deg, transparent, var(--cyan), transparent);
                    animation: radar-crosshairPulse 2s ease-in-out infinite;
                }
                
                @keyframes radar-crosshairPulse {
                    0%, 100% { opacity: 0.4; }
                    50% { opacity: 1; }
                }
                
                /* Tick marks on crosshairs */
                .radar-tick {
                    position: absolute;
                    width: 8px;
                    height: 1px;
                    background: var(--cyan);
                }
                .radar-tick-v {
                    width: 1px;
                    height: 8px;
                }
                
                /* Center dot */
                .radar-center-dot {
                    width: 10px;
                    height: 10px;
                    background: var(--cyan);
                    border-radius: 50%;
                    box-shadow: 0 0 10px var(--cyan), 0 0 20px var(--cyan-glow);
                    animation: radar-dotPulse 1.5s ease-in-out infinite;
                }
                
                @keyframes radar-dotPulse {
                    0%, 100% { transform: scale(1); box-shadow: 0 0 10px var(--cyan); }
                    50% { transform: scale(1.3); box-shadow: 0 0 25px var(--cyan-glow), 0 0 40px var(--cyan); }
                }
                
                /* Corner brackets */
                .radar-bracket {
                    position: absolute;
                    width: 16px;
                    height: 16px;
                    border-color: var(--cyan);
                    opacity: 0.6;
                    animation: radar-bracketBlink 3s ease-in-out infinite;
                }
                
                .radar-bracket-tl { top: -8px; left: -8px; border-top: 2px solid; border-left: 2px solid; }
                .radar-bracket-tr { top: -8px; right: -8px; border-top: 2px solid; border-right: 2px solid; }
                .radar-bracket-bl { bottom: -8px; left: -8px; border-bottom: 2px solid; border-left: 2px solid; }
                .radar-bracket-br { bottom: -8px; right: -8px; border-bottom: 2px solid; border-right: 2px solid; }
                
                @keyframes radar-bracketBlink {
                    0%, 100% { opacity: 0.4; }
                    50% { opacity: 0.9; }
                }
                
                /* Bracket dots */
                .radar-bracket-dot {
                    position: absolute;
                    width: 4px;
                    height: 4px;
                    background: var(--cyan);
                    border-radius: 50%;
                    animation: radar-dotBlink 2s ease-in-out infinite;
                }
                
                .radar-bd-tl { top: -12px; left: -12px; }
                .radar-bd-tr { top: -12px; right: -12px; }
                .radar-bd-bl { bottom: -12px; left: -12px; }
                .radar-bd-br { bottom: -12px; right: -12px; }
                
                @keyframes radar-dotBlink {
                    0%, 100% { opacity: 0.3; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.5); }
                }
                
                /* Radar sweep */
                .radar-sweep {
                    position: absolute;
                    width: 220px;
                    height: 220px;
                    border-radius: 50%;
                    background: conic-gradient(from 0deg, transparent 0deg, transparent 300deg, rgba(0,168,232,0.15) 360deg);
                    animation: radar-radarRotate 4s linear infinite;
                }
                
                @keyframes radar-radarRotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                
                /* Grid background */
                .radar-grid-bg {
                    background-image: 
                        linear-gradient(rgba(0,168,232,0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,168,232,0.03) 1px, transparent 1px);
                    background-size: 40px 40px;
                }
                
                /* Scan line */
                .radar-scan-line {
                    position: absolute;
                    width: 100%;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, var(--cyan), transparent);
                    animation: radar-scanMove 3s ease-in-out infinite;
                    opacity: 0.5;
                }
                
                @keyframes radar-scanMove {
                    0% { top: 0%; opacity: 0; }
                    10% { opacity: 0.6; }
                    90% { opacity: 0.6; }
                    100% { top: 100%; opacity: 0; }
                }
                
                /* Hover states */
                .radar-shield-wrap:hover .radar-shield-outline {
                    animation: radar-shieldPulse 0.5s ease-in-out infinite;
                    border-color: var(--cyan-glow);
                }
                
                .radar-shield-wrap:hover .radar-center-dot {
                    background: var(--cyan-glow);
                    animation: radar-dotPulse 0.3s ease-in-out infinite;
                }
                
                .radar-shield-wrap:hover .radar-dashed-circle {
                    animation: radar-dashSpin 2s linear infinite;
                    opacity: 0.8;
                }
                
                /* Glitch on hover */
                .radar-shield-wrap:hover {
                    animation: radar-glitch 0.4s ease-in-out;
                }
                
                @keyframes radar-glitch {
                    0% { transform: translate(0); filter: hue-rotate(0deg); }
                    20% { transform: translate(-2px, 1px); filter: hue-rotate(10deg); }
                    40% { transform: translate(2px, -1px); filter: hue-rotate(-10deg); }
                    60% { transform: translate(-1px, 2px); filter: hue-rotate(5deg); }
                    80% { transform: translate(1px, -2px); filter: hue-rotate(-5deg); }
                    100% { transform: translate(0); filter: hue-rotate(0deg); }
                }
                
                /* Floating particles */
                .radar-particle {
                    position: absolute;
                    width: 2px;
                    height: 2px;
                    background: var(--cyan);
                    border-radius: 50%;
                    opacity: 0.3;
                    animation: radar-floatUp 8s linear infinite;
                }
                
                @keyframes radar-floatUp {
                    0% { transform: translateY(400px) translateX(0); opacity: 0; }
                    10% { opacity: 0.6; }
                    90% { opacity: 0.6; }
                    100% { transform: translateY(-100px) translateX(30px); opacity: 0; }
                }
            ` }} />
            
            {/* Floating particles */}
            <div className="radar-particle" style={{ left: "15%", animationDelay: "0s" }}></div>
            <div className="radar-particle" style={{ left: "25%", animationDelay: "2s" }}></div>
            <div className="radar-particle" style={{ left: "40%", animationDelay: "4s" }}></div>
            <div className="radar-particle" style={{ left: "60%", animationDelay: "1s" }}></div>
            <div className="radar-particle" style={{ left: "75%", animationDelay: "3s" }}></div>
            <div className="radar-particle" style={{ left: "85%", animationDelay: "5s" }}></div>
            
            {/* Shield wrapper */}
            <div className="radar-shield-wrap relative w-80 h-96 flex items-center justify-center cursor-pointer scale-75 sm:scale-100 z-10">
                
                {/* Shield background */}
                <div className="absolute inset-0 radar-shield bg-gradient-to-b from-transparent via-cyan-500/5 to-cyan-500/10"></div>
                
                {/* Shield outline */}
                <div className="absolute inset-1 radar-shield-outline"></div>
                
                {/* Inner shield line */}
                <div className="absolute inset-4 radar-shield border border-cyan-500/20"></div>
                
                {/* Scan line */}
                <div className="radar-scan-line"></div>
                
                {/* Center radar area */}
                <div className="relative w-56 h-56 flex items-center justify-center">
                    
                    {/* Radar sweep */}
                    <div className="radar-sweep"></div>
                    
                    {/* Dashed circle */}
                    <div className="radar-dashed-circle"></div>
                    
                    {/* Concentric circles */}
                    <div className="radar-circle radar-circle-1 flex items-center justify-center">
                        <div className="radar-center-dot"></div>
                    </div>
                    <div className="radar-circle radar-circle-2"></div>
                    <div className="radar-circle radar-circle-3"></div>
                    <div className="radar-circle radar-circle-4"></div>
                    
                    {/* Crosshairs */}
                    <div className="radar-crosshair-h">
                        <div className="radar-tick" style={{ left: 0, top: "-3px" }}></div>
                        <div className="radar-tick" style={{ right: 0, top: "-3px" }}></div>
                    </div>
                    <div className="radar-crosshair-v">
                        <div className="radar-tick radar-tick-v" style={{ top: 0, left: "-3px" }}></div>
                        <div className="radar-tick radar-tick-v" style={{ bottom: 0, left: "-3px" }}></div>
                    </div>
                    
                    {/* Corner brackets */}
                    <div className="radar-bracket radar-bracket-tl"></div>
                    <div className="radar-bracket radar-bracket-tr"></div>
                    <div className="radar-bracket radar-bracket-bl"></div>
                    <div className="radar-bracket radar-bracket-br"></div>
                    
                    {/* Bracket dots */}
                    <div className="radar-bracket-dot radar-bd-tl"></div>
                    <div className="radar-bracket-dot radar-bd-tr"></div>
                    <div className="radar-bracket-dot radar-bd-bl"></div>
                    <div className="radar-bracket-dot radar-bd-br"></div>
                </div>
                
            </div>
            
            {/* Status bar */}
            <div className="absolute bottom-8 flex flex-col items-center gap-2 z-20 font-mono">
                <div className="text-cyan-400/40 text-xs tracking-[0.3em] uppercase">Security Protocol Active</div>
                <div className="flex gap-1">
                    <div className="w-8 h-0.5 bg-cyan-500/30 rounded animate-pulse"></div>
                    <div className="w-8 h-0.5 bg-cyan-500/30 rounded animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                    <div className="w-8 h-0.5 bg-cyan-500/30 rounded animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                </div>
            </div>
            
        </div>
    );
}
