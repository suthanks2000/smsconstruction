export interface BuildingCategory {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  alt: string;
  tags: string[];
}

export interface ConstructionProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface SitePriority {
  title: string;
  description: string;
  icon: string;
}

export interface ConstructionTrustPillar {
  title: string;
  description: string;
  icon: string;
}

export interface ConstructionFaq {
  question: string;
  answer: string;
}

export const buildingCategories: BuildingCategory[] = [
  {
    id: "residential-construction",
    number: "01",
    title: "Residential Construction",
    subtitle: "Bespoke Homes & Villas",
    description:
      "Independent residences, multi-generational villas, and bespoke homes planned around natural daylight, coastal cross-ventilation, and durable structural masonry.",
    image: "/images/projects/modern-edge-residence.jpg",
    alt: "Bespoke residential villa construction by SMS Construction in Nagercoil",
    tags: [
      "Independent Villas",
      "Multi-Storey Residences",
      "Turnkey Civil Shell",
      "Site-Adapted Foundations",
    ],
  },
  {
    id: "new-build-projects",
    number: "02",
    title: "New Build Projects",
    subtitle: "Ground-Up Execution",
    description:
      "Full-lifecycle construction from initial soil assessment, excavation, and RCC framework to brick masonry, slab casting, and exterior weatherproofing.",
    image: "/images/services/construction.jpg",
    alt: "Ground-up construction site engineering by SMS Construction",
    tags: [
      "Earthwork & Grading",
      "RCC Frame Engineering",
      "Brick & Block Masonry",
      "Weather-Shield Envelopes",
    ],
  },
  {
    id: "renovation-improvements",
    number: "03",
    title: "Renovation & Structural Improvements",
    subtitle: "Remodeling & Expansion",
    description:
      "Structural additions, floor expansions, wall relocations, and comprehensive structural upgrades designed to modernize and extend the life of existing properties.",
    image: "/images/projects/courtyard-house.jpg",
    alt: "Residential expansion and structural renovation in Nagercoil",
    tags: [
      "Floor Level Additions",
      "Structural Wall Alterations",
      "Facade Modernization",
      "Waterproofing & Retrofits",
    ],
  },
  {
    id: "commercial-construction",
    number: "04",
    title: "Commercial Construction",
    subtitle: "Business & Retail Premises",
    description:
      "High-durability commercial building shells, retail spaces, and corporate offices planned for efficient circulation, heavy foot-traffic resilience, and clean utility distribution.",
    image: "/images/screen2_exterior.jpg",
    alt: "Commercial building construction and structural execution in Nagercoil",
    tags: [
      "Retail & Office Shells",
      "Heavy-Duty Flooring Bases",
      "High-Volume MEP Conduits",
      "Façade & Glazing Prep",
    ],
  },
];

export const constructionProcessSteps: ConstructionProcessStep[] = [
  {
    step: "01",
    title: "Understand",
    description:
      "Thorough site assessment, plot orientation, soil characteristics, and architectural brief definition in Nagercoil.",
  },
  {
    step: "02",
    title: "Plan",
    description:
      "Structural schematics, detailed material quantity estimation, timeline milestone mapping, and municipal alignment.",
  },
  {
    step: "03",
    title: "Coordinate",
    description:
      "Procurement scheduling, bar-bending alignment, shuttering inspections, and MEP conduit integration before any casting.",
  },
  {
    step: "04",
    title: "Execute",
    description:
      "Disciplined civil execution — footing, column casting, brick masonry, slab curing, and exterior plastering.",
  },
  {
    step: "05",
    title: "Check",
    description:
      "Multi-stage quality audits testing concrete compaction, surface plumb lines, structural curing periods, and waterproofing integrity.",
  },
  {
    step: "06",
    title: "Handover",
    description:
      "Utility pressure testing, comprehensive site clearance, documentation package, and formal key handover.",
  },
];

export const sitePriorities: SitePriority[] = [
  {
    title: "Project Coordination",
    description:
      "Aligning masons, bar benders, electricians, and plumbers so MEP runs smoothly inside concrete and walls without post-pour hacking.",
    icon: "hub",
  },
  {
    title: "Site Understanding",
    description:
      "Adapting foundation depths, plinth levels, and retaining walls to local soil depth, water table, and natural drainage patterns in Kanyakumari district.",
    icon: "terrain",
  },
  {
    title: "Material Planning",
    description:
      "Calculating batch requirements, concrete grades, and reinforcement steel early to maintain continuous workflow without job-site idling.",
    icon: "inventory",
  },
  {
    title: "Execution Sequencing",
    description:
      "Enforcing mandatory curing cycles for slabs and columns before advancing to subsequent structural loading stages.",
    icon: "schedule",
  },
  {
    title: "Quality Checks",
    description:
      "Regular plumb-line verification, structural alignment audits, and multi-point moisture barrier inspections at each milestone.",
    icon: "verified",
  },
  {
    title: "Clear Communication",
    description:
      "Transparent milestone updates and scheduled site walkthroughs keeping homeowners fully informed throughout the build.",
    icon: "chat",
  },
];

export const constructionTrustPillars: ConstructionTrustPillar[] = [
  {
    title: "Clear Project Communication",
    description:
      "Regular site progress updates, scheduled walkthroughs, and single-point accountability from foundation to roof slab.",
    icon: "forum",
  },
  {
    title: "Structured Planning",
    description:
      "Detailed quantity estimates, defined construction milestones, and transparent scope tracking with zero guesswork.",
    icon: "draw",
  },
  {
    title: "Coordinated Execution",
    description:
      "Civil masonry and internal utility trades operate in lockstep without subcontractor conflict or buck-passing.",
    icon: "engineering",
  },
  {
    title: "Attention to Details",
    description:
      "Disciplined formwork, proper vibration compaction, and strict curing timeframes observed on every concrete pour.",
    icon: "architecture",
  },
  {
    title: "Design-to-Build Continuity",
    description:
      "The architectural intent drafted on drawings is faithfully executed on site by the same unified team.",
    icon: "handshake",
  },
];

export const constructionFaqs: ConstructionFaq[] = [
  {
    question: "What construction services does SMS Construction provide?",
    answer:
      "SMS Construction provides complete residential and commercial construction services in Nagercoil, including new home builds, structural expansions, RCC framed construction, brick masonry, turnkey shell execution, and integrated interior fit-out coordination.",
  },
  {
    question: "Do you undertake residential construction in Nagercoil?",
    answer:
      "Yes. Residential construction is our primary discipline. We build independent villas, duplex homes, multi-generational family residences, and custom modern homes across Nagercoil and Kanyakumari District.",
  },
  {
    question: "Can you help with project planning before construction begins?",
    answer:
      "Absolutely. We offer complete pre-construction planning services, including site evaluation, plot layout schematics, architectural drawings, quantity estimation, and municipal approval guidance before any physical work starts on site.",
  },
  {
    question: "Do you handle construction execution and coordination?",
    answer:
      "Yes. We operate as a full-service builder. Our in-house engineering team manages on-site excavation, foundation casting, reinforcement steel placement, brick masonry, slab curing, and direct subcontractor coordination under unified supervision.",
  },
  {
    question: "Can construction and interior design be planned together?",
    answer:
      "Yes, and we strongly recommend it. When structural construction and interior design are coordinated from day one, electrical conduits, plumbing drops, ceiling pockets, and partition anchors are cast into the shell, eliminating unnecessary wall cutting and rework later.",
  },
  {
    question: "What is the construction process from start to handover?",
    answer:
      "Our process follows six structured phases: Site assessment and brief understanding, structural planning and estimation, procurement and trade coordination, civil execution and masonry, rigorous quality audits with curing checks, and final testing and handover.",
  },
  {
    question: "Do you work outside Nagercoil?",
    answer:
      "Yes. While headquartered in Nagercoil, we actively construct residential and commercial buildings throughout Kanyakumari District, including Suchindram, Theroor, Kanyakumari, Marthandam, Colachel, and neighboring areas.",
  },
  {
    question: "How can I request a construction quotation?",
    answer:
      "You can contact us via our website inquiry form, call our studio directly, or message us on WhatsApp. We will arrange an initial site evaluation or blueprint review to understand your requirements and prepare an itemized estimate.",
  },
];
