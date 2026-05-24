import { supabaseAdmin } from "@/lib/supabase";

const REQUIRED_FIELDS = ["slug", "title", "content"];

const handler = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed" });
  }

  const apiKey = req.headers["x-api-key"];
  if (!apiKey || apiKey !== process.env.BLOG_API_KEY) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  if (!supabaseAdmin) {
    return res
      .status(500)
      .json({ message: "Supabase admin client is not configured" });
  }

  const data = req.body || {};

  for (const field of REQUIRED_FIELDS) {
    if (!data[field]) {
      return res
        .status(400)
        .json({ message: `Missing required field: ${field}` });
    }
  }

  const row = {
    slug: data.slug,
    title: data.title,
    description: data.description || null,
    content: data.content,
    category: data.category || null,
    tags: Array.isArray(data.tags) ? data.tags : [],
    image_url: data.image_url || null,
    image_alt: data.image_alt || null,
    source_url: data.source_url || null,
    is_automated: data.is_automated ?? true,
    is_published: data.is_published ?? true,
    published_at:
      data.published_at || new Date().toISOString().split("T")[0],
  };

  const { data: inserted, error } = await supabaseAdmin
    .from("blog_posts")
    .insert([row])
    .select("id, slug")
    .single();

  if (error) {
    if (error.code === "23505") {
      return res.status(409).json({ message: "Duplicate slug" });
    }
    console.error("Supabase insert error:", error);
    return res.status(500).json({ message: error.message });
  }

  return res.status(201).json({ success: true, id: inserted.id, slug: inserted.slug });
};

export default handler;
