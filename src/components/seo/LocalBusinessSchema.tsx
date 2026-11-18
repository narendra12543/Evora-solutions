export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",

    "@id": "https://evorasolutions.in/#localbusiness",

    name: "Evora Solutions",

    alternateName: [
      "Evora Industrial Solutions",
      "Evora Solutions",
    ],
    

    url: "https://evorasolutions.in",

    image: "https://evorasolutions.in/evora-logo.png",

    logo: "https://evorasolutions.in/evora-logo.png",

    telephone: "+91 8766918892",

    email: "sales@evorasolutions.in",

    priceRange: "$$",

    description:
      "Evora Industrial Solutions (Evora Solutions) is a leading provider of Industrial Storage Solutions and Industrial Conveyor Systems providing Heavy Duty Pallet Racking, Cantilever Racks, Multi-Tier Mezzanine Floors, Industrial Roller Conveyors, Belt Conveyor Systems, and Material Handling Equipment across Pune, Maharashtra and India.",

    slogan:
    "Industrial Storage Solutions & Industrial Conveyor Systems",

    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Office No-03, Near Akurdi Railway Station Road, Gurudwara Colony, Nigdi",
      addressLocality: "Pimpri-Chinchwad",
      addressRegion: "Maharashtra",
      postalCode: "411035",
      addressCountry: "IN",
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: "18.646617",
      longitude: "73.764662",
    },

    areaServed: [
      "Pune",
      "Pimpri-Chinchwad",
      "Nigdi",
      "Akurdi",
      "Chinchwad",
      "Ravet",
      "Wakad",
      "Hinjawadi",
      "Moshi",
      "Bhosari",
      "Chakan",
      "Talegaon",
      "Kharadi",
      "Baner",
      "Balewadi",
      "Hadapsar",
      "Mumbai",
      "Nashik",
      "Kolhapur",
      "Aurangabad",
      "Nagpur",
      "Maharashtra",
      "India",
    ],

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],

    paymentAccepted: [
      "Cash",
      "UPI",
      "Bank Transfer",
    ],

    currenciesAccepted: "INR",

    foundingLocation: {
      "@type": "Place",
      name: "Pune, Maharashtra, India",
    },

    knowsAbout: [
      "Industrial Storage Solutions",
      "Industrial Conveyor Systems",
      "Heavy Duty Pallet Racking",
      "Pallet Racking System",
      "Cantilever Racking",
      "Multi Tier Mezzanine Floors",
      "Drive In Racking System",
      "Industrial Shelving Systems",
      "Industrial Roller Conveyors",
      "Powered Roller Conveyor",
      "Gravity Roller Conveyor",
      "Flat Belt Conveyor",
      "Modular Belt Conveyor",
      "Cleated Belt Conveyor",
      "Curved Belt Conveyor",
      "Incline Belt Conveyor",
      "Chain Conveyor System",
      "Slat Conveyor",
      "Assembly Line Conveyors",
      "Packaging Conveyors",
      "Warehouse Conveyor Systems",
      "Material Handling Equipment",
      "Warehouse Storage Optimization",
      "Turnkey Warehouse Solutions",
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