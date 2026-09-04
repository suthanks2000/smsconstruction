export interface SurveyScope {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  details: string[];
  deliverable: string;
}

export interface SurveyProcessStep {
  number: string;
  step: string;
  title: string;
  action: string;
  description: string;
  focus: string;
}

export interface ClientPreparationItem {
  number: string;
  title: string;
  description: string;
  tip: string;
  iconName: string;
}

export interface SurveyAudienceItem {
  number: string;
  title: string;
  description: string;
  benefit: string;
}

export interface SurveyFaq {
  question: string;
  answer: string;
}

export const surveyScopes: SurveyScope[] = [
  {
    id: "site-understanding",
    number: "01",
    title: "Site Understanding",
    category: "Site & Environmental Context",
    description:
      "Assessing the physical conditions of your plot, boundary orientations, access roads, natural grade levels, and surrounding context before any drawings or structural plans are committed.",
    details: [
      "Physical plot orientation and solar exposure review",
      "Approach road width, accessibility, and material staging assessment",
      "Surrounding built structures and shared boundary conditions",
      "Natural slope, rainwater drainage tendencies, and ground observations",
    ],
    deliverable: "Initial Site Assessment & Context Overview",
  },
  {
    id: "project-requirement-review",
    number: "02",
    title: "Project Requirement Review",
    category: "Scope Definition & Feasibility",
    description:
      "Clarifying your intended built area, functional room distribution, family lifestyle requirements, and spatial priorities against the practical physical limits of the site.",
    details: [
      "Room counts, multi-storey requirements, and circulation wishlists",
      "Vehicle parking and setback space allocation review",
      "Floor-area feasibility against physical plot dimensions",
      "Budget expectations aligned with realistic structural scopes",
    ],
    deliverable: "Project Scope & Requirement Outline",
  },
  {
    id: "documentation-coordination",
    number: "03",
    title: "Documentation Coordination",
    category: "Drawings & Paperwork Preparation",
    description:
      "Organizing existing property documents, title survey sketches, boundary drawings, and layout schematics into a structured dossier required for planning and engineering discussions.",
    details: [
      "Reviewing available site survey sketches and dimensional boundaries",
      "Compiling base drawings required for architectural planning",
      "Identifying missing dimensions or boundary ambiguities early",
      "Structuring project drawings for structural engineering coordination",
    ],
    deliverable: "Coordinated Project Drawing Dossier",
  },
  {
    id: "approval-related-coordination",
    number: "04",
    title: "Approval-Related Coordination",
    category: "Preparation & Liaison Support",
    description:
      "Assisting clients with drawing preparation, submission checklists, and coordinating with qualified local liaisons and consultants according to project-specific requirements.",
    details: [
      "Preparing clean architectural drawings aligned with local submission norms",
      "Verifying drawing annotations, setback clearances, and title sheet data",
      "Coordinating with external consultants and documentation specialists",
      "Clarifying typical submission prerequisites based on project location",
    ],
    deliverable: "Submission-Ready Drawing Pack & Checklist",
  },
  {
    id: "pre-construction-preparation",
    number: "05",
    title: "Pre-Construction Preparation",
    category: "Site Readiness & Logistics",
    description:
      "Bridging the crucial gap between approved schematics and physical groundbreaking—coordinating site clearances, utility connections, and access logistics in Nagercoil.",
    details: [
      "Temporary power and water supply feasibility for site works",
      "Site demarcation and temporary boundary protection planning",
      "Material delivery routing and heavy vehicle access coordination",
      "Execution timeline alignment before site mobilization",
    ],
    deliverable: "Pre-Construction Readiness Checklist",
  },
];

export const surveyProcessSteps: SurveyProcessStep[] = [
  {
    number: "01",
    step: "Stage 1 of 5",
    title: "Understand the Site",
    action: "On-Ground Observation",
    description:
      "We begin by examining the physical plot in person in Nagercoil, observing boundary marks, approach access, existing trees, slope conditions, and adjacent structures.",
    focus: "Physical plot reality and boundary context",
  },
  {
    number: "02",
    step: "Stage 2 of 5",
    title: "Clarify Requirements",
    action: "Brief Alignment",
    description:
      "A structured consultation to map your family's spatial wishlist, preferred layout style, room dimensions, and future expansion possibilities against site constraints.",
    focus: "Built-up area expectations and functional scope",
  },
  {
    number: "03",
    step: "Stage 3 of 5",
    title: "Prepare the Next Steps",
    action: "Documentation Setup",
    description:
      "Gathering existing survey sketches, property title copies, and drafting preliminary schematic floor plans that adhere to good architectural and setback practices.",
    focus: "Base drawing preparation and document readiness",
  },
  {
    number: "04",
    step: "Stage 4 of 5",
    title: "Coordinate Where Needed",
    action: "Consultant & Filing Alignment",
    description:
      "Connecting drawings with qualified local consultants, structural engineers, and filing representatives as required by your project's jurisdiction and scope.",
    focus: "Drawing compliance and submission coordination",
  },
  {
    number: "05",
    step: "Stage 5 of 5",
    title: "Move Towards Execution",
    action: "Civil Build Transition",
    description:
      "With site parameters and documentation aligned, we seamlessly transition the project into detailed architectural design, structural drawings, and civil construction.",
    focus: "Smooth handover into site execution",
  },
];

export const clientPreparationItems: ClientPreparationItem[] = [
  {
    number: "01",
    title: "Project Location & Plot Address",
    description:
      "The specific locality or landmark in Nagercoil or Kanyakumari district so we can assess neighborhood context, road widths, and terrain characteristics.",
    tip: "A Google Maps pin or nearby landmark helps our team prepare for site visits.",
    iconName: "MapPin",
  },
  {
    number: "02",
    title: "Basic Site Information",
    description:
      "Approximate plot dimensions (e.g., 40' x 60'), corner plot orientation, boundary wall status, and whether the land is vacant, agricultural, or previously built on.",
    tip: "Rough measurements are completely fine for initial exploratory discussions.",
    iconName: "Ruler",
  },
  {
    number: "03",
    title: "Intended Project Type",
    description:
      "Whether you are planning a standalone residential villa, an independent family bungalow, a commercial shop floor, or a multi-storey rental property.",
    tip: "Knowing your occupancy plans helps clarify required setbacks and parking spaces.",
    iconName: "Building2",
  },
  {
    number: "04",
    title: "Approximate Space Requirements",
    description:
      "Your desired bedroom count (e.g., 3BHK or 4BHK), number of floors (G+1 or G+2), dedicated pooja space, home office, or vehicle parking counts.",
    tip: "A simple handwritten room wishlist is an excellent starting point.",
    iconName: "FileSpreadsheet",
  },
  {
    number: "05",
    title: "Existing Drawings or Documents (If Available)",
    description:
      "Any prior survey sketch, land deed boundary description, or previous architectural concept sketches you may have in your possession.",
    tip: "If you don't have existing drawings, we guide you on how to obtain base site measurements.",
    iconName: "FileText",
  },
  {
    number: "06",
    title: "Key Priorities, Timelines & Concerns",
    description:
      "Any specific preferences regarding Vastu direction, natural ventilation, tentative groundbreaking target dates, or construction budget parameters.",
    tip: "Sharing your budget and preferred start timeline ensures practical planning right from day one.",
    iconName: "Clock",
  },
];

export const surveyAudienceItems: SurveyAudienceItem[] = [
  {
    number: "01",
    title: "Planning a New Build",
    description:
      "Homeowners who own a plot in Nagercoil or Kanyakumari district and want to understand site potential, building setbacks, and documentation prerequisites before commissioning builders.",
    benefit: "Enter construction with complete clarity on site boundaries and project scope.",
  },
  {
    number: "02",
    title: "Preparing a Major Renovation",
    description:
      "Property owners planning structural extensions, additional floors, or compound wall modifications who need to evaluate existing load-bearing conditions and local setback norms.",
    benefit: "Ensure new additions integrate safely with existing structural footprints.",
  },
  {
    number: "03",
    title: "Starting a Residential Project",
    description:
      "Families looking for end-to-end design-and-build guidance who prefer having site survey, architectural drawings, and civil construction coordinated under one cohesive team.",
    benefit: "Eliminates the traditional disconnect between survey consultants and building contractors.",
  },
  {
    number: "04",
    title: "Clarifying Site Requirements",
    description:
      "Clients dealing with sloping plots, narrow access lanes, corner properties, or unique boundary angles who need on-ground technical assessment before deciding on floor plans.",
    benefit: "Avoid designing layouts that cannot be physically or practically built on the plot.",
  },
  {
    number: "05",
    title: "Preparing Before Construction",
    description:
      "Investors and families who want all drawings, utility arrangements, and documentation checklists in place well in advance of mobilizing labor and equipment on site.",
    benefit: "Prevents idle site delays, work stoppages, and mid-construction redesign costs.",
  },
];

export const surveyFaqs: SurveyFaq[] = [
  {
    question: "What does survey and approvals support include?",
    answer:
      "Survey & approvals support at SMS Construction focuses on practical pre-construction preparation. This includes physical site context evaluation, boundary and setback orientation review, project requirement analysis, architectural submission drawing preparation, organizing documentation dossiers, and coordinating with qualified local consultants and liaisons according to your project's jurisdiction in Nagercoil.",
  },
  {
    question: "Why is site understanding important before construction?",
    answer:
      "A thorough understanding of the site—including boundary dimensions, road access width, solar path, slope, soil nature, and adjacent buildings—ensures your architectural plans fit reality. It prevents costly on-site surprises such as delivery vehicles being unable to enter narrow access roads, structural foundations hitting unexpected water levels, or rooms lacking natural coastal ventilation.",
  },
  {
    question: "Can SMS Construction help me prepare before starting a project?",
    answer:
      "Yes. Many clients visit our Nagercoil studio months before they intend to start digging. We examine your plot details, review room wishlists, explain necessary pre-construction preparation steps, and establish a realistic timeline and budget outline so you can move forward with confidence when ready.",
  },
  {
    question: "What information should I have before a project consultation?",
    answer:
      "Having your approximate plot location or address, rough plot dimensions, intended building type (e.g., 3BHK villa, G+1 independent house), and any existing survey sketches or property papers is very helpful. However, even if you only have a plot and a general idea, our team can guide you through the necessary steps.",
  },
  {
    question: "Do I need drawings or documents before discussing my project?",
    answer:
      "No. You do not need finished architectural drawings to have an initial discussion with SMS Construction. If you have documents or rough hand sketches, we review them; if not, our team helps clarify what measurements and drawings will be needed based on your project goals.",
  },
  {
    question: "Can survey and approvals support be combined with design planning?",
    answer:
      "Yes, and we highly recommend it. Integrating site understanding with architectural design and planning ensures your floor plans, window placements, and structural columns are directly tailored to your plot's physical environment, setbacks, and local building norms.",
  },
  {
    question: "Do you provide this service in Nagercoil?",
    answer:
      "Yes. SMS Construction is based in Nagercoil, Tamil Nadu, and actively provides project preparation, site assessment, and construction coordination services across Nagercoil and nearby localities throughout Kanyakumari district.",
  },
  {
    question: "How can I discuss my project with SMS Construction?",
    answer:
      "You can contact us by submitting an inquiry through our website contact form, calling our office directly at +91 94880 21183, or sending us a message on WhatsApp. We can arrange an introductory consultation at our Nagercoil office or schedule an on-site visit to your plot.",
  },
];
