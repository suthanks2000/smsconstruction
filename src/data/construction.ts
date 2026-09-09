export interface ConstructionService {
  number: string;
  title: string;
  category: string;
  description: string;
  icon: string;
  points: string[];
}

export interface ApproachStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface WhyChoosePillar {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

export interface ConstructionFaq {
  question: string;
  answer: string;
}

// 6 Comprehensive Construction Sectors & Disciplines (Residential, Commercial, Industrial, Structural, Renovation, Turnkey)
export const constructionServices: ConstructionService[] = [
  {
    number: "01",
    title: "Residential Construction",
    category: "Homes, Villas & Duplexes",
    description:
      "Turnkey construction of bespoke residential homes, luxury villas, duplex residences, and row houses across Nagercoil. Optimized for natural light, coastal cross-ventilation, functional living, and long-term structural endurance.",
    icon: "home",
    points: [
      "Custom architectural layouts & Vastu compliance",
      "Monolithic RCC column framing & anti-damp plinth beams",
      "Wire-cut red brickwork or precision AAC block masonry",
      "Concealed electrical, plumbing & modular interior integration",
    ],
  },
  {
    number: "02",
    title: "Commercial & Retail Buildings",
    category: "Showrooms, Offices & Complexes",
    description:
      "Engineering and construction of high-footfall commercial complexes, retail showrooms, corporate offices, diagnostic clinics, and multi-tenancy business plazas built to commercial fire and DTCP safety norms.",
    icon: "business",
    points: [
      "Wide-span pillar-free floor plates for flexible layouts",
      "High-load commercial grade RCC slab engineering",
      "Glass facade, ACP cladding & exterior elevation works",
      "Dedicated utility shafts, fire exits & commercial parking layout",
    ],
  },
  {
    number: "03",
    title: "Industrial & Warehouse Infrastructure",
    category: "Factory Sheds & Storage Godowns",
    description:
      "Durable industrial civil works including heavy equipment foundation pads, Pre-Engineered Steel Buildings (PEB), factory workshops, storage warehouses, cold-storage civil frameworks, and industrial logistics facilities.",
    icon: "warehouse",
    points: [
      "Heavy load-bearing industrial grade VDF flooring",
      "Pre-engineered steel truss and metal roofing integration",
      "High-capacity storm drainage & rainwater harvesting basins",
      "Loading dock civil works & heavy vehicle access paving",
    ],
  },
  {
    number: "04",
    title: "Structural RCC & Civil Works",
    category: "Foundations, Columns & Roof Slabs",
    description:
      "Ground-up heavy civil structural execution adhering strictly to IS 456, IS 875, and IS 1893 codes. From soil bearing capacity testing to deep footing excavation, certified Fe550D TMT reinforcement, and monolithic concrete batching.",
    icon: "engineering",
    points: [
      "Isolated, strap, or raft foundations tailored to site soil",
      "Certified Fe550D primary steel (Tata Tiscon / JSW Neosteel)",
      "High-strength 53-grade OPC/PPC concrete mixes",
      "Mandatory 21-day continuous pond curing cycle for all slabs",
    ],
  },
  {
    number: "05",
    title: "Renovation & Vertical Expansion",
    category: "Strengthening & Floor Additions",
    description:
      "Comprehensive structural rehabilitation, vertical upper-floor additions, column jacketing, load-bearing re-engineering, structural retrofitting, and modern exterior elevation makeovers for existing properties.",
    icon: "domain_add",
    points: [
      "Structural stability evaluation of existing foundations",
      "Micro-concrete column jacketing & beam strengthening",
      "Leakage rectification & chemical polymer damp proofing",
      "Seamless plumbing & electrical extension into new floors",
    ],
  },
  {
    number: "06",
    title: "Turnkey Planning, Approvals & Handover",
    category: "Full Project Delivery",
    description:
      "Complete hassle-free project delivery covering site feasibility, architectural CAD designs, structural engineering validation, municipal corporation and DTCP plan approvals, bill of quantities (BOQ), and guaranteed handover.",
    icon: "task_alt",
    points: [
      "100% transparent itemized BOQ with zero hidden rate shocks",
      "Nagercoil Corporation & Panchayat building sanction handling",
      "Strict quality audits and pressure-tested MEP commissioning",
      "Formal key handover with complete as-built documentation",
    ],
  },
];

// Alias for backward compatibility if any legacy reference exists
export const residentialServices = constructionServices;

// 4-Step Engineering Approach ("Building Step By Step")
export const constructionApproachSteps: ApproachStep[] = [
  {
    step: "01",
    title: "Discover & Assess",
    subtitle: "Site Feasibility & Brief",
    description:
      "We evaluate your site topography, soil bearing strata, boundary setbacks, local DTCP zoning regulations, building purpose (residential, commercial, or industrial), and long-term functional requirements before drafting.",
  },
  {
    step: "02",
    title: "Design & Sanction",
    subtitle: "Engineering & Approvals",
    description:
      "Our architects and structural engineers create optimized floor layouts, 3D elevations, STAAD.Pro structural models, itemized transparent BOQs, and submit statutory drawings for municipal plan sanctions.",
  },
  {
    step: "03",
    title: "Execute & Supervise",
    subtitle: "On-Site Civil Construction",
    description:
      "Civil engineers oversee physical execution on-site daily: soil excavation, reinforcement bar-bending, concrete batching, brick masonry, water curing, and concealed MEP conduit casting with scheduled digital client updates.",
  },
  {
    step: "04",
    title: "Audit & Commission",
    subtitle: "Quality Testing & Handover",
    description:
      "We conduct multi-point quality audits: hydrostatic plumbing line pressure testing, electrical megger insulation testing, terrace flood waterproofing checks, and site clearance for a turnkey key handover ready for occupancy.",
  },
];

// 4 Value Pillars ("Why Choose SMS Construction")
export const whyChoosePillars: WhyChoosePillar[] = [
  {
    title: "All-Sector Civil Engineering",
    subtitle: "Residential, Commercial & Industrial",
    description:
      "Unified contracting capability covering independent villas, high-footfall commercial buildings, industrial sheds, and structural retrofitting under one responsible engineering desk.",
    icon: "apartment",
  },
  {
    title: "Strict IS Code Compliance",
    subtitle: "Engineered for Decades",
    description:
      "Every structural member is designed and cast in accordance with Indian Standards: IS 456 (Concrete), IS 875 (Wind Loads), and IS 1893 (Earthquake Resistance) with primary Fe550D TMT steel.",
    icon: "verified",
  },
  {
    title: "Itemized Transparent BOQ",
    subtitle: "Zero Hidden Rate Shocks",
    description:
      "Clear, itemized Bill of Quantities outlining exact material brands, specifications, cubic volumes, and payment milestones linked strictly to verified physical work stages.",
    icon: "receipt_long",
  },
  {
    title: "Monsoon-Ready Weatherproofing",
    subtitle: "Coastal Climate Engineered",
    description:
      "Specialized 4-tier moisture barrier engineered for Kanyakumari's heavy coastal rainfall: crystalline concrete admixtures, chemical plinth barriers, and polymer terrace waterproofing.",
    icon: "shield",
  },
];

// High-Density AEO / Local FAQ covering ALL Construction
export const constructionFaqs: ConstructionFaq[] = [
  {
    question: "What types of construction projects does SMS Construction undertake in Nagercoil?",
    answer:
      "SMS Construction undertakes all types of civil building construction in Nagercoil and across Kanyakumari District. This includes residential buildings (independent villas, family houses, duplexes), commercial projects (retail showrooms, corporate offices, commercial complexes), industrial civil infrastructure (factory sheds, warehouses, workshops), and structural renovations or vertical floor additions.",
  },
  {
    question: "What is the typical civil construction cost per sq.ft in Nagercoil?",
    answer:
      "In Nagercoil and Kanyakumari District, civil structural construction (framing shell) ranges from ₹1,850 to ₹2,150 per sq.ft. Complete turnkey residential construction typically ranges between ₹2,200 and ₹3,000+ per sq.ft depending on flooring, joinery, and sanitary fittings chosen. Commercial and industrial projects are quoted based on specific span requirements, floor loads, and structural specifications via an itemized Bill of Quantities (BOQ).",
  },
  {
    question: "Which steel, cement, and raw materials do you use for civil construction?",
    answer:
      "We strictly deploy primary Fe550D TMT steel bars (Tata Tiscon or JSW Neosteel) and high-strength 53-grade OPC/PPC cement (UltraTech or Ramco). We never use secondary or re-rolled steel. Stone aggregates and M-sand/P-sand are lab-tested for silt content and gradation to guarantee maximum structural compression strength and coastal anti-corrosion durability.",
  },
  {
    question: "Does SMS Construction construct commercial complexes and retail showrooms?",
    answer:
      "Yes. We specialize in commercial building construction featuring wide-span pillar-free floor plates, high-ceiling retail showroom floors, reinforced parking basements, glass and ACP facade integration, lift shafts, fire exit stairwells, and municipal DTCP commercial compliance.",
  },
  {
    question: "Do you construct industrial sheds, warehouses, and factories?",
    answer:
      "Yes. We construct heavy-duty industrial civil infrastructure including vacuum dewatered flooring (VDF / Tremix) capable of supporting heavy machinery and forklift movement, pre-engineered building (PEB) foundations, metal roofing sheds, loading docks, and industrial storage godowns.",
  },
  {
    question: "Do you handle building plan approvals, DTCP permissions, and municipal sanctions?",
    answer:
      "Yes. Our engineering desk coordinates all statutory drawings and documentation required for approvals from the Nagercoil City Municipal Corporation, Directorate of Town and Country Planning (DTCP), and local village/town panchayats across Kanyakumari District, including structural stability certification.",
  },
  {
    question: "How do you safeguard buildings against heavy coastal monsoon rains in Kanyakumari?",
    answer:
      "Kanyakumari experiences both South-West and North-East monsoons with high coastal humidity. We deploy a 4-tier moisture shield: chemical plinth beam anti-capillary barriers, integral crystalline waterproofing admixtures in all RCC mixes, double-coat exterior sand-face plastering with micro-fibers, and polymer brick-bat coba waterproofing for open roof terraces.",
  },
  {
    question: "Can existing commercial or residential buildings be expanded with additional floors?",
    answer:
      "Yes. We perform structural audits of existing footings and columns. Where necessary, we implement micro-concrete column jacketing and beam strengthening to safely construct vertical floor extensions while maintaining complete structural stability and building safety standards.",
  },
  {
    question: "How long does it take to construct a residential or commercial building?",
    answer:
      "An independent residential home (2,000 to 3,000 sq.ft) typically takes 7 to 9 months from foundation to key handover. Commercial complexes vary between 8 and 14 months depending on total square footage, basement depth, and facade requirements. Every project is governed by a defined milestone schedule with guaranteed timeline milestones.",
  },
  {
    question: "How can clients living abroad (NRIs) or outside Nagercoil monitor on-site progress?",
    answer:
      "We provide remote clients and NRI property owners with daily high-definition photo and video logs via a dedicated project WhatsApp group, weekly drone/site footage, and bi-weekly milestone verification reports. Payments are linked strictly to verified milestone completion.",
  },
];

// Local Geotargeting Areas across Kanyakumari District
export const geoLocalities: string[] = [
  "Nagercoil City",
  "Vadasery",
  "Kottar",
  "Ozhuginasery",
  "Parvathipuram",
  "Asaripallam",
  "Chettikulam",
  "Suchindram",
  "Theroor",
  "Kanyakumari",
  "Marthandam",
  "Thuckalay",
  "Colachel",
  "Karungal",
  "Kulasekharam",
  "Villukuri",
  "Eraniel",
  "Monday Market",
  "Kuzhithurai",
];
