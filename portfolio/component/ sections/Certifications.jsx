"use client";
import Card from "../ui/Card";

export default function Certifications() {
    const certs = [
        {
            title: "Blue Team Junior Analyst Pathway",
            issuer: "securityblue.team",
            date: "Issued: May 2025 • No expiration",
            url: "https://elearning.securityblue.team/home/certificate/963428558",
            image: "/image/sec.jpg",
            bgGradient: "from-emerald-400/30 to-blue-600/30"
        },
        {
            title: "Fortinet Certified Fundamentals in Cybersecurity",
            issuer: "Cybersecurity",
            date: "Achieved: June 2, 2025 • Valid until: June 2, 2027",
            url: "https://training.fortinet.com/local/cert/my/certificate.php?badge=84",
            image: "/image/Untitled.png",
            bgGradient: "from-pink-500/30 to-purple-600/30"
        }
    ];

    return (
        <section id="certifications" className="scroll-mt-24 mt-12 mb-12">
            <div className="flex flex-col gap-6">
                <Card>
                    <h2 className="text-2xl font-bold tracking-tight">My Certifications</h2>
                    <p className="mt-2 text-base leading-6 text-zinc-600 dark:text-zinc-400">
                        I don't have so much certifications yet, but I'm working on it! Money, money, money the main purpose of life 😄
                    </p>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certs.map((cert, i) => (
                        <a key={i} href={cert.url} target="_blank" rel="noopener noreferrer" className="group block h-full">
                            <div className="h-full bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(255,255,255,0.1)] hover:border-zinc-600 flex flex-col">
                                <div className={`h-40 w-full bg-gradient-to-br ${cert.bgGradient} flex items-center justify-center p-4 relative overflow-hidden`}>
                                    <div className="absolute inset-0 backdrop-blur-[2px]"></div>
                                    <img src={cert.image} alt={cert.title} className="max-h-full max-w-full z-10 drop-shadow-xl" onError={(e) => { e.target.style.display = 'none' }} />
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 leading-relaxed">{cert.title}</h3>
                                    <p className="text-emerald-400 font-medium mb-1 text-sm flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                        {cert.issuer}
                                    </p>
                                    <p className="text-zinc-400 text-sm mb-4">{cert.date}</p>
                                    <div className="mt-auto">
                                        <span className="inline-flex items-center text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                                            View Credential <span className="ml-1 text-lg">→</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
