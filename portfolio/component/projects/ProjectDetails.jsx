import Badge from "../ui/Badge";
import Card from "../ui/Card";

export default function ProjectDetails({ project }) {
	if (!project) return null;

	return (
		<Card className="flex flex-col gap-4">
			<div>
				<h2 className="text-xl font-semibold tracking-tight">{project.title}</h2>
				{project.description ? (
					<p className="mt-2 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
						{project.description}
					</p>
				) : null}
			</div>

			{Array.isArray(project.tags) && project.tags.length > 0 ? (
				<div className="flex flex-wrap gap-2">
					{project.tags.map((tag) => (
						<Badge key={tag}>{tag}</Badge>
					))}
				</div>
			) : null}
		</Card>
	);
}

