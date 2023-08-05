import AboutMe from "../components/screens/AboutMe";
import SeoAbout from "@/seo/seoAbout";

export default function AboutMeScreen() {
  return (
    <>
      <SeoAbout />
      <main>
        <AboutMe />
      </main>
    </>
  );
}
