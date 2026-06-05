import { projects } from "../../data/projects";
import ProjectList from "../projects/ProjectList";
import Card from "../ui/Card";

export default function ProjectsPreview() {
	return (
		<section id="projects" className="scroll-mt-24">
			<div className="flex flex-col gap-4">
				<Card>
					<h2 className="text-xl font-semibold tracking-tight">Projects</h2>
					<p className="mt-2 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
						A few things I’ve built recently.
					</p>
				</Card>
				<ProjectList projects={projects} limit={3} />
			</div>
		</section>
	);
}

