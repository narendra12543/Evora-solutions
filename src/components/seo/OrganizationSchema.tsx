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

    name: "Evora Solutions",

    alternateName: [
      "Evora Solutions Pune",
      "Evora Industrial Solutions",
      "Evora Solutions",
    ],

    url,

    logo,

    image: logo,

    description:
      "Evora Industrial Solutions (Evora Solutions) is a leading manufacturer and supplier of Industrial Storage Solutions and Industrial Conveyor Systems including Heavy Duty Pallet Racking, Cantilever Racking, Multi-tier Mezzanines, Roller Conveyors, Belt Conveyors, and complete material handling automation across India.",

    

    brand: {
    "@type": "Brand",
    name: [
      "Evora Solutions",
      "Evora Industrial Solutions",
      "Evora Solutions Pune",
    ]
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
      "Pimpri-Chinchwad",
      "Nigdi",
      "Akurdi",
      "Chinchwad",
      "Wakad",
      "Hinjawadi",
      "Moshi",
      "Bhosari",
      "Chakan",
      "Talegaon",
      "Mumbai",
      "Nashik",
      "Kolhapur",
      "Aurangabad",
      "Nagpur",
      "Maharashtra",
      "India",
    ],

    knowsAbout: [
      // Industrial Storage Systems
      "Industrial Storage Systems",
      "Industrial Storage Solutions",
      "Heavy Duty Pallet Racking",
      "Medium Duty Storage Racks",
      "Pallet Racking Systems",
      "Selective Pallet Racking",
      "Drive-In Pallet Racking",
      "Cantilever Racking Systems",
      "Multi-Tier Racking Systems",
      "Mezzanine Floor Systems",
      "Industrial Mezzanines",
      "Warehouse Storage Racking",
      "Industrial Shelving Systems",
      "Long Span Shelving",
      "Slotted Angle Shelving",
      "Carton Flow Racks",
      "FIFO Pallet Flow Racks",
      "High Density Warehouse Storage",
      "Warehouse Space Optimization",

      // Industrial Conveyor Systems
      "Industrial Conveyor Systems",
      "Conveyor Systems Manufacturer",
      "Powered Roller Conveyors",
      "Motorized Roller Conveyors",
      "Gravity Roller Conveyors",
      "Roller Bed Conveyors",
      "Flat Belt Conveyors",
      "Modular Belt Conveyors",
      "Plastic Modular Conveyors",
      "Cleated Belt Conveyors",
      "Incline Belt Conveyors",
      "Z-Type Incline Conveyors",
      "Swan Neck Conveyors",
      "Curved Belt Conveyors",
      "Slat Conveyor Systems",
      "Chain Conveyor Systems",
      "Assembly Line Conveyors",
      "Packaging Conveyors",
      "Sortation Conveyor Systems",
      "Warehouse Conveyor Systems",
      "Steep Angle Sidewall Conveyors",
      "Elevator Conveyors",
      "Floor to Floor Conveyors",

      // Material Handling Solutions
      "Material Handling Equipment",
      "Warehouse Material Movement Systems",
      "Automated Material Transfer",
      "Zero Pressure Accumulation",
      "Loading and Unloading Conveyors",
      "Customized Material Handling Systems",
      "Warehouse Automation",
      "Intralogistics Solutions",

      // Industries Served
      "Warehousing and Distribution Centers",
      "Manufacturing Plant Storage and Conveying",
      "Automotive Assembly Handling Systems",
      "Food and Beverage Conveyors",
      "Pharmaceutical Storage and Conveyors",
      "E-Commerce Fulfillment Racks and Conveyors",
      "Logistics and Supply Chain Solutions",

      // Geographic & Brand
      "Industrial Storage Solutions Pune",
      "Conveyor Systems Manufacturer Pune Maharashtra",
      "Pallet Racking India",
      "Evora Industrial Solutions",
      "Evora Solutions",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91 8956614106",
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: [
          "English",
          "Hindi",
          "Marathi",
        ],
      },
      {
        "@type": "ContactPoint",
        telephone: "+91 8766918892",
        contactType: "customer support",
        areaServed: "IN",
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