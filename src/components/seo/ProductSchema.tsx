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
  };
}

export default function ProductSchema({
  product,
}: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "Organization",
        "@id": `https://evorasolutions.in/products/${product.slug}#product`,
        

        name: "Evora Solutions",

        sku: product.id,
        mpn: product.id,

        url: "https://evorasolutions.in",

        keywords: [
          product.name,
          product.category?.name,
          "Industrial Storage Solutions",
          "Industrial Conveyor Systems",
          "Evora Solutions",
        ],

        isRelatedTo: {
          "@id": "https://evorasolutions.in/#organization",
        },

        logo: "https://evorasolutions.in/evora-logo.png",
      },

      {
        "@type": "Product",

        name: product.name,

        description:
          product.shortDescription ??
          product.description ??
          product.name,

        image: product.images.map((img) => img.imageUrl),

        brand: {
          "@type": "Brand",
          name: "Evora Solutions",
        },

        manufacturer: {
          "@id": `https://evorasolutions.in/products/${product.slug}#product`, 
        },

        category: product.category?.name,

        url: `https://evorasolutions.in/products/${product.slug}`,

        keywords: [
          product.name,
          product.category?.name,
          "Industrial Storage Solutions",
          "Industrial Conveyor Systems",
          "Evora Solutions",
        ],

        isRelatedTo: {
          "@id": "https://evorasolutions.in/#organization",
        },

        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "Business Type",
            value: "Manufacturer & Supplier",
          },
          {
            "@type": "PropertyValue",
            name: "Supply",
            value: "Pan India",
          },

          {
            "@type": "PropertyValue",
            name: "Country of Origin",
            value: "India",
          },
          {
            "@type": "PropertyValue",
            name: "Application",
            value: "Industrial Storage & Conveyor Systems",
          },
        ],
      }
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