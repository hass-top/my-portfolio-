import Layout from "@/components/layout/Layout";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import ProjectsPreview from "@/components/sections/ProjectsPreview";
import Certifications from "@/components/sections/Certifications";
import SkillsMatrix from "@/components/sections/SkillsMatrix";


export default function Home() {
  return (
    <Layout>
      <Hero />
      <SkillsMatrix />
      <ProjectsPreview />
      <Certifications />
    </Layout>
  );
}

