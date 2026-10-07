export type ProjectCategory =
  | "Residential Construction"
  | "Interior Design"
  | "Turnkey Interiors"
  | "Commercial Construction"
  | "Renovation";

export interface Project {
  /** Zero-padded display number, e.g. "01" */
  number: string;
  /** URL slug — used in /projects/[slug] */
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  year: string;
  /** Absolute path to main image (local or remote) */
  image: string;
  /** Descriptive alt text for the primary image */
  alt: string;
  /** One-sentence card description */
  description: string;
  // ── Extended Case Study Fields ───────────────────────────────────────────
  area: string;
  duration: string;
  completionDate: string;
  materials: string[];
  overview: string;
  requirements: string;
  concept: string;
  process: string;
  challenges: string;
  solutions: string;
  finalResult: string;
  clientReview: {
    text: string;
    author: string;
    role: string;
  };
  gallery: {
    before: string[];
    progress: string[];
    completed: string[];
  };
}

export const projects: Project[] = [
  /* ── 01 ─────────────────────────────────────────────────────────────── */
  {
    number: "01",
    slug: "nagarajan-residence-nagercoil-theroor",
    title: "Nagarajan Residence",
    category: "Interior Design",
    location: "Nagercoil (Theroor)",
    year: "2026",
    image: "/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-living-room.webp",
    alt: "Living room interior at Nagarajan Residence in Nagercoil (Theroor)",
    description: "A premium bespoke residential interior design project balancing warm wood textures and modern living spaces in Theroor.",
    area: "3,500 Sq. Ft.",
    duration: "6 Months",
    completionDate: "Early 2026",
    materials: [
      "Bespoke Teak Veneer",
      "Italian Marble",
      "Textured Wall Coverings",
      "Integrated Ambient LED Profiles",
      "Burma Teak",
      "Fluted Glass",
      "Brass Accents",
    ],
    overview: "This interior transformation focused on maximizing natural light while introducing a rich palette of warm woods and luxurious marbles.",
    requirements: "The client requested a sophisticated living space that flowed seamlessly into a custom TV unit, alongside a modern kitchen and deeply comfortable bedroom layouts.",
    concept: "We developed a 'Warm Modernism' concept, heavily relying on teak fluting, subtle metallic accents, and layered lighting to create depth.",
    process: "We fabricated custom millwork off-site in our specialized joinery, ensuring precise fit-outs for the complex TV unit and decorative partitions before final on-site assembly.",
    challenges: "Aligning the intricate teak veneer patterns seamlessly across varying depths of the custom TV unit and entryway partitions.",
    solutions: "We used 3D laser templating for precision mapping and hand-matched veneer grains under strict studio lighting before installation.",
    finalResult: "A masterfully finished residential interior that delivers high-end luxury without compromising on the cozy warmth of a family home.",
    clientReview: {
      text: "The interior design perfectly captures our vision. The attention to detail in the woodwork and lighting is simply remarkable.",
      author: "Mr. Nagarajan",
      role: "Homeowner",
    },
    gallery: {
      before: [],
      progress: [],
      completed: [
        "/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-kitchen.webp",
        "/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-decorative-partition.webp",
        "/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-tv-unit-detail.webp",
        "/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-living-room.webp"
      ],
    },
  },

  /* ── 02 ─────────────────────────────────────────────────────────────── */
  {
    number: "02",
    slug: "zahir-hussain-residence-nagercoil",
    title: "Zahir Hussain Residence",
    category: "Turnkey Interiors",
    location: "Nagercoil",
    year: "2026",
    image: "/images/projects/zahir-hussain-residence-nagercoil/zahir-hussain-residence-living-room.webp",
    alt: "Bespoke living room and marble TV wall paneling at Zahir Hussain Residence in Nagercoil",
    description:
      "A complete turnkey residential interior featuring custom marble TV units, high-gloss gold-inlay wardrobes, illuminated stairs, and modern modular kitchen.",
    area: "3,200 Sq. Ft.",
    duration: "5 Months",
    completionDate: "February 2026",
    materials: [
      "Statuario Marble TV Paneling",
      "Fluted Acoustic Wood Louvers",
      "High-Gloss Acrylic Wardrobes with Gold Inlays",
      "Integrated Step & Cove LED Profiles",
      "Solid Carved Teak Entrance Door",
      "Tempered Glass & SS Stair Balustrade",
      "Designer Stone Vanity & Backlit Mirror",
      "Custom Modular Kitchen with Breakfast Island",
    ],
    overview:
      "A luxurious contemporary turnkey interior project completed for Mr. Zahir Hussain in Nagercoil. The residence merges refined textures, geometric craftsmanship, custom gold accent joinery, and functional spatial planning tailored for modern living.",
    requirements:
      "The client envisioned a sleek, hotel-grade aesthetic featuring ambient warm lighting throughout, high-end storage with dedicated dressing zones, an expansive open kitchen with a breakfast island, and a distinctive main entrance.",
    concept:
      "We executed a 'Modern Luxe & Architectural Linearity' theme — emphasizing vertical fluting, reflective high-gloss surfaces contrasted against warm wood tones, and concealed linear illumination.",
    process:
      "Every module was digitally precision-modeled before fabrication in our joinery unit. Site electrical conduits were recessed during false ceiling preparation to ensure perfectly hidden power drivers and smooth profile light diffusions.",
    challenges:
      "Executing seamless flush brass and gold inlay geometry across large wardrobe shutters while coordinating precision step-riser lighting throughout the interior staircase.",
    solutions:
      "Utilized computerized CNC groove routings to secure gold inlay profiles with zero gap, alongside dedicated low-voltage step channels with concealed service panels for effortless lifelong maintenance.",
    finalResult:
      "An impeccably delivered turnkey residence that strikes the ideal balance between high visual drama, superior material longevity, and welcoming daily comfort.",
    clientReview: {
      text: "SMS Construction delivered exceptional craftsmanship. The finish on the wardrobes, TV unit, staircase, and modular kitchen exceeded all our expectations. Timely execution and complete peace of mind.",
      author: "Mr. Zahir Hussain",
      role: "Homeowner",
    },
    gallery: {
      before: [],
      progress: [],
      completed: [
        "/images/projects/zahir-hussain-residence-nagercoil/zahir-hussain-residence-living-room.webp",
        "/images/projects/zahir-hussain-residence-nagercoil/zahir-hussain-residence-modular-kitchen.webp",
        "/images/projects/zahir-hussain-residence-nagercoil/zahir-hussain-residence-master-wardrobe-gold-inlay.webp",
        "/images/projects/zahir-hussain-residence-nagercoil/zahir-hussain-residence-bedroom-wardrobe-geometric.webp",
        "/images/projects/zahir-hussain-residence-nagercoil/zahir-hussain-residence-illuminated-staircase.webp",
        "/images/projects/zahir-hussain-residence-nagercoil/zahir-hussain-residence-vanity-washbasin.webp",
        "/images/projects/zahir-hussain-residence-nagercoil/zahir-hussain-residence-entrance-door.webp",
        "/images/projects/zahir-hussain-residence-nagercoil/zahir-hussain-residence-living-room-alt.webp",
      ],
    },
  },

  /* ── 03 ─────────────────────────────────────────────────────────────── */
  {
    number: "03",
    slug: "selvaprasad-residence-paruthivilai",
    title: "Selvaprasad Residence",
    category: "Turnkey Interiors",
    location: "Paruthivilai, Nagercoil",
    year: "2026",
    image: "/images/projects/selvaprasad-residence-paruthivilai/living-room-tv-unit-hero.webp",
    alt: "Luxury living room TV unit with marble wall paneling and acoustic fluting at Selvaprasad Residence in Paruthivilai",
    description:
      "A grand turnkey interior featuring double-height chandelier foyer, custom acoustic TV lounge, bedroom window bay seating, and bespoke joinery in Paruthivilai.",
    area: "3,400 Sq. Ft.",
    duration: "6 Months",
    completionDate: "March 2026",
    materials: [
      "Bookmatched Black Marquina Marble Paneling",
      "Charcoal & Oak Fluted Acoustic Wall Slats",
      "Double-Height Crystal Chandelier with Warm Halo Ring",
      "Granite Floating Steps & Frameless Glass Railing",
      "Integrated Bedroom Bay Window Seating with Storage",
      "Natural Woodgrain Laminates & Backlit Dressing Mirrors",
      "Dedicated Home Study Workstation with Overhead Storage",
      "Custom Backlit Sacred Pooja Altar Niche",
    ],
    overview:
      "A sophisticated multi-level residential interior completed for Mr. Selvaprasad in Paruthivilai, Nagercoil. Designed to marry statement architectural moments with everyday practical living, this residence showcases a dramatic double-height foyer, acoustically treated media lounge, custom bedroom bay storage, and warm perimeter illumination.",
    requirements:
      "The client requested a commanding living room TV feature, an awe-inspiring double-height staircase entrance with statement lighting, ergonomic study desks for work-from-home focus, and bedrooms equipped with comfortable window seating and floor-to-ceiling storage.",
    concept:
      "We developed an 'Architectural Harmony & Natural Textures' concept — blending deep dark marble accents and acoustic wooden slats with gentle natural wood grains, warm cove glow, and open vertical volumes.",
    process:
      "From 3D structural planning of the double-height ceiling suspension to precision joinery fabrication for the window bay bridges and study nooks, our team coordinated every milestone with exact site measurement and off-site pre-finishing.",
    challenges:
      "Safely anchoring and balancing the heavy multi-tier crystal chandelier in the high-volume foyer while coordinating concealed ambient LED coves along the granite staircase and bedroom window bridge cabinets.",
    solutions:
      "Reinforced structural ceiling unistrut brackets prior to gypsum finishing for chandelier load safety, and engineered concealed low-voltage cable raceways behind the fluted wall paneling for an immaculate, cable-free finish.",
    finalResult:
      "A breathtaking, warm, and highly functional home interior that delivers both impressive hospitality zones and serene, cozy private retreats.",
    clientReview: {
      text: "The transformation of our home is magnificent. From the grand chandelier foyer to the cozy window seating and TV unit, SMS Construction delivered flawless quality on schedule.",
      author: "Mr. Selvaprasad",
      role: "Homeowner",
    },
    gallery: {
      before: [],
      progress: [],
      completed: [
        "/images/projects/selvaprasad-residence-paruthivilai/living-room-tv-unit-hero.webp",
        "/images/projects/selvaprasad-residence-paruthivilai/double-height-chandelier-foyer.webp",
        "/images/projects/selvaprasad-residence-paruthivilai/granite-staircase-glass-railing.webp",
        "/images/projects/selvaprasad-residence-paruthivilai/master-bedroom-window-bay-wardrobe.webp",
        "/images/projects/selvaprasad-residence-paruthivilai/woodgrain-wardrobe-backlit-dresser.webp",
        "/images/projects/selvaprasad-residence-paruthivilai/study-workstation-overhead-storage.webp",
        "/images/projects/selvaprasad-residence-paruthivilai/guest-bedroom-bay-seating-wardrobe.webp",
        "/images/projects/selvaprasad-residence-paruthivilai/sacred-pooja-niche-altar.webp",
        "/images/projects/selvaprasad-residence-paruthivilai/backlit-round-vanity-mirror.webp",
        "/images/projects/selvaprasad-residence-paruthivilai/master-bedroom-ceiling-rafters.webp",
        "/images/projects/selvaprasad-residence-paruthivilai/living-ceiling-cove-lighting.webp",
        "/images/projects/selvaprasad-residence-paruthivilai/bedroom-full-height-storage.webp",
      ],
    },
  },

  /* ── 04 ─────────────────────────────────────────────────────────────── */
  {
    number: "04",
    slug: "dr-arun-kumar-residence-nagercoil",
    title: "Dr. Arun Kumar Residence",
    category: "Residential Construction",
    location: "Nagercoil",
    year: "2026",
    image: "/images/projects/dr-arun-kumar-residence-nagercoil/central-atrium-courtyard-chandelier-hero.webp",
    alt: "Triple-height central atrium courtyard with floating glass staircase and cascading crystal chandelier at Dr. Arun Kumar Residence in Nagercoil",
    description:
      "An architectural masterpiece featuring a triple-height atrium, glass-enclosed indoor courtyard garden, floating staircase, bespoke modular kitchen, and thematic bedrooms.",
    area: "4,200 Sq. Ft.",
    duration: "8 Months",
    completionDate: "March 2026",
    materials: [
      "Triple-Height Floating Glass Staircase with SS Standoffs",
      "Cascading Multi-Tier Ring Chandelier with Skylight Coffer",
      "Glass-Enclosed Biophilic Courtyard Garden",
      "Textured Stucco & Vibrant Golden Ochre Accent Walls",
      "High-Gloss Dual-Tone Modular Kitchen & Quartz Waterfall Island",
      "Backlit World Map Kinetic Wall Art in Kids Bedroom",
      "Marble-Faced Sliding Wardrobes with Integrated Digital Safe",
      "Charcoal Acoustic Fluted Wall Paneling & Vanity Mirrors",
    ],
    overview:
      "A landmark turnkey residential project executed for Dr. Arun Kumar in Nagercoil. Centered around a majestic triple-height illuminated atrium, this modern villa integrates an indoor glass-enclosed landscaped courtyard, floating stair architecture, customized modular kitchen with island dining, and immersive bedroom suites.",
    requirements:
      "The client envisioned an awe-inspiring open-concept villa with natural skylit ventilation, a central double-to-triple volume living core, seamless biophilic green connections, ergonomic kitchen workstations with glass display cabinets, and modern themed rooms for their children.",
    concept:
      "We conceived the 'Vertical Light & Biophilic Atrium' philosophy — introducing a dramatic skylit void that filters natural sunlight across multiple floors, paired with raw concrete stucco textures against radiant warm golden accent finishes.",
    process:
      "Structural steel supports and heavy-duty glass balustrades were laser-aligned on-site. The suspended crystal ring chandelier was hoisted into the reinforced coffer ceiling before installing under-cabinet lighting and precision modular wardrobe carcasses.",
    challenges:
      "Balancing structural rigidity for the multi-level open stairwell and skylight opening while engineering airtight climate isolation for the glass-walled indoor garden below.",
    solutions:
      "Utilized double-glazed insulated safety glass with thermal-break aluminum perimeters for the courtyard, alongside concealed drainage weep holes and automated drip irrigation for lush indoor plant vitality.",
    finalResult:
      "An iconic architectural residence setting a new benchmark for luxury residential construction and interior sophistication in Nagercoil.",
    clientReview: {
      text: "SMS Construction has brought our dream home to life beyond what we could have imagined. The central atrium, the lighting, the courtyard, and the kitchen finishes are world-class.",
      author: "Dr. Arun Kumar",
      role: "Homeowner",
    },
    gallery: {
      before: [],
      progress: [],
      completed: [
        "/images/projects/dr-arun-kumar-residence-nagercoil/central-atrium-courtyard-chandelier-hero.webp",
        "/images/projects/dr-arun-kumar-residence-nagercoil/atrium-skylight-chandelier-perspective.webp",
        "/images/projects/dr-arun-kumar-residence-nagercoil/stairwell-golden-accent-wall-sconce.webp",
        "/images/projects/dr-arun-kumar-residence-nagercoil/modular-kitchen-island-breakfast-counter.webp",
        "/images/projects/dr-arun-kumar-residence-nagercoil/kitchen-botanical-backsplash-countertop.webp",
        "/images/projects/dr-arun-kumar-residence-nagercoil/contemporary-kitchen-wide-perspective.webp",
        "/images/projects/dr-arun-kumar-residence-nagercoil/kids-bedroom-world-map-headboard.webp",
        "/images/projects/dr-arun-kumar-residence-nagercoil/grey-marble-wardrobe-digital-safe.webp",
        "/images/projects/dr-arun-kumar-residence-nagercoil/teak-mahogany-woodgrain-wardrobe.webp",
        "/images/projects/dr-arun-kumar-residence-nagercoil/charcoal-fluted-dressing-wall.webp",
        "/images/projects/dr-arun-kumar-residence-nagercoil/indoor-biophilic-planter-accent.webp",
        "/images/projects/dr-arun-kumar-residence-nagercoil/courtyard-greenery-planter-detail.webp",
      ],
    },
  },

  /* ── 05 ─────────────────────────────────────────────────────────────── */
  {
    number: "05",
    slug: "godwin-dhas-residence",
    title: "Godwin Dhas Residence",
    category: "Turnkey Interiors",
    location: "Nagercoil",
    year: "2026",
    image: "/images/projects/godwin-dhas-residence/master-suite-floating-bed-hero.webp",
    alt: "Luxury presidential master suite with illuminated floating platform bed and canopy portal at Godwin Dhas Residence in Nagercoil",
    description:
      "A high-glamour turnkey interior showcasing a presidential master suite with neon-canopy floating bed, high-gloss acrylic kitchen, and bespoke CNC jali wooden partitions.",
    area: "3,600 Sq. Ft.",
    duration: "6 Months",
    completionDate: "February 2026",
    materials: [
      "Floating Velvet Platform Bed with Perimeter Neon Glow",
      "Architectural Canopy Portal with Embedded Linear Light Slots",
      "Bespoke Red Cedar & White CNC Jali Architectural Room Divider",
      "High-Gloss Acrylic Modular Kitchen with Rose Gold Profiles",
      "Calacatta Marble TV Panel with Fluted Wood Acoustic Louvers",
      "Designer Floating Dining Vanity with Touch-Sensor Backlit Mirror",
      "Geometric Origami False Ceilings with Warm Cove Illumination",
      "Custom Stepped Under-Stair Storage Cabinetry",
    ],
    overview:
      "A magnificent contemporary turnkey residence executed for Mr. Godwin Dhas in Nagercoil. Celebrated for its bold lighting architecture and bespoke joinery, the home features a 7-star presidential master suite, a high-gloss acrylic kitchen with breakfast bar, customized origami false ceilings, and precision-crafted spatial partitions.",
    requirements:
      "The client requested a showstopping master bedroom inspired by luxury boutique hotels, an expansive open kitchen with a dedicated dining pass-through and breakfast counter, artistic room partitions that define spaces without enclosing them, and smart under-stair storage utility.",
    concept:
      "We implemented a 'Luminous Geometry & Contrast Craft' design philosophy — utilizing dramatic neon float lighting, monolithic canopy portals, warm natural timber slats contrasted against crisp white CNC lattices, and high-gloss reflective surfaces.",
    process:
      "The custom bedroom canopy framework was fabricated with integrated low-voltage heat-dissipation aluminum LED extrusions. The room divider's jali cutouts were precision-milled using computerized CNC water-jet cutters and seamlessly interfaced with solid red cedar vertical framing.",
    challenges:
      "Engineering the structural cantilever for the floating master bed platform while ensuring flawless flush alignment of the canopy ceiling neon slots with the headboard wall panel.",
    solutions:
      "Constructed an internal heavy-gauge steel chassis anchored directly into the floor slab to support the floating bed frame, alongside micro-channeled acrylic diffusers to ensure hot-spot-free linear lighting across all canopy surfaces.",
    finalResult:
      "An extraordinary residential interior that exudes pure luxury, unmatched illumination drama, and ergonomic practical comfort for everyday living.",
    clientReview: {
      text: "The master bedroom suite and the kitchen are beyond stunning. SMS Construction turned our ideas into a living work of art. The quality of materials and execution is second to none.",
      author: "Mr. Godwin Dhas",
      role: "Homeowner",
    },
    gallery: {
      before: [],
      progress: [],
      completed: [
        "/images/projects/godwin-dhas-residence/master-suite-floating-bed-hero.webp",
        "/images/projects/godwin-dhas-residence/high-gloss-acrylic-modular-kitchen.webp",
        "/images/projects/godwin-dhas-residence/architectural-jali-wood-partition.webp",
        "/images/projects/godwin-dhas-residence/dining-vanity-backlit-mirror.webp",
        "/images/projects/godwin-dhas-residence/living-tv-unit-fluted-marble.webp",
        "/images/projects/godwin-dhas-residence/breakfast-counter-pendant-lights.webp",
        "/images/projects/godwin-dhas-residence/master-suite-wide-perspective.webp",
        "/images/projects/godwin-dhas-residence/bedroom-curved-platform-bed.webp",
        "/images/projects/godwin-dhas-residence/staircase-under-step-storage.webp",
        "/images/projects/godwin-dhas-residence/lounge-curved-cove-ceiling.webp",
        "/images/projects/godwin-dhas-residence/teak-kitchen-wicker-baskets.webp",
        "/images/projects/godwin-dhas-residence/sliding-wardrobe-tufted-bed.webp",
      ],
    },
  },

  /* ── 06 ─────────────────────────────────────────────────────────────── */
  {
    number: "06",
    slug: "gold-finance-parvathipuram",
    title: "Gold Finance Branch",
    category: "Commercial Construction",
    location: "Parvathipuram, Nagercoil",
    year: "2026",
    image: "/images/projects/gold-finance-parvathipuram/gold-finance-banking-hall-hero.webp",
    alt: "Commercial turnkey banking interior with geometric LED profile ceiling and teller counters at Gold Finance Branch in Parvathipuram, Nagercoil",
    description:
      "A complete commercial turnkey banking interior featuring custom acoustic fluted teller counters, etched security partitions, geometric LED profile ceilings, and gold inlay accents.",
    area: "1,800 Sq. Ft.",
    duration: "2 Months",
    completionDate: "February 2026",
    materials: [
      "Custom Chamfered Teak Reception & Cashier Counters",
      "Backlit Gold & Brass Inlay Geometric Feature Wall",
      "Acoustic Fluted Walnut Louvers with Vertical LED Profiles",
      "Etched Security Glass Cashier Partitions & Laser-Cut Jali Screens",
      "Geometric Recessed LED Profile Ceiling with Orbital Crystal Pendant",
      "Heavy-Duty Commercial Wood-Plank Vinyl Flooring",
      "Secure Commercial Access Control & Back-Office Banking Partitioning",
      "High-Traffic Textured Damask & Marble Wall Coverings",
    ],
    overview:
      "A turnkey commercial interior fit-out executed for Gold Finance in Parvathipuram, Nagercoil. Designed to project financial trust, prestige, and institutional security, this branch combines customer service counters with back-office cash handling, acoustic wall treatments, and architectural linear lighting.",
    requirements:
      "The client required an open banking hall with high-throughput customer transaction counters, bullet-resistant security glass cashier enclosures, acoustic privacy between public and banking operations, and an inviting brand presence.",
    concept:
      "We conceived an 'Institutional Prestige & Modern Transparency' identity — utilizing warm golden metallic inlays, warm natural timber paneling, crystalline orbital chandeliers, and geometric linear ceiling lights to deliver an ambiance of trust and efficiency.",
    process:
      "Off-site fabrication of high-pressure laminate counters and security partitions ensured rapid on-site assembly within a tight 60-day deadline, coordinating structural ceiling framing with HVAC and electrical conduits simultaneously.",
    challenges:
      "Delivering high-security cash management zones and concealed armored cabling while maintaining a welcoming, warm customer-facing retail atmosphere in a compact 1,800 sq. ft. commercial footprint.",
    solutions:
      "Engineered integrated chase raceways behind the fluted acoustic wall slats for tamper-proof electrical and CCTV wiring, along with high-impact etched laminated security glass for teller counters.",
    finalResult:
      "A sophisticated, safe, and highly functional commercial banking branch setting a high design benchmark for financial institutions in the region.",
    clientReview: {
      text: "SMS Construction delivered our branch interior ahead of schedule with remarkable precision. The counter finishes, lighting design, and security details are world-class.",
      author: "Branch Operations Manager",
      role: "Gold Finance, Parvathipuram",
    },
    gallery: {
      before: [],
      progress: [],
      completed: [
        "/images/projects/gold-finance-parvathipuram/gold-finance-banking-hall-hero.webp",
        "/images/projects/gold-finance-parvathipuram/gold-finance-reception-teller-counter.webp",
        "/images/projects/gold-finance-parvathipuram/gold-finance-ceiling-lighting-architecture.webp",
        "/images/projects/gold-finance-parvathipuram/gold-finance-hallway-perspective.webp",
        "/images/projects/gold-finance-parvathipuram/gold-finance-cashier-teller-security-partition.webp",
        "/images/projects/gold-finance-parvathipuram/gold-finance-reception-counter-inlay.webp",
        "/images/projects/gold-finance-parvathipuram/gold-finance-back-office-acoustic-slats.webp",
        "/images/projects/gold-finance-parvathipuram/gold-finance-wood-plank-flooring-detail.webp",
      ],
    },
  },
];

/** Unique category values derived from the real project data */
export const projectCategories: ProjectCategory[] = [
  ...new Set(projects.map((p) => p.category)),
] as ProjectCategory[];
