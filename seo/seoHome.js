import Head from "next/head";

const SeoHome = () => {
  return (
    <Head>
      <title>Exequiel Sosa | Front-end developer</title>
      <meta
        name="description"
        content="I'm a proactive professional in web development, driven by a passion for continuous learning and making a positive impact."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index,follow" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href="https://www.exequielsosa.com.ar" />

      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="article" />
      <meta
        property="og:site_name"
        content="Exequiel Sosa | Front-end developer"
      />
      <meta property="og:title" content="Exequiel Sosa | Front-end developer" />
      <meta
        property="og:description"
        content="I'm a proactive professional in web development, driven by a passion for continuous learning and making a positive impact."
      />
      <meta property="og:url" content="https://www.exequielsosa.com.ar" />
      <meta name="title" content="Exequiel Sosa | Front-end developer" />
      <meta
        name="keywords"
        content="Front, End, Design, User, Interface, Design, JavaScript, Collaboration, HTML, Communication, Skills, Technical, Software Development,
        User Experience,JQuery,Bootstrap.js,HTML5,Node.js,Collaboration,Back, End,Communication, Skills,Software, Development,Git,Innovation,microFrontEnd,styled,nx,react.Js,nextJs,vercel,developer,front-end,ux,figma,user,experience,web,design,react,native, cv, interest, Desarrollador Front-end, Desarrollo Web, HTML, CSS, JavaScript, Frameworks Front-end, React, Angular, Vue, Diseño Responsivo, Experiencia de Usuario (UX), Diseño Web, Portafolio de Proyectos, Desarrollo de Interfaz de Usuario (UI), Optimización de rendimiento, Accesibilidad Web, Tecnologías Web, Habilidades Técnicas, Desarrollo de Aplicaciones Web, Programación Front-end, Herramientas de Desarrollo, Webpack, Gulp, Responsive Web Design, Front-end y Back-end (Full-stack)"
      />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="en_US" />
      <meta name="author" content="Exequiel Sosa - Front-end developer" />
      <meta
        property="og:image"
        content="https://www.exequielsosa.com.ar/es2.png"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@soyexequielsosa" />
      <meta name="twitter:creator" content="@soyexequielsosa" />
      <meta
        name="twitter:title"
        content="Exequiel Sosa | Front-end developer"
      />
      <meta
        name="twitter:description"
        content="I'm a proactive professional in web development, driven by a passion for continuous learning and making a positive impact."
      />
      <meta
        name="twitter:image"
        content="https://www.exequielsosa.com.ar/es.png"
      />
      <meta name="twitter:url" content="https://www.exequielsosa.com.ar" />
      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Person",
          name: "Exequiel Sosa",
          jobTitle: "Front-end developer",
          description:
            "Proactive and adaptable professional with a passion for web programming.",
          url: "https://www.exequielsosa.com.ar",
          sameAs: ["https://www.linkedin.com/in/exequielsosa/"],
        })}
      </script>
      <meta name="geo.region" content="AR" />
      <meta name="geo.placename" content="Ciudad Autónoma de Buenos Aires" />
      <meta name="geo.position" content="-34.6037,-58.3816" />
    </Head>
  );
};

export default SeoHome;
