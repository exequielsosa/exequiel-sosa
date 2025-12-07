import Head from "next/head";

const SeoProjects = () => {
  return (
    <Head>
      <title>Projects - Exequiel Sosa | Portfolio de Proyectos Web React & Next.js</title>
      <meta
        name="description"
        content="Explora el portfolio de proyectos de Exequiel Sosa: aplicaciones web desarrolladas con React, Next.js, TypeScript. Proyectos reales para empresas líderes como Danone, Falabella, Skydropx y más."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href="https://www.exequielsosa.com.ar/projects" />

      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta
        property="og:site_name"
        content="Exequiel Sosa - Front-end Developer"
      />
      <meta
        property="og:title"
        content="Projects - Exequiel Sosa | Portfolio de Proyectos Web"
      />
      <meta
        property="og:description"
        content="Portfolio de proyectos Front-end: aplicaciones web con React, Next.js y TypeScript para empresas destacadas. Casos de éxito y desarrollos profesionales."
      />
      <meta
        property="og:url"
        content="https://www.exequielsosa.com.ar/projects"
      />
      <meta
        name="title"
        content="Projects - Exequiel Sosa | Portfolio Front-end Developer"
      />
      <meta
        name="keywords"
        content="portfolio proyectos web, React projects, Next.js projects, TypeScript applications, proyectos Front-end, desarrollos web Argentina, casos de éxito desarrollo web, portfolio desarrollador, aplicaciones empresariales, proyectos React profesionales, web development portfolio, Danone projects, Falabella development, e-commerce projects, enterprise applications"
      />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="author" content="Exequiel Sosa - Senior Front-end Developer" />
      
      {/* Open Graph */}
      <meta
        property="og:image"
        content="https://www.exequielsosa.com.ar/es2.png"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Exequiel Sosa - Projects Portfolio" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@soyexequielsosa" />
      <meta name="twitter:creator" content="@soyexequielsosa" />
      <meta
        name="twitter:title"
        content="Projects - Exequiel Sosa | Portfolio de Proyectos Web"
      />
      <meta
        name="twitter:description"
        content="Portfolio de proyectos Front-end: aplicaciones web con React, Next.js y TypeScript para empresas destacadas."
      />
      <meta
        name="twitter:image"
        content="https://www.exequielsosa.com.ar/es.png"
      />
      <meta
        name="twitter:url"
        content="https://www.exequielsosa.com.ar/projects"
      />
      
      {/* Enhanced Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "CollectionPage",
          name: "Projects Portfolio - Exequiel Sosa",
          description:
            "Portfolio profesional de proyectos web desarrollados con React, Next.js y TypeScript para empresas líderes.",
          url: "https://www.exequielsosa.com.ar/projects",
          author: {
            "@type": "Person",
            name: "Exequiel Sosa",
            jobTitle: "Senior Front-end Developer"
          },
          about: {
            "@type": "CreativeWork",
            name: "Web Development Projects",
            description: "Colección de proyectos profesionales de desarrollo Front-end"
          }
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Exequiel Sosa Projects",
          description: "Lista de proyectos destacados de desarrollo web",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Enterprise Web Applications",
              description: "Proyectos para empresas como Danone, Falabella, Skydropx"
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "E-commerce Solutions",
              description: "Desarrollo de plataformas de comercio electrónico"
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Custom Web Applications",
              description: "Aplicaciones web personalizadas con React y Next.js"
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
