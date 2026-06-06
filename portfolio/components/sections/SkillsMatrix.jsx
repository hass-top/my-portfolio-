"use client";
import React, { useEffect, useRef, useState } from 'react';
import SkillsLoaderBar from '../animations/SkillsLoaderBar'; 
// ═══════════════════════════════════════════════════════════
//  CUSTOM SVG ICONS — No react-icons needed
// ═══════════════════════════════════════════════════════════

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const CloudIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
  </svg>
);

const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

const CodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
  </svg>
);

const ServerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
    <line x1="6" y1="6" x2="6.01" y2="6"/>
    <line x1="6" y1="18" x2="6.01" y2="18"/>
  </svg>
);

const DatabaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"/>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
  </svg>
);

const BugIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 8a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4z"/>
    <path d="M8 9h-3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h3"/>
    <path d="M16 9h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-3"/>
    <line x1="12" y1="2" x2="12" y2="8"/>
    <line x1="12" y1="16" x2="12" y2="22"/>
  </svg>
);

const TerminalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 17 10 11 4 5"/>
    <line x1="12" y1="19" x2="20" y2="19"/>
  </svg>
);

// ─── Skill Icons (Mini SVGs) ───
const FortiIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L4 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-8-4z"/>
    <text x="12" y="14" textAnchor="middle" fill="#0a0a0a" fontSize="8" fontWeight="bold">F</text>
  </svg>
);

const SnortIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="9" cy="10" r="2" fill="#0a0a0a"/>
    <circle cx="15" cy="10" r="2" fill="#0a0a0a"/>
    <ellipse cx="12" cy="16" rx="3" ry="2" fill="#0a0a0a"/>
  </svg>
);

const OwaspIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
  </svg>
);

const ReverseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 14L4 9l5-5"/>
    <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11"/>
  </svg>
);

const AwsIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.5 12.5l-3 4.5h6l-3-4.5zm11 0l-3 4.5h6l-3-4.5zM12 4l-4 6h8l-4-6z"/>
  </svg>
);

const DockerIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <rect x="2" y="10" width="3" height="3" rx="0.5"/>
    <rect x="6" y="10" width="3" height="3" rx="0.5"/>
    <rect x="10" y="10" width="3" height="3" rx="0.5"/>
    <rect x="6" y="6" width="3" height="3" rx="0.5"/>
    <rect x="10" y="6" width="3" height="3" rx="0.5"/>
    <rect x="14" y="10" width="3" height="3" rx="0.5"/>
    <path d="M22 13.5c0 1.5-1.5 2.5-3 2.5H4.5c-2 0-3.5-1.5-3.5-3.5s1.5-3 3-3c.5 0 1 .5 1.5.5h13c1.5 0 3.5 1 3.5 3.5z" fillOpacity="0.3"/>
  </svg>
);

const ProxmoxIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <rect x="4" y="4" width="16" height="12" rx="2"/>
    <path d="M8 16v4M16 16v4M12 16v4" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const VmwareIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <rect x="3" y="6" width="8" height="8" rx="1" fillOpacity="0.6"/>
    <rect x="13" y="10" width="8" height="8" rx="1" fillOpacity="0.9"/>
  </svg>
);

const AesIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="5" y="3" width="14" height="18" rx="2"/>
    <path d="M12 8v8M9 12h6"/>
  </svg>
);

const KeyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="7.5" cy="15.5" r="5.5"/>
    <path d="M21 3l-9 9M15 3h6v6"/>
  </svg>
);

const CertIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"/>
  </svg>
);

const TlsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2C7 2 3 6 3 11v3h2v-3c0-4 3-7 7-7s7 3 7 7v3h2v-3c0-5-4-9-9-9z"/>
    <rect x="7" y="11" width="10" height="10" rx="1"/>
    <circle cx="12" cy="16" r="1" fill="currentColor"/>
  </svg>
);

const JsIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
    <path d="M6 18.5l1.5-1c.3.5.5.8 1.1.8.5 0 .9-.2.9-1v-5.5h1.8v5.5c0 1.5-.9 2.2-2.2 2.2-1.2 0-1.9-.6-2.1-1.5zm6.4.2l1.5-1c.4.6.9 1.1 1.8 1.1.8 0 1.3-.4 1.3-1 0-.7-.5-.9-1.4-1.3l-.5-.2c-1.4-.6-2.3-1.3-2.3-2.8 0-1.4 1.1-2.5 2.7-2.5 1.2 0 2 .4 2.6 1.5l-1.4.9c-.3-.5-.6-.8-1.2-.8s-.9.4-.9.9c0 .6.4.9 1.3 1.2l.5.2c1.6.7 2.5 1.4 2.5 3 0 1.7-1.3 2.6-3.1 2.6-1.7 0-2.8-.8-3.3-1.8z" fill="black"/>
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="2"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(120 12 12)"/>
  </svg>
);

const NextIcon = () => (
  <svg viewBox="0 0 180 180" width="1em" height="1em" fill="currentColor">
    <mask id="nmask"><circle cx="90" cy="90" r="90" fill="white"/></mask>
    <g mask="url(#nmask)">
      <circle cx="90" cy="90" r="90" fill="currentColor"/>
      <path d="M149.5 157.5L69 54H54v72h12V69.4L140 164.8c3.3-2.2 6.5-4.7 9.5-7.3z" fill="black"/>
      <rect x="115" y="54" width="12" height="72" fill="black"/>
    </g>
  </svg>
);

const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.51 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C8.39 16.85 9.49 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C11.39 13.15 10.29 12 7.5 12z"/>
  </svg>
);

const HtmlIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M1.5 0h21l-1.9 22.5L12 24 3.4 22.5z"/>
    <path d="M12 22.1l7.5-2.1L20.9 2H3.1l1.4 18 7.5 2.1z" fill="#0a0a0a"/>
    <path d="M12 20.2V4h8.2l-.7 8.3-7.5 2z" fillOpacity="0.3"/>
  </svg>
);

const CssIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M1.5 0h21l-1.9 22.5L12 24 3.4 22.5z"/>
    <path d="M12 22.1l7.5-2.1L20.9 2H3.1l1.4 18 7.5 2.1z" fill="#0a0a0a"/>
    <path d="M12 20.2V4h8.2l-.7 8.3-7.5 2z" fillOpacity="0.3"/>
  </svg>
);

const LaravelIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.5 3.5L7 20.5l5 2.5 5-2.5L20.5 3.5h-3L14 17.5l-2 1-2-1L6.5 3.5z"/>
  </svg>
);

const PythonIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.5 2 6 4.5 6 5.5v3h6v1H5.5C2.5 9.5 2 12 2 14s1 5 4.5 5h2.5v-3c0-2.5 2-4.5 4.5-4.5h5c2 0 3.5-1.5 3.5-3.5V5.5C20 3.5 18 2 15 2h-3z"/>
    <circle cx="9" cy="5.5" r="1" fill="#0a0a0a"/>
    <path d="M12 22c5.5 0 6-2.5 6-3.5v-3h-6v-1h6.5c3 0 3.5-2.5 3.5-4.5s-1-5-4.5-5h-2.5v3c0 2.5-2 4.5-4.5 4.5h-5c-2 0-3.5 1.5-3.5 3.5v3.5C4 20.5 6 22 9 22h3z"/>
    <circle cx="15" cy="18.5" r="1" fill="#0a0a0a"/>
  </svg>
);

const FlaskIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M9 3h6v3c0 2-2 3-2 5v8c0 1 .5 2 2 2H9c1.5 0 2-1 2-2v-8c0-2-2-3-2-5V3z"/>
    <path d="M8 21h8"/>
  </svg>
);

const ApiIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="5" cy="12" r="2"/>
    <circle cx="12" cy="12" r="2"/>
    <circle cx="19" cy="12" r="2"/>
    <path d="M7 12h4M14 12h4"/>
  </svg>
);

const MysqlIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6 2 3 6 3 9c0 2 1 3 2 4-1 1-2 3-2 5 0 4 3 6 9 6s9-2 9-6c0-2-1-4-2-5 1-1 2-2 2-4 0-3-3-7-9-7z"/>
    <path d="M8 9c0-1 2-2 4-2s4 1 4 2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const PostgresIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8 2 6 5 6 8c0 2 1 3 2 4-1 1-2 3-2 5 0 3 2 5 6 5s6-2 6-5c0-2-1-4-2-5 1-1 2-2 2-4 0-3-2-6-6-6z"/>
    <path d="M9 8c0 1 1.5 2 3 2s3-1 3-2M9 16c0 1 1.5 2 3 2s3-1 3-2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const SqliteIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2C7 2 4 5 4 9c0 2 1 3 2 4-1 1-2 2-2 4 0 3 3 5 8 5s8-2 8-5c0-2-1-3-2-4 1-1 2-2 2-4 0-4-3-7-8-7z"/>
    <path d="M8 12h8M8 16h8"/>
  </svg>
);

const MongoIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C9 5 8 9 8 13c0 4 1.5 7 4 9 2.5-2 4-5 4-9 0-4-1-8-4-11z"/>
    <path d="M12 22v-6" stroke="currentColor" strokeWidth="1" fillOpacity="0.3"/>
  </svg>
);

const OracleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <ellipse cx="12" cy="12" rx="10" ry="6"/>
    <ellipse cx="12" cy="12" rx="6" ry="3" fillOpacity="0.3"/>
  </svg>
);

const BurpIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2v4M8 6h8v12H8zM10 18v4M14 18v4"/>
    <circle cx="12" cy="10" r="2" fill="currentColor"/>
  </svg>
);

const NmapIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>
    <path d="M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"/>
  </svg>
);

const WiresharkIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M2 12c2-4 5-6 8-6s5 2 6 5c1 3 3 5 6 5" fill="none" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 6l-2 3h4l-2-3z" fillOpacity="0.6"/>
  </svg>
);

const CiscoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M4 12h3M8 8v8M11 12h3M14 8v8M17 12h3"/>
  </svg>
);

const VscodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 4l12 8-12 8V4z"/>
    <path d="M20 4l-4 8 4 8V4z" fillOpacity="0.5"/>
  </svg>
);

const NeovimIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 3l5 9-5 9h3l5-9-5-9H4zM14 3l5 9-5 9h3l5-9-5-9h-3z"/>
  </svg>
);

const IntelliJIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <rect x="4" y="4" width="7" height="16" rx="1"/>
    <rect x="13" y="4" width="7" height="16" rx="1" fillOpacity="0.6"/>
  </svg>
);

// ═══════════════════════════════════════════════════════════
//  DATA
// ═══════════════════════════════════════════════════════════

const skillCategories = [
  {
    title: "Cybersecurity",
    icon: <ShieldIcon />,
    color: "from-red-500/20 to-orange-500/20",
    glow: "",
    skills: [
      { name: "FortiGate", icon: <FortiIcon /> },
      { name: "Snort IDS", icon: <SnortIcon /> },
      { name: "OWASP", icon: <OwaspIcon /> },
      { name: "Reverse Eng", icon: <ReverseIcon /> },
    ]
  },
  {
    title: "Cloud & Virtualization",
    icon: <CloudIcon />,
    color: "from-sky-500/20 to-blue-500/20",
    glow: "",
    skills: [
      { name: "AWS", icon: <AwsIcon /> },
      { name: "Docker", icon: <DockerIcon /> },
      { name: "Proxmox", icon: <ProxmoxIcon /> },
      { name: "VMware", icon: <VmwareIcon /> },
    ]
  },
  {
    title: "Cryptography",
    icon: <LockIcon />,
    color: "from-emerald-500/20 to-teal-500/20",
    glow: "",
    skills: [
      { name: "AES/DES", icon: <AesIcon /> },
      { name: "RSA/ECC", icon: <KeyIcon /> },
      { name: "X.509/SSL", icon: <CertIcon /> },
      { name: "TLS/SSH", icon: <TlsIcon /> },
    ]
  },
  {
    title: "Front-End",
    icon: <CodeIcon />,
    color: "from-cyan-500/20 to-indigo-500/20",
    glow: "",
    skills: [
      { name: "JavaScript", icon: <JsIcon /> },
      { name: "React", icon: <ReactIcon /> },
      { name: "Next.js", icon: <NextIcon /> },
      { name: "Tailwind", icon: <TailwindIcon /> },
      { name: "HTML5", icon: <HtmlIcon /> },
      { name: "CSS3", icon: <CssIcon /> },
    ]
  },
  {
    title: "Back-End",
    icon: <ServerIcon />,
    color: "from-violet-500/20 to-purple-500/20",
    glow: "",
    skills: [
      { name: "Laravel", icon: <LaravelIcon /> },
      { name: "Python", icon: <PythonIcon /> },
      { name: "Flask", icon: <FlaskIcon /> },
      { name: "REST APIs", icon: <ApiIcon /> },
    ]
  },
  {
    title: "Databases",
    icon: <DatabaseIcon />,
    color: "from-amber-500/20 to-yellow-500/20",
    glow: "",
    skills: [
      { name: "MySQL", icon: <MysqlIcon /> },
      { name: "PostgreSQL", icon: <PostgresIcon /> },
      { name: "SQLite", icon: <SqliteIcon /> },
      { name: "MongoDB", icon: <MongoIcon /> },
      { name: "Oracle", icon: <OracleIcon /> },
    ]
  },
  {
    title: "Security Tools",
    icon: <BugIcon />,
    color: "from-rose-500/20 to-pink-500/20",
    glow: "",
    skills: [
      { name: "Burp Suite", icon: <BurpIcon /> },
      { name: "Nmap", icon: <NmapIcon /> },
      { name: "Wireshark", icon: <WiresharkIcon /> },
      { name: "Cisco", icon: <CiscoIcon /> },
    ]
  },
  {
    title: "Dev Environment",
    icon: <TerminalIcon />,
    color: "from-zinc-500/20 to-slate-500/20",
    glow: "",
    skills: [
      { name: "VS Code", icon: <VscodeIcon /> },
      { name: "Neovim", icon: <NeovimIcon /> },
      { name: "IntelliJ", icon: <IntelliJIcon /> },
    ]
  }
];

// ═══════════════════════════════════════════════════════════
//  COMPONENTS
// ═══════════════════════════════════════════════════════════

function HexSkill({ skill, index, color, glow }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 60);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className={`
        group relative flex items-center justify-center
        transition-all duration-700 ease-out
        ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-75'}
      `}
      style={{ transitionDelay: `${index * 40}ms` }}
    >
      <div className={`
        relative w-20 h-24 sm:w-24 sm:h-28
        flex flex-col items-center justify-center gap-1.5
        cursor-default transition-all duration-500 ease-out
        hover:scale-110 hover:-translate-y-2
        ${glow}
      `}>
        {/* Hexagon Background */}
        <div 
          className={`
            absolute inset-0 bg-gradient-to-br ${color}
            backdrop-blur-sm border border-white/10
            transition-all duration-500
            group-hover:border-white/40 group-hover:bg-opacity-40
          `}
          style={{
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
          }}
        />
        
        {/* Inner radial glow */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 0%, transparent 70%)'
          }}
        />

        {/* Icon */}
        <div className="relative z-10 w-6 h-6 sm:w-7 sm:h-7 text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300 drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]">
          {skill.icon}
        </div>

        {/* Label */}
        <span className="relative z-10 text-[9px] sm:text-[10px] font-bold tracking-wider uppercase text-white/60 group-hover:text-white/90 transition-colors duration-300 text-center px-1 leading-tight">
          {skill.name}
        </span>

        {/* Corner dots */}
        <div className="absolute top-[18%] left-[22%] w-1 h-1 bg-white/30 rounded-full group-hover:bg-white/70 transition-colors duration-300" />
        <div className="absolute top-[18%] right-[22%] w-1 h-1 bg-white/30 rounded-full group-hover:bg-white/70 transition-colors duration-300" />
        <div className="absolute bottom-[18%] left-[22%] w-1 h-1 bg-white/30 rounded-full group-hover:bg-white/70 transition-colors duration-300" />
        <div className="absolute bottom-[18%] right-[22%] w-1 h-1 bg-white/30 rounded-full group-hover:bg-white/70 transition-colors duration-300" />
      </div>
    </div>
  );
}

function CategorySection({ category, sectionIndex }) {
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
        relative p-5 sm:p-7 rounded-3xl border border-zinc-800/50 
        bg-zinc-900/40 backdrop-blur-md
        transition-all duration-1000 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
      `}
      style={{ transitionDelay: `${sectionIndex * 120}ms` }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className={`
          w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center
          bg-gradient-to-br ${category.color} border border-white/10
          shadow-lg text-white/90
        `}>
          <div className="w-5 h-5 sm:w-6 sm:h-6">
            {category.icon}
          </div>
        </div>
        <div>
          <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">{category.title}</h3>
          <div className="h-px w-12 mt-1 bg-gradient-to-r from-white/30 to-transparent" />
        </div>
      </div>

      {/* Hex Grid */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
        {category.skills.map((skill, i) => (
          <HexSkill 
            key={skill.name} 
            skill={skill} 
            index={i + sectionIndex * 10}
            color={category.color}
            glow={category.glow}
          />
        ))}
      </div>

      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-3xl opacity-15">
        <div className={`absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br ${category.color} rotate-45`} />
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
//  MAIN
// ═══════════════════════════════════════════════════════════

export default function SkillsMatrix() {
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTitleVisible(true); },
      { threshold: 0.2 }
    );
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  const totalSkills = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <section id="skills" className="scroll-mt-24 py-16 sm:py-24 relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      {/* Honeycomb pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div 
          ref={titleRef}
          className={`
            text-center mb-14 sm:mb-18 transition-all duration-1000 ease-out
            ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
         
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Expertise</span>
          </h2>
          
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Technical competencies across cybersecurity, development, and infrastructure — 
            displayed as an interactive hexagonal matrix.
          </p>

          {/* Divider */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-zinc-600" />
            <div className="w-2 h-2 rotate-45 bg-cyan-500/50" />
            <div className="h-px w-20 sm:w-24 bg-zinc-700" />
            <div className="w-2 h-2 rotate-45 bg-purple-500/50" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-zinc-600" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7">
          {skillCategories.map((cat, i) => (
            <CategorySection key={cat.title} category={cat} sectionIndex={i} />
          ))}
        </div>

        {/* Footer badge */}
        <SkillsLoaderBar totalSkills={totalSkills} />
      </div>
    </section>
  );
}