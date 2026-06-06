"use client";
import React, { useEffect, useRef, useState } from "react";

// ─── Custom SVG Icons per Issuer ───
const SecurityBlueIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <circle cx="12" cy="11" r="3" fill="currentColor" stroke="none"/>
  </svg>
);

const FortinetIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M4 4h16v4H8v4h12v4H8v4h12v4H4V4z"/>
  </svg>
);

const MongoIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M12 2C9 5 8 9 8 13c0 4 1.5 7 4 9 2.5-2 4-5 4-9 0-4-1-8-4-11z"/>
    <path d="M12 22v-6" stroke="currentColor" strokeWidth="1" fillOpacity="0.3"/>
  </svg>
);

const CiscoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
    <path d="M12 2C6.5 2 2 6 2 12s4.5 10 10 10 10-4 10-10S17.5 2 12 2z"/>
    <path d="M8 12c0-2 2-3 4-3s4 1 4 3" fill="none"/>
    <circle cx="9" cy="10" r="1" fill="currentColor"/>
    <circle cx="15" cy="10" r="1" fill="currentColor"/>
    <path d="M9 15c1 1 1.5 1.5 3 1.5s2-.5 3-1.5" fill="none"/>
  </svg>
);

const Isc2Icon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
    <path d="M2 17l10 5 10-5"/>
    <path d="M2 12l10 5 10-5"/>
  </svg>
);

const CredlyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 6v6l4 2"/>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

// ─── Issuer Config ───
const issuerConfig = {
  "securityblue.team": { icon: <SecurityBlueIcon />, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20", glow: "group-hover:shadow-emerald-500/10" },
  "Cybersecurity": { icon: <FortinetIcon />, color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20", glow: "group-hover:shadow-red-500/10" },
  "MongoDB": { icon: <MongoIcon />, color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20", glow: "group-hover:shadow-green-500/10" },
  "Cisco": { icon: <CiscoIcon />, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20", glow: "group-hover:shadow-blue-500/10" },
  "ISC2": { icon: <Isc2Icon />, color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/20", glow: "group-hover:shadow-orange-500/10" },
};

const defaultConfig = { icon: <CredlyIcon />, color: "text-zinc-400", bg: "bg-zinc-500/10", border: "border-zinc-500/20", glow: "group-hover:shadow-zinc-500/10" };

// ─── Data ───
const certs = [
  { title: "Blue Team Junior Analyst Pathway", issuer: "securityblue.team", date: "May 2025 • No expiration", url: "https://elearning.securityblue.team/home/certificate/963428558", image: "/image/sec.jpg", other: true },
  { title: "Fortinet Certified Fundamentals in Cybersecurity", issuer: "Cybersecurity", date: "June 2, 2025 • Valid until: June 2, 2027", url: "https://training.fortinet.com/local/cert/my/certificate.php?badge=84", image: "/image/Untitled.png", other: true },
  { title: "CRUD Operations in MongoDB", issuer: "MongoDB", date: "Dec 4, 2025", url: "https://www.credly.com/users/hassine-trigui.147d8d92", image: "" },
  { title: "From Relational Model (SQL) to MongoDB's Document Model", issuer: "MongoDB", date: "Dec 4, 2025", url: "https://www.credly.com/users/hassine-trigui.147d8d92", image: "" },
  { title: "MongoDB Aggregation Fundamentals", issuer: "MongoDB", date: "Dec 6, 2025", url: "https://www.credly.com/users/hassine-trigui.147d8d92", image: "" },
  { title: "MongoDB Indexing Design Fundamentals", issuer: "MongoDB", date: "Dec 6, 2025", url: "https://www.credly.com/users/hassine-trigui.147d8d92", image: "" },
  { title: "MongoDB Overview: Core Concepts and Architecture", issuer: "MongoDB", date: "Dec 6, 2025", url: "https://www.credly.com/users/hassine-trigui.147d8d92", image: "" },
  { title: "Securing MongoDB Self-Managed Networking", issuer: "MongoDB", date: "Dec 6, 2025", url: "https://www.credly.com/users/hassine-trigui.147d8d92", image: "" },
  { title: "Cisco Networking Academy Learn-A-Thon 2026", issuer: "Cisco", date: "Apr 29, 2026", url: "https://www.credly.com/users/hassine-trigui", image: "" },
  { title: "Introduction to Cybersecurity", issuer: "Cisco", date: "Dec 14, 2024", url: "https://www.credly.com/users/hassine-trigui", image: "" },
  { title: "Introduction to IoT", issuer: "Cisco", date: "Feb 12, 2026", url: "https://www.credly.com/users/hassine-trigui", image: "" },
  { title: "ISC2 Candidate", issuer: "ISC2", date: "Expires Jan 31, 2027", url: "https://www.credly.com/users/hassine-trigui", image: "" },
  { title: "Linux Essentials", issuer: "Cisco", date: "Jan 4, 2025", url: "https://www.credly.com/users/hassine-trigui", image: "" },
  { title: "Linux Unhatched", issuer: "Cisco", date: "Dec 29, 2024", url: "https://www.credly.com/users/hassine-trigui", image: "" },
  { title: "Network Technician Career Path", issuer: "Cisco", date: "Feb 4, 2026", url: "https://www.credly.com/users/hassine-trigui", image: "" },
  { title: "Python Essentials 1", issuer: "Cisco", date: "Feb 7, 2025", url: "https://www.credly.com/users/hassine-trigui", image: "" },
];

// ─── Components ───
function CertCard({ cert, index }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const config = issuerConfig[cert.issuer] || defaultConfig;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      ref={ref}
      href={cert.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group relative block rounded-2xl border border-zinc-800/60 bg-zinc-900/40 backdrop-blur-sm
        overflow-hidden transition-all duration-700 ease-out
        hover:-translate-y-2 hover:border-zinc-600/80
        hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.5)] ${config.glow}
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {/* Top accent line */}
      <div className={`h-1 w-full bg-gradient-to-r ${cert.other ? 'from-cyan-500 to-purple-500' : 'from-zinc-700 to-zinc-800'}`} />

      <div className="p-5 sm:p-6">
        {/* Header row */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className={`w-10 h-10 rounded-xl ${config.bg} ${config.border} border flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110`}>
            <div className={`w-5 h-5 ${config.color}`}>
              {config.icon}
            </div>
          </div>
          
          {cert.other && (
            <span className="px-2.5 py-1 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 text-[10px] font-bold tracking-wider uppercase text-cyan-400">
              other
            </span>
          )}
        </div>

        {/* Image thumbnail (if exists) */}
        {cert.image && (
          <div className="mb-4 rounded-xl overflow-hidden border border-zinc-800/50 bg-zinc-950/50 aspect-video flex items-center justify-center relative group-hover:border-zinc-700/50 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent z-10" />
            <img 
              src={cert.image} 
              alt={cert.title} 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              onError={(e) => { e.target.style.display = 'none' }}
            />
          </div>
        )}

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold text-white leading-snug mb-3 group-hover:text-cyan-50 transition-colors">
          {cert.title}
        </h3>

        {/* Meta */}
        <div className="flex flex-col gap-2">
          <div className={`inline-flex items-center gap-2 text-xs font-semibold ${config.color}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
            {cert.issuer}
          </div>
          
          <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono">
            <span className="w-1 h-1 rounded-full bg-zinc-600" />
            {cert.date}
          </div>
        </div>

        {/* Footer link */}
        <div className="mt-5 pt-4 border-t border-zinc-800/50 flex items-center justify-between">
          <span className="text-xs font-medium text-zinc-500 group-hover:text-white transition-colors flex items-center gap-1.5">
            <span className="w-4 h-4 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
              <CheckIcon />
            </span>
            Verified
          </span>
          <span className="text-xs font-semibold text-zinc-400 group-hover:text-cyan-400 transition-colors flex items-center gap-1.5">
            View
            <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              <ExternalLinkIcon />
            </span>
          </span>
        </div>
      </div>

      {/* Hover glow */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </a>
  );
}

function StatBadge({ label, value, color }) {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900/60 border border-zinc-800/60">
      <span className={`w-2 h-2 rounded-full ${color}`} />
      <span className="text-xs font-mono text-zinc-400">
        <span className="text-white font-bold">{value}</span> {label}
      </span>
    </div>
  );
}

// ─── Main ───
export default function Certifications() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true); },
      { threshold: 0.1 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = {
    total: certs.length,
    other: certs.filter(c => c.other).length,
    cisco: certs.filter(c => c.issuer === "Cisco").length,
    mongo: certs.filter(c => c.issuer === "MongoDB").length,
  };

  return (
    <section id="certifications" className="scroll-mt-24 py-16 sm:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`
            mb-12 sm:mb-16 transition-all duration-1000 ease-out
            ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-gradient-to-r from-emerald-500 to-transparent" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-emerald-400/80 font-mono">
              Credentials
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            <span className="text-white">Certification</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Wallet
            </span>
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
            A growing collection of verified credentials from industry-leading platforms. 
            Always learning, always leveling up.
          </p>

          {/* Stats bar */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <StatBadge label="Total" value={stats.total} color="bg-white" />
            <StatBadge label="other" value={stats.other} color="bg-cyan-400" />
            <StatBadge label="Cisco" value={stats.cisco} color="bg-blue-400" />
            <StatBadge label="MongoDB" value={stats.mongo} color="bg-green-400" />
          </div>

          {/* Wallet CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 sm:p-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/30 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/20 flex items-center justify-center">
                <div className="w-6 h-6 text-amber-400">
                  <CredlyIcon />
                </div>
              </div>
              <div>
                <p className="text-white font-semibold tracking-tight">Hassine Trigui</p>
                <p className="text-sm text-zinc-500">Cybersecurity Student • Credly Wallet</p>
              </div>
            </div>
            <a 
              href="https://www.credly.com/users/hassine-trigui" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm font-semibold text-white hover:bg-white/10 hover:border-amber-500/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(245,158,11,0.1)]"
            >
              <span>Open Wallet</span>
              <span className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">
                <ExternalLinkIcon />
              </span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-2 mb-10">
          <div className="h-px w-12 bg-gradient-to-r from-zinc-700 to-transparent" />
          <div className="w-1.5 h-1.5 rotate-45 bg-emerald-500/60" />
          <div className="h-px w-20 bg-zinc-800" />
          <span className="text-[10px] font-mono text-zinc-600 tracking-widest uppercase ml-2">All Credentials</span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {certs.map((cert, i) => (
            <CertCard key={i} cert={cert} index={i} />
          ))}
        </div>

        {/* Bottom quote */}
        <div className="mt-16 text-center">
          <p className="text-zinc-600 text-sm italic font-mono">
            "Money, money, money — the main purpose of life... and certifications 😄"
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="h-px w-8 bg-zinc-800" />
            <div className="w-1 h-1 rounded-full bg-zinc-700" />
            <div className="h-px w-8 bg-zinc-800" />
          </div>
        </div>
      </div>
    </section>
  );
}