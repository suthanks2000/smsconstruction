export interface PlanningScope {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
}

export interface PlanningProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface PlanningAudienceItem {
  title: string;
  description: string;
  icon: string;
}

export interface PlanningFaq {
  question: string;
  answer: string;
}

export const planningScopes: PlanningScope[] = [
  {
    id: "project-brief",
    number: "01",
    title: "Project Brief & Requirements",
    description:
      "Translating your initial thoughts, family lifestyle, room requirements, and budget expectations into an actionable architectural brief.",
    tags: [
      "Lifestyle Discovery",
      "Spatial Needs Assessment",
      "Budget Alignment",
      "Functional Scope Definition",
    ],
  },
  {
    id: "site-understanding",
    number: "02",
    title: "Site Understanding & Context",
    description:
      "Evaluating plot boundaries, sun angles, wind directions, surrounding buildings, and local topography to ground the project in its environment.",
    tags: [
      "Plot Orientation",
      "Solar & Wind Analysis",
      "Topography & Drainage Review",
      "Access & Setback Mapping",
    ],
  },
  {
    id: "space-planning",
    number: "03",
    title: "Space Planning & Layouts",
    description:
      "Structuring room-to-room relationships, internal circulation pathways, functional zoning, and natural light optimization across all levels.",
    tags: [
      "Functional Zoning",
      "Circulation Corridors",
      "Natural Daylight Mapping",
      "Ventilation Flow",
    ],
  },
  {
    id: "design-direction",
    number: "04",
    title: "Architectural & Interior Direction",
    description:
      "Developing the overarching visual and structural character—balancing massing, window proportions, ceiling heights, and cohesive spatial volumes.",
    tags: [
      "Volumetric Massing",
      "Proportion Calibrations",
      "Ceiling Drop Schematics",
      "Visual Cohesion",
    ],
  },
  {
    id: "material-finish",
    number: "05",
    title: "Material & Finish Strategy",
    description:
      "Curating resilient structural and surface materials—hardwoods, natural stones, concrete formulations, and coatings suited to coastal weather.",
    tags: [
      "Hardwood & Veneer Specs",
      "Stone & Tile Selections",
      "Moisture-Resistant Surfaces",
      "Tactile Texture Boards",
    ],
  },
  {
    id: "execution-planning",
    number: "06",
    title: "Execution & Services Planning",
    description:
      "Pre-planning MEP conduit pathways, plumbing drops, structural load points, and construction sequencing before on-site ground is broken.",
    tags: [
      "MEP Conduits Mapping",
      "Civil-to-Interior Interface",
      "Construction Sequencing",
      "Milestone Phasing",
    ],
  },
];

export const planningProcessSteps: PlanningProcessStep[] = [
  {
    step: "01",
    title: "Understand",
    description:
      "Initial discovery conversation to unpack your spatial intentions, lifestyle patterns, and project parameters in Nagercoil.",
  },
  {
    step: "02",
    title: "Assess",
    description:
      "Evaluating the physical plot, boundary setbacks, natural lighting angles, and regional environmental considerations.",
  },
  {
    step: "03",
    title: "Plan",
    description:
      "Developing functional layout options, zoning private and public spaces, and optimizing internal circulation.",
  },
  {
    step: "04",
    title: "Develop",
    description:
      "Translating 2D schematics into 3D volumetric visualizations, defining proportions and architectural features.",
  },
  {
    step: "05",
    title: "Refine",
    description:
      "Collaboratively reviewing iterations, testing material pairings, and adjusting layout nuances with practical clarity.",
  },
  {
    step: "06",
    title: "Prepare",
    description:
      "Finalizing documentation, service conduit schematics, and execution roadmaps for a seamless transition into civil build.",
  },
];

export const planningAudienceItems: PlanningAudienceItem[] = [
  {
    title: "Planning a New Home",
    description:
      "Before purchasing materials or hiring builders, establish clear space zoning, floor plans, and architectural direction to build with confidence.",
    icon: "home",
  },
  {
    title: "Considering a Major Renovation",
    description:
      "Understand structural feasibility, wall modification impacts, and layout potential before commencing disruptive demolition work.",
    icon: "auto_fix_high",
  },
  {
    title: "Unsure How to Use Available Space",
    description:
      "Transform awkward plot shapes, narrow footprints, or dark internal corners into purposeful, naturally lit living environments.",
    icon: "space_dashboard",
  },
  {
    title: "Wanting Interior & Construction to Align",
    description:
      "Coordinate plumbing, electrical switchboards, and false ceilings early so no concrete or brick walls are hacked after casting.",
    icon: "layers",
  },
  {
    title: "Preparing Before Execution",
    description:
      "Eliminate costly trial-and-error on site by resolving design ambiguities, structural heights, and material finishes on drawings first.",
    icon: "checklist",
  },
];

export const planningFaqs: PlanningFaq[] = [
  {
    question: "What does design and planning include?",
    answer:
      "Design & Planning encompasses project brief definition, site and environmental evaluation, functional space zoning, 2D architectural layouts, 3D volumetric visualizations, material direction, and MEP conduit pre-planning prior to civil construction.",
  },
  {
    question: "Why is planning important before construction?",
    answer:
      "Planning establishes spatial clarity, functional room sizes, and accurate quantity requirements before breaking ground. It prevents costly on-site structural modifications, delays from undecided layouts, and mismatched plumbing or electrical placements.",
  },
  {
    question: "Can SMS Construction help plan a project before execution?",
    answer:
      "Yes. We regularly work with homeowners during the exploratory stage. Whether you plan to build immediately or in the future, our team helps clarify plot potential, architectural schematics, and budget estimates.",
  },
  {
    question: "Can design planning include interior requirements?",
    answer:
      "Yes. We advocate for simultaneous architectural and interior planning. Mapping out wardrobe depths, kitchen counters, false ceiling lights, and TV units during the planning stage ensures electrical conduits and structural recesses are integrated into the civil shell.",
  },
  {
    question: "Can I discuss my project before deciding to build?",
    answer:
      "Certainly. We welcome clients for initial discovery meetings where we examine your plot dimensions, explore family requirements, and discuss feasible spatial approaches without any immediate obligation to proceed.",
  },
  {
    question: "What information should I prepare before a planning consultation?",
    answer:
      "It helps to bring your plot dimensions or survey sketch, any approximate room wishlists, personal design preferences or photos of styles you appreciate, and your tentative budget range. If you don't have all of these, we can guide you through the process.",
  },
  {
    question: "Do you provide design and planning services in Nagercoil?",
    answer:
      "Yes. Our design studio is centrally located in Nagercoil, and we actively plan residential and commercial projects across Nagercoil, Suchindram, Theroor, Kanyakumari, Marthandam, and surrounding areas in Kanyakumari District.",
  },
  {
    question: "How can I request a consultation?",
    answer:
      "You can submit a project inquiry through our contact form, call our office directly at +91 94880 21183, or message us on WhatsApp. We will schedule a dedicated meeting at our Nagercoil studio or directly on your plot.",
  },
];
