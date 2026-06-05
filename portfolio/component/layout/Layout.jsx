import Footer from "./Footer";
import Navbar from "./Navbar";
import AnimationSkill from "../animations/AnimationSkill";
import Cercle from "../ui/Cercle"; 
export default function Layout({ children }) {
	return (
		<div id="top" className="flex min-h-screen flex-col bg-zinc-50 dark:bg-black">
			<Navbar />
			<AnimationSkill />
			<Cercle /> 
			<main className="mx-auto flex w-full flex-1 flex-col gap-12 px-6 py-12">
				{children}
			</main>
			<Footer />
		</div>
	);
}

