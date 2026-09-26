export interface FabricationServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  applicationScope: string;
  image: string;
  alt: string;
  considerations: string[];
}

export interface MaterialComparisonItem {
  material: string;
  tagline: string;
  bestSuitedTo: string;
  characteristics: string;
  siteCoordination: string;
}

export interface ProcessStep {
  step: string;
  number: string;
  title: string;
  desc: string;
}

export interface FabricationContextCategory {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

export interface QualityDetailItem {
  aspect: string;
  description: string;
  icon: string;
}

export interface FabricationFaq {
  question: string;
  answer: string;
}

// 01 to 03: Actual Fabrication Services (Rendered once, no duplicate ACP)
export const fabricationServices: FabricationServiceItem[] = [
  {
    id: "acp-works",
    number: "01",
    title: "ACP Works",
    category: "Composite Panel Systems",
    description:
      "ACP fabrication for architectural and project-specific applications where lightweight panel systems and clean finished surfaces are required.",
    applicationScope:
      "Panel-based architectural applications and selected exterior/interior surface finishes coordinated with building elevations.",
    image: "/images/services/acp-works.webp",
    alt: "ACP panel fabrication for an architectural project by SMS Construction",
    considerations: [
      "Lightweight composite panel fabrication based on measured grid lines",
      "Clean geometric reveals and perimeter trim alignment",
      "Fabrication detailing coordinated with structural substructure",
      "Accurate corner mitres and surface return folds",
    ],
  },
  {
    id: "steel-fabrication",
    number: "02",
    title: "Steel Fabrication",
    category: "Metal Framing & Components",
    description:
      "Steel fabrication for project requirements where strength, structure or custom fabricated elements form part of the design and construction scope.",
    applicationScope:
      "Fabricated elements where strength and project requirements call for steel, with clear distinction between architectural components and engineered structural members.",
    image: "/images/services/steel-fabrication.webp",
    alt: "Steel fabrication work at a construction site by SMS Construction",
    considerations: [
      "Profile cutting, fitting, and clean weld transitions",
      "Dimensional verification against site gridlines and floor levels",
      "Protective shop-primer application before site delivery",
      "Mounting and anchoring points resolved for site installation",
    ],
  },
  {
    id: "aluminium-fabrication",
    number: "03",
    title: "Aluminium Fabrication",
    category: "Lightweight Architectural Profiles",
    description:
      "Aluminium fabrication for lightweight architectural and project-specific elements where the material suits the design and application.",
    applicationScope:
      "Lightweight architectural and fabricated elements where aluminium's profile versatility and natural corrosion resistance suit the scope.",
    image: "/images/services/aluminium-fabrication.webp",
    alt: "Aluminium fabrication detail for an architectural project by SMS Construction",
    considerations: [
      "Precision extrusion cutting and tight corner joints",
      "Subtle architectural framing with clean geometric sightlines",
      "Surface finish preparation suited to coastal atmospheric conditions",
      "Integration with surrounding masonry, glass, or interior panelling",
    ],
  },
];

// Section 4: Material Comparison
export const materialComparison: MaterialComparisonItem[] = [
  {
    material: "ACP",
    tagline: "Composite Panel Systems",
    bestSuitedTo:
      "Panel-based architectural applications and selected exterior/interior finishes.",
    characteristics:
      "Lightweight flat surfaces, modular panel layouts, and clean contemporary visual lines.",
    siteCoordination:
      "Requires measured sub-frame framing aligned with wall planes.",
  },
  {
    material: "Steel",
    tagline: "High-Strength Fabricated Elements",
    bestSuitedTo:
      "Fabricated elements where strength and project requirements call for steel.",
    characteristics:
      "High rigidity, versatile profile forms, welded connectivity, and solid load capability.",
    siteCoordination:
      "Requires anti-corrosive priming and coordinated structural or masonry anchor points.",
  },
  {
    material: "Aluminium",
    tagline: "Lightweight Profile Framing",
    bestSuitedTo:
      "Lightweight architectural and fabricated elements where aluminium is appropriate.",
    characteristics:
      "Inherent atmospheric corrosion resistance, crisp extrusion shapes, and lighter dead-weight.",
    siteCoordination:
      "Requires careful fastener selection and isolated contact with dissimilar metals.",
  },
];

// Section 5: Fabrication Process (Continuous architectural line)
export const fabricationProcessSteps: ProcessStep[] = [
  {
    step: "1",
    number: "01",
    title: "Understand",
    desc: "Review the requirement and intended application.",
  },
  {
    step: "2",
    number: "02",
    title: "Measure",
    desc: "Confirm relevant dimensions and site conditions.",
  },
  {
    step: "3",
    number: "03",
    title: "Detail",
    desc: "Define the fabrication direction and required details.",
  },
  {
    step: "4",
    number: "04",
    title: "Fabricate",
    desc: "Produce the fabricated element according to the project scope.",
  },
  {
    step: "5",
    number: "05",
    title: "Finish",
    desc: "Prepare the surface/finish as required by the project.",
  },
  {
    step: "6",
    number: "06",
    title: "Install",
    desc: "Coordinate installation at the relevant site stage.",
  },
];

// Section 7: Where Fabrication Becomes Part of the Project (Broad Contextual Categories)
export const fabricationContextCategories: FabricationContextCategory[] = [
  {
    title: "Architectural Elements",
    subtitle: "Envelope & Facade Detailing",
    description:
      "Fabricated detailing integrated into building exterior envelopes, parapet copings, and architectural feature zones.",
    icon: "apartment",
  },
  {
    title: "Interior Elements",
    subtitle: "Internal Framing & Metal Accents",
    description:
      "Internal custom framing, spatial partitions, display surrounds, and architectural metal accents designed to complement joinery.",
    icon: "meeting_room",
  },
  {
    title: "Project-Specific Components",
    subtitle: "Tailored Site Assemblies",
    description:
      "Bespoke metal components resolved to unique dimensional constraints, awkward spans, or non-standard site junction conditions.",
    icon: "architecture",
  },
  {
    title: "Exterior Applications",
    subtitle: "Weather-Exposed Coordination",
    description:
      "Fabricated components planned for outdoor environmental exposure, with finish specifications matched to coastal atmospheric weathering.",
    icon: "wb_sunny",
  },
];

// Section 9: Quality / Detail Pillars
export const fabricationQualityDetails: QualityDetailItem[] = [
  {
    aspect: "Alignment",
    description:
      "True geometric squareness, level mounting planes, and consistent reveal gaps aligned with adjoining surfaces.",
    icon: "straighten",
  },
  {
    aspect: "Edges",
    description:
      "Clean edge trimming, deburred profile perimeters, and dressed sheet transitions free of raw cut burrs.",
    icon: "crop_free",
  },
  {
    aspect: "Joints",
    description:
      "Uniform weld transitions, flush mechanical fasteners, and mitred profile corners calibrated for durability.",
    icon: "join_inner",
  },
  {
    aspect: "Surface Finish",
    description:
      "Properly prepared surfaces receiving appropriate shop primer, powder coating, or anodized protective treatments.",
    icon: "format_paint",
  },
  {
    aspect: "Proportion",
    description:
      "Material section thicknesses and visual weights calibrated to complement surrounding architectural volumes.",
    icon: "aspect_ratio",
  },
  {
    aspect: "Installation",
    description:
      "Secure anchoring systems designed to interface reliably with concrete slabs, blockwork, or secondary sub-framing.",
    icon: "build",
  },
];

// Section 11: 8 Factual FAQs
export const fabricationFaqs: FabricationFaq[] = [
  {
    question: "What fabrication services does SMS Construction provide?",
    answer:
      "SMS Construction provides custom architectural fabrication services covering ACP (Aluminium Composite Panel) works, steel fabrication, and aluminium fabrication, integrated with our construction and interior project scopes in Nagercoil and Kanyakumari District.",
  },
  {
    question: "What are ACP works?",
    answer:
      "ACP works involve fabricating and installing Aluminium Composite Panels onto engineered sub-frames. ACP is used for lightweight architectural exterior cladding, clean fascias, and selected interior panelling where smooth, flat, low-maintenance surfaces are needed.",
  },
  {
    question: "What is steel fabrication?",
    answer:
      "Steel fabrication involves cutting, welding, and assembling steel sections for project requirements where strength, rigidity, or tailored metal components form part of the design. When a project requires structural engineering, distinct calculations and approvals are maintained.",
  },
  {
    question: "What is aluminium fabrication?",
    answer:
      "Aluminium fabrication uses lightweight architectural aluminium extrusions and profiles. It is chosen for components where natural resistance to coastal corrosion, lighter dead-weight, and slim geometric frames suit the architectural or interior application.",
  },
  {
    question: "How do I choose between ACP, steel and aluminium?",
    answer:
      "Material choice depends on application, design intent, structural requirements, site exposure, and project scope. Steel is suited where strength is paramount, aluminium where lightweight corrosion resistance is needed, and ACP where flat panelized architectural surfaces are desired.",
  },
  {
    question: "Can fabrication be coordinated with construction?",
    answer:
      "Yes. Because SMS Construction provides turnkey civil construction as well as fabrication, anchor plates, conduit openings, and mounting brackets can be embedded directly during masonry and concrete stages to avoid post-construction damage.",
  },
  {
    question: "Can fabrication work be part of an interior project?",
    answer:
      "Yes. Fabricated metal elements—such as room dividers, frame borders, and custom architectural accents—can be coordinated directly with our interior design team to harmonize with cabinetry, false ceilings, and finishes.",
  },
  {
    question: "How can I discuss a fabrication requirement?",
    answer:
      "You can contact SMS Construction by calling +91 94880 21183, sending a WhatsApp message, or submitting your site details and drawings through our online contact form to arrange an initial project discussion.",
  },
];
