export type Project = {
	slug: string;
	title: string;
	subtitle?: string;
	description?: string;
	year?: string;
	tags?: string[];
	image?: string;
	links?: {
		live?: string;
		source?: string;
	};
};

export const projects: Project[] = [
	{
		slug: "automate-math",
		title: "automate-math",
		subtitle: "",
		year: "2024",
		description: "A specialized tool and script collection dedicated to automating math calculations.",
		tags: ["python", "automate", "qt5"],
		image: "/image/ex.png",
		links: {
			source: "https://github.com/hass-top/automate-math-",
		},
	},
	{
		slug: "configure-iptables",
		title: "configure iptables",
		subtitle: "In Construction",
		year: "2024",
		description: "An infrastructure script utility focusing on firewall rules management using Linux iptables.",
		tags: ["linux", "security"],
		image: "/image/iptables.png",
	}
];

