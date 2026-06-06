const cx = (...parts) => parts.filter(Boolean).join(" "); 
// ...parts is an  array and parts.filter(boolean) remove  non string values 


export default function Button({
	href,
	children,
	className,
	variant = "primary",
	...props
}) {
    // Base styles for the button 
	const base =
		`inline-flex items-center justify-center gap-2 rounded  px-5 py-3 text-sm 
         font-medium transition-colors focus-visible:outline-none 
         focus-visible:ring-2 focus-visible:ring-foreground/30`;

    // Variants for different button styles 
	const variants = {

		primary: "bg-foreground text-background hover:opacity-90",

		secondary: `border border-black/[.08] bg-transparent text-foreground 
        hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-white/[.06]`,

		ghost: "bg-transparent text-foreground hover:bg-black/[.04] dark:hover:bg-white/[.06]",
	};

	const classes = cx(base, variants[variant] ?? variants.primary, className);

	if (href) {
		return (
			<a className={classes} href={href} {...props}>
				{children}
			</a>
		);
	}

	return (
		<button className={classes} type="button" {...props}>
			{children}
		</button>
	);
}

