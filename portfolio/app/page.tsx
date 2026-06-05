import Layout from "@/component/layout/Layout";
import About from "@/component/ sections/About";
import Hero from "@/component/ sections/Hero";
import ProjectsPreview from "@/component/ sections/ProjectsPreview";
import Certifications from "@/component/ sections/Certifications";
import SkillsMatrix from "@/component/ sections/SkillsMatrix";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <SkillsMatrix />
      <ProjectsPreview />
      <Certifications />
    </Layout>
  );
}

