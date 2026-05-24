import BlogPost from "../../components/screens/BlogPost";
import SeoBlogPost from "@/seo/seoBlogPost";
import { supabasePublic } from "@/lib/supabase";
import {
  dataBlogMock,
  findMockPostBySlug,
  getRelatedMockPosts,
} from "@/constants/dataBlogMock";

export default function BlogPostPage({ post, relatedPosts }) {
  if (!post) return null;
  return (
    <>
      <SeoBlogPost post={post} />
      <main>
        <BlogPost post={post} relatedPosts={relatedPosts} />
      </main>
    </>
  );
}

const POST_DETAIL_FIELDS = "*";
const RELATED_FIELDS =
  "id, slug, title, description, category, tags, image_url, image_alt, published_at";

export async function getStaticPaths() {
  // Pre-render the most recent 20 posts at build time, the rest are generated
  // on-demand with fallback: 'blocking'.
  if (!supabasePublic) {
    return {
      paths: dataBlogMock.map((p) => ({ params: { slug: p.slug } })),
      fallback: "blocking",
    };
  }

  const { data } = await supabasePublic
    .from("blog_posts")
    .select("slug")
    .eq("is_published", true)
    .order("published_at", { ascending: false })
    .limit(20);

  return {
    paths: (data || []).map((p) => ({ params: { slug: p.slug } })),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  if (!supabasePublic) {
    const post = findMockPostBySlug(slug);
    if (!post) return { notFound: true, revalidate: 60 };
    return {
      props: { post, relatedPosts: getRelatedMockPosts(slug) },
      revalidate: 60,
    };
  }

  const { data: post, error } = await supabasePublic
    .from("blog_posts")
    .select(POST_DETAIL_FIELDS)
    .eq("slug", slug)
    .eq("is_published", true)
    .single();

  if (error || !post) {
    return { notFound: true, revalidate: 60 };
  }

  // Related: same category, exclude current. Top up with latest from any
  // category if there are fewer than 3.
  let related = [];
  if (post.category) {
    const { data: sameCat } = await supabasePublic
      .from("blog_posts")
      .select(RELATED_FIELDS)
      .eq("is_published", true)
      .eq("category", post.category)
      .neq("slug", post.slug)
      .order("published_at", { ascending: false })
      .limit(3);
    related = sameCat || [];
  }

  if (related.length < 3) {
    const excludedSlugs = [post.slug, ...related.map((r) => r.slug)];
    const placeholders = excludedSlugs.map((s) => `"${s}"`).join(",");
    const { data: fill } = await supabasePublic
      .from("blog_posts")
      .select(RELATED_FIELDS)
      .eq("is_published", true)
      .not("slug", "in", `(${placeholders})`)
      .order("published_at", { ascending: false })
      .limit(3 - related.length);
    related = [...related, ...(fill || [])];
  }

  return {
    props: { post, relatedPosts: related },
    revalidate: 60,
  };
}
