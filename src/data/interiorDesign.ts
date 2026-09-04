export interface InteriorSpecialtyDetail {
  anchorId: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  alt: string;
  highlights: string[];
}

export interface ApproachStep {
  step: string;
  title: string;
  description: string;
}

export interface CraftDetail {
  title: string;
  description: string;
  image: string;
  alt: string;
}

export interface ClientExpectation {
  title: string;
  description: string;
  icon: string;
}

export interface InteriorFaq {
  question: string;
  answer: string;
}

export const interiorSpecialtiesData: InteriorSpecialtyDetail[] = [
  {
    anchorId: "bedroom",
    number: "01",
    title: "Bedroom",
    subtitle: "Quiet Retreats",
    description:
      "Custom bedroom interiors designed around comfort, storage and everyday use. Tailored wardrobe systems, acoustic headboard paneling, and indirect lighting create restful personal sanctuaries.",
    image: "/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-bedroom-interior.webp",
    alt: "Custom bedroom interior design in Nagercoil by SMS Construction",
    highlights: [
      "Integrated Wardrobe Systems",
      "Acoustic Wall Paneling",
      "Concealed Bedside Charging",
      "Warm Dimmable Ambient Profiles",
    ],
  },
  {
    anchorId: "kitchen",
    number: "02",
    title: "Kitchen",
    subtitle: "Culinary Ergonomics",
    description:
      "Functional kitchen spaces planned around workflow, storage and practical use. Durable quartz countertops, moisture-resistant marine-grade cabinetry, and optimized working triangles make cooking effortless.",
    image: "/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-kitchen.webp",
    alt: "Modern kitchen interior at Nagarajan Residence in Nagercoil",
    highlights: [
      "Ergonomic Work Triangle",
      "Moisture-Resistant Marine Ply",
      "Durable Quartz Countertops",
      "Full-Extension Modular Drawers",
    ],
  },
  {
    anchorId: "false-ceiling",
    number: "03",
    title: "False Ceiling",
    subtitle: "Architectural Planes",
    description:
      "Ceiling designs that help define lighting, proportions and the overall interior character. Clean drywall drops, recessed magnetic profiles, and perimeter cove illumination create balanced visual warmth.",
    image: "/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-living-room-wide.webp",
    alt: "Architectural false ceiling with recessed lighting in Nagercoil home",
    highlights: [
      "Perimeter Ambient Cove Lighting",
      "Minimalist Drywall Suspensions",
      "Acoustic Dampening Profiles",
      "Concealed Electrical & AC Routes",
    ],
  },
  {
    anchorId: "tv-unit",
    number: "04",
    title: "TV Unit",
    subtitle: "Media Architecture",
    description:
      "Custom TV and media-wall solutions designed to integrate storage and visual balance. Fluted teak paneling, floating consoles, and hidden cable pathways keep entertainment zones uncluttered.",
    image: "/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-tv-unit.webp",
    alt: "Custom TV unit interior at Nagarajan Residence",
    highlights: [
      "Fluted Burma Teak Veneers",
      "Concealed Cable Raceways",
      "Floating Low-Profile Consoles",
      "Warm Backlit LED Highlights",
    ],
  },
  {
    anchorId: "wall-decor",
    number: "05",
    title: "Wall Decor",
    subtitle: "Tactile Surfaces",
    description:
      "Decorative wall treatments and feature elements that add depth and character to a room. Open-slat room dividers, textured lime plasters, and architectural niches provide rich spatial layering.",
    image: "/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-decorative-partition.webp",
    alt: "Decorative wooden wall partition and wall decor by SMS Construction",
    highlights: [
      "Slatted Timber Partitions",
      "Textured Architectural Plasters",
      "Curated Display Niches",
      "Warm Metallic & Brass Accents",
    ],
  },
  {
    anchorId: "terrace-garden",
    number: "06",
    title: "Terrace Garden",
    subtitle: "Biophilic Living",
    description:
      "Thoughtfully planned terrace spaces that bring greenery and usable outdoor living into the home. Weatherproof pergolas, native coastal plantings, and integrated masonry seating create breezy open-air retreats.",
    image: "/images/projects/courtyard-house.jpg",
    alt: "Landscaped terrace garden and open-air courtyard architecture",
    highlights: [
      "Weatherproof Timber Pergolas",
      "Low-Maintenance Coastal Flora",
      "Built-In Masonry Seating",
      "Low-Voltage Pathway Illumination",
    ],
  },
];

export const approachSteps: ApproachStep[] = [
  {
    step: "01",
    title: "Understand",
    description:
      "We listen closely to how your family lives, your daily routines, storage needs, and aesthetic aspirations in Nagercoil.",
  },
  {
    step: "02",
    title: "Plan",
    description:
      "We analyze room proportions, traffic circulation, and natural light paths to structure an efficient space layout.",
  },
  {
    step: "03",
    title: "Design",
    description:
      "We develop photorealistic 3D visual walkthroughs, material pairings, and joinery details for every room.",
  },
  {
    step: "04",
    title: "Refine",
    description:
      "Together, we review physical material samples, adjust cabinetry layouts, and finalize lighting specifications.",
  },
  {
    step: "05",
    title: "Execute",
    description:
      "Our in-house joinery craftsmen and site supervisors build, fit, and align every element with disciplined care.",
  },
  {
    step: "06",
    title: "Handover",
    description:
      "We conduct a comprehensive finish inspection, deep clean, and deliver a styled, move-in-ready home.",
  },
];

export const craftDetails: CraftDetail[] = [
  {
    title: "Proportions & Sightlines",
    description:
      "Carefully calibrating ceiling drops, partition heights, and door clearances so rooms feel expansive and naturally proportioned.",
    image: "/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-living-room.webp",
    alt: "Living room interior proportions and clear sightlines at Nagarajan Residence",
  },
  {
    title: "Bespoke Millwork & Joinery",
    description:
      "Precision veneer grain-matching, hand-finished fluted slats, and durable hardware engineered for humid coastal climates.",
    image: "/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-tv-unit-detail.webp",
    alt: "Close-up craftsmanship of fluted teak veneer TV unit joinery",
  },
  {
    title: "Layered Ambient Lighting",
    description:
      "Harmonizing warm indirect coves, directional spot fixtures, and functional task illumination for balanced evening comfort.",
    image: "/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-entrance.webp",
    alt: "Warm ambient entrance lighting and wooden partition",
  },
  {
    title: "Concealed Utility & Storage",
    description:
      "Integrating hidden wire chases, flush-front storage units, and seamless closet systems that keep everyday spaces uncluttered.",
    image: "/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-bedroom-wardrobe.webp",
    alt: "Custom wardrobe storage cabinetry and joinery craftsmanship",
  },
];

export const clientExpectations: ClientExpectation[] = [
  {
    title: "Clear Space Planning",
    description:
      "Functional floor layouts where every square foot has purpose, eliminating awkward dead zones and cramped pathways.",
    icon: "space_dashboard",
  },
  {
    title: "Thoughtful Interior Direction",
    description:
      "A unified, timeless aesthetic connecting your living, dining, and private bedrooms with harmonious palette transitions.",
    icon: "palette",
  },
  {
    title: "Practical Storage Considerations",
    description:
      "Deep pantry cupboards, organized bedroom wardrobes, and customized vanity units designed around your actual belongings.",
    icon: "inventory_2",
  },
  {
    title: "Material & Finish Coordination",
    description:
      "Hardwoods, stones, paints, and laminates curated specifically to resist coastal humidity and daily wear.",
    icon: "texture",
  },
  {
    title: "Custom Interior Elements",
    description:
      "Bespoke TV consoles, fluted room dividers, and specialized cabinetry tailored exactly to your room measurements.",
    icon: "architecture",
  },
  {
    title: "Execution Coordination",
    description:
      "Single-team accountability uniting carpentry, painting, electrical cabling, and civil finishing without subcontractor confusion.",
    icon: "handshake",
  },
];

export const interiorFaqs: InteriorFaq[] = [
  {
    question: "What interior design services does SMS Construction provide?",
    answer:
      "SMS Construction provides complete residential interior design solutions in Nagercoil, including full-home turnkey interiors, space planning, modular kitchen design, bedroom styling with custom wardrobes, false ceiling illumination, bespoke TV units, decorative wall partitions, and terrace garden landscaping.",
  },
  {
    question: "Do you handle both interior design and execution?",
    answer:
      "Yes. We are a design-and-build studio. Our in-house team develops the architectural and interior drawings, 3D renderings, and material specifications, and then oversees the physical carpentry, electrical cabling, painting, and installation on-site.",
  },
  {
    question: "Can you design individual rooms such as bedrooms or kitchens?",
    answer:
      "Yes. While we often undertake complete turnkey homes, we also design and execute individual high-impact spaces such as modular kitchens, master suites, custom TV media walls, and living room false ceilings.",
  },
  {
    question: "Do you provide interior design services in Nagercoil?",
    answer:
      "Yes. Our studio is based in Nagercoil, and we actively design and execute homes across Nagercoil, Suchindram, Theroor, Kanyakumari, Marthandam, and nearby localities in Kanyakumari District.",
  },
  {
    question: "How does the interior design process work?",
    answer:
      "Our process follows six structured milestones: Initial lifestyle consultation, space planning and zoning, photorealistic 3D visualization and material boards, collaborative design refinement, on-site joinery and fit-out execution, and final handover with quality inspections.",
  },
  {
    question: "Can I discuss my project before deciding on a design?",
    answer:
      "Certainly. We welcome homeowners for an exploratory discovery conversation where we review floor plans, discuss personal requirements, explore potential layout options, and provide realistic budget guidance before any contractual agreement.",
  },
  {
    question: "How can I request a quotation for an interior project?",
    answer:
      "You can submit an inquiry through our contact page, message us on WhatsApp, or call our studio directly. We will schedule a site visit or office meeting to review your space and provide an itemized, transparent quotation.",
  },
  {
    question: "How long does an interior design project usually take?",
    answer:
      "Project timelines vary based on scope, floor area, and customization depth. An individual room or modular kitchen may take 3 to 5 weeks, while a full 3 to 4-bedroom turnkey home typically requires 8 to 16 weeks from approved 3D drawings to move-in handover.",
  },
];
