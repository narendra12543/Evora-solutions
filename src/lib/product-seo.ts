export interface ProductFAQItem {
  question: string;
  answer: string;
}

export interface ProductSEO {
  title: string;
  description: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  longTailKeywords: string[];
  manufacturerKeywords: string[];
  supplierKeywords: string[];
  cityKeywords: string[];
  stateKeywords: string[];
  indiaKeywords: string[];
  keywords: string[];
  ogTitle?: string;
  ogDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  imageAlt: string;
  schemaDescription: string;
  faqs: ProductFAQItem[];
}

export interface CategorySEO {
  title: string;
  description: string;
  primaryKeyword: string;
  h1: string;
  introduction: string;
  keywords: string[];
  ogTitle?: string;
  ogDescription?: string;
}

export const PRODUCT_SEO: Record<string, ProductSEO> = {
  "heavy-duty-pallet-racking": {
    title: "Heavy Duty Pallet Racking System Manufacturer in Pune, Chakan & Maharashtra | Evora Industrial Solutions",
    description: "Evora Industrial Solutions is a premier Heavy Duty Pallet Racking System manufacturer in Pune, Chakan, Bhosari, and Mumbai. Engineered for high-density warehouse storage, certified structural steel, 4000kg beam capacity, and turnkey installation across India.",
    primaryKeyword: "Heavy Duty Pallet Racking System Manufacturer",
    secondaryKeywords: [
      "Selective Pallet Racking System",
      "Warehouse Storage Racking Manufacturer",
      "Industrial Pallet Racks Supplier",
      "High Density Pallet Storage",
      "Heavy Duty Warehouse Racks",
    ],
    longTailKeywords: [
      "Heavy duty selective pallet racking load capacity 4000 kg",
      "Warehouse pallet racking system manufacturers in Pune MIDC",
      "Certified structural steel pallet racks for distribution centers",
      "Custom industrial pallet racking price in India",
    ],
    manufacturerKeywords: [
      "Heavy Duty Pallet Racking Manufacturer in Pune",
      "Heavy Duty Pallet Racking Manufacturer in Chakan",
      "Pallet Racking Manufacturer in Pimpri Chinchwad",
      "Pallet Racking Manufacturer in Bhosari",
      "Pallet Racking Manufacturer in Talegaon",
      "Pallet Racking Manufacturer in Mumbai",
      "Pallet Racking Manufacturer in Maharashtra",
      "Pallet Racking Manufacturer in Gujarat",
      "Pallet Racking Manufacturer in Ahmedabad",
      "Pallet Racking Manufacturer in Bengaluru",
      "Pallet Racking Manufacturer in Hyderabad",
      "Pallet Racking Manufacturer in Chennai",
      "Pallet Racking Manufacturer in Delhi NCR",
      "Heavy Duty Pallet Racking Manufacturer in India",
    ],
    supplierKeywords: [
      "Heavy Duty Pallet Racking Supplier in Pune",
      "Warehouse Pallet Racking Supplier in Maharashtra",
      "Industrial Pallet Racking Supplier in India",
      "Pallet Racking Exporter India",
    ],
    cityKeywords: [
      "Pune", "Chakan", "Bhosari", "Pimpri Chinchwad", "Talegaon",
      "Mumbai", "Navi Mumbai", "Thane", "Nashik", "Aurangabad",
      "Nagpur", "Kolhapur", "Ahmedabad", "Surat", "Vadodara",
      "Bengaluru", "Hyderabad", "Chennai", "Delhi NCR", "Gurugram", "Noida",
    ],
    stateKeywords: [
      "Maharashtra", "Gujarat", "Karnataka", "Tamil Nadu",
      "Telangana", "Rajasthan", "Haryana", "Uttar Pradesh", "West Bengal",
    ],
    indiaKeywords: [
      "Heavy Duty Pallet Racking System India",
      "Warehouse Storage Racks Across India",
      "Industrial Racking Manufacturer Pan India",
    ],
    keywords: [
      "Heavy Duty Pallet Racking",
      "Heavy Duty Pallet Racking Manufacturer in Pune",
      "Heavy Duty Pallet Racking Manufacturer in Chakan",
      "Pallet Racking Manufacturer in Pimpri Chinchwad",
      "Pallet Racking Manufacturer in Bhosari",
      "Pallet Racking Manufacturer in Mumbai",
      "Pallet Racking Manufacturer in Maharashtra",
      "Pallet Racking Manufacturer in Gujarat",
      "Pallet Racking Manufacturer in Bengaluru",
      "Pallet Racking Manufacturer in Hyderabad",
      "Pallet Racking Manufacturer in Chennai",
      "Pallet Racking Manufacturer in Delhi NCR",
      "Heavy Duty Pallet Racking Manufacturer in India",
      "Industrial Pallet Racking Supplier in Pune",
      "Selective Pallet Racking System",
      "Warehouse Storage Racks Price in India",
      "Evora Industrial Solutions",
    ],
    ogTitle: "Heavy Duty Pallet Racking Manufacturer | Evora Industrial Solutions",
    ogDescription: "Certified high-tensile structural steel pallet racks for industrial warehouses and 3PL distribution centers across India.",
    twitterTitle: "Heavy Duty Pallet Racking Systems | Evora Industrial Solutions",
    twitterDescription: "Heavy duty selective pallet racking systems manufactured in Pune, Maharashtra. High load capacity up to 4000kg/beam level.",
    imageAlt: "Heavy Duty Pallet Racking System Manufacturer in Pune Chakan Maharashtra - Evora Industrial Solutions",
    schemaDescription: "Precision-engineered heavy duty pallet racking system by Evora Industrial Solutions, designed for safe high-density vertical storage in industrial warehouses.",
    faqs: [
      {
        question: "Who is the leading manufacturer of Heavy Duty Pallet Racking in Pune and Maharashtra?",
        answer: "Evora Industrial Solutions is a leading manufacturer of Heavy Duty Pallet Racking Systems based in Pune (Nigdi/Chakan MIDC), Maharashtra, offering certified structural steel racks with turnkey design, installation, and inspection across India.",
      },
      {
        question: "What is the maximum load capacity of Evora Heavy Duty Pallet Racks?",
        answer: "Evora heavy duty pallet racking systems support load capacities of up to 4,000 kg per beam level and column heights up to 12 meters, fully compliant with international FEM and EN safety standards.",
      },
      {
        question: "Does Evora Industrial Solutions supply and install pallet racks across India?",
        answer: "Yes, Evora Industrial Solutions supplies and installs pallet racking systems across Pune, Chakan, Mumbai, Gujarat, Karnataka, Tamil Nadu, Telangana, Delhi NCR, and all industrial regions of India.",
      },
      {
        question: "What are the common industrial applications for Selective Pallet Racking?",
        answer: "Selective pallet racking is ideal for 3PL logistics hubs, manufacturing inventory warehouses, cold storage facilities, automotive assembly plants, and retail distribution centers requiring direct access to every pallet.",
      },
    ],
  },

  "z-type-cleated-incline-conveyor": {
    title: "Z-Type Cleated Incline Belt Conveyor Manufacturer in Pune & India | Evora Industrial Solutions",
    description: "Custom Z-Type Cleated Incline Belt Conveyor manufacturer in Pune, Chakan, and Mumbai by Evora Industrial Solutions. High-grip corrugated sidewall belt conveyors for floor-to-floor bulk, box, and food packaging material handling across India.",
    primaryKeyword: "Z-Type Cleated Incline Belt Conveyor Manufacturer",
    secondaryKeywords: [
      "Cleated Incline Conveyor",
      "Swan Neck Conveyor Manufacturer",
      "Corrugated Sidewall Conveyor",
      "Industrial Incline Belt Conveyor",
      "Floor to Floor Conveyor System",
    ],
    longTailKeywords: [
      "Z-type swan neck cleated belt conveyor with corrugated sidewalls",
      "Custom incline cleated conveyor manufacturer in Chakan Pune",
      "Food grade PU cleated belt conveyor for packaging lines",
      "Variable speed Z conveyor price in India",
    ],
    manufacturerKeywords: [
      "Z-Type Conveyor Manufacturer in Pune",
      "Z-Type Cleated Conveyor Manufacturer in Chakan",
      "Incline Belt Conveyor Manufacturer in Bhosari",
      "Cleated Belt Conveyor Manufacturer in Pimpri Chinchwad",
      "Swan Neck Conveyor Manufacturer in Mumbai",
      "Z-Type Conveyor Manufacturer in Maharashtra",
      "Cleated Incline Conveyor Manufacturer in Gujarat",
      "Z-Type Belt Conveyor Manufacturer in Bengaluru",
      "Incline Conveyor Manufacturer in Hyderabad",
      "Cleated Conveyor Manufacturer in Chennai",
      "Z-Type Conveyor Manufacturer in Delhi NCR",
      "Z-Type Cleated Incline Belt Conveyor Manufacturer in India",
    ],
    supplierKeywords: [
      "Cleated Incline Conveyor Supplier in Pune",
      "Z Conveyor Supplier in Maharashtra",
      "Industrial Incline Conveyor Supplier India",
    ],
    cityKeywords: [
      "Pune", "Chakan", "Bhosari", "Talegaon", "Mumbai",
      "Thane", "Nashik", "Ahmedabad", "Surat", "Vadodara",
      "Bengaluru", "Hyderabad", "Chennai", "Delhi NCR",
    ],
    stateKeywords: [
      "Maharashtra", "Gujarat", "Karnataka", "Tamil Nadu", "Telangana", "Delhi NCR", "India",
    ],
    indiaKeywords: [
      "Z-Type Cleated Incline Belt Conveyor India",
      "Industrial Cleated Conveyor Across India",
    ],
    keywords: [
      "Z-Type Cleated Incline Belt Conveyor",
      "Z-Type Conveyor Manufacturer in Pune",
      "Z-Type Conveyor Manufacturer in Chakan",
      "Cleated Incline Conveyor Manufacturer in Maharashtra",
      "Swan Neck Conveyor Manufacturer in Mumbai",
      "Cleated Belt Conveyor Manufacturer in Gujarat",
      "Incline Belt Conveyor Manufacturer in India",
      "Corrugated Sidewall Conveyor Supplier",
      "Floor to Floor Incline Conveyor",
      "Evora Industrial Solutions",
    ],
    ogTitle: "Z-Type Cleated Incline Conveyor Manufacturer | Evora Industrial Solutions",
    ogDescription: "High-grip swan-neck cleated belt conveyors with corrugated sidewalls for floor-to-floor industrial transport across India.",
    twitterTitle: "Z-Type Cleated Incline Conveyors | Evora Industrial Solutions",
    twitterDescription: "Heavy duty Z-type cleated incline belt conveyors engineered in Pune, Maharashtra. Prevents spillage with corrugated sidewalls.",
    imageAlt: "Z-Type Cleated Incline Belt Conveyor Manufacturer in Pune Chakan Maharashtra - Evora Industrial Solutions",
    schemaDescription: "Custom-built Z-incline conveyor featuring high-grip cleated belt, corrugated sidewalls, rigid steel frame, and variable speed drive by Evora Industrial Solutions.",
    faqs: [
      {
        question: "What is a Z-Type Cleated Incline Belt Conveyor and how does it work?",
        answer: "A Z-type cleated incline conveyor features a swan-neck configuration with a horizontal feed section, an inclined elevating section, and an upper horizontal discharge section, using transverse cleats and corrugated sidewalls to elevate parts or bulk items without rollback.",
      },
      {
        question: "Who manufactures custom Z-Type Cleated Conveyors in Pune and Chakan?",
        answer: "Evora Industrial Solutions manufactures bespoke Z-type cleated belt conveyors at its engineering facilities in Pune, serving automotive, FMCG, pharma, and packaging industries throughout Maharashtra and India.",
      },
      {
        question: "What belt materials and cleat heights are available?",
        answer: "Evora offers food-grade PU, heavy-duty oil-resistant PVC, and rubber belts with cleat heights ranging from 20mm to 100mm, with custom corrugated sidewall heights to match required volumetric throughput.",
      },
    ],
  },

  "multi-tier-mezzanine-storage-floor": {
    title: "Multi-Tier Mezzanine Storage Floor Manufacturer in Pune, Chakan & India | Evora Industrial Solutions",
    description: "Evora Industrial Solutions manufactures Heavy Duty Multi-Tier Mezzanine Floors in Pune, Chakan, and Mumbai. Double or triple warehouse storage area with structural steel platforms, stairs, and handrails across Maharashtra and India.",
    primaryKeyword: "Multi-Tier Mezzanine Storage System Manufacturer",
    secondaryKeywords: [
      "Industrial Mezzanine Floor Manufacturer",
      "Structural Steel Mezzanine Platform",
      "Warehouse Mezzanine Floor Pune",
      "Multi-Tier Storage Platform",
      "Raised Floor Storage System",
    ],
    longTailKeywords: [
      "Heavy duty multi-tier industrial mezzanine floor manufacturers in Pune",
      "Modular structural steel mezzanine floor cost per sq ft in India",
      "Warehouse vertical space expansion mezzanine systems in Chakan MIDC",
      "Relocatable industrial storage mezzanine platforms Maharashtra",
    ],
    manufacturerKeywords: [
      "Mezzanine Floor Manufacturer in Pune",
      "Mezzanine Floor Manufacturer in Chakan",
      "Industrial Mezzanine Manufacturer in Bhosari",
      "Structural Mezzanine Manufacturer in Pimpri Chinchwad",
      "Mezzanine Storage Floor Manufacturer in Mumbai",
      "Multi-Tier Mezzanine Manufacturer in Maharashtra",
      "Industrial Mezzanine Floor Manufacturer in Gujarat",
      "Warehouse Mezzanine Manufacturer in Bengaluru",
      "Mezzanine Platform Manufacturer in Hyderabad",
      "Structural Steel Mezzanine Manufacturer in Chennai",
      "Mezzanine Floor Manufacturer in Delhi NCR",
      "Multi-Tier Mezzanine Storage System Manufacturer in India",
    ],
    supplierKeywords: [
      "Mezzanine Floor Supplier in Pune",
      "Industrial Storage Platform Supplier in Maharashtra",
      "Warehouse Mezzanine Supplier Across India",
    ],
    cityKeywords: [
      "Pune", "Chakan", "Bhosari", "Talegaon", "Mumbai",
      "Navi Mumbai", "Thane", "Nashik", "Ahmedabad", "Surat",
      "Bengaluru", "Hyderabad", "Chennai", "Delhi NCR",
    ],
    stateKeywords: [
      "Maharashtra", "Gujarat", "Karnataka", "Tamil Nadu", "Telangana", "Delhi NCR", "India",
    ],
    indiaKeywords: [
      "Multi-Tier Mezzanine Storage System India",
      "Industrial Mezzanine Floor Across India",
    ],
    keywords: [
      "Multi-Tier Mezzanine Storage System",
      "Mezzanine Floor Manufacturer in Pune",
      "Mezzanine Floor Manufacturer in Chakan",
      "Industrial Mezzanine Manufacturer in Bhosari",
      "Mezzanine Floor Manufacturer in Mumbai",
      "Mezzanine Storage Floor Manufacturer in Maharashtra",
      "Warehouse Mezzanine Floor Manufacturer in Gujarat",
      "Mezzanine Platform Manufacturer in Bengaluru",
      "Structural Steel Mezzanine Manufacturer in India",
      "Industrial Raised Floor Supplier",
      "Evora Industrial Solutions",
    ],
    ogTitle: "Multi-Tier Mezzanine Floor Manufacturer | Evora Industrial Solutions",
    ogDescription: "Double or triple warehouse storage area with certified structural steel mezzanine platforms engineered in Pune, Maharashtra.",
    twitterTitle: "Multi-Tier Mezzanine Storage Floors | Evora Industrial Solutions",
    twitterDescription: "Modular structural steel mezzanine platforms with load capacities up to 1,500 kg/sqm by Evora Industrial Solutions.",
    imageAlt: "Multi-Tier Mezzanine Storage System Manufacturer in Pune Chakan Maharashtra - Evora Industrial Solutions",
    schemaDescription: "Engineered structural steel mezzanine platforms by Evora Industrial Solutions to multiply vertical warehouse floor space without civil work.",
    faqs: [
      {
        question: "How does a Multi-Tier Mezzanine Floor optimize warehouse storage?",
        answer: "A multi-tier mezzanine floor utilizes unexploited overhead vertical height, creating 2 to 3 tiers of usable working or storage floor space, effectively doubling or tripling facility usable floor area without costly civil construction.",
      },
      {
        question: "What load capacities do Evora Mezzanine Floors support?",
        answer: "Evora industrial mezzanines are engineered for distributed floor loads from 300 kg/sqm up to 1,500 kg/sqm, utilizing heavy I-beams, roll-formed joists, and decking options including chequered steel plate, galvanized grating, or heavy particle board.",
      },
      {
        question: "Can an industrial mezzanine floor be relocated or expanded later?",
        answer: "Yes, Evora mezzanine systems are 100% bolted modular structures that can be seamlessly dismantled, relocated, or expanded as business storage requirements grow.",
      },
    ],
  },

  "steep-incline-corrugated-sidewall-conveyor": {
    title: "Steep Incline Corrugated Sidewall Conveyor Manufacturer in Pune & India | Evora Industrial Solutions",
    description: "Evora Industrial Solutions manufactures high-angle Steep Incline Corrugated Sidewall Belt Conveyors in Pune, Chakan, and Mumbai. Designed for vertical bulk material elevation up to 75 degrees in tight industrial spaces across India.",
    primaryKeyword: "Steep Incline Corrugated Sidewall Conveyor Manufacturer",
    secondaryKeywords: [
      "High Angle Incline Conveyor",
      "Corrugated Sidewall Belt Conveyor",
      "Vertical Elevation Conveyor Manufacturer",
      "Pocket Belt Conveyor",
      "Bulk Material Incline Conveyor",
    ],
    longTailKeywords: [
      "High angle steep incline belt conveyor up to 75 degrees manufacturer",
      "Corrugated rubber sidewall belt conveyor for bulk material lifting Pune",
      "Space saving vertical conveyor for recycling and stamping plants",
      "Cross rigid base belt conveyor price in India",
    ],
    manufacturerKeywords: [
      "Steep Incline Conveyor Manufacturer in Pune",
      "Corrugated Sidewall Conveyor Manufacturer in Chakan",
      "High Angle Conveyor Manufacturer in Bhosari",
      "Vertical Incline Conveyor Manufacturer in Mumbai",
      "Steep Incline Conveyor Manufacturer in Maharashtra",
      "Bulk Material Conveyor Manufacturer in Gujarat",
      "Corrugated Belt Conveyor Manufacturer in Bengaluru",
      "High Angle Conveyor Manufacturer in Hyderabad",
      "Steep Incline Belt Conveyor Manufacturer in Chennai",
      "Steep Incline Corrugated Sidewall Conveyor Manufacturer in India",
    ],
    supplierKeywords: [
      "Steep Incline Conveyor Supplier in Pune",
      "Corrugated Sidewall Belt Supplier in Maharashtra",
      "Vertical Material Conveyor Supplier India",
    ],
    cityKeywords: [
      "Pune", "Chakan", "Bhosari", "Mumbai", "Nashik",
      "Ahmedabad", "Surat", "Bengaluru", "Hyderabad", "Chennai", "Delhi NCR",
    ],
    stateKeywords: [
      "Maharashtra", "Gujarat", "Karnataka", "Tamil Nadu", "Telangana", "Delhi NCR", "India",
    ],
    indiaKeywords: [
      "Steep Incline Corrugated Sidewall Conveyor India",
      "High Angle Incline Conveyor Manufacturer Across India",
    ],
    keywords: [
      "Steep Incline Corrugated Sidewall Conveyor",
      "Steep Incline Conveyor Manufacturer in Pune",
      "Corrugated Sidewall Conveyor Manufacturer in Chakan",
      "High Angle Conveyor Manufacturer in Maharashtra",
      "Vertical Elevation Conveyor in Mumbai",
      "Corrugated Belt Conveyor in Gujarat",
      "High Angle Incline Conveyor in India",
      "Bulk Material Handling Conveyor",
      "Evora Industrial Solutions",
    ],
    ogTitle: "Steep Incline Corrugated Sidewall Conveyor | Evora Industrial Solutions",
    ogDescription: "High-angle steep incline conveyor for space-constrained vertical material elevation without rollback across India.",
    twitterTitle: "Steep Incline Sidewall Conveyors | Evora Industrial Solutions",
    twitterDescription: "High-angle vertical belt elevation up to 75 degrees with cross-rigid corrugated sidewall belts by Evora Industrial Solutions.",
    imageAlt: "Steep Incline Corrugated Sidewall Conveyor Manufacturer in Pune Chakan Maharashtra - Evora Industrial Solutions",
    schemaDescription: "Cross-rigid base belt conveyor with deep corrugated sidewalls and cross cleats for high-angle industrial lifting by Evora Industrial Solutions.",
    faqs: [
      {
        question: "What is the maximum incline angle for a Corrugated Sidewall Conveyor?",
        answer: "Evora steep incline conveyors can transport materials at angles ranging from 30 degrees up to 75 degrees, and even vertical 90 degrees with enclosed pocket belt configurations, drastically reducing floor space.",
      },
      {
        question: "What materials can be transported with a steep incline sidewall conveyor?",
        answer: "They are ideal for granular bulk materials, metal stampings, plastic regrind, automotive fasteners, fertilizer granules, chemicals, and industrial recycling components.",
      },
    ],
  },

  "automated-powered-roller-conveyor-line": {
    title: "Automated Powered Roller Conveyor Line Manufacturer in Pune, Chakan & India | Evora Industrial Solutions",
    description: "High-throughput Automated Powered Roller Conveyor manufacturer in Pune, Chakan, and Mumbai by Evora Industrial Solutions. Zero-pressure accumulation (ZPA) and motorized drive roller (MDR) systems for logistics, e-commerce, and carton sorting across India.",
    primaryKeyword: "Automated Powered Roller Conveyor Line Manufacturer",
    secondaryKeywords: [
      "Motorized Roller Conveyor Manufacturer",
      "Zero Pressure Accumulation Conveyor",
      "ZPA Roller Conveyor Pune",
      "Warehouse Roller Conveyor System",
      "Carton Sorting Conveyor Manufacturer",
    ],
    longTailKeywords: [
      "Motorized drive roller MDR automated conveyor system in Pune",
      "Zero pressure accumulation roller conveyor line manufacturer Maharashtra",
      "Automated box sorting roller conveyor line for e-commerce warehouses",
      "Industrial powered roller conveyor line price per meter in India",
    ],
    manufacturerKeywords: [
      "Powered Roller Conveyor Manufacturer in Pune",
      "Automated Roller Conveyor Manufacturer in Chakan",
      "Motorized Roller Conveyor Manufacturer in Bhosari",
      "Roller Conveyor Line Manufacturer in Pimpri Chinchwad",
      "Powered Roller Conveyor Manufacturer in Mumbai",
      "Roller Conveyor Manufacturer in Maharashtra",
      "Automated Roller Conveyor Manufacturer in Gujarat",
      "Warehouse Roller Conveyor Manufacturer in Bengaluru",
      "Roller Conveyor Line Manufacturer in Hyderabad",
      "Powered Roller Conveyor Manufacturer in Chennai",
      "Roller Conveyor Manufacturer in Delhi NCR",
      "Automated Powered Roller Conveyor Line Manufacturer in India",
    ],
    supplierKeywords: [
      "Powered Roller Conveyor Supplier in Pune",
      "Motorized Roller Conveyor Supplier in Maharashtra",
      "Warehouse Conveyor Supplier India",
    ],
    cityKeywords: [
      "Pune", "Chakan", "Bhosari", "Talegaon", "Mumbai",
      "Navi Mumbai", "Thane", "Nashik", "Ahmedabad", "Surat",
      "Bengaluru", "Hyderabad", "Chennai", "Delhi NCR",
    ],
    stateKeywords: [
      "Maharashtra", "Gujarat", "Karnataka", "Tamil Nadu", "Telangana", "Delhi NCR", "India",
    ],
    indiaKeywords: [
      "Automated Powered Roller Conveyor Line India",
      "Motorized Roller Conveyor Systems Across India",
    ],
    keywords: [
      "Automated Powered Roller Conveyor Line",
      "Powered Roller Conveyor Manufacturer in Pune",
      "Automated Roller Conveyor Manufacturer in Chakan",
      "Motorized Roller Conveyor in Bhosari",
      "Roller Conveyor Line in Mumbai",
      "Roller Conveyor Manufacturer in Maharashtra",
      "Warehouse Roller Conveyor in Gujarat",
      "Powered Roller Conveyor in Bengaluru",
      "Roller Conveyor Line in Hyderabad",
      "Powered Roller Conveyor in Delhi NCR",
      "Automated Powered Roller Conveyor Line in India",
      "Zero Pressure Accumulation Roller Conveyor",
      "Evora Industrial Solutions",
    ],
    ogTitle: "Automated Powered Roller Conveyor Line | Evora Industrial Solutions",
    ogDescription: "High-speed motorized roller conveyor networks with smart sensor zoning and zero-pressure accumulation across India.",
    twitterTitle: "Powered Roller Conveyor Lines | Evora Industrial Solutions",
    twitterDescription: "Smart motorized drive roller conveyors with run-on-demand zoning and zero carton collision for automated warehouses.",
    imageAlt: "Automated Powered Roller Conveyor Line Manufacturer in Pune Chakan Maharashtra - Evora Industrial Solutions",
    schemaDescription: "High-speed automated roller conveyor system featuring motorized drive rollers, sensor zoning, and zero-pressure accumulation by Evora Industrial Solutions.",
    faqs: [
      {
        question: "What is Zero Pressure Accumulation (ZPA) in a roller conveyor?",
        answer: "Zero Pressure Accumulation (ZPA) divides the conveyor into independent sensor-controlled motorized zones. When an item stops downstream, upstream items halt automatically before colliding, preventing carton crush and product damage.",
      },
      {
        question: "Who manufactures automated roller conveyor systems in Pune and Chakan?",
        answer: "Evora Industrial Solutions designs, manufactures, and commissions custom motorized roller conveyor lines with PLC controls and automated sorting in Pune, Chakan, and across India.",
      },
      {
        question: "What speeds and load capacities do Evora powered roller conveyors handle?",
        answer: "Evora roller lines operate at adjustable speeds from 10 to 60 m/min, supporting loads up to 150 kg per linear meter for cartons, totes, boxes, and industrial components.",
      },
    ],
  },

  "staircase-incline-flight-conveyor": {
    title: "Staircase Incline Flight Conveyor Manufacturer in Pune & India | Evora Industrial Solutions",
    description: "Evora Industrial Solutions manufactures Staircase Incline Flight Conveyors in Pune, Chakan, and Mumbai. Designed for continuous multi-floor tote, box, and carton transfers alongside industrial stairwells across Maharashtra and India.",
    primaryKeyword: "Staircase Incline Flight Conveyor Manufacturer",
    secondaryKeywords: [
      "Stairwell Conveyor Manufacturer",
      "Flight Conveyor System",
      "Floor-to-Floor Box Lift Conveyor",
      "Stair Mounted Tote Conveyor",
      "Industrial Flight Conveyor Supplier",
    ],
    longTailKeywords: [
      "Staircase mounted incline flight conveyor for warehouse basement to ground transfer",
      "Continuous floor to floor carton transfer conveyor along stairways Pune",
      "Bi-directional flight belt conveyor manufacturer in Chakan MIDC",
      "Stairwell industrial box lift price in India",
    ],
    manufacturerKeywords: [
      "Staircase Conveyor Manufacturer in Pune",
      "Flight Conveyor Manufacturer in Chakan",
      "Stairwell Conveyor Manufacturer in Bhosari",
      "Incline Flight Conveyor Manufacturer in Mumbai",
      "Staircase Conveyor Manufacturer in Maharashtra",
      "Flight Conveyor Manufacturer in Gujarat",
      "Floor to Floor Conveyor Manufacturer in Bengaluru",
      "Stairwell Lift Conveyor Manufacturer in Hyderabad",
      "Flight Conveyor Manufacturer in Chennai",
      "Staircase Incline Flight Conveyor Manufacturer in India",
    ],
    supplierKeywords: [
      "Staircase Conveyor Supplier in Pune",
      "Flight Conveyor Supplier in Maharashtra",
      "Stairwell Box Lift Supplier India",
    ],
    cityKeywords: [
      "Pune", "Chakan", "Bhosari", "Mumbai", "Thane",
      "Nashik", "Ahmedabad", "Surat", "Bengaluru", "Hyderabad", "Chennai", "Delhi NCR",
    ],
    stateKeywords: [
      "Maharashtra", "Gujarat", "Karnataka", "Tamil Nadu", "Telangana", "Delhi NCR", "India",
    ],
    indiaKeywords: [
      "Staircase Incline Flight Conveyor India",
      "Floor to Floor Flight Conveyor Across India",
    ],
    keywords: [
      "Staircase Incline Flight Conveyor",
      "Staircase Conveyor Manufacturer in Pune",
      "Flight Conveyor Manufacturer in Chakan",
      "Stairwell Conveyor in Bhosari",
      "Incline Flight Conveyor in Mumbai",
      "Staircase Conveyor in Maharashtra",
      "Flight Conveyor in Gujarat",
      "Staircase Conveyor in Bengaluru",
      "Floor to Floor Conveyor in India",
      "Evora Industrial Solutions",
    ],
    ogTitle: "Staircase Incline Flight Conveyor | Evora Industrial Solutions",
    ogDescription: "Compact stair-mounted flight conveyors designed to bridge multiple floors seamlessly for cartons and bins across India.",
    twitterTitle: "Staircase Flight Conveyors | Evora Industrial Solutions",
    twitterDescription: "Seamless floor-to-floor material transfer along industrial stairwells with heavy-duty cleats and dual emergency stops.",
    imageAlt: "Staircase Incline Flight Conveyor Manufacturer in Pune Chakan Maharashtra - Evora Industrial Solutions",
    schemaDescription: "Compact stair-mounted flight conveyor designed to bridge multiple floors seamlessly for cartons and bins by Evora Industrial Solutions.",
    faqs: [
      {
        question: "How does a staircase incline flight conveyor eliminate manual material handling?",
        answer: "By mounting alongside existing stairwells, the flight conveyor transports heavy cartons and totes between basement, mezzanine, and upper floors automatically, eliminating the physical injury hazard of workers carrying loads up and down stairs.",
      },
      {
        question: "Can the staircase flight conveyor run in both directions (up and down)?",
        answer: "Yes, Evora staircase conveyors can be configured with reversible drives to both elevate goods up and lower stock safely down under controlled braking.",
      },
    ],
  },

  "heavy-duty-cantilever-racks": {
    title: "Heavy Duty Cantilever Racking System Manufacturer in Pune, Chakan & India | Evora Industrial Solutions",
    description: "Evora Industrial Solutions is a top Heavy Duty Cantilever Racks manufacturer in Pune, Chakan, and Mumbai. Engineered for unobstructed horizontal storage of steel pipes, timber, aluminium profiles, and bulky industrial inventory across India.",
    primaryKeyword: "Heavy Duty Cantilever Racking System Manufacturer",
    secondaryKeywords: [
      "Cantilever Storage Racks Manufacturer",
      "Pipe Storage Racking System",
      "Timber Storage Racks Pune",
      "Structural Steel Cantilever Racks",
      "Double Sided Cantilever Racks",
    ],
    longTailKeywords: [
      "Heavy duty cantilever racks for steel pipes and bar storage in Pune",
      "Unobstructed horizontal cantilever racking system manufacturer Chakan MIDC",
      "Single sided and double sided cantilever rack price per arm in India",
      "Heavy duty structural steel cantilever racking for timber stockyards Maharashtra",
    ],
    manufacturerKeywords: [
      "Cantilever Racks Manufacturer in Pune",
      "Cantilever Racking Manufacturer in Chakan",
      "Cantilever Rack Manufacturer in Bhosari",
      "Pipe Storage Racks Manufacturer in Pimpri Chinchwad",
      "Cantilever Racks Manufacturer in Mumbai",
      "Cantilever Racking Manufacturer in Maharashtra",
      "Cantilever Racks Manufacturer in Gujarat",
      "Cantilever Storage Racks Manufacturer in Bengaluru",
      "Cantilever Racking Manufacturer in Hyderabad",
      "Heavy Duty Cantilever Racks Manufacturer in Chennai",
      "Cantilever Racks Manufacturer in Delhi NCR",
      "Heavy Duty Cantilever Racking System Manufacturer in India",
    ],
    supplierKeywords: [
      "Cantilever Racks Supplier in Pune",
      "Pipe Storage Rack Supplier in Maharashtra",
      "Cantilever Storage Systems Supplier India",
    ],
    cityKeywords: [
      "Pune", "Chakan", "Bhosari", "Talegaon", "Mumbai",
      "Navi Mumbai", "Thane", "Nashik", "Ahmedabad", "Surat",
      "Bengaluru", "Hyderabad", "Chennai", "Delhi NCR",
    ],
    stateKeywords: [
      "Maharashtra", "Gujarat", "Karnataka", "Tamil Nadu", "Telangana", "Delhi NCR", "India",
    ],
    indiaKeywords: [
      "Heavy Duty Cantilever Racking System India",
      "Cantilever Storage Racks Across India",
    ],
    keywords: [
      "Heavy Duty Cantilever Racking System",
      "Cantilever Racks Manufacturer in Pune",
      "Cantilever Racking Manufacturer in Chakan",
      "Cantilever Rack in Bhosari",
      "Pipe Storage Racks in Mumbai",
      "Cantilever Racking Manufacturer in Maharashtra",
      "Cantilever Racks in Gujarat",
      "Cantilever Storage Racks in Bengaluru",
      "Heavy Duty Cantilever Racks in India",
      "Structural Steel Cantilever Racks",
      "Evora Industrial Solutions",
    ],
    ogTitle: "Heavy Duty Cantilever Racks | Evora Industrial Solutions",
    ogDescription: "Rugged structural columns with adjustable cantilever arms for uninterrupted horizontal loading of lengthy materials across India.",
    twitterTitle: "Heavy Duty Cantilever Racking | Evora Industrial Solutions",
    twitterDescription: "Unobstructed horizontal storage framework for long pipes, timber, and heavy profiles with adjustable arm pitch.",
    imageAlt: "Heavy Duty Cantilever Racking System Manufacturer in Pune Chakan Maharashtra - Evora Industrial Solutions",
    schemaDescription: "Unobstructed horizontal storage framework engineered for long, heavy, and awkward-shaped industrial inventory by Evora Industrial Solutions.",
    faqs: [
      {
        question: "What types of inventory are best suited for Cantilever Racks?",
        answer: "Cantilever racks are specifically designed for long, bulky, and irregular materials such as steel pipes, structural tubes, timber planks, aluminium extrusions, PVC conduits, and sheet metal packs that cannot fit inside standard pallet racks with front uprights.",
      },
      {
        question: "What arm capacities are available in Evora Cantilever Systems?",
        answer: "Evora cantilever arms are engineered to support from 500 kg up to 2,000 kg per arm, with column heights up to 9 meters in both single-sided (wall-mounted) and double-sided (central island) configurations.",
      },
      {
        question: "Can cantilever racks be installed outdoors?",
        answer: "Yes, Evora supplies hot-dip galvanized cantilever racks with roof canopy provisions for outdoor yards, as well as epoxy powder-coated finishes for indoor warehouse storage.",
      },
    ],
  },

  "high-incline-cleated-elevator-conveyor": {
    title: "High-Incline Cleated Elevator Conveyor Manufacturer in Pune, Chakan & India | Evora Industrial Solutions",
    description: "Evora Industrial Solutions manufactures High-Incline Cleated Elevator Conveyors in Pune, Chakan, and Mumbai. Heavy-duty vertical elevation conveyor with deep sidewalls, bucket-style cleats, and low feed hopper for scrap, stamping, and bulk parts across India.",
    primaryKeyword: "High-Incline Cleated Elevator Conveyor Manufacturer",
    secondaryKeywords: [
      "Vertical Elevator Conveyor Manufacturer",
      "Cleated Bucket Elevator Conveyor",
      "Scrap Elevation Conveyor Pune",
      "Parts Elevator Conveyor",
      "High Angle Material Lifter",
    ],
    longTailKeywords: [
      "Heavy duty high incline cleated elevator conveyor with low feed bed Pune",
      "Metal stamping scrap elevation conveyor manufacturer in Chakan MIDC",
      "Bucket style cleated vertical elevator conveyor price in India",
      "Industrial high angle material handling conveyor line Maharashtra",
    ],
    manufacturerKeywords: [
      "Cleated Elevator Conveyor Manufacturer in Pune",
      "High Incline Conveyor Manufacturer in Chakan",
      "Vertical Elevator Conveyor Manufacturer in Bhosari",
      "Parts Elevator Conveyor Manufacturer in Mumbai",
      "Cleated Elevator Conveyor Manufacturer in Maharashtra",
      "Vertical Lift Conveyor Manufacturer in Gujarat",
      "High Incline Conveyor Manufacturer in Bengaluru",
      "Cleated Elevator Conveyor Manufacturer in Hyderabad",
      "Vertical Elevator Conveyor Manufacturer in Chennai",
      "High-Incline Cleated Elevator Conveyor Manufacturer in India",
    ],
    supplierKeywords: [
      "Cleated Elevator Conveyor Supplier in Pune",
      "Vertical Conveyor Supplier in Maharashtra",
      "Industrial Elevator Conveyor Supplier India",
    ],
    cityKeywords: [
      "Pune", "Chakan", "Bhosari", "Talegaon", "Mumbai",
      "Navi Mumbai", "Thane", "Nashik", "Ahmedabad", "Surat",
      "Bengaluru", "Hyderabad", "Chennai", "Delhi NCR",
    ],
    stateKeywords: [
      "Maharashtra", "Gujarat", "Karnataka", "Tamil Nadu", "Telangana", "Delhi NCR", "India",
    ],
    indiaKeywords: [
      "High-Incline Cleated Elevator Conveyor India",
      "Vertical Elevator Conveyor Across India",
    ],
    keywords: [
      "High-Incline Cleated Elevator Conveyor",
      "Cleated Elevator Conveyor Manufacturer in Pune",
      "High Incline Conveyor Manufacturer in Chakan",
      "Vertical Elevator Conveyor in Bhosari",
      "Parts Elevator Conveyor in Mumbai",
      "Cleated Elevator Conveyor in Maharashtra",
      "Vertical Lift Conveyor in Gujarat",
      "High Incline Conveyor in Bengaluru",
      "High-Incline Cleated Elevator Conveyor in India",
      "Scrap Elevation Conveyor",
      "Evora Industrial Solutions",
    ],
    ogTitle: "High-Incline Cleated Elevator Conveyor | Evora Industrial Solutions",
    ogDescription: "Rugged structural frame elevator conveyor for demanding elevation duties up to 80 degrees across India.",
    twitterTitle: "High-Incline Elevator Conveyors | Evora Industrial Solutions",
    twitterDescription: "Heavy duty vertical elevator conveyor with low feed hopper and high-torque gear motor with backstop brake.",
    imageAlt: "High-Incline Cleated Elevator Conveyor Manufacturer in Pune Chakan Maharashtra - Evora Industrial Solutions",
    schemaDescription: "Rugged structural frame conveyor engineered for demanding elevation duties with deep sidewalls and bucket-style cleats by Evora Industrial Solutions.",
    faqs: [
      {
        question: "What makes the High-Incline Cleated Elevator Conveyor ideal for stamping and scrap?",
        answer: "It features a heavy structural channel chassis, a low feed hopper for convenient press-side or bin dumping, oil-resistant cleated belt, and an integrated backstop brake to prevent reverse belt rollback during power cuts.",
      },
      {
        question: "What discharge heights and incline angles are available?",
        answer: "Evora custom manufactures high-incline elevators with angles from 45 to 80 degrees and discharge heights engineered up to 8 meters to feed high storage silos, sorting bins, or shredders.",
      },
    ],
  },
};

export const CATEGORY_SEO: Record<string, CategorySEO> = {
  "industrial-storage-solutions": {
    title: "Industrial Storage Solutions Manufacturer in Pune, Maharashtra & India | Evora Solutions",
    description: "Evora Industrial Solutions is a premier manufacturer of certified Heavy Duty Industrial Storage Solutions in Pune, Chakan, and Mumbai. Heavy-duty pallet racking, cantilever racks, and mezzanine floor systems for warehouses across India.",
    primaryKeyword: "Industrial Storage Solutions Manufacturer",
    h1: "Industrial Storage Solutions & Warehouse Systems",
    introduction: "Engineered to maximize vertical cubic storage density and optimize facility throughput, Evora Industrial Solutions designs, manufactures, and installs certified high-tensile steel industrial storage systems across India.",
    keywords: [
      "Industrial Storage Solutions",
      "Industrial Storage Solutions Manufacturer in Pune",
      "Industrial Storage Solutions Manufacturer in Chakan",
      "Warehouse Storage Solutions in Maharashtra",
      "Industrial Storage System Supplier India",
      "Heavy Duty Warehouse Racking",
      "Evora Industrial Solutions",
    ],
    ogTitle: "Industrial Storage Solutions Manufacturer | Evora Solutions",
    ogDescription: "High-density heavy duty pallet racking, cantilever racks, and multi-tier mezzanine floors across India.",
  },

  "pallet-racking-systems": {
    title: "Pallet Racking Systems Manufacturer in Pune, Chakan & Maharashtra | Evora Industrial Solutions",
    description: "Evora Industrial Solutions manufactures high-density Heavy Duty Pallet Racking Systems in Pune, Chakan, Bhosari, and Mumbai. Selective, drive-in, and double-deep warehouse storage racks installed across India.",
    primaryKeyword: "Pallet Racking Systems Manufacturer",
    h1: "Heavy Duty Pallet Racking Systems",
    introduction: "Designed for rapid forklift accessibility and high vertical density, our pallet racking systems feature blue upright frames, safety orange beams, and certified beam capacities up to 4000 kg.",
    keywords: [
      "Pallet Racking Systems Manufacturer",
      "Pallet Racking Manufacturer in Pune",
      "Pallet Racking Manufacturer in Chakan",
      "Warehouse Pallet Racking in Maharashtra",
      "Heavy Duty Selective Pallet Racks India",
      "Industrial Pallet Racks Supplier",
      "Evora Industrial Solutions",
    ],
    ogTitle: "Pallet Racking Systems Manufacturer | Evora Industrial Solutions",
    ogDescription: "Selective and heavy-duty pallet racking systems engineered in Pune for warehouses across India.",
  },

  "cantilever-racking": {
    title: "Cantilever Racking System Manufacturer in Pune & Maharashtra | Evora Industrial Solutions",
    description: "Custom Heavy Duty Cantilever Racks manufacturer in Pune, Chakan, and Mumbai by Evora Industrial Solutions. Unobstructed horizontal storage for pipes, timber, steel bars, and extrusions across India.",
    primaryKeyword: "Cantilever Racking System Manufacturer",
    h1: "Heavy Duty Cantilever Racking Systems",
    introduction: "Store long, irregular, and heavy profiles safely without front column interference. Single and double-sided cantilever frameworks with capacities up to 2000 kg per arm.",
    keywords: [
      "Cantilever Racking System Manufacturer",
      "Cantilever Racks Manufacturer in Pune",
      "Cantilever Racks Manufacturer in Chakan",
      "Pipe Storage Racks in Maharashtra",
      "Timber Storage Cantilever Racks India",
      "Evora Industrial Solutions",
    ],
    ogTitle: "Cantilever Racking Manufacturer | Evora Industrial Solutions",
    ogDescription: "Engineered cantilever racking systems for long pipes, steel tubes, and timber storage across India.",
  },

  "mezzanine-floors": {
    title: "Industrial Mezzanine Floor Manufacturer in Pune, Chakan & India | Evora Solutions",
    description: "Double or triple warehouse storage area with Heavy Duty Structural Steel Mezzanine Floors from Evora Industrial Solutions in Pune, Chakan, and Mumbai. Complete with stairs and handrails across India.",
    primaryKeyword: "Industrial Mezzanine Floor Manufacturer",
    h1: "Multi-Tier Mezzanine Storage Floors",
    introduction: "Multiply vertical warehouse square footage without civil reconstruction. Modular bolted steel mezzanine platforms engineered for loads from 300 to 1,500 kg/sqm.",
    keywords: [
      "Industrial Mezzanine Floor Manufacturer",
      "Mezzanine Floor Manufacturer in Pune",
      "Mezzanine Floor Manufacturer in Chakan",
      "Warehouse Mezzanine in Maharashtra",
      "Structural Steel Mezzanine Platform India",
      "Evora Industrial Solutions",
    ],
    ogTitle: "Industrial Mezzanine Floor Manufacturer | Evora Solutions",
    ogDescription: "Certified structural steel mezzanine platforms to double warehouse floor space across India.",
  },

  "industrial-conveyor-systems": {
    title: "Industrial Conveyor Systems Manufacturer in Pune, Chakan & India | Evora Industrial Solutions",
    description: "Evora Industrial Solutions is a leading Industrial Conveyor Systems manufacturer in Pune, Chakan, Bhosari, and Mumbai. Turnkey powered roller, belt, cleated, and automated conveyor networks across India.",
    primaryKeyword: "Industrial Conveyor Systems Manufacturer",
    h1: "Industrial Conveyor Systems & Material Handling",
    introduction: "Automate manufacturing material flow and warehouse carton sorting with Evora turnkey conveyor systems, engineered to European precision standards for 24/7 industrial duty.",
    keywords: [
      "Industrial Conveyor Systems Manufacturer",
      "Industrial Conveyor Manufacturer in Pune",
      "Conveyor Systems Manufacturer in Chakan",
      "Material Handling Conveyor in Maharashtra",
      "Industrial Conveyor Supplier Across India",
      "Automated Conveyor Line Manufacturer",
      "Evora Industrial Solutions",
    ],
    ogTitle: "Industrial Conveyor Systems Manufacturer | Evora Solutions",
    ogDescription: "Automated powered roller lines, cleated incline belts, and turnkey material handling systems across India.",
  },

  "roller-conveyors": {
    title: "Industrial Roller Conveyors Manufacturer in Pune, Chakan & Maharashtra | Evora Industrial Solutions",
    description: "Evora Industrial Solutions manufactures Powered Roller Conveyors and Gravity Roller Lines in Pune, Chakan, and Mumbai. Motorized drive rollers (MDR) and zero-pressure accumulation (ZPA) across India.",
    primaryKeyword: "Industrial Roller Conveyors Manufacturer",
    h1: "Industrial Roller Conveyor Systems",
    introduction: "High-throughput motorized and gravity roller conveyor lines for cartons, totes, boxes, and heavy industrial assemblies with energy-efficient smart sensor zoning.",
    keywords: [
      "Industrial Roller Conveyors Manufacturer",
      "Powered Roller Conveyor Manufacturer in Pune",
      "Roller Conveyor Manufacturer in Chakan",
      "Gravity Roller Conveyor in Maharashtra",
      "Zero Pressure Accumulation Roller Conveyor India",
      "Evora Industrial Solutions",
    ],
    ogTitle: "Industrial Roller Conveyors Manufacturer | Evora Solutions",
    ogDescription: "High-speed motorized and gravity roller conveyor lines engineered in Pune for logistics hubs across India.",
  },

  "belt-conveyors": {
    title: "Industrial Belt Conveyors Manufacturer in Pune, Chakan & India | Evora Industrial Solutions",
    description: "Custom Flat Belt, Incline, and Cleated Belt Conveyor manufacturer in Pune, Chakan, and Mumbai by Evora Industrial Solutions. PU/PVC/Rubber belts for manufacturing, packaging, and logistics across India.",
    primaryKeyword: "Industrial Belt Conveyors Manufacturer",
    h1: "Industrial Belt Conveyor Systems",
    introduction: "From high-angle Z-type cleated incline elevators to heavy-duty flat assembly belt lines, Evora custom builds durable belt conveyors for continuous material transport.",
    keywords: [
      "Industrial Belt Conveyors Manufacturer",
      "Belt Conveyor Manufacturer in Pune",
      "Cleated Belt Conveyor in Chakan",
      "Incline Belt Conveyor in Maharashtra",
      "Flat Belt Conveyor Manufacturer India",
      "Evora Industrial Solutions",
    ],
    ogTitle: "Industrial Belt Conveyors Manufacturer | Evora Industrial Solutions",
    ogDescription: "Custom flat, incline, and cleated belt conveyor systems engineered for manufacturing across India.",
  },
};
