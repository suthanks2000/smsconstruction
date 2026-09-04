export interface CoreService {
  id: string;
  number: string;
  title: string;
  description: string;
  href: string;
  image: string;
  alt: string;
  tags: string[];
  ctaText: string;
}

export interface InteriorSpecialty {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
  alt: string;
}

export interface ProcessMilestone {
  step: string;
  title: string;
  description: string;
}

export interface TrustPillar {
  title: string;
  description: string;
  icon: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export const coreServices: CoreService[] = [
  {
    id: "interior-design",
    number: "01",
    title: "INTERIOR DESIGN",
    description: "Thoughtfully planned interiors for homes and spaces.",
    href: "/interior-design",
    image: "/images/services/interior.jpg",
    alt: "Bespoke residential interior design by SMS Construction",
    tags: ["Bedroom", "Kitchen", "False Ceiling", "TV Unit", "Wall Decor", "Terrace Garden"],
    ctaText: "Explore Interior Design",
  },
  {
    id: "construction",
    number: "02",
    title: "CONSTRUCTION",
    description: "Residential and building construction delivered with a clear process.",
    href: "/construction",
    image: "/images/services/construction.jpg",
    alt: "Residential and commercial building construction in Nagercoil",
    tags: ["Site Discovery", "Structural Masonry", "Foundation Engineering", "Turnkey Build"],
    ctaText: "Explore Construction",
  },
  {
    id: "design-planning",
    number: "03",
    title: "DESIGN & PLANNING",
    description: "Planning and design support before execution begins.",
    href: "/design-planning",
    image: "/images/services/planning.jpg",
    alt: "Architectural planning and space drafting",
    tags: ["Architectural Layouts", "3D Visualizations", "Vastu Compliance", "Material Spec"],
    ctaText: "Explore Design & Planning",
  },
  {
    id: "survey-approvals",
    number: "04",
    title: "SURVEY & APPROVALS",
    description: "Support for understanding site and project requirements.",
    href: "/survey-approvals",
    image: "/images/services/survey.jpg",
    alt: "Land survey and regulatory approval documentation",
    tags: ["Site Boundary Survey", "Topography Analysis", "Regulatory Guidance", "Document Prep"],
    ctaText: "Explore Survey & Approvals",
  },
  {
    id: "fabrication-works",
    number: "05",
    title: "FABRICATION WORKS",
    description: "Custom-built elements designed for the project and space.",
    href: "/fabrication-works",
    image: "/images/services/fabrication.jpg",
    alt: "Custom architectural metalwork and joinery fabrication",
    tags: ["Architectural Metalwork", "Custom Gates & Grills", "Structural Glazing", "Safety Railings"],
    ctaText: "Explore Fabrication Works",
  },
];

export const interiorSpecialties: InteriorSpecialty[] = [
  {
    id: "bedroom",
    title: "Bedroom",
    description: "Quiet retreats with tailored wardrobes, acoustic comfort, and ambient light.",
    href: "/interior-design#bedroom",
    image: "/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-bedroom-interior.webp",
    alt: "Master bedroom interior design at Nagarajan Residence in Nagercoil",
  },
  {
    id: "kitchen",
    title: "Kitchen",
    description: "High-efficiency culinary layouts with durable surfaces and smart storage.",
    href: "/interior-design#kitchen",
    image: "/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-kitchen.webp",
    alt: "Modern modular kitchen cabinetry and stone surfaces",
  },
  {
    id: "false-ceiling",
    title: "False Ceiling",
    description: "Clean architectural planes with recessed LED illumination and seamless finishes.",
    href: "/interior-design#false-ceiling",
    image: "/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-living-room-wide.webp",
    alt: "Architectural false ceiling with recessed lighting and warm wood accents",
  },
  {
    id: "tv-unit",
    title: "TV Unit",
    description: "Bespoke media consoles balancing fluted teak veneers and concealed wiring.",
    href: "/interior-design#tv-unit",
    image: "/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-tv-unit.webp",
    alt: "Custom fluted wood TV unit console with warm ambient backlighting",
  },
  {
    id: "wall-decor",
    title: "Wall Decor",
    description: "Tactile partitions, fluted paneling, and curated accent surfaces.",
    href: "/interior-design#wall-decor",
    image: "/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-decorative-partition.webp",
    alt: "Decorative wooden wall partition and custom living room decor",
  },
  {
    id: "terrace-garden",
    title: "Terrace Garden",
    description: "Open-air landscaped sanctuaries designed for coastal sun and natural breezes.",
    href: "/interior-design#terrace-garden",
    image: "/images/projects/courtyard-house.jpg",
    alt: "Open-air landscaped terrace garden and courtyard architecture",
  },
];

export const processMilestones: ProcessMilestone[] = [
  {
    step: "01",
    title: "Consultation",
    description: "Initial discovery to understand your lifestyle, plot parameters, and spatial aspirations in Nagercoil.",
  },
  {
    step: "02",
    title: "Planning",
    description: "Site study, spatial mapping, preliminary zoning alignment, and budget structuring.",
  },
  {
    step: "03",
    title: "Design",
    description: "Photorealistic 3D visual walkthroughs, material moodboards, and interior schematics.",
  },
  {
    step: "04",
    title: "Execution",
    description: "Coordinated civil work, structural engineering, bespoke joinery, and fit-out supervision.",
  },
  {
    step: "05",
    title: "Quality Check",
    description: "Rigorous multi-point quality audits for structural alignment, joinery precision, and material finish.",
  },
  {
    step: "06",
    title: "Handover",
    description: "Clean, styled, move-in-ready space delivered on schedule with warranty documentation.",
  },
];

export const trustPillars: TrustPillar[] = [
  {
    title: "Clear Planning",
    description: "Defined milestones, transparent estimates, and structured project roadmaps with zero ambiguous guesswork.",
    icon: "draw",
  },
  {
    title: "Thoughtful Design",
    description: "Architecture and interiors calibrated to local climate, natural cross-ventilation, and enduring regional materials.",
    icon: "architecture",
  },
  {
    title: "Coordinated Execution",
    description: "Seamless alignment between engineering, civil masonry, and interior craftsmanship under one dedicated team.",
    icon: "engineering",
  },
  {
    title: "Quality Focus",
    description: "Stringent material testing, certified structural grades, and precision joinery that stands the test of time.",
    icon: "verified",
  },
  {
    title: "End-to-End Approach",
    description: "A single accountable studio managing your space from initial sketches through to final key handover.",
    icon: "key",
  },
];

export const serviceFaqs: ServiceFaq[] = [
  {
    question: "What services does SMS Construction provide?",
    answer: "SMS Construction provides end-to-end building and interior solutions in Nagercoil and Kanyakumari district, encompassing Interior Design, Residential Construction, Architectural Design & Planning, Survey & Approvals Support, and Custom Fabrication Works.",
  },
  {
    question: "Do you handle both interior design and execution?",
    answer: "Yes. We offer complete turnkey execution. Our in-house team oversees the initial architectural or interior design concepts, 3D visualizations, material procurement, on-site civil works, and final fit-outs, ensuring consistent design fidelity.",
  },
  {
    question: "What areas do you serve from Nagercoil?",
    answer: "We operate from our Nagercoil studio and undertake residential and commercial projects across Nagercoil, Suchindram, Theroor, Kanyakumari, Marthandam, and neighboring regions throughout Kanyakumari District.",
  },
  {
    question: "Can I discuss a construction project before starting?",
    answer: "Absolutely. We offer initial consultations to review your plot, discuss lifestyle requirements, examine feasibility, and guide you through planning, budgeting, and regulatory considerations before any formal commitments.",
  },
  {
    question: "Can you design individual rooms such as bedrooms or kitchens?",
    answer: "Yes. While we build full-scale turnkey homes, our interior design studio regularly crafts dedicated spaces including modular kitchens, master bedroom retreats, custom TV consoles, false ceilings, and terrace gardens.",
  },
  {
    question: "How can I request a project quotation?",
    answer: "You can reach out through our contact page, submit an inquiry form, or call our studio directly. We will schedule a site review or discovery meeting to understand your scope and provide a detailed, itemized estimate.",
  },
  {
    question: "How does SMS Construction coordinate between civil works and interior finishings?",
    answer: "Because both civil engineering and interior joinery are directed by the same coordinated team, MEP conduits, wall niches, ceiling drops, and electrical lines are integrated into the structural phase, eliminating costly rework.",
  },
];
