import Head from "next/head";

const SeoAbout = () => {
  return (
    <Head>
      <title>About Me - Exequiel Sosa | Front-end Developer con +4 Años de Experiencia</title>
      <meta
        name="description"
        content="Conoce más sobre Exequiel Sosa: Senior Front-end Developer con experiencia en React, Next.js, TypeScript. Mi trayectoria profesional, habilidades técnicas y pasión por crear experiencias web excepcionales."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href="https://www.exequielsosa.com.ar/about-me" />

      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="profile" />
      <meta
        property="og:site_name"
        content="Exequiel Sosa - Front-end Developer"
      />
      <meta
        property="og:title"
        content="About Me - Exequiel Sosa | Senior Front-end Developer"
      />
      <meta
        property="og:description"
        content="Senior Front-end Developer especializado en React, Next.js y TypeScript. Conoce mi experiencia, habilidades y proyectos destacados en desarrollo web."
      />
      <meta
        property="og:url"
        content="https://www.exequielsosa.com.ar/about-me"
      />
      <meta
        name="title"
        content="About Me - Exequiel Sosa | Front-end Developer"
      />
      <meta
        name="keywords"
        content="Exequiel Sosa sobre mi, Front-end Developer experiencia, React Developer Buenos Aires, desarrollador web Argentina, perfil profesional, habilidades técnicas, experiencia laboral, Senior Developer, TypeScript expert, Next.js specialist, portfolio profesional, CV desarrollador, carrera desarrollo web, formación técnica"
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
      <meta property="og:image:alt" content="Exequiel Sosa - About Me" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@soyexequielsosa" />
      <meta name="twitter:creator" content="@soyexequielsosa" />
      <meta
        name="twitter:title"
        content="About Me - Exequiel Sosa | Senior Front-end Developer"
      />
      <meta
        name="twitter:description"
        content="Conoce mi experiencia como Senior Front-end Developer: React, Next.js, TypeScript y más."
      />
      <meta
        name="twitter:image"
        content="https://www.exequielsosa.com.ar/es.png"
      />
      <meta
        name="twitter:url"
        content="https://www.exequielsosa.com.ar/about-me"
      />
      
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
              "Senior Front-end Developer con experiencia en React, Next.js, TypeScript y desarrollo web moderno. Apasionado por crear aplicaciones web de alto rendimiento y excelente UX.",
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
