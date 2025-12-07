import Head from "next/head";

const SeoContact = () => {
  return (
    <Head>
      <title>Contact Me - Exequiel Sosa | Contactar Desarrollador Front-end React</title>
      <meta
        name="description"
        content="¿Necesitas un desarrollador Front-end experto en React y Next.js? Contacta a Exequiel Sosa para proyectos de desarrollo web, consultoría técnica o colaboraciones profesionales en Buenos Aires, Argentina."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href="https://www.exequielsosa.com.ar/contact-me" />

      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta
        property="og:site_name"
        content="Exequiel Sosa - Front-end Developer"
      />
      <meta
        property="og:title"
        content="Contact Me - Exequiel Sosa | Desarrollador Front-end"
      />
      <meta
        property="og:description"
        content="Contacta a Exequiel Sosa para proyectos de desarrollo Front-end con React, Next.js y TypeScript. Disponible para freelance y colaboraciones."
      />
      <meta
        property="og:url"
        content="https://www.exequielsosa.com.ar/contact-me"
      />
      <meta
        name="title"
        content="Contact Me - Exequiel Sosa | Front-end Developer"
      />
      <meta
        name="keywords"
        content="contactar desarrollador Front-end, contratar React developer, desarrollador freelance Argentina, consultor web Buenos Aires, contacto desarrollador Next.js, hire Front-end developer, servicios desarrollo web, contacto profesional, developer for hire, React freelancer, web developer contact, colaboraciones desarrollo web"
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
      <meta property="og:image:alt" content="Contact Exequiel Sosa - Front-end Developer" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@soyexequielsosa" />
      <meta name="twitter:creator" content="@soyexequielsosa" />
      <meta
        name="twitter:title"
        content="Contact Me - Exequiel Sosa | Front-end Developer"
      />
      <meta
        name="twitter:description"
        content="Contacta a Exequiel Sosa para proyectos de desarrollo Front-end con React, Next.js y TypeScript."
      />
      <meta
        name="twitter:image"
        content="https://www.exequielsosa.com.ar/es.png"
      />
      <meta
        name="twitter:url"
        content="https://www.exequielsosa.com.ar/contact-me"
      />
      
      {/* Enhanced Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "ContactPage",
          name: "Contact Exequiel Sosa",
          description:
            "Página de contacto para consultas profesionales, proyectos de desarrollo web y colaboraciones.",
          url: "https://www.exequielsosa.com.ar/contact-me",
          mainEntity: {
            "@type": "Person",
            name: "Exequiel Sosa",
            jobTitle: "Senior Front-end Developer",
            url: "https://www.exequielsosa.com.ar",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Buenos Aires",
              addressCountry: "AR"
            },
            sameAs: [
              "https://www.linkedin.com/in/exequielsosa/",
              "https://twitter.com/soyexequielsosa",
              "https://github.com/exequielsosa"
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

export default SeoContact;
