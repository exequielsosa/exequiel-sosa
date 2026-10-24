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

  // Throw instead of returning [] so ISR keeps serving the last good version
  // rather than caching an empty blog when Supabase fails.
  if (error) {
    throw new Error(`Supabase /blog list error: ${error.message}`);
  }

  // 1 h keeps Supabase egress flat regardless of traffic (it was 60 s);
  // /api/blog/create revalidates on demand so new posts show up right away.
  return {
    props: { posts: data || [] },
    revalidate: 3600,
  };
}
