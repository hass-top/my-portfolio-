import AnimatedText from "../animations/AnimatedText"; 
export default function Footer() {
	return (
		<footer className="w-full border-t border-black/[.08] dark:border-white/[.145]">
			<div className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-8 text-sm text-zinc-600 dark:text-zinc-400">
				<p>© {new Date().getFullYear()} Hassine Trigui</p>
				<AnimatedText />
			</div>
		</footer>
	);
}



