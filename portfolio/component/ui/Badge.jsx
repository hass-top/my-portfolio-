const cx = (...parts) => parts.filter(Boolean).join(" ");

export default function Badge({ children, className, ...props }) {
	return (
		<span
			className={cx(
				"inline-flex items-center rounded-full border border-black/[.08] px-3 py-1 text-xs font-medium text-zinc-700 dark:border-white/[.145] dark:text-zinc-300",
				className
			)}
			{...props}
		>
			{children}
		</span>
	);
}

