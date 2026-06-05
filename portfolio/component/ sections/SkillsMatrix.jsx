import Card from "../ui/Card";

export default function SkillsMatrix() {
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
                    <div key={i} className="bg-zinc-900 shadow-xl border border-zinc-800/80 rounded-2xl p-6 hover:border-zinc-600 transition-colors duration-300">
                        <div className="flex items-center gap-3 mb-5">
                            <span className="text-3xl bg-zinc-800/50 p-2 rounded-xl flex items-center justify-center">{cat.icon}</span>
                            <h3 className="text-lg font-bold text-white leading-tight">{cat.title}</h3>
                        </div>
                        <ul className="space-y-3">
                            {cat.skills.map((skill, j) => (
                                <li key={j} className="text-zinc-400 text-sm flex items-start gap-2">
                                    <span className="text-blue-500/80 font-bold mt-0.5 shrink-0">▹</span>
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
