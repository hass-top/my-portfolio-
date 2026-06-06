import ProjectCard from "./ProjectCard";

export default function ProjectList({ projects, limit }) {
	const items = Array.isArray(projects) ? projects : [];
	const visible = typeof limit === "number" ? items.slice(0, limit) : items;

	if (visible.length === 0) {
		return (
			<p className="text-sm text-zinc-600 dark:text-zinc-400">
				No projects yet.
			</p>
		);
	}

	return (
		<div className="grid gap-6">
			{visible.map((project) => (
				<ProjectCard key={project.slug ?? project.title} project={project} />
			))}
		</div>
	);
}

