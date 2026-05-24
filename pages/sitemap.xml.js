import { supabasePublic } from "@/lib/supabase";
import { dataBlogMock } from "@/constants/dataBlogMock";

const SITE = "https://www.exequielsosa.com.ar";

// Static, top-level pages. Add new ones here.
const STATIC_PAGES = [
  { loc: "/", changefreq: "weekly", priority: "1.0" },
  { loc: "/about-me", changefreq: "monthly", priority: "0.9" },
  { loc: "/projects", changefreq: "monthly", priority: "0.9" },
  { loc: "/contact-me", changefreq: "monthly", priority: "0.8" },
  { loc: "/blog", changefreq: "weekly", priority: "0.9" },
  {
    loc: "/ExequielIgnacioSosaResume2026.pdf",
    changefreq: "yearly",
    priority: "0.7",
  },
];

const escapeXml = (unsafe) =>
  String(unsafe)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

const formatDate = (input) => {
  if (!input) return new Date().toISOString().split("T")[0];
  const d = new Date(input);
  if (isNaN(d.getTime())) return new Date().toISOString().split("T")[0];
  return d.toISOString().split("T")[0];
};

const buildUrl = ({ loc, lastmod, changefreq, priority, image }) => {
  const imageBlock = image
    ? `
    <image:image>
      <image:loc>${escapeXml(image.loc)}</image:loc>
      ${image.title ? `<image:title>${escapeXml(image.title)}</image:title>` : ""}
    </image:image>`
    : "";
  return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>${imageBlock}
  </url>`;
};

const buildSitemap = (urls) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.map(buildUrl).join("\n")}
</urlset>`;

export default function Sitemap() {
  // Body is rendered server-side; component never reaches the browser.
  return null;
}

export async function getServerSideProps({ res }) {
  const today = new Date().toISOString().split("T")[0];

  const staticUrls = STATIC_PAGES.map((page) => ({
    loc: `${SITE}${page.loc}`,
    lastmod: today,
    changefreq: page.changefreq,
    priority: page.priority,
  }));

  // Fetch published posts. Falls back to mock when Supabase is not wired yet
  // so the sitemap still includes the dev posts.
  let posts = [];
  if (supabasePublic) {
    const { data, error } = await supabasePublic
      .from("blog_posts")
      .select("slug, published_at, updated_at, image_url, image_alt, title")
      .eq("is_published", true)
      .order("published_at", { ascending: false })
      .limit(1000);
    if (error) {
      console.error("Sitemap supabase error:", error.message);
    } else {
      posts = data || [];
    }
  } else {
    posts = dataBlogMock;
  }

  const postUrls = posts.map((p) => ({
    loc: `${SITE}/blog/${p.slug}`,
    lastmod: formatDate(p.updated_at || p.published_at),
    changefreq: "monthly",
    priority: "0.7",
    image: p.image_url
      ? {
          loc: /^https?:\/\//i.test(p.image_url)
            ? p.image_url
            : `${SITE}${p.image_url}`,
          title: p.image_alt || p.title,
        }
      : null,
  }));

  const xml = buildSitemap([...staticUrls, ...postUrls]);

  res.setHeader("Content-Type", "application/xml");
  res.setHeader(
    "Cache-Control",
    "public, max-age=600, s-maxage=600, stale-while-revalidate=3600",
  );
  res.write(xml);
  res.end();

  return { props: {} };
}
