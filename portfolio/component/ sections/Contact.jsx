"use client";

import Card from "../ui/Card";
import AnimatedButton from "../animations/AnimationButton";

export default function Contact() {
	return (
		<section id="contact" className="scroll-mt-24">
			<Card className="flex flex-col md:flex-row gap-10 items-center overflow-hidden relative">
				<div className="w-full md:w-1/2 flex-1 z-10">
					<div>
						<h2 className="text-3xl font-bold tracking-tight mb-2">Let's Connect</h2>
						<p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-300">
							Want to work together or just say hi? Have a question about cybersecurity or cloud computing? Feel free to reach out via email or connect with me directly on social media!
						</p>
					</div>

					<div className="flex flex-wrap gap-4 mt-8">
						<AnimatedButton href="mailto:hassinetrigui5@gmail.com">
							hassinetrigui5@gmail.com
						</AnimatedButton>
						<AnimatedButton
							href="https://github.com/hass-top"
							target="_blank"
							rel="noreferrer"
							variant="secondary"
						>
							GitHub
						</AnimatedButton>
						<AnimatedButton
							href="https://www.linkedin.com/in/hassine-trigui/"
							target="_blank"
							rel="noreferrer"
							variant="secondary"
						>
							LinkedIn
						</AnimatedButton>
						<AnimatedButton
							href="https://twitter.com/snofy_"
							target="_blank"
							rel="noreferrer"
							variant="secondary"
						>
							Twitter/X
						</AnimatedButton>
					</div>
				</div>

				<div className="w-full md:w-1/2 flex justify-center z-10">
					<div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800/50 group">
						{/* Use the same profile picture from the hero section or fallback to GitHub */}

						{/* Subtle gradient overlay to make it look premium */}
						<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
					</div>
				</div>

				{/* Background glow effect for fashion design */}
				<div className="absolute -right-20 -top-20 z-0 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[100px]" />
			</Card>
		</section>
	);
}

