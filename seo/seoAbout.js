import Head from "next/head";

const SeoAbout = () => {
  return (
    <Head>
      <title>About Me — Exequiel Sosa | Senior Front-end Developer with 4+ Years</title>
      <meta
        name="description"
        content="Learn more about Exequiel Sosa: Senior Front-end Developer with 4+ years building production apps in React, Next.js and TypeScript. Career, skills and approach to crafting great web experiences."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href="https://www.exequielsosa.com.ar/about-me" />

      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="profile" />
      <meta
        property="og:site_name"
        content="Exequiel Sosa — Front-end Developer"
      />
      <meta
        property="og:title"
        content="About Me — Exequiel Sosa | Senior Front-end Developer"
      />
      <meta
        property="og:description"
        content="Senior Front-end Developer specialized in React, Next.js and TypeScript. Career, technical skills and notable projects."
      />
      <meta
        property="og:url"
        content="https://www.exequielsosa.com.ar/about-me"
      />
      <meta name="author" content="Exequiel Sosa" />

      {/* Open Graph */}
      <meta
        property="og:image"
        content="https://www.exequielsosa.com.ar/es2.png"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Exequiel Sosa — About Me" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@soyexequielsosa" />
      <meta name="twitter:creator" content="@soyexequielsosa" />
      <meta
        name="twitter:title"
        content="About Me — Exequiel Sosa | Senior Front-end Developer"
      />
      <meta
        name="twitter:description"
        content="Get to know Exequiel Sosa — Senior Front-end Developer working with React, Next.js and TypeScript."
      />
      <meta
        name="twitter:image"
        content="https://www.exequielsosa.com.ar/es.png"
      />
      <meta
        name="twitter:url"
        content="https://www.exequielsosa.com.ar/about-me"
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
              name: "About Me",
              item: "https://www.exequielsosa.com.ar/about-me"
            }
          ]
        })}
      </script>

      {/* Enhanced Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "ProfilePage",
          mainEntity: {
            "@type": "Person",
            name: "Exequiel Sosa",
            jobTitle: "Senior Front-end Developer",
            description:
              "Senior Front-end Developer with experience in React, Next.js, TypeScript and modern web development. Focused on building high-performance applications with great UX.",
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
              "UI/UX Design",
              "Responsive Design",
              "Performance Optimization"
            ]
          }
        })}
      </script>
      <meta name="geo.region" content="AR" />
      <meta name="geo.placename" content="Ciudad Autónoma de Buenos Aires" />
      <meta name="geo.position" content="-34.6037,-58.3816" />
    </Head>
  );
};

export default SeoAbout;
