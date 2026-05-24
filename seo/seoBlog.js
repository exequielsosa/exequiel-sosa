import Head from "next/head";

const SITE = "https://www.exequielsosa.com.ar";
const URL = `${SITE}/blog`;
const OG_IMAGE = `${SITE}/es2.png`;

const SeoBlog = ({ posts = [] }) => {
  // The Blog schema is richer when Google can see the actual list of posts.
  // We trim to the most recent 20 to keep the payload reasonable.
  const recentPosts = posts.slice(0, 20).map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    description: p.description || "",
    url: `${SITE}/blog/${p.slug}`,
    datePublished: p.published_at || "",
    image: p.image_url
      ? /^https?:\/\//i.test(p.image_url)
        ? p.image_url
        : `${SITE}${p.image_url}`
      : OG_IMAGE,
    author: {
      "@type": "Person",
      name: "Exequiel Sosa",
      url: SITE,
    },
  }));

  return (
    <Head>
      <title>Blog — Exequiel Sosa | React, Next.js & TypeScript articles</title>
      <meta
        name="description"
        content="Technical articles on React, Next.js, TypeScript and front-end performance by Exequiel Sosa — Senior Front-end Developer based in Buenos Aires. New post twice a week."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={URL} />
      <link rel="alternate" hrefLang="en" href={URL} />
      <link rel="alternate" hrefLang="x-default" href={URL} />

      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta
        property="og:site_name"
        content="Exequiel Sosa — Front-end Developer"
      />
      <meta
        property="og:title"
        content="Blog — Exequiel Sosa | React, Next.js & TypeScript articles"
      />
      <meta
        property="og:description"
        content="Technical articles on React, Next.js, TypeScript and front-end performance. New post twice a week."
      />
      <meta property="og:url" content={URL} />
      <meta name="author" content="Exequiel Sosa" />

      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Exequiel Sosa — Blog" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@soyexequielsosa" />
      <meta name="twitter:creator" content="@soyexequielsosa" />
      <meta
        name="twitter:title"
        content="Blog — Exequiel Sosa | React, Next.js & TypeScript articles"
      />
      <meta
        name="twitter:description"
        content="Technical articles on React, Next.js, TypeScript and front-end performance."
      />
      <meta name="twitter:image" content={OG_IMAGE} />
      <meta name="twitter:url" content={URL} />

      {/* Breadcrumb Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE },
            { "@type": "ListItem", position: 2, name: "Blog", item: URL },
          ],
        })}
      </script>

      {/* Blog schema with the actual posts inlined (helps Google understand
          the listing as a collection of articles, not just a single page) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "@id": `${URL}#blog`,
          name: "Exequiel Sosa — Front-end Blog",
          description:
            "Technical articles on React, Next.js, TypeScript and front-end performance.",
          url: URL,
          inLanguage: "en-US",
          author: {
            "@type": "Person",
            name: "Exequiel Sosa",
            url: SITE,
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
          },
          ...(recentPosts.length > 0 && { blogPost: recentPosts }),
        })}
      </script>
    </Head>
  );
};

export default SeoBlog;
