export interface PrimaryService {
  number: string;
  slug: string;
  id: string;
  title: string;
  eyebrow: string;
  href: string;
  description: string;
  image: string;
  alt: string;
  subservices: string[];
  ctaText: string;
  matrix?: {
    design: string[];
    planning: string[];
  };
}

export interface JourneyStep {
  number: string;
  title: string;
  description: string;
  href: string;
}

export interface StartingPoint {
  id: string;
  need: string;
  service: string;
  href: string;
  description: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

// 5 Primary Services — Single Source of Truth
export const primaryServices: PrimaryService[] = [
  {
    number: "01",
    slug: "interior-design",
    id: "interior-design",
    title: "Interior Design",
    eyebrow: "Bespoke Residential Spaces",
    href: "/interior-design",
    description:
      "Bespoke residential interior architecture designed around your family's routine. We plan and execute custom modular kitchens, luxury bedroom joinery, ambient false ceiling illumination, TV consoles, and terrace gardens across Nagercoil.",
    image: "/images/services/services-interior-design-portrait.webp",
    alt: "Luxury modern residential living room interior with teakwood paneling and false ceiling lighting in Nagercoil, Tamil Nadu by SMS Construction",
    subservices: [
      "Modular Kitchens & Pantry",
      "Master & Kids Bedroom Joinery",
      "Cove Lighting & False Ceilings",
      "TV Units & Acoustic Wall Paneling",
      "Balcony & Terrace Green Patios",
    ],
    ctaText: "Explore Interior Design",
  },
  {
    number: "02",
    slug: "construction",
    id: "construction",
    title: "Civil Construction",
    eyebrow: "Turnkey Structural Execution",
    href: "/construction",
    description:
      "Turnkey civil and structural execution engineered for Nagercoil's coastal climate and heavy rainfall. From foundation pile work to reinforced RCC slab casting, premium brick masonry, and turnkey handover with strict quality audits.",
    image: "/images/services/services-civil-construction-portrait.webp",
    alt: "Active multi-story residential civil construction site with RCC framing and brick masonry in Nagercoil, Kanyakumari district by SMS Construction",
    subservices: [
      "Turnkey Residential Villas",
      "Commercial Plazas & Office Spaces",
      "Heavy RCC Structural Framing",
      "High-Grade Brick Masonry",
      "Weatherproofing & Site Supervision",
    ],
    ctaText: "Explore Construction",
  },
  {
    number: "03",
    slug: "design-planning",
    id: "design-planning",
    title: "Design & Planning",
    eyebrow: "3D Visualization & Engineering Sets",
    href: "/design-planning",
    description:
      "Comprehensive architectural visualization and engineering blueprints before groundbreaking. We prepare photorealistic 3D elevations, structural column schedules, Vastu-compliant layouts, and DTCP approval drawing sets.",
    image: "/images/services/services-design-planning-portrait.webp",
    alt: "Architectural design drafting studio with 3D elevations, villa model and structural blueprints in Nagercoil by SMS Construction",
    subservices: [
      "Photorealistic 3D Elevations",
      "Structural & Foundation Blueprints",
      "DTCP & Municipal Approval Sets",
      "Scientific Vastu Compliant Plans",
      "Electrical & Plumbing (MEP) Layouts",
    ],
    matrix: {
      design: [
        "3D Elevation",
        "Interior Design",
        "Walkthrough Videos",
        "Structural Designing",
      ],
      planning: [
        "Approval Drawings",
        "Vastu Plan",
        "3D Plan",
        "Electrical Plan",
        "Plumbing Plan",
        "Landscape Plan",
      ],
    },
    ctaText: "Explore Design & Planning",
  },
  {
    number: "04",
    slug: "survey-approvals",
    id: "survey-approvals",
    title: "Survey & Approvals",
    eyebrow: "Site Measurement & Discovery",
    href: "/survey-approvals",
    description:
      "Precision on-site land survey and government approval documentation across Kanyakumari district. Using advanced electronic Total Stations, we measure boundary contours, mark building columns on ground, and verify FMB records.",
    image: "/images/services/services-survey-approvals-portrait.webp",
    alt: "Total station digital land survey and site measurement on a residential plot in Nagercoil, Tamil Nadu by SMS Construction",
    subservices: [
      "Digital Total Station Land Surveys",
      "On-Ground Column & Building Marking",
      "Topographical & Contour Profiling",
      "FMB Revenue Sketch Verification",
      "DTCP / LPA Layout Documentation",
    ],
    ctaText: "Explore Survey & Approvals",
  },
  {
    number: "05",
    slug: "fabrication-works",
    id: "fabrication-works",
    title: "Fabrication Works",
    eyebrow: "Architectural Metal & Facades",
    href: "/fabrication-works",
    description:
      "Custom architectural metal engineering and modern exterior cladding fabricated in our dedicated workshop. Specializing in weather-resistant ACP facades, structural steel gates, stair balustrades, and aluminium glazing.",
    image: "/images/services/services-fabrication-works-portrait.webp",
    alt: "Architectural metal fabrication, structural steel gate and aluminium window section assembly in Nagercoil by SMS Construction",
    subservices: [
      "Modern ACP Facade Cladding",
      "Heavy-Duty Designer Steel Gates",
      "Stainless Steel & Glass Balustrades",
      "Architectural Aluminium Glazing",
      "Industrial Trusses & Shed Roofing",
    ],
    ctaText: "Explore Fabrication Works",
  },
];

// For backward compatibility
export const coreServices = primaryServices;

// Project Journey: 6 Connected Phases
export const projectJourney: JourneyStep[] = [
  {
    number: "01",
    title: "SURVEY",
    description: "Understand site boundaries, contour levels, and physical land parameters before planning.",
    href: "/survey-approvals",
  },
  {
    number: "02",
    title: "DESIGN & PLANNING",
    description: "Develop 3D visual concepts, functional floor layouts, and coordinated engineering plans.",
    href: "/design-planning",
  },
  {
    number: "03",
    title: "CONSTRUCTION",
    description: "Execute structural RCC framing, masonry, and civil engineering on ground.",
    href: "/construction",
  },
  {
    number: "04",
    title: "INTERIOR DESIGN",
    description: "Shape the living experience inside through custom millwork, false ceilings, and ambient lighting.",
    href: "/interior-design",
  },
  {
    number: "05",
    title: "FABRICATION",
    description: "Integrate specialized ACP panel systems, architectural steelwork, and aluminium fittings.",
    href: "/fabrication-works",
  },
  {
    number: "06",
    title: "FINISHED SPACE",
    description: "Complete walk-through handover of a unified, move-in-ready home or commercial environment.",
    href: "/projects",
  },
];

// Section 5: Choose Where to Start (Decision Support)
export const startingPoints: StartingPoint[] = [
  {
    id: "plan-home",
    need: "Planning a New Home",
    service: "Design & Planning",
    href: "/design-planning",
    description: "Start with 3D elevations, architectural plans, Vastu layouts, and complete pre-construction engineering.",
  },
  {
    id: "measure-land",
    need: "Need Site Measurements",
    service: "Survey & Approvals",
    href: "/survey-approvals",
    description: "Establish verified site boundaries, total station data, contour levels, and project-preparation documentation.",
  },
  {
    id: "build-space",
    need: "Building a New Space",
    service: "Construction",
    href: "/construction",
    description: "Execute turnkey residential, commercial, or structural RCC civil construction with on-site engineering oversight.",
  },
  {
    id: "interior-fitout",
    need: "Designing Your Interiors",
    service: "Interior Design",
    href: "/interior-design",
    description: "Craft bespoke living spaces, bedrooms, modular kitchens, custom TV consoles, false ceilings, and wall decor.",
  },
  {
    id: "custom-fab",
    need: "Need Custom Fabrication",
    service: "Fabrication Works",
    href: "/fabrication-works",
    description: "Fabricate lightweight ACP cladding, structural steel framing, or precision aluminium profiles built to project specs.",
  },
];

// Section 9: 10 Authoritative Service FAQs
export const serviceFaqs: ServiceFaq[] = [
  {
    question: "What services does SMS Construction provide?",
    answer:
      "SMS Construction provides five primary integrated disciplines: Interior Design, Construction, Design & Planning, Survey & Approvals, and Fabrication Works across Nagercoil and Kanyakumari District.",
  },
  {
    question: "Does SMS Construction handle both construction and interior design?",
    answer:
      "Yes. We operate as an integrated design-and-build studio, coordinating civil building construction and interior joinery under a single execution team to eliminate discrepancies between architectural plans and finished spaces.",
  },
  {
    question: "What interior design services are available?",
    answer:
      "Our interior design services cover tailored bedrooms, high-efficiency modular kitchens, architectural false ceilings with recessed lighting, bespoke TV media units, decorative wall panelling, and landscaped terrace gardens.",
  },
  {
    question: "What design and planning services are available?",
    answer:
      "We provide architectural design (3D elevations, interior 3D modeling, walkthrough videos, and structural engineering) alongside regulatory planning (approval drawings, Vastu layouts, 3D plans, electrical, plumbing, and landscape planning).",
  },
  {
    question: "What types of site surveys are available?",
    answer:
      "Site survey services include tape surveys, digital measurements, total station surveys, building marking surveys, topographical mapping, contour surveys, layout preparation, and FMB coordination to establish verified site boundaries.",
  },
  {
    question: "What fabrication services are available?",
    answer:
      "Our custom fabrication services cover architectural ACP (Aluminium Composite Panel) systems, structural and decorative steel fabrication, and lightweight aluminium profiles for partitions, screens, and windows.",
  },
  {
    question: "Can different services be combined for one project?",
    answer:
      "Yes. While clients may engage SMS Construction for a single specialized service, most residential and commercial projects combine multiple stages—such as survey, planning, construction, and interiors—for seamless end-to-end delivery.",
  },
  {
    question: "Which service should I start with for a new project?",
    answer:
      "For a vacant land plot, we recommend beginning with Survey & Approvals or Design & Planning. For existing buildings requiring remodeling or new fit-outs, you can start directly with Interior Design or Fabrication Works.",
  },
  {
    question: "Do you provide services in Nagercoil?",
    answer:
      "Yes. SMS Construction is based in Nagercoil, Tamil Nadu, and provides all five services across Nagercoil, Theroor, Suchindram, Kanyakumari, Marthandam, and all surrounding areas of Kanyakumari District.",
  },
  {
    question: "How can I discuss my project requirements?",
    answer:
      "You can call our Nagercoil studio directly at +91 94880 21183, connect via WhatsApp, or submit your project details through our online contact form to schedule an initial consultation with our engineering team.",
  },
];
