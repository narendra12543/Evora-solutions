import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Seed default admin user if not exists
  const adminEmail = "admin@evorasolutions.in";
  const existingAdmin = await prisma.user.findUnique({
    where: { email: adminEmail },
  });

  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash("Admin@123", 10);
    await prisma.user.create({
      data: {
        name: "Admin User",
        email: adminEmail,
        mobile: "9876543210",
        password: hashedPassword,
        role: "ADMIN",
        isActive: true,
      },
    });
    console.log("Created admin user: admin@evorasolutions.in / Admin@123");
  }

  // Seed default categories for Industrial Storage & Conveyor Systems
  const categories = [
    {
      name: "Industrial Storage Solutions",
      slug: "industrial-storage-solutions",
      description: "Heavy duty industrial storage systems and warehouse space optimization solutions.",
    },
    {
      name: "Pallet Racking Systems",
      slug: "pallet-racking-systems",
      description: "High-density heavy duty pallet racking for warehouses and logistics hubs.",
    },
    {
      name: "Cantilever Racking",
      slug: "cantilever-racking",
      description: "Specialized racking for long, bulky materials like pipes, steel bars, and timber.",
    },
    {
      name: "Mezzanine Floors",
      slug: "mezzanine-floors",
      description: "Multi-tier structural steel mezzanine systems to double or triple vertical floor area.",
    },
    {
      name: "Industrial Conveyor Systems",
      slug: "industrial-conveyor-systems",
      description: "Automated conveyor lines for continuous and efficient industrial material handling.",
    },
    {
      name: "Roller Conveyors",
      slug: "roller-conveyors",
      description: "Heavy duty powered and gravity roller conveyors for boxes, cartons, and pallets.",
    },
    {
      name: "Belt Conveyors",
      slug: "belt-conveyors",
      description: "Flat, modular, and inclined belt conveyor systems for manufacturing and packaging.",
    },
  ];

  for (const cat of categories) {
    await prisma.category.upsert({
      where: { slug: cat.slug },
      update: {},
      create: {
        name: cat.name,
        slug: cat.slug,
        description: cat.description,
        isActive: true,
      },
    });
  }

  console.log("Categories seeded successfully!");

  // Seed sample flagship products with industrial storage & conveyor images
  const sampleProducts = [
    {
      slug: "heavy-duty-pallet-racking",
      name: "Heavy Duty Pallet Racking System",
      categorySlug: "pallet-racking-systems",
      shortDescription: "High-density selective pallet racking with blue upright frames and safety orange load beams.",
      description: "Engineered for maximum warehouse storage density, safety, and rapid forklift accessibility. Fabricated from certified high-tensile structural steel with electro-powder coated finish.",
      featured: true,
      image: "/images/pallet-racking.jpg",
      specifications: {
        "Load Capacity": "Up to 4,000 kg per beam level",
        "Height": "Up to 12 meters",
        "Material": "High-tensile certified structural steel",
        "Finish": "Durable Epoxy Powder Coated (Blue RAL 5015 & Orange RAL 2004)",
      },
      features: [
        "Heavy-duty beam safety lock pins",
        "Adjustable beam pitch (50mm increments)",
        "Direct access to every pallet position",
        "Compliant with international FEM & EN standards",
      ],
      applications: [
        "Logistics & 3PL Distribution Hubs",
        "Manufacturing Inventory Warehouses",
        "Cold Storage & FMCG Distribution",
      ],
    },
    {
      slug: "z-type-cleated-incline-conveyor",
      name: "Z-Type Cleated Incline Belt Conveyor",
      categorySlug: "belt-conveyors",
      shortDescription: "Swan-neck inclined cleated conveyor for floor-to-floor transport of boxes and bulk parts.",
      description: "Custom-built Z-incline conveyor featuring high-grip cleated blue belt, corrugated sidewalls, rigid stainless steel/aluminum frame, and variable speed drive.",
      featured: true,
      image: "/images/cleated-conveyor-blue.jpg",
      specifications: {
        "Belt Width": "300mm - 1200mm",
        "Incline Angle": "Up to 60 degrees",
        "Belt Material": "Food-grade PU/PVC with hot-welded cleats",
        "Speed": "Variable 5 to 30 m/min",
      },
      features: [
        "Corrugated sidewalls prevent material spillage",
        "Adjustable floor mounting legs with vibration dampers",
        "IP55/IP65 gear motor with safety overload protection",
        "Low noise, energy-efficient operation",
      ],
      applications: [
        "Packaging & Carton Elevation",
        "Automotive Component Handling",
        "Food & Pharma Secondary Packaging",
      ],
    },
    {
      slug: "multi-tier-mezzanine-storage-floor",
      name: "Multi-Tier Mezzanine Storage System",
      categorySlug: "mezzanine-floors",
      shortDescription: "Heavy-duty structural mezzanine floor with integrated staircases and multi-tier shelving.",
      description: "Transform unused vertical headroom into functional storage or production floors. Complete with heavy-duty columns, steel grating / chequered decking, and perimeter safety handrails.",
      featured: true,
      image: "/images/mezzanine-floor.jpg",
      specifications: {
        "Floor Load Capacity": "300 to 1,500 kg / sqm",
        "Decking Options": "Chequered plate, galvanized grating, or heavy particle board",
        "Structure": "Heavy-duty roll-formed / I-beam steel framework",
        "Safety": "Staircase with safety yellow handrails and kickplates",
      },
      features: [
        "Doubles or triples warehouse usable area without civil work",
        "Completely modular, relocatable, and expandable design",
        "Integrated multi-tier bin racking underneath",
        "Provision for goods lifts and pallet drop gates",
      ],
      applications: [
        "Spare Parts & Hardware Distribution",
        "E-Commerce Order Fulfillment Centers",
        "Assembly Workshops & Office Mezzanines",
      ],
    },
    {
      slug: "steep-incline-corrugated-sidewall-conveyor",
      name: "Steep Incline Corrugated Sidewall Conveyor",
      categorySlug: "belt-conveyors",
      shortDescription: "High-angle steep conveyor line for space-constrained vertical material elevation.",
      description: "Engineered for high-angle elevation where horizontal floor footprint is limited. Cross-rigid belt with deep corrugated rubber sidewalls and reinforced cross cleats.",
      featured: true,
      image: "/images/cleated-conveyor-green.jpg",
      specifications: {
        "Elevation Angle": "30 to 75 degrees",
        "Belt Type": "Cross-stabilized base belt with corrugated sidewalls",
        "Drive Type": "Shaft-mounted helical geared motor",
        "Frame": "Heavy formed steel with anti-corrosion coating",
      },
      features: [
        "Enables steep elevation without material rollback",
        "Minimal floor space consumption",
        "Self-cleaning rollers and return belt guides",
        "Smooth, continuous high-throughput discharge",
      ],
      applications: [
        "Bulk Goods & Granular Material Handling",
        "Recycling & Waste Management Facilities",
        "Industrial Parts & Stamping Plants",
      ],
    },
    {
      slug: "automated-powered-roller-conveyor-line",
      name: "Automated Powered Roller Conveyor Line",
      categorySlug: "roller-conveyors",
      shortDescription: "Motorized roller conveyor for high-throughput distribution centers and box sorting.",
      description: "High-speed automated roller conveyor system featuring motorized drive rollers (MDR), photo-eye sensor zones, and seamless zero-pressure accumulation.",
      featured: true,
      image: "/images/warehouse-automated-conveyor.jpg",
      specifications: {
        "Roller Diameter": "50mm / 60mm / 76mm precision steel rollers",
        "Conveying Speed": "10 to 60 m/min adjustable",
        "Control System": "PLC-integrated zero-pressure accumulation (ZPA)",
        "Load Rating": "Up to 150 kg per linear meter",
      },
      features: [
        "Zero-pressure accumulation avoids carton collisions",
        "Energy-efficient run-on-demand motor rollers",
        "Modular plug-and-play sections",
        "Side guide rails with quick-adjust handles",
      ],
      applications: [
        "E-Commerce Fulfillment Centers",
        "Airport Baggage & Parcel Logistics",
        "Manufacturing Assembly Lines",
      ],
    },
    {
      slug: "staircase-incline-flight-conveyor",
      name: "Staircase Incline Flight Conveyor",
      categorySlug: "belt-conveyors",
      shortDescription: "Specialized incline conveyor mounted alongside stairwells for floor-to-floor transfers.",
      description: "Compact stair-mounted flight conveyor designed to bridge multiple floors seamlessly. Ideal for transferring totes, cartons, and finished goods alongside existing stairways.",
      featured: true,
      image: "/images/stair-conveyor.jpg",
      specifications: {
        "Belt Width": "400mm - 800mm",
        "Cleat Height": "30mm - 75mm heavy-duty cleats",
        "Mounting": "Independent structural leg supports anchored to steps",
        "Safety": "Dual emergency stop pull-cords across full span",
      },
      features: [
        "Maximizes unused stairwell clearance",
        "Prevents manual carry hazards on stairs",
        "Bi-directional operation option available",
        "Integrated emergency stop controls at top and bottom",
      ],
      applications: [
        "Multi-story Warehouses & Basements",
        "Retail Store Backroom Inventory Transfers",
        "Textile & Garment Manufacturing Floors",
      ],
    },
    {
      slug: "heavy-duty-cantilever-racks",
      name: "Heavy Duty Cantilever Racking System",
      categorySlug: "cantilever-racking",
      shortDescription: "Ideal storage solution for long, irregular, and bulky items like pipes, timber, and steel bars.",
      description: "Specifically designed for uninterrupted horizontal loading of lengthy materials. Rugged structural columns with adjustable cantilever arms.",
      featured: true,
      image: "/images/pallet-racking.jpg",
      specifications: {
        "Arm Capacity": "500 to 2,000 kg per arm",
        "Column Height": "Up to 9 meters",
        "Configuration": "Single-sided (wall) or Double-sided (island)",
        "Finish": "Hot-dip galvanized for outdoors or powder-coated for indoors",
      },
      features: [
        "No front upright columns to obstruct long profiles",
        "Easily adjustable arm height in 75mm increments",
        "End-stops to prevent cylindrical materials rolling off",
        "Engineered for heavy forklift or overhead crane loading",
      ],
      applications: [
        "Steel Service Centers & Pipe Storage",
        "Timber & Plywood Warehouses",
        "Extrusion & PVC Pipe Stockyards",
      ],
    },
    {
      slug: "high-incline-cleated-elevator-conveyor",
      name: "High-Incline Cleated Elevator Conveyor",
      categorySlug: "industrial-conveyor-systems",
      shortDescription: "Heavy-duty vertical elevator conveyor with low feed bed and high-discharge chute.",
      description: "Rugged structural frame conveyor engineered for demanding elevation duties. Features deep sidewalls, reinforced bucket-style cleats, and a robust top-drive gear motor.",
      featured: true,
      image: "/images/elevator-conveyor.jpg",
      specifications: {
        "Incline Angle": "45 to 80 degrees",
        "Discharge Height": "Custom engineered up to 8 meters",
        "Cleat Profile": "T-cleats / scoop cleats vulcanized on belt",
        "Drive Motor": "High-torque reduction gear motor with backstop brake",
      },
      features: [
        "Heavy structural channel chassis for maximum rigidity",
        "Low feed hopper for easy manual or bin feeding",
        "Integrated backstop prevents reverse belt run on power cut",
        "Grease-sealed bearings with external lubrication ports",
      ],
      applications: [
        "Metal Stamping & Scrap Elevation",
        "Plastic Injection Molding Part Collection",
        "Heavy Packaging & Industrial Sorting",
      ],
    },
  ];

  for (const p of sampleProducts) {
    const category = await prisma.category.findUnique({
      where: { slug: p.categorySlug },
    });

    if (category) {
      const product = await prisma.product.upsert({
        where: { slug: p.slug },
        update: {
          name: p.name,
          categoryId: category.id,
          shortDescription: p.shortDescription,
          description: p.description,
          featured: p.featured,
          specifications: p.specifications,
          features: p.features,
          applications: p.applications,
          isActive: true,
        },
        create: {
          slug: p.slug,
          name: p.name,
          categoryId: category.id,
          shortDescription: p.shortDescription,
          description: p.description,
          featured: p.featured,
          specifications: p.specifications,
          features: p.features,
          applications: p.applications,
          isActive: true,
        },
      });

      // Clear existing images and insert updated primary image
      await prisma.productImage.deleteMany({
        where: { productId: product.id },
      });

      await prisma.productImage.create({
        data: {
          productId: product.id,
          imageUrl: p.image,
          isPrimary: true,
          sortOrder: 0,
          altText: p.name,
        },
      });
    }
  }

  console.log("Flagship products seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
