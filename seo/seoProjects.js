import Head from "next/head";

const SeoProjects = () => {
  return (
    <Head>
      <title>Projects — Exequiel Sosa | React & Next.js Portfolio</title>
      <meta
        name="description"
        content="Explore Exequiel Sosa's portfolio of web applications built with React, Next.js and TypeScript — including real-world work for companies like Danone, Falabella, Skydropx, MercadoLibre and more."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href="https://www.exequielsosa.com.ar/projects" />

      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta
        property="og:site_name"
        content="Exequiel Sosa — Front-end Developer"
      />
      <meta
        property="og:title"
        content="Projects — Exequiel Sosa | React & Next.js Portfolio"
      />
      <meta
        property="og:description"
        content="Front-end portfolio: web applications built with React, Next.js and TypeScript for leading companies. Real-world case studies and shipped products."
      />
      <meta
        property="og:url"
        content="https://www.exequielsosa.com.ar/projects"
      />
      <meta name="author" content="Exequiel Sosa" />

      {/* Open Graph */}
      <meta
        property="og:image"
        content="https://www.exequielsosa.com.ar/es2.png"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Exequiel Sosa — Projects Portfolio" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@soyexequielsosa" />
      <meta name="twitter:creator" content="@soyexequielsosa" />
      <meta
        name="twitter:title"
        content="Projects — Exequiel Sosa | React & Next.js Portfolio"
      />
      <meta
        name="twitter:description"
        content="Front-end portfolio: real-world web apps with React, Next.js and TypeScript for leading companies."
      />
      <meta
        name="twitter:image"
        content="https://www.exequielsosa.com.ar/es.png"
      />
      <meta
        name="twitter:url"
        content="https://www.exequielsosa.com.ar/projects"
      />

      {/* Breadcrumb Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.exequielsosa.com.ar"
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Projects",
              item: "https://www.exequielsosa.com.ar/projects"
            }
          ]
        })}
      </script>

      {/* Enhanced Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "CollectionPage",
          name: "Projects Portfolio — Exequiel Sosa",
          description:
            "Professional portfolio of web projects built with React, Next.js and TypeScript for leading companies.",
          url: "https://www.exequielsosa.com.ar/projects",
          author: {
            "@type": "Person",
            name: "Exequiel Sosa",
            jobTitle: "Senior Front-end Developer"
          },
          about: {
            "@type": "CreativeWork",
            name: "Web Development Projects",
            description: "Collection of professional Front-end development projects."
          }
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Exequiel Sosa Projects",
          description: "List of featured web development projects.",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Enterprise Web Applications",
              description: "Projects for companies like Danone, Falabella and Skydropx."
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "E-commerce Solutions",
              description: "Development of e-commerce platforms."
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Custom Web Applications",
              description: "Tailored web applications built with React and Next.js."
            }
          ]
        })}
      </script>
      <meta name="geo.region" content="AR" />
      <meta name="geo.placename" content="Ciudad Autónoma de Buenos Aires" />
      <meta name="geo.position" content="-34.6037,-58.3816" />
    </Head>
  );
};

export default SeoProjects;
