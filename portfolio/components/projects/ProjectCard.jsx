import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Card from "../ui/Card";

export default function ProjectCard({ project }) {
	return (
		<Card className="flex flex-col gap-4">
			<div className="flex items-start justify-between gap-4">
				<div className="min-w-0">
					<h3 className="truncate text-lg font-semibold tracking-tight">
						{project.title}
					</h3>
					{project.subtitle ? (
						<p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
							{project.subtitle}
						</p>
					) : null}
				</div>
				{project.year ? (
					<span className="shrink-0 text-sm text-zinc-500 dark:text-zinc-500">
						{project.year}
					</span>
				) : null}
			</div>

			{project.description ? (
				<p className="text-sm leading-6 text-zinc-700 dark:text-zinc-300">
					{project.description}
				</p>
			) : null}

			{Array.isArray(project.tags) && project.tags.length > 0 ? (
				<div className="flex flex-wrap gap-2">
					{project.tags.map((tag) => (
						<Badge key={tag}>{tag}</Badge>
					))}
				</div>
			) : null}

			<div className="flex flex-wrap gap-2 mt-2">
				<Button href={`/project/${project.slug}`} variant="primary">
					View Details
				</Button>
			</div>
		</Card>
	);
}

