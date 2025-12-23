import { useEffect } from "react";

/**
 * StructuredData Component
 * Adds JSON-LD structured data for improved SEO and rich snippets
 */
const StructuredData = () => {
  useEffect(() => {
    // Person Schema
    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Anoushka R",
      jobTitle: "Full Stack Developer",
      description:
        "Full Stack Developer & Database Enthusiast. Crafting elegant solutions with a passion for building scalable, user-friendly applications.",
      url: "https://anoushka.dev",
      image: "https://anoushka.dev/og-image.png",
      sameAs: [
        "https://github.com/anoushka",
        "https://linkedin.com/in/anoushka",
        "https://twitter.com/anoushka",
      ],
      knowsAbout: [
        "Web Development",
        "Full Stack Development",
        "React",
        "Node.js",
        "TypeScript",
        "JavaScript",
        "Database Design",
        "Software Engineering",
      ],
      alumniOf: {
        "@type": "Organization",
        name: "Your University/College",
      },
    };

    // Website Schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Anoushka Portfolio",
      url: "https://anoushka.dev",
      description:
        "Full Stack Developer Portfolio showcasing projects, skills, and experience",
      author: {
        "@type": "Person",
        name: "Anoushka R",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://anoushka.dev/?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    };

    // ProfilePage Schema
    const profileSchema = {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      dateCreated: "2024-01-01T00:00:00+00:00",
      dateModified: new Date().toISOString(),
      mainEntity: {
        "@type": "Person",
        name: "Anoushka R",
        alternateName: "Anoushka",
        description: "Full Stack Developer & Database Enthusiast",
        image: "https://anoushka.dev/og-image.png",
      },
    };

    // Create or update script tags
    const createOrUpdateScript = (id: string, schema: object) => {
      let script = document.getElementById(id) as HTMLScriptElement | null;

      if (!script) {
        script = document.createElement("script");
        script.id = id;
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }

      script.textContent = JSON.stringify(schema);
    };

    createOrUpdateScript("person-schema", personSchema);
    createOrUpdateScript("website-schema", websiteSchema);
    createOrUpdateScript("profile-schema", profileSchema);

    // Cleanup function
    return () => {
      const schemas = ["person-schema", "website-schema", "profile-schema"];
      schemas.forEach((id) => {
        const script = document.getElementById(id);
        if (script) {
          script.remove();
        }
      });
    };
  }, []);

  return null;
};

export default StructuredData;
