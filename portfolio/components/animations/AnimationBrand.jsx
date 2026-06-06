"use client";
import React, { useEffect, useRef } from 'react';
export default function AnimationBrand() {
    const containerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const elements = containerRef.current.querySelectorAll('.parallax-word');
            const scrollY = window.scrollY;
            
            elements.forEach((el) => {
                const speed = parseFloat(el.getAttribute('data-speed'));
                const yPos = scrollY * speed;
                el.style.transform = `translateY(${yPos}px)`;
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const leftWords = [
        { text: "SIEM", top: "15%", left: "5%", speed: 0.15 },
        { text: "Threat Hunting", top: "45%", left: "10%", speed: -0.1 },
        { text: "Zero Trust", top: "75%", left: "5%", speed: 0.2 },
    ];

    const rightWords = [
        { text: "Cloud Security", top: "20%", right: "5%", speed: -0.15 },
        { text: "Forensics", top: "50%", right: "12%", speed: 0.1 },
        { text: "Incident Response", top: "80%", right: "6%", speed: -0.2 },
    ];

    return (
        
        <div ref={containerRef} className="relative flex items-center justify-center w-full h-170 overflow-hidden rounded-xl bg-[#0a0a0a] animate-floatY">
            {/* Adding floating words on left */}
            {leftWords.map((word, idx) => (
                <div 
                    key={`left-${idx}`}
                    className="parallax-word absolute hidden sm:block font-mono text-sm tracking-wider text-[#00f0ff]/40 z-20 pointer-events-none transition-opacity duration-300 hover:text-[#00f0ff]/80"
                    style={{ top: word.top, left: word.left }}
                    data-speed={word.speed}
                >
                    {word.text}
                </div>
            ))}
            
            {/* Adding floating words on right */}
            {rightWords.map((word, idx) => (
                <div 
                    key={`right-${idx}`}
                    className="parallax-word absolute hidden sm:block font-mono text-sm tracking-wider text-[#00f0ff]/40 z-20 pointer-events-none transition-opacity duration-300 hover:text-[#00f0ff]/80"
                    style={{ top: word.top, right: word.right }}
                    data-speed={word.speed}
                >
                    {word.text}
                </div>
            ))}

            <style dangerouslySetInnerHTML={{ __html: `
                .shield-shape {
                    clip-path: polygon(50% 0%, 100% 10%, 100% 60%, 50% 100%, 0% 60%, 0% 10%);
                }
                
                .shield-border {
                    background: transparent;
                    border: 2px dashed rgba(255, 255, 255, 0.6);
                    clip-path: polygon(50% 0%, 100% 10%, 100% 60%, 50% 100%, 0% 60%, 0% 10%);
                    animation: dashRotate 20s linear infinite;
                }
                
                @keyframes dashRotate {
                    0% { filter: drop-shadow(0 0 2px rgba(255,255,255,0.3)); }
                    50% { filter: drop-shadow(0 0 8px rgba(255,255,255,0.6)); }
                    100% { filter: drop-shadow(0 0 2px rgba(255,255,255,0.3)); }
                }
                
                .hexagon-shield {
                    width: 80px;
                    height: 46px;
                    background: transparent;
                    border-left: 2px solid rgba(255,255,255,0.8);
                    border-right: 2px solid rgba(255,255,255,0.8);
                    position: relative;
                    animation: hexPulse 3s ease-in-out infinite;
                }
                
                .hexagon-shield::before,
                .hexagon-shield::after {
                    content: "";
                    position: absolute;
                    width: 56px;
                    height: 56px;
                    left: 50%;
                    transform: translateX(-50%) rotate(45deg);
                    background: transparent;
                }
                
                .hexagon-shield::before {
                    top: -28px;
                    border-top: 2px solid rgba(255,255,255,0.8);
                    border-right: 2px solid rgba(255,255,255,0.8);
                }
                
                .hexagon-shield::after {
                    bottom: -28px;
                    border-bottom: 2px solid rgba(255,255,255,0.8);
                    border-left: 2px solid rgba(255,255,255,0.8);
                }
                
                @keyframes hexPulse {
                    0%, 100% { 
                        transform: scale(1); 
                        filter: drop-shadow(0 0 5px rgba(255,255,255,0.2));
                    }
                    50% { 
                        transform: scale(1.05); 
                        filter: drop-shadow(0 0 15px rgba(255,255,255,0.5));
                    }
                }
                
                .center-dot {
                    width: 12px;
                    height: 12px;
                    background: white;
                    border-radius: 50%;
                    animation: dotGlow 2s ease-in-out infinite;
                }
                
                @keyframes dotGlow {
                    0%, 100% { 
                        box-shadow: 0 0 5px rgba(255,255,255,0.5), 0 0 10px rgba(255,255,255,0.3);
                        transform: scale(1);
                    }
                    50% { 
                        box-shadow: 0 0 15px rgba(255,255,255,0.9), 0 0 30px rgba(255,255,255,0.5);
                        transform: scale(1.2);
                    }
                }
                
                .orbit-circle {
                    position: absolute;
                    width: 8px;
                    height: 8px;
                    border: 1px solid rgba(255,255,255,0.6);
                    border-radius: 50%;
                    animation: orbit 8s linear infinite;
                }
                
                .orbit-circle:nth-child(1) { animation-delay: 0s; }
                .orbit-circle:nth-child(2) { animation-delay: -2s; }
                .orbit-circle:nth-child(3) { animation-delay: -4s; }
                .orbit-circle:nth-child(4) { animation-delay: -6s; }
                
                @keyframes orbit {
                    0% { transform: rotate(0deg) translateX(140px) rotate(0deg); opacity: 0.4; }
                    25% { opacity: 1; }
                    50% { opacity: 0.4; }
                    75% { opacity: 1; }
                    100% { transform: rotate(360deg) translateX(140px) rotate(-360deg); opacity: 0.4; }
                }
                
                .shield-bracket {
                    position: absolute;
                    width: 20px;
                    height: 40px;
                    border: 2px solid rgba(255,255,255,0.4);
                    animation: bracketPulse 4s ease-in-out infinite;
                }
                
                .bracket-left {
                    border-right: none;
                    left: -30px;
                    top: 50%;
                    transform: translateY(-50%);
                }
                
                .bracket-right {
                    border-left: none;
                    right: -30px;
                    top: 50%;
                    transform: translateY(-50%);
                }
                
                @keyframes bracketPulse {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 0.8; }
                }
                
                .binary-text {
                    font-size: 0.75rem;
                    color: rgba(255,255,255,0.5);
                    letter-spacing: 2px;
                    animation: binaryFlicker 3s ease-in-out infinite;
                    font-family: 'JetBrains Mono', monospace;
                }
                
                .binary-text:nth-child(2) { animation-delay: 0.5s; }
                .binary-text:nth-child(3) { animation-delay: 1s; }
                
                @keyframes binaryFlicker {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 0.9; }
                }
                
                .scanline {
                    position: absolute;
                    width: 100%;
                    height: 2px;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
                    animation: scan 4s ease-in-out infinite;
                }
                
                @keyframes scan {
                    0% { top: 0%; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { top: 100%; opacity: 0; }
                }
                
                .grid-bg {
                    background-image: 
                        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
                    background-size: 50px 50px;
                }
                
                .shield-container:hover .shield-border {
                    border-color: rgba(255,255,255,0.9);
                    animation: dashRotate 0.5s linear infinite;
                }
                
                .shield-container:hover .hexagon-shield {
                    animation: hexPulse 0.5s ease-in-out infinite;
                }
                
                .shield-container:hover .center-dot {
                    background: #00f0ff;
                    animation: dotGlow 0.5s ease-in-out infinite;
                }
                
                .glitch-hover:hover {
                    animation: glitch 0.3s ease-in-out;
                }
                
                @keyframes glitch {
                    0% { transform: translate(0); }
                    20% { transform: translate(-2px, 2px); }
                    40% { transform: translate(-2px, -2px); }
                    60% { transform: translate(2px, 2px); }
                    80% { transform: translate(2px, -2px); }
                    100% { transform: translate(0); }
                }
                
                .particle-float {
                    position: absolute;
                    width: 2px;
                    height: 2px;
                    background: rgba(255,255,255,0.4);
                    border-radius: 50%;
                    animation: float 10s ease-in-out infinite;
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { transform: translateY(-400px) translateX(50px); opacity: 0; }
                }
            ` }} />
            
            <div className="absolute inset-0 grid-bg"></div>

            {/* Floating particles */}
            <div className="particle-float" style={{ left: '10%', animationDelay: '0s' }}></div>
            <div className="particle-float" style={{ left: '20%', animationDelay: '2s' }}></div>
            <div className="particle-float" style={{ left: '30%', animationDelay: '4s' }}></div>
            <div className="particle-float" style={{ left: '70%', animationDelay: '1s' }}></div>
            <div className="particle-float" style={{ left: '80%', animationDelay: '3s' }}></div>
            <div className="particle-float" style={{ left: '90%', animationDelay: '5s' }}></div>
            
            {/* Main shield container */}
            <div className="shield-container relative w-80 h-96 flex items-center justify-center cursor-pointer glitch-hover z-10 scale-75 sm:scale-100">
                
                {/* Shield background */}
                <div className="absolute inset-0 shield-shape bg-gradient-to-b from-transparent via-transparent to-white/5"></div>
                
                {/* Shield dashed border */}
                <div className="absolute inset-2 shield-border"></div>
                
                {/* Inner shield line */}
                <div className="absolute inset-6 shield-shape border border-white/10"></div>
                
                {/* Scanline */}
                <div className="scanline"></div>
                
                {/* Orbiting circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="orbit-circle" style={{ top: '50%', left: '50%' }}></div>
                    <div className="orbit-circle" style={{ top: '50%', left: '50%' }}></div>
                    <div className="orbit-circle" style={{ top: '50%', left: '50%' }}></div>
                    <div className="orbit-circle" style={{ top: '50%', left: '50%' }}></div>
                </div>
                
                {/* Side brackets */}
                <div className="shield-bracket bracket-left"></div>
                <div className="shield-bracket bracket-right"></div>
                
                {/* Center content */}
                <div className="relative z-10 flex flex-col items-center justify-center">
                    {/* Hexagon */}
                    <div className="hexagon-shield mb-4 flex items-center justify-center mt-8">
                        <div className="center-dot z-20"></div>
                    </div>
                    
                    {/* Binary text */}
                    <div className="mt-8 flex flex-col items-center gap-1">
                        <div className="binary-text">10110 &nbsp;&nbsp; 01001</div>
                        <div className="binary-text">11010 0011</div>
                    </div>
                </div>
                
                {/* Corner accent dots */}
                <div className="absolute top-12 left-8 w-2 h-2 rounded-full border border-white/40"></div>
                <div className="absolute top-12 right-8 w-2 h-2 rounded-full border border-white/40"></div>
                <div className="absolute bottom-24 left-8 w-2 h-2 rounded-full border border-white/40"></div>
                <div className="absolute bottom-24 right-8 w-2 h-2 rounded-full border border-white/40"></div>
            </div>
            
            {/* Status text */}
            <div className="absolute bottom-6 text-white/30 text-xs tracking-widest uppercase font-mono z-10">
                System Secure • Protocol Active
            </div>
            
        </div>
    );
}
