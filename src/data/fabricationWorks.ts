export interface FabricationCategory {
  id: string;
  number: string;
  title: string;
  materialFocus: string;
  description: string;
  details: string[];
  image?: string;
  alt?: string;
}

export interface FabricationProcessStep {
  number: string;
  step: string;
  title: string;
  action: string;
  description: string;
  siteRole: string;
}

export interface DetailPillar {
  number: string;
  title: string;
  description: string;
  focus: string;
}

export interface FabricationAudienceScenario {
  number: string;
  title: string;
  description: string;
  solution: string;
}

export interface FabricationFaq {
  question: string;
  answer: string;
}

export const fabricationCategories: FabricationCategory[] = [
  {
    id: "custom-metalwork",
    number: "01",
    title: "Custom Metalwork",
    materialFocus: "Architectural Steel & Profiled Sections",
    description:
      "Purpose-built architectural metal elements engineered to exact site dimensions—incorporating clean perimeter edges, balanced visual weight, and robust mounting details.",
    details: [
      "Custom entry gates and protective compound grill profiles",
      "Perimeter structural framing tailored to boundary walls",
      "Durable architectural accents integrated into building facades",
      "Weather-resistant primed and coated surface treatments",
    ],
    image: "/images/services/fabrication.jpg",
    alt: "Custom architectural metalwork and fabrication elements in Nagercoil",
  },
  {
    id: "partitions",
    number: "02",
    title: "Partitions & Room Dividers",
    materialFocus: "Fluted Profiles, Metal Frames & Timber Accents",
    description:
      "Spatial dividers designed to define room boundaries between foyers, living areas, and dining spaces while preserving sightlines and natural ambient light.",
    details: [
      "Floor-to-ceiling fluted vertical dividers and room dividers",
      "Geometric decorative screens separating entryways from living zones",
      "Custom framework anchoring decorative panels and privacy louvers",
      "Concealed base and ceiling anchor plates for seamless visual lines",
    ],
    image:
      "/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-decorative-partition.webp",
    alt: "Bespoke fluted room partition installed at Nagarajan Residence in Nagercoil",
  },
  {
    id: "frames",
    number: "03",
    title: "Custom Frames & Enclosures",
    materialFocus: "Profiled Box Sections & Border Angles",
    description:
      "Precision-measured perimeter frames crafted to enclose architectural openings, glass panes, service ducts, and feature panels with flush transitions.",
    details: [
      "Recessed wall niche surrounds and display framing",
      "Concealed utility door frames and access panel edging",
      "Structural sub-framing for interior panel cladding",
      "Rigid border profiles designed to resist warping and deflection",
    ],
  },
  {
    id: "railings",
    number: "04",
    title: "Stair & Balcony Railings",
    materialFocus: "Handrails, Balusters & Safety Spindles",
    description:
      "Comfortable handrails, balustrades, and terrace edge guards that balance ergonomic grip dimensions with contemporary architectural proportions.",
    details: [
      "Internal staircase railings with clean weld transitions",
      "External balcony and terrace perimeter safety barriers",
      "Minimalist vertical spindle arrays calibrated for child safety",
      "Anchor brackets coordinated with concrete staircase treads",
    ],
  },
  {
    id: "architectural-elements",
    number: "05",
    title: "Architectural Features",
    materialFocus: "Mixed Materials, Brackets & Fascia Profiles",
    description:
      "Specialty custom details that give a building its distinctive visual signature—from cantilevered entrance canopies to customized exterior fins.",
    details: [
      "Entrance canopy sub-structures and decorative support brackets",
      "Exterior shading fins and architectural facade accents",
      "Courtyard pergola frameworks and sky-lit trellis structures",
      "Custom planter boxes and exterior hardware accents",
    ],
  },
  {
    id: "interior-fabrication",
    number: "06",
    title: "Interior Fabrication",
    materialFocus: "Joinery Frameworks & Media Backing",
    description:
      "Internal support structures, media wall framing, and decorative metal reveals engineered to integrate directly with cabinetwork and false ceiling drops.",
    details: [
      "Reinforced backing frames for wall-mounted TV media consoles",
      "Metal edge trims and shadow gaps within modular joinery",
      "Suspension frameworks for feature lighting elements",
      "Custom metal legs and structural plinths for bespoke furniture",
    ],
    image:
      "/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-tv-unit-detail.webp",
    alt: "Custom joinery and internal framing detail at Nagarajan Residence",
  },
];

export const fabricationProcessSteps: FabricationProcessStep[] = [
  {
    number: "01",
    step: "Stage 1 of 6",
    title: "Understand",
    action: "Design Intent & Function",
    description:
      "We begin by reviewing the broader architectural or interior drawings to understand where the fabricated element will sit, what load it bears, and how it will be viewed.",
    siteRole: "Reviewing spatial context and functional requirements in Nagercoil.",
  },
  {
    number: "02",
    step: "Stage 2 of 6",
    title: "Measure",
    action: "On-Site Dimensioning",
    description:
      "Taking exact physical measurements directly on site after civil masonry or plastering is complete to account for real-world floor levels and wall plumb variations.",
    siteRole: "Physical site verification before cutting materials.",
  },
  {
    number: "03",
    step: "Stage 3 of 6",
    title: "Develop",
    action: "Shop Drawing & Mockups",
    description:
      "Translating measurements into detailed fabrication drawings, defining joint details, profile gauges, anchor points, and material intersections with adjacent finishes.",
    siteRole: "Resolving fixing points and connection clearances.",
  },
  {
    number: "04",
    step: "Stage 4 of 6",
    title: "Fabricate",
    action: "Workshop Construction",
    description:
      "Cutting, profiling, fitting, and assembling raw metal or composite materials in our workshop according to verified dimensions and structural requirements.",
    siteRole: "Careful assembly and true-square alignment.",
  },
  {
    number: "05",
    step: "Stage 5 of 6",
    title: "Finish",
    action: "Surface Treatment & Prep",
    description:
      "Grinding welds flush, deburring sharp edges, and applying multi-layer protective primers, durable matte enamels, or architectural powder coats suited to coastal climate.",
    siteRole: "Corrosion protection and uniform color consistency.",
  },
  {
    number: "06",
    step: "Stage 6 of 6",
    title: "Install",
    action: "On-Site Anchoring & Fitting",
    description:
      "Delivering finished assemblies to the project site, anchoring securely into concrete or masonry without damaging surrounding tilework, paint, or joinery.",
    siteRole: "Careful on-site placement, leveling, and final handover.",
  },
];

export const fabricationDetailPillars: DetailPillar[] = [
  {
    number: "01",
    title: "Joints & Welds",
    description:
      "Clean corner miters and ground-smooth joints that eliminate unsightly weld seams, ensuring continuous visual surfaces.",
    focus: "Visual Continuity",
  },
  {
    number: "02",
    title: "Proportions & Scale",
    description:
      "Profile widths and member thicknesses calibrated to look deliberate and architectural rather than heavy or industrial.",
    focus: "Spatial Harmony",
  },
  {
    number: "03",
    title: "Clean Edges",
    description:
      "Deburred, radiused perimeter edges that are safe to the touch and hold surface coating layers evenly over time.",
    focus: "Tactile Quality",
  },
  {
    number: "04",
    title: "Durable Finishes",
    description:
      "Protective primers and weather-resilient coatings selected to withstand coastal humidity and everyday residential wear.",
    focus: "Long-Term Resilience",
  },
  {
    number: "05",
    title: "Level & Plumb Alignment",
    description:
      "Laser-checked vertical and horizontal installation that aligns perfectly with adjacent tiles, false ceilings, and walls.",
    focus: "Installation Precision",
  },
  {
    number: "06",
    title: "Architectural Integration",
    description:
      "Concealed anchor screws and discreet wall brackets so fixings never compete with the beauty of the finished element.",
    focus: "Seamless Attachment",
  },
];

export const fabricationAudienceScenarios: FabricationAudienceScenario[] = [
  {
    number: "01",
    title: "A Custom Element Does Not Fit Standard Sizes",
    description:
      "You have an entryway, stairwell, or balcony with unique dimensions where off-the-shelf market products look undersized, oversized, or ill-fitted.",
    solution: "Bespoke on-site measurement ensures millimeter-accurate tailoring to your space.",
  },
  {
    number: "02",
    title: "A Project Needs a Specific Design Detail",
    description:
      "Your architectural or interior design requires a particular geometric screen, fluted partition, or custom gate design that cannot be bought in stores.",
    solution: "Custom workshop assembly directly realizes your architectural drawings.",
  },
  {
    number: "03",
    title: "An Interior Requires a Made-to-Fit Component",
    description:
      "Your living room layout calls for an open room divider, a custom TV support frame, or a decorative metal reveal that coordinates with wooden cabinetry.",
    solution: "Fabrication is coordinated simultaneously with interior woodwork and paint finishes.",
  },
  {
    number: "04",
    title: "A Fabricated Feature Needs to Work With Existing Architecture",
    description:
      "During a renovation, a new balcony railing or entrance gate must harmoniously match the existing home's structural character and masonry lines.",
    solution: "Profiles, gauges, and finishes are carefully matched to your existing building.",
  },
  {
    number: "05",
    title: "Design and Fabrication Considered Together",
    description:
      "Homeowners who prefer one unified team to design, measure, fabricate, and install elements rather than coordinating separate metal contractors and carpenters.",
    solution: "Zero accountability gaps between architectural design and site installation.",
  },
];

export const fabricationFaqs: FabricationFaq[] = [
  {
    question: "What fabrication works does SMS Construction provide?",
    answer:
      "SMS Construction provides custom architectural fabrication integrated with our residential and commercial projects in Nagercoil. This includes custom metalwork, decorative room partitions, custom window and door sub-frames, stair and balcony railings, architectural entrance features, and internal joinery support frames.",
  },
  {
    question: "Can fabrication be customized to a specific space?",
    answer:
      "Yes. Every fabrication element we produce is made-to-order based on physical on-site measurements. We evaluate floor level variations, ceiling drops, and adjacent wall materials to ensure the finished piece fits your exact spatial dimensions.",
  },
  {
    question: "Can fabrication work be coordinated with interior design?",
    answer:
      "Yes, and that is one of our strongest advantages. Because SMS Construction executes full turnkey interiors, our fabrication team works alongside our interior designers and carpenters. This ensures partitions, media wall backings, and metal accents coordinate seamlessly with false ceiling lines and cabinetry.",
  },
  {
    question: "Can custom elements be made for existing spaces?",
    answer:
      "Yes. We frequently fabricate custom railings, room partitions, and replacement gates for existing homes during renovation or interior remodeling projects across Nagercoil and surrounding localities.",
  },
  {
    question: "What information is needed before discussing a fabrication project?",
    answer:
      "It helps to have approximate dimensions of the area, a photo of the site or room where the element will be installed, and any reference photos or sketches illustrating your design preference. If you don't have these, our team can visit your site to take measurements.",
  },
  {
    question: "Does the fabrication process include installation?",
    answer:
      "Yes. Our service covers the complete lifecycle—from on-site measurement and workshop assembly to protective surface finishing, transport, and careful on-site installation and anchoring by our trained fitting team.",
  },
  {
    question: "Do you provide fabrication services in Nagercoil?",
    answer:
      "Yes. SMS Construction is based in Nagercoil, Tamil Nadu, and provides custom fabrication works across Nagercoil, Suchindram, Theroor, Kanyakumari, Marthandam, and nearby areas within Kanyakumari district.",
  },
  {
    question: "How can I discuss a custom fabrication requirement?",
    answer:
      "You can submit an inquiry through our contact form, call us directly at +91 94880 21183, or message us on WhatsApp with photos and sketches of what you have in mind. We will arrange a consultation at our Nagercoil studio or directly at your project site.",
  },
];
