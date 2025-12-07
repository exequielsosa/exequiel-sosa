import Head from "next/head";

const SeoHome = () => {
  return (
    <Head>
      <title>Exequiel Sosa | Senior Front-end Developer React & Next.js | Buenos Aires, Argentina</title>
      <meta
        name="description"
        content="Exequiel Sosa - Senior Front-end Developer especializado en React, Next.js y TypeScript. +4 años de experiencia creando aplicaciones web modernas, escalables y optimizadas para SEO. Portafolio de proyectos reales en Argentina."
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
        content="Exequiel Sosa - Front-end Developer"
      />
      <meta property="og:title" content="Exequiel Sosa | Senior Front-end Developer React & Next.js" />
      <meta
        property="og:description"
        content="Senior Front-end Developer especializado en React, Next.js y TypeScript. Desarrollo de aplicaciones web modernas y optimizadas. Portfolio profesional en Buenos Aires, Argentina."
      />
      <meta property="og:url" content="https://www.exequielsosa.com.ar" />
      <meta name="title" content="Exequiel Sosa | Senior Front-end Developer React & Next.js" />
      <meta
        name="keywords"
        content="Exequiel Sosa, Front-end Developer, React Developer, Next.js Developer, TypeScript, JavaScript, Desarrollador Front-end Buenos Aires, Desarrollador React Argentina, Senior Front-end Developer, React.js, Next.js, Node.js, HTML5, CSS3, Styled Components, Responsive Design, Web Development, UI Developer, UX Developer, Full Stack Developer, Micro Frontend, Git, Vercel, Desarrollador Web Argentina, Portfolio Developer, Frontend Engineer, Modern Web Development, React Native, Webpack, Performance Optimization, SEO Optimization, Web Design, Single Page Applications, Progressive Web Apps"
      />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="author" content="Exequiel Sosa - Senior Front-end Developer" />
      
      {/* Open Graph / Facebook */}
      <meta
        property="og:image"
        content="https://www.exequielsosa.com.ar/es2.png"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Exequiel Sosa - Front-end Developer Portfolio" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@soyexequielsosa" />
      <meta name="twitter:creator" content="@soyexequielsosa" />
      <meta
        name="twitter:title"
        content="Exequiel Sosa | Senior Front-end Developer React & Next.js"
      />
      <meta
        name="twitter:description"
        content="Senior Front-end Developer especializado en React, Next.js y TypeScript. Desarrollo de aplicaciones web modernas y optimizadas."
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
            "Senior Front-end Developer especializado en React, Next.js, TypeScript y desarrollo web moderno. Experiencia en la creación de aplicaciones web escalables y optimizadas.",
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
          alumniOf: {
            "@type": "Organization",
            name: "Universidad"
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
          description: "Portfolio profesional de Exequiel Sosa - Senior Front-end Developer",
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
          name: "Exequiel Sosa - Front-end Development",
          image: "https://www.exequielsosa.com.ar/es2.png",
          description: "Servicios profesionales de desarrollo Front-end con React, Next.js y TypeScript",
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
