export default function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",

    "@id": "https://evorasolutions.in/#website",

    name: "Evora Solutions",

    alternateName: [
      "Evora Industrial Solutions",
      "Evora Solutions",
    ],

    url: "https://evorasolutions.in",

    description:
      "Evora Industrial Solutions (Evora Solutions) is a leading provider of Industrial Storage Solutions and Industrial Conveyor Systems providing Heavy Duty Pallet Racking, Cantilever Racks, Multi-Tier Mezzanine Floors, Industrial Roller Conveyors, Belt Conveyor Systems, and Material Handling Equipment.",
    about: [
      "Industrial Storage Solutions",
      "Industrial Conveyor Systems",
      "Heavy Duty Pallet Racking",
      "Cantilever Racking",
      "Multi Tier Mezzanines",
      "Drive In Racks",
      "Roller Conveyors",
      "Belt Conveyors",
    ],

    inLanguage: "en-IN",

    publisher: {
      "@type": "Organization",
      "@id": "https://evorasolutions.in/#organization",
      name: "Evora Solutions",
      url: "https://evorasolutions.in",
      logo: {
        "@type": "ImageObject",
        url: "https://evorasolutions.in/evora-logo.png",
      },
    },

    potentialAction: {
      "@type": "SearchAction",
      target:
        "https://evorasolutions.in/products?search={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}