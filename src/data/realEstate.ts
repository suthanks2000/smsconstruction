export interface RealEstateServiceItem {
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

export interface RealEstateProcessStep {
  step: string;
  number: string;
  title: string;
  desc: string;
}

export interface RealEstateFaq {
  question: string;
  answer: string;
}

export const realEstateServices: RealEstateServiceItem[] = [
  {
    id: "property-buying",
    number: "01",
    title: "Property Buying Assistance",
    category: "Acquisition & Advisory",
    description:
      "Structured guidance for individuals and businesses seeking residential plots, commercial sites, or building land across Nagercoil, Kanyakumari District, and all over Tamil Nadu. We assist in identifying suitable locations aligned with your budget, access requirements, and development vision.",
    applicationScope:
      "Residential plots, villa plots, individual home sites, and commercial development parcels.",
    image: "/images/projects/modern-edge-residence.webp",
    alt: "Residential property and plot buying guidance across Tamil Nadu by SMS Construction",
    considerations: [
      "Review of location suitability, road access width, and town planning boundaries",
      "Analysis of topography, groundwater potential, and structural construction feasibility",
      "Coordination with our on-ground survey team for physical boundary verification",
      "Transparent advisory on prevailing market trends in specific Nagercoil and Tamil Nadu localities",
    ],
  },
  {
    id: "property-selling",
    number: "02",
    title: "Property Selling Support",
    category: "Owner Representation & Marketing",
    description:
      "Professional assistance for landowners and property owners wishing to market and sell their residential plots or commercial properties in Nagercoil, Kanyakumari District, and across Tamil Nadu. We help present your property clearly, prepare necessary site details, and connect with serious prospective buyers.",
    applicationScope:
      "Direct plot owners, residential property sellers, and commercial real estate holders.",
    image: "/images/screen2_exterior.webp",
    alt: "Property selling support and site evaluation across Tamil Nadu by SMS Construction",
    considerations: [
      "Objective site assessment and realistic pricing orientation based on local development value",
      "Preparation of clear dimensional summaries, access details, and layout coordinates",
      "Connecting with verified buyers looking for residential construction or investment plots",
      "Facilitating structured meetings between buyers and sellers with total transparency",
    ],
  },
  {
    id: "property-guidance",
    number: "03",
    title: "Property Guidance & Due Diligence",
    category: "Site & Documentation Support",
    description:
      "Integrated technical and administrative assistance to help clients verify physical and statutory property aspects before committing to an agreement. We bridge engineering discovery with property transactions.",
    applicationScope:
      "Prospective buyers, NRIs, and investors needing independent verification across Nagercoil and Tamil Nadu.",
    image: "/images/services/services-survey-approvals-portrait.webp",
    alt: "Property documentation review and land survey verification in Tamil Nadu by SMS Construction",
    considerations: [
      "Digital Total Station boundary measurement to cross-verify physical dimensions against revenue sketches",
      "Guidance on DTCP, LPA, and local municipal zoning guidelines applicable to the parcel",
      "Assistance in coordinating revenue documentation including Patta, Chitta, and FMB sketches",
      "Coordination with qualified legal professionals for encumbrance and title verification",
    ],
  },
];

export const realEstateProcessSteps: RealEstateProcessStep[] = [
  {
    step: "Phase 1",
    number: "01",
    title: "Requirement Consultation",
    desc: "Understand your specific property preferences, intended land use, budget parameters, and preferred micro-markets in Nagercoil and across Tamil Nadu.",
  },
  {
    step: "Phase 2",
    number: "02",
    title: "Site & Document Discovery",
    desc: "Conduct physical site visits, assess road approach, verify dimensions with survey instruments, and review initial documentation.",
  },
  {
    step: "Phase 3",
    number: "03",
    title: "Coordination & Handover",
    desc: "Facilitate transparent discussions between parties, assist with agreement documentation milestones, and support smooth transaction closure.",
  },
];

export const realEstateFaqs: RealEstateFaq[] = [
  {
    question: "What real estate services does SMS Construction offer in Nagercoil?",
    answer:
      "SMS Construction provides property buying assistance, property selling support, and technical property guidance across Nagercoil and Kanyakumari District. Our construction and surveying expertise allows us to evaluate land feasibility, road access, and physical site parameters alongside real estate transactions.",
  },
  {
    question: "Does SMS Construction verify land boundaries before purchase?",
    answer:
      "Yes. Because we operate an in-house surveying division with electronic Total Station instruments, we can physically measure plot boundaries, cross-check FMB revenue sketches, and ensure you purchase exactly what is recorded on paper.",
  },
  {
    question: "Can SMS Construction assist with both residential and commercial properties?",
    answer:
      "Yes. We assist clients interested in individual residential plots, villa layout sites, and commercial land parcels suited for retail or office development in Nagercoil and surrounding areas.",
  },
  {
    question: "Are real estate services linked with your construction services?",
    answer:
      "While real estate services can be utilized independently, many clients choose SMS Construction for both acquiring the land and subsequent architectural planning, approvals, and turnkey construction, ensuring seamless continuity.",
  },
  {
    question: "How can I enquire about buying or selling a property?",
    answer:
      "You can submit an enquiry through our online Contact form, call our office directly at +91 94880 21183, or visit our studio at 25/1 Muthamizh Street, Near Court Road, Nagercoil.",
  },
];
