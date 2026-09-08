export interface CatalogImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface InteriorCategory {
  id: string;
  anchorId: string;
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryImage: CatalogImage;
  supportingImages: CatalogImage[];
  video?: {
    src: string;
    poster: string;
    title: string;
  };
  extraImages: CatalogImage[];
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

export interface InteriorFaq {
  question: string;
  answer: string;
}

/* =========================================================================
   GROUP A: INTERIOR DESIGN CATALOG (SERVICE & DESIGN CAPABILITY SHOWCASE)
   Note: These images represent studio capabilities across interior spaces.
   They are NOT labeled as Nagarajan Residence or any single project.
========================================================================= */
export const interiorCategories: InteriorCategory[] = [
  /* 01: BEDROOM */
  {
    id: "bedroom",
    anchorId: "bedroom",
    number: "01",
    eyebrow: "01 / BEDROOM",
    title: "Bedroom Interiors",
    description: "Bedroom interiors designed around comfort, storage and everyday use.",
    primaryImage: {
      src: "/images/catalog/bedroom/bedroom-interior-design-01.webp",
      alt: "Contemporary master bedroom interior with custom wardrobe joinery and warm illumination",
      width: 1600,
      height: 1279,
    },
    supportingImages: [
      {
        src: "/images/catalog/bedroom/bedroom-interior-design-02.webp",
        alt: "Modern bedroom with integrated acoustic headboard paneling and recessed bedside lighting",
      },
      {
        src: "/images/catalog/bedroom/bedroom-interior-design-03.webp",
        alt: "Bespoke full-height wardrobe system with textured laminate finish",
      },
      {
        src: "/images/catalog/bedroom/bedroom-interior-design-04.webp",
        alt: "Cozy bedroom retreat featuring warm ambient cove lighting and floating bedside table",
      },
      {
        src: "/images/catalog/bedroom/bedroom-interior-design-05.webp",
        alt: "Spacious bedroom suite with ergonomic storage solutions and minimalist finishings",
      },
    ],
    video: {
      src: "/images/catalog/bedroom/bedroom-interior-design-video.mp4",
      poster: "/images/catalog/bedroom/bedroom-poster.webp",
      title: "Bedroom Space Walkthrough Video",
    },
    extraImages: [
      { src: "/images/catalog/bedroom/bedroom-catalog-extra-01.webp", alt: "Bedroom storage and spatial layout detail" },
      { src: "/images/catalog/bedroom/bedroom-catalog-extra-02.webp", alt: "Bedroom dressing area and mirror joinery" },
      { src: "/images/catalog/bedroom/bedroom-catalog-extra-03.webp", alt: "Full-height bespoke bedroom wardrobe detailing" },
      { src: "/images/catalog/bedroom/bedroom-catalog-extra-04.webp", alt: "Minimalist bedroom wardrobe with clean handles" },
      { src: "/images/catalog/bedroom/bedroom-catalog-extra-05.webp", alt: "Warm ambient bedside lighting and nightstand integration" },
      { src: "/images/catalog/bedroom/bedroom-catalog-extra-06.webp", alt: "Bedside lighting cove and texture treatment" },
      { src: "/images/catalog/bedroom/bedroom-catalog-extra-07.webp", alt: "Bedroom false ceiling integration and soft glow" },
      { src: "/images/catalog/bedroom/bedroom-catalog-extra-08.webp", alt: "Custom headboard panelling and wood accents" },
      { src: "/images/catalog/bedroom/bedroom-catalog-extra-09.webp", alt: "Guest bedroom configuration with compact storage" },
      { src: "/images/catalog/bedroom/bedroom-catalog-extra-10.webp", alt: "Master suite dressing partition and mirror illumination" },
      { src: "/images/catalog/bedroom/bedroom-catalog-extra-11.webp", alt: "Bedroom natural light study and drape coordination" },
      { src: "/images/catalog/bedroom/bedroom-catalog-extra-12.webp", alt: "Modern sliding wardrobe system" },
      { src: "/images/catalog/bedroom/bedroom-catalog-extra-13.webp", alt: "Concealed dresser storage and drawer organizers" },
      { src: "/images/catalog/bedroom/bedroom-catalog-extra-14.webp", alt: "Bedroom acoustic wall panelling detail" },
      { src: "/images/catalog/bedroom/bedroom-catalog-extra-15.webp", alt: "Integrated vanity and study nook in bedroom" },
      { src: "/images/catalog/bedroom/bedroom-catalog-extra-16.webp", alt: "Master bedroom suite spatial layout" },
      { src: "/images/catalog/bedroom/bedroom-catalog-extra-17.webp", alt: "Modern bedroom ceiling cove lighting and texture coordination" },
      { src: "/images/catalog/bedroom/bedroom-catalog-extra-18.webp", alt: "Concealed bedside switches and charging provisions" },
      { src: "/images/catalog/bedroom/bedroom-catalog-extra-19.webp", alt: "Under-bed ambient profile lighting" },
      { src: "/images/catalog/bedroom/bedroom-catalog-extra-20.webp", alt: "Floor-to-ceiling storage cabinetry" },
      { src: "/images/catalog/bedroom/bedroom-catalog-extra-21.webp", alt: "Warm wood tones and soft fabric coordination" },
      { src: "/images/catalog/bedroom/bedroom-catalog-extra-22.webp", alt: "Contemporary bedroom interior perspective" },
      { src: "/images/catalog/bedroom/bedroom-catalog-extra-23.webp", alt: "Custom bedroom joinery finishing" },
    ],
    highlights: [
      "Integrated Floor-to-Ceiling Wardrobes",
      "Acoustic Headboard Wall Treatments",
      "Concealed Bedside Utilities & Charging",
      "Layered Dimmable Night-time Illumination",
    ],
  },

  /* 02: KITCHEN */
  {
    id: "kitchen",
    anchorId: "kitchen",
    number: "02",
    eyebrow: "02 / KITCHEN",
    title: "Kitchen Interiors",
    description: "Functional kitchen spaces planned around everyday workflow, storage and practical use.",
    primaryImage: {
      src: "/images/catalog/kitchen/kitchen-catalog-heic-01.webp",
      alt: "Modern modular kitchen layout with seamless cabinetry and durable countertops",
      width: 1600,
      height: 1200,
    },
    supportingImages: [
      {
        src: "/images/catalog/kitchen/kitchen-catalog-extra-02.webp",
        alt: "Ergonomic kitchen counter workspace with under-cabinet LED task lighting",
      },
      {
        src: "/images/catalog/kitchen/kitchen-catalog-extra-03.webp",
        alt: "Full-extension kitchen pantry drawers and deep utility pull-outs",
      },
      {
        src: "/images/catalog/kitchen/kitchen-catalog-extra-04.webp",
        alt: "Contemporary kitchen island with stone finish and breakfast bar seating",
      },
      {
        src: "/images/catalog/kitchen/kitchen-catalog-extra-05.webp",
        alt: "Moisture-resistant marine plywood cabinetry with anti-scratch laminate",
      },
    ],
    extraImages: [
      { src: "/images/catalog/kitchen/kitchen-catalog-heic-01.webp", alt: "Comprehensive kitchen layout and appliance integration" },
      { src: "/images/catalog/kitchen/kitchen-catalog-extra-01.webp", alt: "Kitchen corner carousel and space-saving hardware" },
      { src: "/images/catalog/kitchen/kitchen-catalog-extra-02.webp", alt: "Ergonomic kitchen counter workspace with under-cabinet LED task lighting" },
      { src: "/images/catalog/kitchen/kitchen-catalog-extra-03.webp", alt: "Overhead kitchen cabinetry with frosted glass inserts" },
      { src: "/images/catalog/kitchen/kitchen-catalog-extra-04.webp", alt: "Kitchen chimney and induction hob integration" },
      { src: "/images/catalog/kitchen/kitchen-catalog-extra-05.webp", alt: "Seamless quartz countertop edge profile" },
      { src: "/images/catalog/kitchen/kitchen-catalog-extra-06.webp", alt: "Cutlery organizer trays and modular inner drawers" },
      { src: "/images/catalog/kitchen/kitchen-catalog-extra-07.webp", alt: "Kitchen wet-area sink and anti-drip splashback" },
      { src: "/images/catalog/kitchen/kitchen-catalog-extra-09.webp", alt: "Tall unit pantry with multi-tier wire baskets" },
      { src: "/images/catalog/kitchen/kitchen-catalog-extra-10.webp", alt: "Deep utility pull-outs with soft-close mechanisms" },
      { src: "/images/catalog/kitchen/kitchen-catalog-extra-11.webp", alt: "Modular under-counter storage compartments" },
      { src: "/images/catalog/kitchen/kitchen-catalog-extra-12.webp", alt: "Contemporary kitchen joinery and handleless profile" },
    ],
    highlights: [
      "Optimized Cooking Triangle (Hob, Sink, Refrigerator)",
      "BWP Marine Ply & Acrylic Finish Cabinetry",
      "Heat & Stain Resistant Quartz Surfaces",
      "Soft-Close German Hardware & Tandem Boxes",
    ],
  },

  /* 03: FALSE CEILING */
  {
    id: "false-ceiling",
    anchorId: "false-ceiling",
    number: "03",
    eyebrow: "03 / FALSE CEILING",
    title: "False Ceiling Design",
    description: "Ceiling designs that help shape lighting, proportions and the overall character of an interior.",
    primaryImage: {
      src: "/images/catalog/false-ceiling/false-ceiling-catalog-extra-11.webp",
      alt: "Architectural false ceiling with recessed perimeter LED cove illumination",
      width: 1280,
      height: 960,
    },
    supportingImages: [
      {
        src: "/images/catalog/false-ceiling/false-ceiling-catalog-extra-01.webp",
        alt: "Clean gypsum board ceiling with magnetic track spotlight channels",
      },
      {
        src: "/images/catalog/false-ceiling/false-ceiling-catalog-extra-07.webp",
        alt: "Living room false ceiling drop creating balanced ambient illumination",
      },
      {
        src: "/images/catalog/false-ceiling/false-ceiling-catalog-extra-08.webp",
        alt: "Minimalist ceiling cove design highlighting architectural room lines",
      },
      {
        src: "/images/catalog/false-ceiling/false-ceiling-catalog-extra-10.webp",
        alt: "Multi-layered ceiling with warm indirect glow for evening comfort",
      },
    ],
    extraImages: [
      { src: "/images/catalog/false-ceiling/false-ceiling-catalog-extra-01.webp", alt: "Geometric ceiling drop over dining space" },
      { src: "/images/catalog/false-ceiling/false-ceiling-catalog-extra-02.webp", alt: "Concealed AC ducting and linear diffuser integration" },
      { src: "/images/catalog/false-ceiling/false-ceiling-catalog-extra-03.webp", alt: "Dual-circuit ceiling lighting scheme" },
      { src: "/images/catalog/false-ceiling/false-ceiling-catalog-extra-04.webp", alt: "Flush-mounted magnetic profile lighting in ceiling" },
      { src: "/images/catalog/false-ceiling/false-ceiling-catalog-extra-05.webp", alt: "Architectural ceiling contour with ambient perimeter glow" },
      { src: "/images/catalog/false-ceiling/false-ceiling-catalog-extra-06.webp", alt: "Bedroom false ceiling with dimmable center coves" },
      { src: "/images/catalog/false-ceiling/false-ceiling-catalog-extra-07.webp", alt: "Acoustic drywall ceiling suspension framework" },
      { src: "/images/catalog/false-ceiling/false-ceiling-catalog-extra-08.webp", alt: "Floating ceiling effect with hidden perimeter recess" },
      { src: "/images/catalog/false-ceiling/false-ceiling-catalog-extra-09.webp", alt: "Architectural ceiling grid and spot illumination" },
      { src: "/images/catalog/false-ceiling/false-ceiling-catalog-extra-10.webp", alt: "Geometric cove drop over living space" },
      { src: "/images/catalog/false-ceiling/false-ceiling-catalog-extra-11.webp", alt: "Layered recessed lighting plan for master suite" },
      { src: "/images/catalog/false-ceiling/false-ceiling-catalog-extra-12.webp", alt: "Minimalist drywall ceiling with hidden led tape coves" },
      { src: "/images/catalog/false-ceiling/false-ceiling-catalog-extra-13.webp", alt: "Dining space dropped ceiling with focused downlights" },
      { src: "/images/catalog/false-ceiling/false-ceiling-catalog-extra-14.webp", alt: "Contemporary hallway false ceiling with linear slot diffusers" },
    ],
    highlights: [
      "Perimeter Ambient Indirect Cove Lighting",
      "Clean Drywall Suspensions with Seamless Jointery",
      "Magnetic Track Spotlight Channels",
      "Concealed Electrical & Air-Conditioning Conduits",
    ],
  },

  /* 04: TV UNIT */
  {
    id: "tv-unit",
    anchorId: "tv-unit",
    number: "04",
    eyebrow: "04 / TV UNIT",
    title: "Custom TV Units",
    description: "TV and media-wall solutions designed to balance display, storage and the character of the room.",
    primaryImage: {
      src: "/images/catalog/tv-unit/tv-unit-catalog-extra-29.webp",
      alt: "Grand architectural media wall unit with integrated warm backlighting and floating console",
      width: 1080,
      height: 1080,
    },
    supportingImages: [
      {
        src: "/images/catalog/tv-unit/tv-unit-catalog-extra-30.webp",
        alt: "Contemporary living room TV unit with acoustic wood panelling and sleek cabinetry",
      },
      {
        src: "/images/catalog/tv-unit/tv-unit-catalog-extra-12.webp",
        alt: "Minimalist media wall with ambient cove LED illumination and display shelving",
      },
      {
        src: "/images/catalog/tv-unit/tv-unit-catalog-extra-08.webp",
        alt: "Fluted timber TV backdrop with concealed wire management raceways",
      },
      {
        src: "/images/catalog/tv-unit/tv-unit-catalog-extra-14.webp",
        alt: "Luxury entertainment feature wall with bookmatched stone finish and low-profile console",
      },
      {
        src: "/images/catalog/tv-unit/tv-unit-catalog-extra-31.webp",
        alt: "Modern textured charcoal and wood slat media feature wall with floating drawer storage",
      },
    ],
    extraImages: [
      { src: "/images/catalog/tv-unit/tv-unit-catalog-extra-01.webp", alt: "Signature living room entertainment console" },
      { src: "/images/catalog/tv-unit/tv-unit-catalog-extra-02.webp", alt: "Compact living room media console layout" },
      { src: "/images/catalog/tv-unit/tv-unit-catalog-extra-03.webp", alt: "Living room feature wall with marble laminate and wood slats" },
      { src: "/images/catalog/tv-unit/tv-unit-catalog-extra-04.webp", alt: "Floating console with soft-close push-to-open drawers" },
      { src: "/images/catalog/tv-unit/tv-unit-catalog-extra-05.webp", alt: "TV wall paneling with brushed metal edge trim" },
      { src: "/images/catalog/tv-unit/tv-unit-catalog-extra-06.webp", alt: "Integrated soundbar shelf and subwoofer compartment" },
      { src: "/images/catalog/tv-unit/tv-unit-catalog-extra-07.webp", alt: "Vertical fluted timber TV backer with floating shelves" },
      { src: "/images/catalog/tv-unit/tv-unit-catalog-extra-09.webp", alt: "Concealed cable organizer raceways behind TV panel" },
      { src: "/images/catalog/tv-unit/tv-unit-catalog-extra-10.webp", alt: "Full-height living room entertainment wall design" },
      { src: "/images/catalog/tv-unit/tv-unit-catalog-extra-11.webp", alt: "Backlit TV panel creating gentle contrast for evening viewing" },
      { src: "/images/catalog/tv-unit/tv-unit-catalog-extra-13.webp", alt: "Sleek monochromatic TV console cabinetry" },
      { src: "/images/catalog/tv-unit/tv-unit-catalog-extra-15.webp", alt: "Living room focal entertainment console" },
      { src: "/images/catalog/tv-unit/tv-unit-catalog-extra-16.webp", alt: "Custom joinery and veneer finish on TV unit" },
      { src: "/images/catalog/tv-unit/tv-unit-catalog-extra-17.webp", alt: "Minimalist TV unit with concealed peripheral storage" },
      { src: "/images/catalog/tv-unit/tv-unit-catalog-extra-18.webp", alt: "Warm interior woodwork in entertainment zone" },
      { src: "/images/catalog/tv-unit/tv-unit-catalog-extra-19.webp", alt: "Floating drawer cabinet with clean shadow lines" },
      { src: "/images/catalog/tv-unit/tv-unit-catalog-extra-20.webp", alt: "Bespoke media cabinetry detail" },
      { src: "/images/catalog/tv-unit/tv-unit-catalog-extra-21.webp", alt: "Contemporary media wall with ambient cove light" },
      { src: "/images/catalog/tv-unit/tv-unit-catalog-extra-22.webp", alt: "Living room wall panelling and TV mount integration" },
      { src: "/images/catalog/tv-unit/tv-unit-catalog-extra-23.webp", alt: "Symmetrical entertainment wall with display columns" },
      { src: "/images/catalog/tv-unit/tv-unit-catalog-extra-24.webp", alt: "Modern TV unit with textured stone look finish" },
      { src: "/images/catalog/tv-unit/tv-unit-catalog-extra-25.webp", alt: "Fluted timber slats accenting media console" },
      { src: "/images/catalog/tv-unit/tv-unit-catalog-extra-26.webp", alt: "Architectural TV wall paneling with brushed metal accents" },
      { src: "/images/catalog/tv-unit/tv-unit-catalog-extra-27.webp", alt: "Low-height console with ample gaming console ventilation" },
      { src: "/images/catalog/tv-unit/tv-unit-catalog-extra-28.webp", alt: "Elegant living room feature wall treatment" },
      { src: "/images/catalog/tv-unit/tv-unit-catalog-extra-32.webp", alt: "Comprehensive entertainment wall craftsmanship" },
      { src: "/images/catalog/tv-unit/tv-unit-catalog-extra-33.webp", alt: "Bespoke full-width TV feature wall installation" },
    ],
    highlights: [
      "Bespoke Fluted Wood & Textured Panel Backdrops",
      "Hidden Cable Channels & Set-Top Enclosures",
      "Floating Minimalist Low-Profile Consoles",
      "Low-Glare Backlit LED Viewing Illumination",
    ],
  },

  /* 05: TERRACE GARDEN */
  {
    id: "terrace-garden",
    anchorId: "terrace-garden",
    number: "05",
    eyebrow: "05 / TERRACE GARDEN",
    title: "Terrace Garden Design",
    description: "Thoughtfully planned terrace spaces that bring greenery and usable outdoor living into the home.",
    primaryImage: {
      src: "/images/catalog/terrace-garden/terrace-garden-catalog-extra-02.webp",
      alt: "Lush residential terrace garden with perimeter planters and outdoor lounge seating",
      width: 1280,
      height: 817,
    },
    supportingImages: [
      {
        src: "/images/catalog/terrace-garden/terrace-garden-catalog-extra-03.webp",
        alt: "Open-air terrace pergola with climbing green vines and warm evening deck lighting",
      },
      {
        src: "/images/catalog/terrace-garden/terrace-garden-catalog-extra-04.webp",
        alt: "Custom weather-resistant outdoor seating nook and stone-paved terrace floor",
      },
      {
        src: "/images/catalog/terrace-garden/terrace-garden-catalog-extra-08.webp",
        alt: "Terrace planter boxes with low-maintenance coastal green landscaping",
      },
      {
        src: "/images/catalog/terrace-garden/terrace-garden-catalog-extra-01.webp",
        alt: "Biophilic rooftop terrace retreat with shade structures and potted flora",
      },
    ],
    extraImages: [
      { src: "/images/catalog/terrace-garden/terrace-garden-catalog-extra-01.webp", alt: "Terrace wooden decking and drainage detail" },
      { src: "/images/catalog/terrace-garden/terrace-garden-catalog-extra-02.webp", alt: "Outdoor pergola framework with weather-resistant coating" },
      { src: "/images/catalog/terrace-garden/terrace-garden-catalog-extra-03.webp", alt: "Masonry planters integrated along parapet wall" },
      { src: "/images/catalog/terrace-garden/terrace-garden-catalog-extra-04.webp", alt: "Terrace garden pathway lighting" },
      { src: "/images/catalog/terrace-garden/terrace-garden-catalog-extra-08.webp", alt: "Rooftop garden lounge with cushioned outdoor seating" },
      { src: "/images/catalog/terrace-garden/terrace-garden-catalog-extra-09.webp", alt: "Potted tropical flora and drainage channel detail" },
      { src: "/images/catalog/terrace-garden/terrace-garden-catalog-extra-10.webp", alt: "Custom outdoor planter boxes with integrated irrigation" },
      { src: "/images/catalog/terrace-garden/terrace-garden-catalog-extra-11.webp", alt: "Low-voltage accent lighting among terrace plantings" },
      { src: "/images/catalog/terrace-garden/terrace-garden-catalog-extra-12.webp", alt: "Waterproofing membrane and drain layer beneath planters" },
    ],
    highlights: [
      "Weather-Resistant Pergolas & Sunshade Canopies",
      "Multi-Layer Root-Barrier Waterproofing Protocols",
      "Low-Maintenance Native Coastal Flora Selections",
      "Built-In Masonry Seating & Ambient Pathway Lights",
    ],
  },

  /* 06: WALL DECOR */
  {
    id: "wall-decor",
    anchorId: "wall-decor",
    number: "06",
    eyebrow: "06 / WALL DECOR",
    title: "Wall Decor & Feature Details",
    description: "Decorative wall treatments and feature elements that add depth and character to a room.",
    primaryImage: {
      src: "/images/catalog/wall-decor/wall-decor-design.webp",
      alt: "Architectural decorative wall feature with textured surface and warm accent lighting",
      width: 960,
      height: 1280,
    },
    supportingImages: [],
    extraImages: [],
    highlights: [
      "Textured Architectural Lime & Microcement Finishes",
      "Bespoke Open-Slat Timber Dividers & Partitions",
      "Curated Art Niches with Directional Warm Fixtures",
      "Brass & Metallic Trim Detailing",
    ],
  },
];

/* =========================================================================
   GROUP B: REAL PROJECT PROOF (AUTHENTIC COMPLETED RESIDENCE)
   Note: Explicitly separated from the general catalog above.
========================================================================= */
export const realProjectShowcase = {
  title: "Nagarajan Residence",
  location: "Nagercoil (Theroor)",
  scope: "Full Residential Interior",
  scale: "3,500 Sq. Ft.",
  description:
    "A completed residential interior combining tailored teak fluting, ambient false ceilings, integrated media consoles, and custom modular kitchen cabinetry tailored for coastal living.",
  image:
    "/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-living-room-wide.webp",
  alt: "Living room interior architecture at Nagarajan Residence in Theroor, Nagercoil",
  slug: "nagarajan-residence-nagercoil-theroor",
  href: "/projects/nagarajan-residence-nagercoil-theroor",
  highlights: [
    "Master Bedroom Suite & Floor-to-Ceiling Wardrobes",
    "Fluted Burma Teak TV Wall & Floating Console",
    "Drywall False Ceiling with Perimeter LED Coves",
    "Open-Slat Room Partition & Entrance Foyer Styling",
  ],
};

/* =========================================================================
   APPROACH / PROCESS STEPS (6 MILESTONES)
========================================================================= */
export const approachSteps: ApproachStep[] = [
  {
    step: "01",
    title: "Understand",
    description:
      "We listen closely to how your family lives, daily routines, storage needs, and aesthetic aspirations in Nagercoil.",
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

/* =========================================================================
   DETAILS MATTER
========================================================================= */
export const craftDetails: CraftDetail[] = [
  {
    title: "Proportions & Sightlines",
    description:
      "Carefully calibrating ceiling drops, partition heights, and door clearances so rooms feel expansive and naturally proportioned.",
    image: "/images/catalog/bedroom/bedroom-interior-design-01.webp",
    alt: "Bedroom interior proportions and balanced daylight sightlines",
  },
  {
    title: "Bespoke Millwork & Joinery",
    description:
      "Precision veneer grain-matching, hand-finished fluted slats, and durable hardware engineered for humid coastal climates.",
    image: "/images/catalog/tv-unit/tv-unit-design-01.webp",
    alt: "Precision joinery detail of fluted timber media console",
  },
  {
    title: "Layered Ambient Lighting",
    description:
      "Harmonizing warm indirect coves, directional spot fixtures, and functional task illumination for balanced evening comfort.",
    image: "/images/catalog/false-ceiling/false-ceiling-catalog-extra-02.webp",
    alt: "Layered indirect false ceiling cove illumination and spots",
  },
  {
    title: "Concealed Utility & Storage",
    description:
      "Integrating hidden wire chases, flush-front storage units, and seamless closet systems that keep everyday spaces uncluttered.",
    image: "/images/catalog/kitchen/kitchen-catalog-heic-01.webp",
    alt: "Fitted modular kitchen storage with concealed hardware",
  },
];

/* =========================================================================
   FREQUENTLY ASKED QUESTIONS (8 PRACTICAL FAQS)
========================================================================= */
export const interiorFaqs: InteriorFaq[] = [
  {
    question: "What interior design services does SMS Construction provide?",
    answer:
      "SMS Construction provides complete residential interior design solutions in Nagercoil, including full-home turnkey interiors, space planning, modular kitchen design, bedroom styling with custom wardrobes, false ceiling illumination, bespoke TV units, decorative wall partitions, and terrace garden landscaping.",
  },
  {
    question: "Can you design individual spaces such as bedrooms and kitchens?",
    answer:
      "Yes. While we often undertake complete turnkey homes, we also design and execute individual high-impact spaces such as modular kitchens, master suites, custom TV media walls, and living room false ceilings.",
  },
  {
    question: "Do you handle both interior design and execution?",
    answer:
      "Yes. We are a design-and-build studio. Our in-house team develops the architectural and interior drawings, 3D renderings, and material specifications, and then oversees the physical carpentry, electrical cabling, painting, and installation on-site.",
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
      "You can submit an inquiry through our contact page, message us on WhatsApp, or call our studio directly at +91 94880 21183. We will schedule a site visit or office meeting to review your space and provide an itemized, transparent quotation.",
  },
  {
    question: "How long does an interior design project usually take?",
    answer:
      "Project duration depends on overall scope, floor area, site readiness, and material choices. An individual space such as a modular kitchen or master suite typically takes 3 to 5 weeks, while a full 3 to 4-bedroom home interior usually takes between 8 and 16 weeks from approved 3D designs to final handover.",
  },
];
