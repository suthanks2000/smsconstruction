export interface SurveyServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  summary: string;
  application: string;
  icon: string;
}

export interface PreparationServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  note: string;
  deliverable: string;
}

export interface SurveyDecisionItem {
  number: string;
  service: string;
  method: string;
  bestFit: string;
  description: string;
}

export interface ClientChecklistItem {
  number: string;
  title: string;
  description: string;
  note?: string;
}

export interface SurveyFaqItem {
  question: string;
  answer: string;
}

// 01 to 06: Survey Services (Editorial Service Directory)
export const surveyServices: SurveyServiceItem[] = [
  {
    id: "tape-survey",
    number: "01",
    title: "Tape Survey",
    category: "Linear Ground Measurement",
    summary: "Basic site measurement using appropriate tape-based methods.",
    description:
      "Basic site measurement using appropriate tape-based methods to capture boundary lengths, accessible road frontages, and baseline plot dimensions for straightforward sites.",
    application: "Straightforward plots, simple boundary cross-checks, and preliminary site reconnaissance.",
    icon: "straighten",
  },
  {
    id: "digital-survey",
    number: "02",
    title: "Digital Survey",
    category: "Electronic Data Acquisition",
    summary: "Digital measurement and site data capture, depending on project requirements.",
    description:
      "Digital measurement and site data capture, depending on project requirements. Captures coordinated digital points to establish perimeter geometry for computer-aided drafting and spatial analysis.",
    application: "Plots requiring digital CAD coordinates, irregular road edges, and multi-sided parcels.",
    icon: "radar",
  },
  {
    id: "total-station-survey",
    number: "03",
    title: "Total Station Survey",
    category: "High-Precision Electro-Optical Measurement",
    summary: "Survey measurement using total station equipment where applicable to the project.",
    description:
      "Survey measurement using total station equipment where applicable to the project. Employs electronic theodolite and EDM technology to record exact angles, long distances, and three-dimensional spatial coordinates.",
    application: "Medium-to-large plots, commercial layouts, multi-level ground features, and complex perimeters.",
    icon: "filter_center_focus",
  },
  {
    id: "building-marking-survey",
    number: "04",
    title: "Building Marking Survey",
    category: "On-Site Layout Demarcation",
    summary: "Site marking to help establish relevant building/layout positions based on project requirements.",
    description:
      "Site marking to help establish relevant building/layout positions based on project requirements. Translates approved architectural gridlines, foundation centerlines, and setback alignments physically onto the ground.",
    application: "Foundation excavation staging, column footing alignments, and statutory setback verification.",
    icon: "architecture",
  },
  {
    id: "topographical-survey",
    number: "05",
    title: "Topographical Survey",
    category: "Terrain & Feature Mapping",
    summary: "Capture of site-level information to understand terrain and existing ground conditions.",
    description:
      "Capture of site-level information to understand terrain and existing ground conditions. Documents physical site features, existing permanent structures, trees, access thresholds, and natural ground formations.",
    application: "Undulating land, master planning, landscape integration, and structural retaining wall engineering.",
    icon: "landscape",
  },
  {
    id: "contour-survey",
    number: "06",
    title: "Contour Survey",
    category: "Vertical Elevation Mapping",
    summary: "Survey information representing changes in ground elevation across the site.",
    description:
      "Survey information representing changes in ground elevation across the site. Maps relative spot heights and contour lines to evaluate slope direction, cut-and-fill earthwork volumes, and natural storm runoff patterns.",
    application: "Sloped terrains, hillside residential sites, earthwork balancing, and stormwater gradient planning.",
    icon: "altitude",
  },
];

// 07 to 08: Site / Document Preparation Services
export const preparationServices: PreparationServiceItem[] = [
  {
    id: "layout-preparation",
    number: "07",
    title: "Layout Preparation",
    category: "Spatial Conversion & CAD Synthesis",
    summary: "Translating site measurements into a clear layout direction for planning and execution.",
    description:
      "Site measurements and project requirements can be translated into a clearer layout direction for the next stages of planning and execution. We synthesize measured site boundaries, setback corridors, and orientation vectors into clear working drawings.",
    note: "Connects field measurements directly to subsequent architectural floor plans and structural coordination.",
    deliverable: "Dimensioned site layout schematic and baseline boundary plot CAD file.",
  },
  {
    id: "fmb",
    number: "08",
    title: "FMB (Field Measurement Book)",
    category: "Site Documentation Support",
    summary: "FMB refers to Field Measurement Book information used in land and site-related contexts.",
    description:
      "FMB refers to Field Measurement Book information used in land and site-related contexts. FMB-related information may be relevant when understanding land measurements and site documentation. Requirements and records can depend on the property and applicable authorities.",
    note: "SMS Construction provides measurement verification and documentation support to help clients understand site dimensions in relation to available records. We do not act as an official government issuer.",
    deliverable: "On-site dimensional cross-referencing and site verification review report.",
  },
];

// Section 8: Which Survey Is Right for Your Project? (AEO Decision Matrix)
export const surveyDecisionGuide: SurveyDecisionItem[] = [
  {
    number: "01",
    service: "Tape Survey",
    method: "Manual Tape Measurement",
    bestFit: "Straightforward linear plots & simple boundary checks",
    description:
      "Useful for straightforward measurement requirements depending on the site. Well-suited for regular rectangular plots where preliminary dimensional verification is needed.",
  },
  {
    number: "02",
    service: "Digital Survey",
    method: "Digital Coordinate Capture",
    bestFit: "Irregular parcels & CAD planning integration",
    description:
      "Useful when digital measurement/data capture is appropriate. Ideal for converting field point clouds and vectors directly into 2D/3D CAD drafting systems.",
  },
  {
    number: "03",
    service: "Total Station Survey",
    method: "Electro-Optical Coordinate Measurement",
    bestFit: "Medium-to-large plots, complex angles & high precision",
    description:
      "Useful when higher-detail survey equipment is required for the project. Accurately maps millimeter-level coordinates across challenging site sightlines.",
  },
  {
    number: "04",
    service: "Building Marking Survey",
    method: "On-Site Physical Peg & Thread Demarcation",
    bestFit: "Immediate pre-construction foundation setting",
    description:
      "Useful when site positions need to be established for construction-related requirements. Transfers column axes, footing pits, and setbacks from drawing to ground.",
  },
  {
    number: "05",
    service: "Topographical Survey",
    method: "Feature & Surface Coordinate Mapping",
    bestFit: "Sites with existing trees, structures & natural gradients",
    description:
      "Useful when understanding terrain and ground-level variation is important. Gives architects the real physical context to design around natural site assets.",
  },
  {
    number: "06",
    service: "Contour Survey",
    method: "Spot Height & Elevation Grid Mapping",
    bestFit: "Sloped land, cut-and-fill planning & drainage engineering",
    description:
      "Useful when elevation/level variation across the site needs to be represented. Critical for calculating grading volumes and ensuring positive stormwater drainage.",
  },
];

// Section 9: What Clients Should Prepare (Checklist)
export const clientPreparationChecklist: ClientChecklistItem[] = [
  {
    number: "01",
    title: "Site Location & Access",
    description:
      "Specific plot address, approach road width, gate access, and clear physical pathways for surveying personnel and optical tripods.",
  },
  {
    number: "02",
    title: "Project Type & Scale",
    description:
      "Whether the upcoming project is an independent residential home, commercial complex, villa, or renovation footprint.",
  },
  {
    number: "03",
    title: "Available Property Documents",
    description:
      "Copies of purchase deeds, prior survey sketches, patta details, or approved layout copies if previously documented.",
  },
  {
    number: "04",
    title: "Existing Drawings (If Available)",
    description:
      "Preliminary architectural concept sketches, floor count requirements, or earlier draft schematics from your family or designers.",
  },
  {
    number: "05",
    title: "Known Boundaries & Physical Markers",
    description:
      "Identification of known boundary corner stones, survey pegs, compound walls, neighboring fences, or street reference alignments.",
  },
  {
    number: "06",
    title: "Specific Planning Requirements",
    description:
      "Intended built footprint, Vastu orientation priorities, compound setback considerations, or specific drainage discharge points.",
  },
];

// Section 12: Frequently Asked Questions (8–10 concise questions matching AEO)
export const surveyFaqs: SurveyFaqItem[] = [
  {
    question: "What survey services does SMS Construction provide?",
    answer:
      "SMS Construction provides a structured range of site survey and project-preparation services across Nagercoil and Kanyakumari District. These include Tape Survey, Digital Survey, Total Station Survey, Building Marking Survey, Topographical Survey, Contour Survey, Layout Preparation, and FMB-related documentation coordination.",
  },
  {
    question: "What is a Tape Survey?",
    answer:
      "A Tape Survey is a foundational measurement method using calibrated measuring tapes to establish basic boundary lengths, accessible road frontages, and simple rectangular plot dimensions. It is useful for initial site checks where complex electro-optical equipment is not strictly necessary.",
  },
  {
    question: "What is a Digital Survey?",
    answer:
      "A Digital Survey utilizes electronic measuring instruments to capture site boundaries and key features as digital point data. This data is transferred directly into computer-aided design (CAD) software, giving architects an exact digital base file for floor plan planning and dimensional verification.",
  },
  {
    question: "What is a Total Station Survey?",
    answer:
      "A Total Station Survey uses an electronic theodolite integrated with an electronic distance meter (EDM) to measure precise horizontal and vertical angles and slope distances. It is well-suited for medium-to-large plots, irregular angles, commercial building sites, and projects requiring high geometric accuracy.",
  },
  {
    question: "What is a Building Marking Survey?",
    answer:
      "A Building Marking Survey involves physically marking building gridlines, column centerlines, foundation excavation pits, and statutory setback boundaries directly onto the ground. This bridges architectural floor plans to actual construction execution, ensuring the structure is built exactly where designed.",
  },
  {
    question: "What is a Topographical Survey?",
    answer:
      "A Topographical Survey maps the natural and man-made surface features of a property, including trees, existing boundary walls, nearby structures, road levels, and physical surface variations. It helps engineers and architects understand ground conditions before committing to foundation design.",
  },
  {
    question: "What is a Contour Survey?",
    answer:
      "A Contour Survey records ground elevation variations and maps lines connecting points of equal height across a property. It is essential for sloped plots, calculating earth cut-and-fill volumes, and designing gravity-based rainwater and sewer drainage paths.",
  },
  {
    question: "What is Layout Preparation?",
    answer:
      "Layout Preparation is the process of translating field survey measurements and client spatial requirements into a clear, dimensioned site layout plan. It incorporates building footprint zoning, access driveways, compound setbacks, and utility staging paths for upcoming planning stages.",
  },
  {
    question: "What does FMB (Field Measurement Book) mean?",
    answer:
      "FMB refers to Field Measurement Book information used in land and site-related documentation. It contains property sketches and survey number boundaries recorded in revenue contexts. SMS Construction helps clients verify their physical site dimensions against available FMB information for planning clarity; we do not act as an official government issuing authority.",
  },
  {
    question: "How do I know which survey is suitable for my project?",
    answer:
      "The appropriate survey method depends on your plot size, terrain slope, boundary complexity, and the stage of your project. Simple flat plots may only need tape or basic digital measurements, while uneven terrain requires contour or total station surveys. You can contact SMS Construction to evaluate your site and recommend the right approach.",
  },
  {
    question: "Do you provide survey services in Nagercoil?",
    answer:
      "Yes. SMS Construction is based in Nagercoil, Tamil Nadu, and actively provides survey, marking, and layout preparation services across Nagercoil City, Vadasery, Kottar, Suchindram, Theroor, Kanyakumari, Marthandam, and surrounding areas in Kanyakumari District.",
  },
  {
    question: "How can I discuss my site requirements?",
    answer:
      "You can discuss your site requirements by contacting SMS Construction directly at +91 94880 21183, reaching out on WhatsApp, or visiting our office at 25/1 Muthamizh Street, Near Court Road, Nagercoil. Our team will review your site location and guide you on the necessary survey preparation.",
  },
];
