const cx = (...parts) => parts.filter(Boolean).join(" ");

export default function Card({ children, className, ...props }) {
	return (
		<div
			className={cx(
				"rounded-2xl border border-black/[.08] bg-white p-6 dark:border-white/[.145] dark:bg-black",
				className
			)}
			{...props}
		>
			{children}
		</div>
	);
}

