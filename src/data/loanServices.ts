export interface LoanCategoryItem {
  id: string;
  number: string;
  title: string;
  badge: string;
  description: string;
  scope: string;
  provisionalNote: string;
  image: string;
  alt: string;
  commonPurposes: string[];
}

export interface LoanProcessStep {
  step: string;
  number: string;
  title: string;
  desc: string;
}

export interface LoanFaq {
  question: string;
  answer: string;
}

// Provisional loan categories subject to client confirmation before final policy publication
export const provisionalLoanCategories: LoanCategoryItem[] = [
  {
    id: "home-loans",
    number: "01",
    title: "Home Loans",
    badge: "Provisional Category",
    description:
      "Enquiry assistance for residential property financing. Designed for clients looking to purchase residential plots, construct an independent villa, or expand an existing home.",
    scope:
      "Plot purchase, new home construction financing, home extension, and renovation support.",
    provisionalNote:
      "Subject to confirmation with financial institutions regarding eligibility and sanction guidelines.",
    image: "/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-living-room.webp",
    alt: "Home loan assistance for residential construction in Nagercoil by SMS Construction",
    commonPurposes: [
      "Residential plot acquisition and construction",
      "Turnkey villa construction financing",
      "Home expansion and major structural renovation",
      "Assistance in coordinating estimated construction bills and architectural drawing sets",
    ],
  },
  {
    id: "property-loans",
    number: "02",
    title: "Property Loans / Loan Against Property",
    badge: "Provisional Category",
    description:
      "Consultation for unlocking equity from existing residential or commercial real estate. Customers can enquire about options to leverage clear-title property for major capital needs.",
    scope:
      "Mortgage consultation against clear-title freehold residential or commercial properties.",
    provisionalNote:
      "Requires legal scrutiny of property title deeds and institutional valuation.",
    image: "/images/projects/gold-finance-parvathipuram/gold-finance-banking-hall-hero.webp",
    alt: "Property loan and mortgage consultation in Nagercoil by SMS Construction",
    commonPurposes: [
      "Funding business capital using owned property",
      "Financing commercial building development",
      "Debt consolidation and major capital investments",
      "Technical property valuation document coordination",
    ],
  },
  {
    id: "business-loans",
    number: "03",
    title: "Business Loans",
    badge: "Provisional Category",
    description:
      "Guidance for business owners, contractors, and entrepreneurs seeking capital for enterprise growth, equipment acquisition, or commercial space establishment.",
    scope:
      "Working capital, machinery acquisition, commercial property fit-out financing.",
    provisionalNote:
      "Subject to business financial records, turnover criteria, and lender underwriting.",
    image: "/images/screen1_office.webp",
    alt: "Business loan consultation and commercial financing enquiry in Nagercoil by SMS Construction",
    commonPurposes: [
      "Commercial office and showroom fit-out investments",
      "Expansion of commercial business activities",
      "Working capital and equipment financing",
      "Project cost estimation support for commercial banks",
    ],
  },
  {
    id: "personal-loans",
    number: "04",
    title: "Personal Loans",
    badge: "Provisional Category",
    description:
      "Enquiry assistance for general personal financing needs, emergency capital, or transitional expenses related to home finishing and interior furnishings.",
    scope:
      "Unsecured personal financing enquiry support.",
    provisionalNote:
      "Subject to borrower credit profile, income proof, and banking verification.",
    image: "/images/services/interior.webp",
    alt: "Personal financing enquiry and interior furnishing consultation in Nagercoil",
    commonPurposes: [
      "Home interior upgrade and loose furniture expenses",
      "Transitional moving and relocation expenditures",
      "General personal financing and liquidity requirements",
      "Guidance on basic document readiness for application",
    ],
  },
];

export const loanProcessSteps: LoanProcessStep[] = [
  {
    step: "Step 1",
    number: "01",
    title: "Submit Initial Enquiry",
    desc: "Share your project requirements, estimated financial requirements, and preferred loan category through our enquiry desk.",
  },
  {
    step: "Step 2",
    number: "02",
    title: "Document Review Consultation",
    desc: "Receive guidance on standard documentation requirements including KYC, income verification, and project estimation sets.",
  },
  {
    step: "Step 3",
    number: "03",
    title: "Lender Coordination Support",
    desc: "We assist in coordinating your project drawings and cost estimates with potential lending partners for evaluation.",
  },
];

export const loanFaqs: LoanFaq[] = [
  {
    question: "What loan services can I enquire about through SMS Construction?",
    answer:
      "You can submit enquiries regarding provisional loan categories including Home Loans, Property Loans (Loan Against Property), Business Loans, and Personal Loans. Our team provides preliminary coordination across Nagercoil, Kanyakumari District, and all over Tamil Nadu to align your construction or project estimates with your financing requirements.",
  },
  {
    question: "Is SMS Construction a bank or licensed lender?",
    answer:
      "No. SMS Construction is an established architecture, civil construction, and project development practice based in Nagercoil, serving projects across Tamil Nadu. We are not a bank, non-banking financial company (NBFC), or licensed financial institution. We assist clients by providing project cost estimates, architectural blueprints, and guidance on connecting with banking institutions for loan processing.",
  },
  {
    question: "Does SMS Construction guarantee loan approvals or specific interest rates?",
    answer:
      "No. SMS Construction does not promise or guarantee loan approvals, specific interest rates, eligibility thresholds, or sanction timelines. All lending decisions, interest rate determinations, and approval criteria rest entirely with the respective banks or financial institutions.",
  },
  {
    question: "Can SMS Construction provide estimates required for home construction loans?",
    answer:
      "Yes. If you are planning home construction with us, our civil engineering team can prepare detailed formal construction estimates, floor plans, and stage-wise completion schedules commonly required by banks during loan applications.",
  },
  {
    question: "How do I submit an enquiry for loan assistance?",
    answer:
      "You can contact our office by phone at +91 94880 21183, send a message through WhatsApp, or complete the project enquiry form on our Contact page with your details.",
  },
];
