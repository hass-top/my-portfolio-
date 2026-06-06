"use client";
import Card from "../ui/Card";

export default function About() {
	return (
		<section id="about" className="scroll-mt-24">
			<Card className="flex flex-col gap-6">
				<div className="flex flex-col md:flex-row gap-10 items-center">
                    <div className="w-full md:w-1/3 shrink-0 rounded-2xl overflow-hidden border border-zinc-800">
                        <img src="/image/ana.png" alt="Professional portrait of myself smiling in business casual attire" className="w-full h-auto object-cover" onError={(e) => { e.target.style.display = 'none' }} />
                    </div>
                    <div className="w-full md:w-2/3">
						<h2 className="text-3xl font-bold tracking-tight mb-4 text-white">About Me</h2>
						<p className="text-base leading-relaxed text-zinc-400">
							Hello, I'm Hassine Trigui, a Tunisian student currently studying cybersecurity and cloud computing in Morocco. Although I didn’t expect to take this path at first, it has taught me valuable lessons — from building strong friendships to learning how to take responsibility for my own life.
						</p>
						<p className="mt-4 text-base leading-relaxed text-zinc-400">
							I chose cybersecurity because it constantly reminds me of the importance of responsibility, while also allowing me to enjoy what I do and grow through challenges.
						</p>
                    </div>
				</div>
			</Card>
		</section>
	);
}

