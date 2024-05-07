import Head from "next/head";

const SeoHome = () => {
  return (
    <Head>
      <title>Exequiel Sosa | Front-end developer</title>
      <meta
        name="description"
        content="Hi! i'm Exequiel. I am a proactive and adaptable professional with a passion for web programming. Transitioning from finance/economy to development, I am driven by a love for continuous learning and making a positive impact. Each day, I find joy in my work, and I am eager to contribute my expertise to my team."
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
        content="Hi! i'm Exequiel. I am a proactive and adaptable professional with a passion for web programming. Transitioning from finance/economy to development, I am driven by a love for continuous learning and making a positive impact. Each day, I find joy in my work, and I am eager to contribute my expertise to my team."
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
        content="Hi, I'm Exequiel, a proactive professional transitioning from finance/economy to web development. I'm driven by a passion for continuous learning and making a positive impact. Eager to contribute my expertise to my team."
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
          sameAs: [
            "https://www.linkedin.com/in/exequiel",
            "https://twitter.com/exequiel",
          ],
        })}
      </script>
    </Head>
  );
};

export default SeoHome;
