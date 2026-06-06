"use client";

import React, { useEffect, useRef, useState } from "react";
import Card from "../ui/Card";

/* ─── AnimatedText ─── */
const cx = (...parts) => parts.filter(Boolean).join(" ");

function AnimatedText({
    text = "Designed & developed by Hassine with AI assistance",
    stepMs = 30,
    className,
}) {
    const containerRef = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const element = containerRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                    } else {
                        setIsInView(false);
                    }
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(element);
        return () => observer.unobserve(element);
    }, []);

    return (
        <p
            ref={containerRef}
            className={cx("text-sm text-zinc-500 dark:text-zinc-400", className)}
        >
            <span className="sr-only">{text}</span>
            <span aria-hidden="true">
                {text.split("").map((char, index) => (
                    <span
                        key={`${char}-${index}`}
                        className={cx(
                            "inline-block",
                            isInView ? "animate-fadeIn" : "opacity-0"
                        )}
                        style={
                            isInView
                                ? { animationDelay: `${index * stepMs}ms` }
                                : undefined
                        }
                    >
                        {char === " " ? "\\u00A0" : char}
                    </span>
                ))}
            </span>
        </p>
    );
}

/* ─── AnimationBrand2 (Radar Shield) ─── */
function AnimationBrand2() {
    return (
        <div className="radar-container relative flex items-center justify-center w-full min-h-[400px] overflow-hidden rounded-2xl bg-[#0a0f1a] radar-grid-bg">
            <style dangerouslySetInnerHTML={{
                __html: `
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap');
        
        .radar-container {
          --cyan: #00a8e8;
          --cyan-glow: #00d4ff;
          --cyan-dim: #006994;
          font-family: 'JetBrains Mono', monospace;
        }
        
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
        
        .radar-grid-bg {
          background-image: 
            linear-gradient(rgba(0,168,232,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,168,232,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        
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
        
        /* AnimatedText fadeIn */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      ` }} />

            <div className="radar-particle" style={{ left: "15%", animationDelay: "0s" }}></div>
            <div className="radar-particle" style={{ left: "25%", animationDelay: "2s" }}></div>
            <div className="radar-particle" style={{ left: "40%", animationDelay: "4s" }}></div>
            <div className="radar-particle" style={{ left: "60%", animationDelay: "1s" }}></div>
            <div className="radar-particle" style={{ left: "75%", animationDelay: "3s" }}></div>
            <div className="radar-particle" style={{ left: "85%", animationDelay: "5s" }}></div>

            <div className="radar-shield-wrap relative w-80 h-96 flex items-center justify-center cursor-pointer scale-75 sm:scale-100 z-10">
                <div className="absolute inset-0 radar-shield bg-gradient-to-b from-transparent via-cyan-500/5 to-cyan-500/10"></div>
                <div className="absolute inset-1 radar-shield-outline"></div>
                <div className="absolute inset-4 radar-shield border border-cyan-500/20"></div>
                <div className="radar-scan-line"></div>

                <div className="relative w-56 h-56 flex items-center justify-center">
                    <div className="radar-sweep"></div>
                    <div className="radar-dashed-circle"></div>

                    <div className="radar-circle radar-circle-1 flex items-center justify-center">
                        <div className="radar-center-dot"></div>
                    </div>
                    <div className="radar-circle radar-circle-2"></div>
                    <div className="radar-circle radar-circle-3"></div>
                    <div className="radar-circle radar-circle-4"></div>

                    <div className="radar-crosshair-h">
                        <div className="radar-tick" style={{ left: 0, top: "-3px" }}></div>
                        <div className="radar-tick" style={{ right: 0, top: "-3px" }}></div>
                    </div>
                    <div className="radar-crosshair-v">
                        <div className="radar-tick radar-tick-v" style={{ top: 0, left: "-3px" }}></div>
                        <div className="radar-tick radar-tick-v" style={{ bottom: 0, left: "-3px" }}></div>
                    </div>

                    <div className="radar-bracket radar-bracket-tl"></div>
                    <div className="radar-bracket radar-bracket-tr"></div>
                    <div className="radar-bracket radar-bracket-bl"></div>
                    <div className="radar-bracket radar-bracket-br"></div>

                    <div className="radar-bracket-dot radar-bd-tl"></div>
                    <div className="radar-bracket-dot radar-bd-tr"></div>
                    <div className="radar-bracket-dot radar-bd-bl"></div>
                    <div className="radar-bracket-dot radar-bd-br"></div>
                </div>
            </div>

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

/* ─── SkillsMatrix ─── */
function SkillsMatrix() {
    const categories = [
        {
            title: "Cybersecurity",
            icon: "🛡️",
            skills: ["Firewalls & IDS/IPS: FortiGate, Snort", "Web Application Security (OWASP Top 10)", "Reverse Engineering"]
        },
        {
            title: "Cloud Computing",
            icon: "☁️",
            skills: ["Virtualization", "AWS Basics", "Docker (beginner)"]
        },
        {
            title: "Cryptography",
            icon: "🔐",
            skills: ["Symmetric Encryption (AES, DES)", "Asymmetric Encryption (RSA, ECC)", "Certificate Management (X.509, OpenSSL)", "Protocols: TLS/SSL, HTTPS, IPsec, SSH"]
        },
        {
            title: "Web Development",
            icon: "💻",
            skills: ["React.js", "Next.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3"]
        },
        {
            title: "Back-End",
            icon: "⚙️",
            skills: ["PHP: Laravel", "Python: Flask", "API Development: RESTful APIs"]
        },
        {
            title: "Databases",
            icon: "🗄️",
            skills: ["MySQL", "PostgreSQL", "SQLite", "MongoDB", "Oracle"]
        },
        {
            title: "Networking & Security Tools",
            icon: "🛜",
            skills: ["Burp Suite", "Nmap", "Wireshark", "Cisco Packet Tracer"]
        },
        {
            title: "Infrastructure & IDEs",
            icon: "🔧",
            skills: ["Proxmox VE", "VMware", "VS Code", "Neovim", "IntelliJ"]
        }
    ];

    return (
        <section id="skills" className="scroll-mt-24 mt-12 mb-12">
            <Card className="mb-8">
                <h2 className="text-2xl font-bold tracking-tight">Skills & Expertise</h2>
                <p className="mt-2 text-base leading-6 text-zinc-600 dark:text-zinc-400">
                    My technical competencies and areas of specialization.
                </p>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categories.map((cat, i) => (
                    <div
                        key={i}
                        className="group bg-zinc-900/80 backdrop-blur-sm shadow-xl border border-zinc-800/80 rounded-2xl p-6 hover:border-cyan-500/40 hover:shadow-cyan-500/10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                    >
                        <div className="flex items-center gap-3 mb-5">
                            <span className="text-3xl bg-zinc-800/50 p-2 rounded-xl flex items-center justify-center group-hover:bg-cyan-500/10 group-hover:text-cyan-400 transition-colors duration-500">
                                {cat.icon}
                            </span>
                            <h3 className="text-lg font-bold text-white leading-tight group-hover:text-cyan-400 transition-colors duration-500">
                                {cat.title}
                            </h3>
                        </div>
                        <ul className="space-y-3">
                            {cat.skills.map((skill, j) => (
                                <li key={j} className="text-zinc-400 text-sm flex items-start gap-2">
                                    <span className="text-cyan-500/80 font-bold mt-0.5 shrink-0">▹</span>
                                    <span className="font-medium text-zinc-300/80">{skill}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}

/* ─── Combined Page ─── */
export default function SkillsShowcase() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white">
            {/* Hero / Brand Section */}
            <section className="relative w-full px-4 sm:px-6 lg:px-8 pt-12 pb-8">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-8 text-center">
                        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                            Security & Development
                        </h1>
                        <p className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto">
                            A fusion of cybersecurity expertise and modern web development craft.
                        </p>
                    </div>

                    <AnimationBrand2 />
                </div>
            </section>

            {/* Skills Section */}
            <section className="relative w-full px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-7xl mx-auto">
                    <SkillsMatrix />
                </div>
            </section>

            {/* Footer with AnimatedText */}
            <footer className="w-full px-4 sm:px-6 lg:px-8 py-12 border-t border-zinc-800/50">
                <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
                    <AnimatedText
                        text="Designed & developed by Hassine with AI assistance"
                        stepMs={25}
                        className="text-center"
                    />
                    <div className="flex gap-2 mt-2">
                        <span className="w-2 h-2 rounded-full bg-cyan-500/40 animate-pulse"></span>
                        <span className="w-2 h-2 rounded-full bg-cyan-500/40 animate-pulse" style={{ animationDelay: "0.2s" }}></span>
                        <span className="w-2 h-2 rounded-full bg-cyan-500/40 animate-pulse" style={{ animationDelay: "0.4s" }}></span>
                    </div>
                </div>
            </footer>
        </div>
    );
}