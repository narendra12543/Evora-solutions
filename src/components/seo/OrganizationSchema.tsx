interface OrganizationSchemaProps {
  url: string;
  logo: string;
}

export default function OrganizationSchema({
  url,
  logo,
}: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${url}#organization`,
    name: "Evora Industrial Solutions",
    alternateName: [
      "Evora Solutions",
      "Evora Solutions Pune",
      "Evora Industrial Solutions Pune",
    ],
    url,
    logo,
    image: logo,
    description:
      "Evora Industrial Solutions is a premier manufacturer and supplier of Industrial Storage Solutions and Industrial Conveyor Systems, providing Heavy Duty Pallet Racking, Cantilever Racks, Multi-Tier Mezzanines, Roller Conveyors, and Belt Conveyor Systems across Pune, Maharashtra, and India.",
    brand: {
      "@type": "Brand",
      name: "Evora Industrial Solutions",
    },
    email: "sales@evorasolutions.in",
    telephone: "+91 8766918892",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Office No-03, Near Akurdi Railway Station Road, Gurudwara Colony, Nigdi",
      addressLocality: "Pimpri-Chinchwad",
      addressRegion: "Maharashtra",
      postalCode: "411035",
      addressCountry: "IN",
    },
    foundingLocation: {
      "@type": "Place",
      name: "Pune, Maharashtra, India",
    },
    areaServed: [
      "Pune",
      "Chakan",
      "Bhosari",
      "Talegaon",
      "Pimpri-Chinchwad",
      "Mumbai",
      "Maharashtra",
      "Gujarat",
      "Karnataka",
      "Tamil Nadu",
      "Telangana",
      "Delhi NCR",
      "India",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91 8766918892",
        contactType: "sales",
        email: "sales@evorasolutions.in",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Marathi"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+91 8766918892",
        contactType: "customer service",
        email: "info@evorasolutions.in",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Marathi"],
      },
    ],
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
