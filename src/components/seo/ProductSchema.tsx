function isJsonObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

interface ProductSchemaProps {
  product: {
    id: string;
    name: string;
    slug: string;
    shortDescription?: string | null;
    description?: string | null;
    images: {
      imageUrl: string;
    }[];
    category?: {
      name: string;
    } | null;
    specifications?: unknown;
  };
}

export default function ProductSchema({ product }: ProductSchemaProps) {
  const images = product.images.map((img) =>
    img.imageUrl.startsWith("http")
      ? img.imageUrl
      : `https://evorasolutions.in${img.imageUrl}`
  );

  const additionalProperties = [
    {
      "@type": "PropertyValue",
      name: "Business Type",
      value: "Manufacturer & Turnkey Supplier",
    },
    {
      "@type": "Supply Coverage",
      name: "Supply Coverage",
      value: "Pune, Chakan, Maharashtra & Pan India",
    },
    {
      "@type": "PropertyValue",
      name: "Country of Origin",
      value: "India",
    },
    {
      "@type": "PropertyValue",
      name: "Application",
      value: "Industrial Storage Solutions & Conveyor Systems",
    },
  ];

  if (isJsonObject(product.specifications)) {
    for (const [key, val] of Object.entries(product.specifications)) {
      if (typeof val === "string" || typeof val === "number") {
        additionalProperties.push({
          "@type": "PropertyValue",
          name: key,
          value: String(val),
        });
      }
    }
  }

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `https://evorasolutions.in/products/${product.slug}#product`,
        name: product.name,
        description:
          product.shortDescription ??
          product.description ??
          `${product.name} manufactured by Evora Industrial Solutions`,
        sku: product.id,
        mpn: product.id,
        image: images.length > 0 ? images : ["https://evorasolutions.in/evora-logo.png"],
        category: product.category?.name ?? "Industrial Equipment",
        url: `https://evorasolutions.in/products/${product.slug}`,
        brand: {
          "@type": "Brand",
          name: "Evora Industrial Solutions",
        },
        manufacturer: {
          "@type": "Organization",
          name: "Evora Industrial Solutions",
          url: "https://evorasolutions.in",
          logo: "https://evorasolutions.in/evora-logo.png",
          telephone: "+91 8766918892",
          email: "sales@evorasolutions.in",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Office No-03, Near Akurdi Railway Station Road, Gurudwara Colony, Nigdi",
            addressLocality: "Pimpri-Chinchwad",
            addressRegion: "Maharashtra",
            postalCode: "411035",
            addressCountry: "IN",
          },
        },
        additionalProperty: additionalProperties,
      },
      {
        "@type": "Organization",
        "@id": "https://evorasolutions.in/#organization",
        name: "Evora Industrial Solutions",
        url: "https://evorasolutions.in",
        logo: "https://evorasolutions.in/evora-logo.png",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91 8766918892",
          contactType: "sales",
          email: "sales@evorasolutions.in",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi", "Marathi"],
        },
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