import Head from "next/head";

const SITE = "https://www.exequielsosa.com.ar";
const DEFAULT_OG = "/es2.png";

const buildAbsolute = (path) => {
  if (!path) return `${SITE}${DEFAULT_OG}`;
  return /^https?:\/\//i.test(path) ? path : `${SITE}${path}`;
};

// Rough word count from HTML content. Strips tags, collapses whitespace.
const calcWordCount = (html) => {
  if (!html) return 0;
  const text = String(html)
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return text ? text.split(" ").filter(Boolean).length : 0;
};

// MIME type guessed from extension. Defaults to image/png because that's
// what most of our placeholders are.
const guessImageMime = (url) => {
  if (!url) return "image/png";
  if (/\.jpe?g(\?|$)/i.test(url)) return "image/jpeg";
  if (/\.webp(\?|$)/i.test(url)) return "image/webp";
  if (/\.avif(\?|$)/i.test(url)) return "image/avif";
  if (/\.gif(\?|$)/i.test(url)) return "image/gif";
  return "image/png";
};

const SeoBlogPost = ({ post }) => {
  if (!post) return null;

  const url = `${SITE}/blog/${post.slug}`;
  const ogImage = buildAbsolute(post.image_url);
  const ogImageMime = guessImageMime(ogImage);
  const imageAlt = post.image_alt || post.title;
  const description = post.description || "";
  const tags = Array.isArray(post.tags) ? post.tags : [];
  const wordCount = calcWordCount(post.content);

  return (
    <Head>
      <title>{`${post.title} | Exequiel Sosa`}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang="en" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />

      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="article" />
      <meta
        property="og:site_name"
        content="Exequiel Sosa — Front-end Developer"
      />
      <meta property="og:title" content={post.title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:type" content={ogImageMime} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={imageAlt} />
      {post.published_at && (
        <meta property="article:published_time" content={post.published_at} />
      )}
      {post.updated_at && (
        <meta property="article:modified_time" content={post.updated_at} />
      )}
      {post.category && (
        <meta property="article:section" content={post.category} />
      )}
      {tags.map((tag) => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}
      <meta property="article:author" content="Exequiel Sosa" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@soyexequielsosa" />
      <meta name="twitter:creator" content="@soyexequielsosa" />
      <meta name="twitter:title" content={post.title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:url" content={url} />

      {/* Breadcrumb */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE },
            {
              "@type": "ListItem",
              position: 2,
              name: "Blog",
              item: `${SITE}/blog`,
            },
            { "@type": "ListItem", position: 3, name: post.title, item: url },
          ],
        })}
      </script>

      {/* BlogPosting — enriched for richer SERP eligibility */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "@id": `${url}#post`,
          isPartOf: { "@type": "Blog", "@id": `${SITE}/blog#blog` },
          headline: post.title,
          description,
          image: {
            "@type": "ImageObject",
            url: ogImage,
            width: 1200,
            height: 630,
            caption: imageAlt,
          },
          datePublished: post.published_at || "",
          dateModified:
            post.updated_at || post.published_at || post.created_at || "",
          inLanguage: "en-US",
          keywords: tags.join(", "),
          articleSection: post.category || undefined,
          ...(wordCount > 0 && { wordCount }),
          isAccessibleForFree: true,
          mainEntityOfPage: { "@type": "WebPage", "@id": url },
          author: {
            "@type": "Person",
            name: "Exequiel Sosa",
            url: SITE,
            jobTitle: "Senior Front-end Developer",
            sameAs: [
              "https://www.linkedin.com/in/exequielsosa/",
              "https://twitter.com/soyexequielsosa",
              "https://github.com/exequielsosa",
            ],
          },
          publisher: {
            "@type": "Person",
            name: "Exequiel Sosa",
            url: SITE,
            image: {
              "@type": "ImageObject",
              url: `${SITE}${DEFAULT_OG}`,
            },
          },
        })}
      </script>
    </Head>
  );
};

export default SeoBlogPost;
