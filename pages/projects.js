import Projects from "../components/screens/Projects";
import SeoProjects from "@/seo/seoProjects";

export default function ProjectsScreen() {
  return (
    <>
      <SeoProjects />
      <main>
        <Projects />
      </main>
    </>
  );
}
