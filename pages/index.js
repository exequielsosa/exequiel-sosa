import Home from "../components/screens/Home";
import SeoHome from "@/seo/seoHome";

export default function HomeScreen() {
  return (
    <>
      <SeoHome />
      <main>
        <Home />
      </main>
    </>
  );
}
