import Head from "next/head";

const SeoHome = () => {
  return (
    <Head>
      <title>Exequiel Sosa | Senior Front-end Developer (React & Next.js) — Buenos Aires</title>
      <meta
        name="description"
        content="Senior Front-end Developer with 4+ years of experience building modern, scalable web applications with React, Next.js and TypeScript. Based in Buenos Aires, Argentina — available for hire and remote collaborations."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href="https://www.exequielsosa.com.ar" />
      <link rel="alternate" hrefLang="en" href="https://www.exequielsosa.com.ar" />

      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta
        property="og:site_name"
        content="Exequiel Sosa — Front-end Developer"
      />
      <meta property="og:title" content="Exequiel Sosa | Senior Front-end Developer (React & Next.js)" />
      <meta
        property="og:description"
        content="Senior Front-end Developer specialized in React, Next.js and TypeScript. Building fast, accessible, SEO-friendly web apps from Buenos Aires."
      />
      <meta property="og:url" content="https://www.exequielsosa.com.ar" />
      <meta name="author" content="Exequiel Sosa" />

      {/* Open Graph / Facebook */}
      <meta
        property="og:image"
        content="https://www.exequielsosa.com.ar/es2.png"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Exequiel Sosa — Front-end Developer Portfolio" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@soyexequielsosa" />
      <meta name="twitter:creator" content="@soyexequielsosa" />
      <meta
        name="twitter:title"
        content="Exequiel Sosa | Senior Front-end Developer (React & Next.js)"
      />
      <meta
        name="twitter:description"
        content="Senior Front-end Developer specialized in React, Next.js and TypeScript. Modern, scalable, SEO-friendly web apps."
      />
      <meta
        name="twitter:image"
        content="https://www.exequielsosa.com.ar/es.png"
      />
      <meta name="twitter:url" content="https://www.exequielsosa.com.ar" />

      {/* Enhanced Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Person",
          name: "Exequiel Sosa",
          jobTitle: "Senior Front-end Developer",
          description:
            "Senior Front-end Developer specialized in React, Next.js, TypeScript and modern web development. Builds scalable, high-performance web applications.",
          url: "https://www.exequielsosa.com.ar",
          image: "https://www.exequielsosa.com.ar/es2.png",
          sameAs: [
            "https://www.linkedin.com/in/exequielsosa/",
            "https://twitter.com/soyexequielsosa",
            "https://github.com/exequielsosa"
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Buenos Aires",
            addressCountry: "AR"
          },
          knowsAbout: [
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "Front-end Development",
            "Web Development",
            "UI/UX",
            "Node.js",
            "HTML5",
            "CSS3"
          ]
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Exequiel Sosa Portfolio",
          url: "https://www.exequielsosa.com.ar",
          description: "Professional portfolio of Exequiel Sosa — Senior Front-end Developer.",
          author: {
            "@type": "Person",
            name: "Exequiel Sosa"
          },
          inLanguage: "en-US"
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Exequiel Sosa — Front-end Development",
          image: "https://www.exequielsosa.com.ar/es2.png",
          description: "Professional Front-end development services with React, Next.js and TypeScript.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Buenos Aires",
            addressCountry: "AR"
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: -34.6037,
            longitude: -58.3816
          },
          url: "https://www.exequielsosa.com.ar",
          priceRange: "$$"
        })}
      </script>
      <meta name="geo.region" content="AR" />
      <meta name="geo.placename" content="Ciudad Autónoma de Buenos Aires" />
      <meta name="geo.position" content="-34.6037,-58.3816" />
    </Head>
  );
};

export default SeoHome;
