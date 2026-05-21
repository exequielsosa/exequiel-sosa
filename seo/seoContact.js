import Head from "next/head";

const SeoContact = () => {
  return (
    <Head>
      <title>Contact — Hire Exequiel Sosa | Senior React & Next.js Developer</title>
      <meta
        name="description"
        content="Need a Senior Front-end Developer with React, Next.js and TypeScript expertise? Get in touch with Exequiel Sosa for web development projects, technical consulting and remote collaborations from Buenos Aires, Argentina."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href="https://www.exequielsosa.com.ar/contact-me" />

      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta
        property="og:site_name"
        content="Exequiel Sosa — Front-end Developer"
      />
      <meta
        property="og:title"
        content="Contact — Hire Exequiel Sosa | Senior Front-end Developer"
      />
      <meta
        property="og:description"
        content="Get in touch with Exequiel Sosa for Front-end development projects with React, Next.js and TypeScript. Available for freelance and remote collaborations."
      />
      <meta
        property="og:url"
        content="https://www.exequielsosa.com.ar/contact-me"
      />
      <meta name="author" content="Exequiel Sosa" />

      {/* Open Graph */}
      <meta
        property="og:image"
        content="https://www.exequielsosa.com.ar/es2.png"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Contact Exequiel Sosa — Front-end Developer" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@soyexequielsosa" />
      <meta name="twitter:creator" content="@soyexequielsosa" />
      <meta
        name="twitter:title"
        content="Contact — Hire Exequiel Sosa | Senior Front-end Developer"
      />
      <meta
        name="twitter:description"
        content="Get in touch for Front-end development projects with React, Next.js and TypeScript."
      />
      <meta
        name="twitter:image"
        content="https://www.exequielsosa.com.ar/es.png"
      />
      <meta
        name="twitter:url"
        content="https://www.exequielsosa.com.ar/contact-me"
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
              name: "Contact",
              item: "https://www.exequielsosa.com.ar/contact-me"
            }
          ]
        })}
      </script>

      {/* Enhanced Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "ContactPage",
          name: "Contact Exequiel Sosa",
          description:
            "Contact page for professional inquiries, web development projects and collaborations.",
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
