import Blog from "../../components/screens/Blog";
import SeoBlog from "@/seo/seoBlog";
import { supabasePublic } from "@/lib/supabase";
import { dataBlogMock } from "@/constants/dataBlogMock";

export default function BlogIndexPage({ posts }) {
  return (
    <>
      <SeoBlog posts={posts} />
      <main>
        <Blog posts={posts} />
      </main>
    </>
  );
}

const POST_LIST_FIELDS =
  "id, slug, title, description, category, tags, image_url, image_alt, published_at";

export async function getStaticProps() {
  // Falls back to mock data when Supabase env vars are missing (local dev
  // before the project is wired) so the page is still browsable.
  if (!supabasePublic) {
    return { props: { posts: dataBlogMock }, revalidate: 60 };
  }

  const { data, error } = await supabasePublic
    .from("blog_posts")
    .select(POST_LIST_FIELDS)
    .eq("is_published", true)
    .order("published_at", { ascending: false })
    .limit(60);

  if (error) {
    console.error("Supabase /blog list error:", error.message);
    return { props: { posts: [] }, revalidate: 60 };
  }

  return {
    props: { posts: data || [] },
    revalidate: 60,
  };
}
