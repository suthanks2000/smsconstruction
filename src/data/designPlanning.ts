export interface DesignServiceItem {
  number: string;
  id: string; // anchor id, e.g. "3d-elevation"
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  imageAlt?: string;
  link?: string;
  linkText?: string;
  deliverables?: string[];
}

export interface PlanningServiceItem {
  number: string;
  id: string; // anchor id, e.g. "approval-drawings"
  title: string;
  shortDescription: string;
  detail: string;
  scopeTags: string[];
}

export interface DeliverableItem {
  number: string;
  title: string;
  category: "Design" | "Planning";
}

export interface UseCaseScenario {
  number: string;
  title: string;
  description: string;
}

export interface DesignPlanningFaq {
  question: string;
  answer: string;
}

export const designServices: DesignServiceItem[] = [
  {
    number: "01",
    id: "3d-elevation",
    title: "3D Elevation",
    subtitle: "Exterior Architectural Form",
    description:
      "Visualize the exterior form, surface finishes, window openings, and architectural character of your residential or commercial project before construction begins.",
    image: "/images/projects/modern-edge-residence.jpg",
    imageAlt: "3D architectural elevation visual for a modern residential project",
    deliverables: ["Exterior Facade Views", "Material & Color Study", "Daylight Perspective"],
  },
  {
    number: "02",
    id: "interior-design",
    title: "Interior Design",
    subtitle: "Space, Function & Visual Direction",
    description:
      "Shape interior living spaces around everyday function, comfort, lighting, and aesthetic direction. Coordinated early with civil structures to avoid on-site rework.",
    image: "/images/services/interior.jpg",
    imageAlt: "Interior design and space planning visualization",
    link: "/interior-design",
    linkText: "Explore Interior Design",
    deliverables: ["Room Layouts & Zoning", "False Ceiling Schematics", "Joinery & Finishes"],
  },
  {
    number: "03",
    id: "walkthrough-videos",
    title: "Walkthrough Videos",
    subtitle: "Spatial Experience Visualization",
    description:
      "Experience the proposed space through walkthrough-style visual presentation. Understand spatial flow, room transitions, and sightlines before ground is broken.",
    image: "/images/services/planning.jpg",
    imageAlt: "3D architectural walkthrough perspective and spatial presentation",
    deliverables: ["Continuous Spatial Flow", "Room-to-Room Transitions", "Perspective Comprehension"],
  },
  {
    number: "04",
    id: "structural-designing",
    title: "Structural Designing",
    subtitle: "Practical Engineering Alignment",
    description:
      "Support the structural direction of the project where applicable. We coordinate load paths, column positions, and slab layouts with the architectural plan.",
    image: "/images/services/civil-construction-hero.jpg",
    imageAlt: "Structural engineering layout and civil coordination",
    deliverables: ["Column & Beam Layout Alignment", "Load Path Coordination", "Civil-to-Design Interface"],
  },
];

export const planningServices: PlanningServiceItem[] = [
  {
    number: "01",
    id: "approval-drawings",
    title: "Approval Drawings",
    shortDescription:
      "Drawings prepared to support the project's applicable approval and documentation requirements, depending on the project and authority involved.",
    detail:
      "Plan sketches, elevations, and setback layouts prepared systematically to meet municipal and local documentation needs for submission.",
    scopeTags: ["Site Layout", "Floor Plans", "Setback Verification", "Authority Documentation"],
  },
  {
    number: "02",
    id: "vastu-plan",
    title: "Vastu Plan",
    shortDescription:
      "A planning layer that considers the client's Vastu-related requirements where requested.",
    detail:
      "Aligning key rooms, entrances, kitchens, and water bodies with directional Vastu principles without compromising modern living utility.",
    scopeTags: ["Directional Alignment", "Room Orientation", "Entrance Positioning", "Custom Harmonization"],
  },
  {
    number: "03",
    id: "3d-plan",
    title: "3D Plan",
    shortDescription:
      "A three-dimensional planning view that helps clients understand spatial arrangement and proportions.",
    detail:
      "Isometric and perspective cut-section views showing room volumes, internal wall heights, and circulation clearance at a glance.",
    scopeTags: ["Isometric Cut-Sections", "Proportion Visualization", "Circulation Mapping", "Volume Comprehension"],
  },
  {
    number: "04",
    id: "electrical-plan",
    title: "Electrical Plan",
    shortDescription:
      "Planning of electrical points and related layout requirements based on the project scope.",
    detail:
      "Detailed mapping of switchboards, power outlets, appliance points, lighting circuits, and conduit paths before masonry work finishes.",
    scopeTags: ["Switchboard Locations", "Appliance Drops", "Lighting Circuits", "Conduit Layouts"],
  },
  {
    number: "05",
    id: "plumbing-plan",
    title: "Plumbing Plan",
    shortDescription:
      "Planning for plumbing points and layout requirements based on the project scope.",
    detail:
      "Coordinate water supply pipelines, sanitary drainage lines, bathroom fixtures, and external inspection chambers for long-term serviceability.",
    scopeTags: ["Water Supply Lines", "Sanitary Drain Drops", "Fixture Alignment", "Chamber Placement"],
  },
  {
    number: "06",
    id: "landscape-plan",
    title: "Landscape Plan",
    shortDescription:
      "Planning of outdoor areas, greenery and landscape elements where included in the project.",
    detail:
      "Integrating garden patches, perimeter walkways, exterior lighting points, and driveway paving into a cohesive outdoor environment.",
    scopeTags: ["Garden Layouts", "Walkway Paving", "Exterior Drainage", "Outdoor Ambience"],
  },
];

export const planningDeliverables: DeliverableItem[] = [
  { number: "01", title: "3D Visualisation", category: "Design" },
  { number: "02", title: "Interior Design Direction", category: "Design" },
  { number: "03", title: "Walkthrough Presentation", category: "Design" },
  { number: "04", title: "Structural Design", category: "Design" },
  { number: "05", title: "Approval Drawings", category: "Planning" },
  { number: "06", title: "Vastu Plan", category: "Planning" },
  { number: "07", title: "3D Plan", category: "Planning" },
  { number: "08", title: "Electrical Plan", category: "Planning" },
  { number: "09", title: "Plumbing Plan", category: "Planning" },
  { number: "10", title: "Landscape Plan", category: "Planning" },
];

export const planningUseCases: UseCaseScenario[] = [
  {
    number: "01",
    title: "Planning a New Home",
    description:
      "Before purchasing materials or hiring builders, establish clear space zoning, floor plans, and architectural direction to build with confidence.",
  },
  {
    number: "02",
    title: "Preparing for Construction",
    description:
      "Eliminate costly trial-and-error on site by resolving design ambiguities, structural heights, and service layouts on coordinated drawings first.",
  },
  {
    number: "03",
    title: "Designing a New Interior",
    description:
      "Ensure wardrobe depths, kitchen counters, false ceiling drops, and TV units are integrated into the civil shell before brickwork finishes.",
  },
  {
    number: "04",
    title: "Wanting to Visualize the Finished Space",
    description:
      "Experience realistic 3D exterior elevations and walkthrough previews so you know exactly how the project will look and feel before committing.",
  },
  {
    number: "05",
    title: "Planning Electrical and Plumbing Requirements",
    description:
      "Map switch points, AC conduits, drainage slopes, and fixture lines early so no finished concrete or brick wall needs hacking later.",
  },
  {
    number: "06",
    title: "Preparing Project Drawings",
    description:
      "Organize accurate dimensioned drawings, authority documentation, and site layouts that guide engineering contractors without ambiguity.",
  },
  {
    number: "07",
    title: "Coordinating Multiple Design Requirements",
    description:
      "Harmonize family lifestyle needs, Vastu directions, budget parameters, and climate factors into one cohesive, workable plan.",
  },
];

export const designPlanningFaqs: DesignPlanningFaq[] = [
  {
    question: "What design services does SMS Construction provide?",
    answer:
      "SMS Construction provides four core design services: 3D Elevation modeling, Interior Design planning, Walkthrough Video visualization, and Structural Designing coordination.",
  },
  {
    question: "What is a 3D elevation?",
    answer:
      "A 3D elevation is an architectural digital visualization that shows the exterior facade of a building with realistic materials, textures, window openings, colors, and lighting proportions before physical construction begins.",
  },
  {
    question: "What is included in interior design?",
    answer:
      "Interior design includes functional room space planning, furniture layout, false ceiling schematics, lighting concepts, modular kitchen design, wardrobe detailing, and material finish curation tailored to your lifestyle.",
  },
  {
    question: "What are walkthrough videos used for?",
    answer:
      "Walkthrough videos provide an animated, moving visual tour of the proposed space. They help clients understand spatial flow, ceiling heights, room connections, and real-world proportions in a way static 2D plans cannot convey.",
  },
  {
    question: "What is structural designing?",
    answer:
      "Structural designing coordinates column placements, beam depths, slab layouts, and load paths to support the architectural layout safely and practically based on project requirements.",
  },
  {
    question: "What are approval drawings?",
    answer:
      "Approval drawings are technical architectural drawings prepared to support the project's documentation and municipal submission requirements, including site plans, floor plans, sections, and setback compliance based on local rules.",
  },
  {
    question: "What is included in a 3D plan?",
    answer:
      "A 3D plan is an isometric or perspective three-dimensional view of the floor layout. It displays interior room arrangements, door swings, wall heights, and room-to-room circulation clearly from above.",
  },
  {
    question: "Do you provide electrical and plumbing plans?",
    answer:
      "Yes. We prepare dedicated electrical point layout plans (switches, light circuits, AC points, conduits) and plumbing plans (water inlet, drain lines, sanitary fixtures) based on the agreed project scope.",
  },
  {
    question: "Can Vastu requirements be included in the planning stage?",
    answer:
      "Yes. Where requested by the client, we incorporate Vastu planning principles into room placement, entrance positioning, kitchen direction, and room zoning while preserving modern architectural functionality.",
  },
  {
    question: "Do you provide design and planning services in Nagercoil?",
    answer:
      "Yes. SMS Construction is based in Nagercoil, Tamil Nadu, and provides design and planning services across Nagercoil, Suchindram, Theroor, Kanyakumari, Marthandam, and surrounding locations in Kanyakumari District.",
  },
];
