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
    slug: "serene-villa-suchindram-nagercoil",
    title: "The Serene Villa",
    category: "Residential Construction",
    location: "Suchindram, Nagercoil",
    year: "2025",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    alt: "The Serene Villa — limestone and glass residential construction in Suchindram, Nagercoil",
    description:
      "A breathtaking villa marrying modern clean geometry with local limestone structural craftsmanship.",
    area: "4,200 Sq. Ft.",
    duration: "14 Months",
    completionDate: "October 2025",
    materials: [
      "Local Limestone",
      "Artisan Teak Wood",
      "Custom Low-E Glazing",
      "Eco-Concrete",
    ],
    overview:
      "A premium private residence built on a gently sloping terrain in Suchindram, Nagercoil. The architectural intent was to celebrate the surrounding landscape while providing ultimate privacy and luxurious comfort.",
    requirements:
      "The client requested a modern 4-bedroom home that prioritised open-plan living, maximised natural cross-ventilation, and integrated a private swimming pool with direct outdoor access from the main lounge.",
    concept:
      "We developed a 'floating pavilion' concept — two heavy limestone-clad block volumes anchor the structure, while a lightweight steel-and-wood roof plane floats above the central open living spaces.",
    process:
      "We began with rigorous soil testing and site grading. The foundation was reinforced with Grade-A steel. Local stone masons hand-carved the limestone panels, which were dry-hung onto the concrete walls.",
    challenges:
      "Regional monsoon seasons introduced severe humidity and heavy rains, threatening execution delays and material weathering.",
    solutions:
      "We scheduled structure and exterior cladding phases before the monsoon, using specialised moisture barrier membranes and premium weather-resistant wood seals for the teak finishings.",
    finalResult:
      "An architectural landmark in Nagercoil that seamlessly connects high-end luxury with sustainable regional elements.",
    clientReview: {
      text: "SMS Construction has exceeded every expectation. Their commitment to structural integrity, material beauty, and timeless design has given us our dream home.",
      author: "Dr. Anand Krishnan",
      role: "Homeowner",
    },
    gallery: {
      before: [],
      progress: [],
      completed: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAlv89jHFn8icc2eVUZmKWCOzjLHWk7Z82nBjF1Jbt2-6P-hmpSPsGV8WUynyZrOWk4QuMzJbLrtMkNK-PuqBQVck-VOkebUt4C3e2HaaMcDE3xDhTgiSxKlcqz7V2P6J86F04-0atYfeUrBWJwFlISijsZgou5sIAlM5x96pOfs21P7MReGnQebiKUFLB2xp2-B3mACSxdoO6ZoTiT53UspCQGeOZq2h5HgwW3-jk5Ri-_8mlbmnbp",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCUecCBc6LTh8fKtOha47Fe_2GFXl2qv3YinrkfapKZ5VUAYrWFETYbGRb2R78QKNxXPvV7-UGZLZaXfGG0BmHIc6ilAxCrku03kE553zXtl-lDukuLkqboqb_LFZWOgLVLhiduMx4UBVeJVzFhO64mn-UidQs7GGGkMu1i0TeTqh59l867NjSSxfZeepZzatisCegk8K3E0TgPn-_UkWMTJrkBk3aAEh0ZFsbncyko-mBbss7J3n4d",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAyzSqguT_CG4dDNc40ENJqUenHE48xgelLoh0RUdKoe7gU1L3QMKhbuQNaZG0G5fHLa_qqged4HvrHHsK1MopflLauMXt4NmnifxZ5ik6cY6Sk7eRx0YopCgdjNuK3JqLw-vpaiNb9g-w6Snzfr-ROcw8-HA-mAX96HRb2QL-jraFBoR_ifF2mjimdKWH5AD2_cINWjW4XdrE60ZCLUl8aAkpqUHzDnDcQN3deK_LjzbpvDKOrYhtH",
      ],
    },
  },

  /* ── 03 ─────────────────────────────────────────────────────────────── */
  {
    number: "03",
    slug: "aura-penthouse-court-road-nagercoil",
    title: "Aura Penthouse",
    category: "Interior Design",
    location: "Court Road, Nagercoil",
    year: "2026",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAsc46s9mdARWyrZMovUG0R9EcoPiVtJuxkdDdXl3F4U8pAuKD6jUPx6SwIJoIPV7BvYGkI0NdWOiwH9nE3xsc61Jt5-m4xHO0VuqtfHW-v9LJD1Ey0WG_elwwqw0HSWnTXGRwmakqagm7aLrTmpqz_v6MJhsR0Ovs_af4lMyFvhFmgut19txMukscULqoKdybC11FxEPfg1_5kDZmqEtWHq6ea5lkU9NYFJexr-PYrxOfgFnjRWuC-",
    alt: "Aura Penthouse interior — cream curved furniture, warm bronze accents and ivory textiles in Nagercoil",
    description:
      "A high-end luxury apartment featuring curved cream furniture, warm bronze accents, and tactile ivory textiles.",
    area: "2,800 Sq. Ft.",
    duration: "6 Months",
    completionDate: "January 2026",
    materials: [
      "Calacatta Marble",
      "Brushed Bronze",
      "Bouclé Fabric",
      "Smoked Oak Flooring",
    ],
    overview:
      "A luxury interior transformation of a duplex penthouse off Court Road, Nagercoil. The design philosophy was rooted in soft minimalism and warm, layered textures to create a highly sophisticated sanctuary.",
    requirements:
      "The client wanted a luxurious, gallery-like space to display curated art pieces while keeping the environment comfortable and inviting for family gatherings.",
    concept:
      "We embraced 'Tactile Luxury' with organic curves, a neutral palette of ivory and warm beige, and strategic metallic highlights in brushed bronze and brass.",
    process:
      "Our team completely reworked the lighting plans to include concealed warm LED coves. The curved walls were hand-plastered by master artisans to achieve a seamless monolithic look.",
    challenges:
      "Hoisting massive slabs of Calacatta marble up to the penthouse level required specialised crane logistics in a densely populated urban road.",
    solutions:
      "We coordinated with city authorities for a controlled night-time hoist, ensuring safe and undamaged delivery of the premium marble.",
    finalResult:
      "A stunning, serene penthouse that feels entirely detached from the bustling city below.",
    clientReview: {
      text: "Coming home feels like stepping into a luxury resort. The craftsmanship is flawless, and the space is so peaceful.",
      author: "Mrs. Meena Rajan",
      role: "Homeowner",
    },
    gallery: {
      before: [],
      progress: [],
      completed: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAsc46s9mdARWyrZMovUG0R9EcoPiVtJuxkdDdXl3F4U8pAuKD6jUPx6SwIJoIPV7BvYGkI0NdWOiwH9nE3xsc61Jt5-m4xHO0VuqtfHW-v9LJD1Ey0WG_elwwqw0HSWnTXGRwmakqagm7aLrTmpqz_v6MJhsR0Ovs_af4lMyFvhFmgut19txMukscULqoKdybC11FxEPfg1_5kDZmqEtWHq6ea5lkU9NYFJexr-PYrxOfgFnjRWuC-",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDBR_fo2_CyHNYySkdd6srb36FQoCsJr2FtIL3mTiMTy3rGXsHJ5Iih5ciDI9TbJSjH9OdkxWJd1d8gy-E2uQpYXQefrmuYDkTw1QtPfy1Z__ura1QnGA7OngCnNn6GNSK3IHvUjiEgYpKJBdzLBiMlWXHOI1jtS3ohN4kvS2Cb2HnB-_tO5RM3qGewtQ-H0j8b6YMv5rzmjnuVuuaTewMxO3W11Q1Pkscqxll_xD1lXYqeldaMXFSfHg",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC6OjLQPm1eIBjpK4ChN3-L7UJ3Bz8GUvB0nd_IaPxe0mrZzj-64E_Gs1sSrqVilOGrAotp1Zrwh4a8oBh-JHQXw8M-ys-OUXRtSfOLq1ZzFLyLVqVJTVvEF2YLUOGrjVF3Qa7mlPEofIlzqbiOi_39r70-8o5ybiLIUqJbQUT5VtFgw0n1IpGsYW3hlvTV7oeFNi-edSPiVyeHTyNa09MgcuQB4k2CAcxBa0PSDpfxhW58BGPQjJUinQ",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCQn1piHpoqb26Itm5N3HjqtSz8N-_O13S8AJ-i7XNSXpzzENymz14054sQR-iVGGlrLt6IYyN2XlGRG5_Kpyqx1_tTArLwsLARyevotALnJpSefTDqztUNo6cAt-K_pajSuqumbV1-dZoEYo8r3LFpnuPE7aXI9iKi_RjlrNBGvXaJn9fl-u6qg6q902w09kkD9vnb-t5jh-rq2m6yS2dWnflAl0YP5AnyF5DJ17bfrX3YIA3Cq4mGcw"
      ],
    },
  },
];

/** Unique category values derived from the real project data */
export const projectCategories: ProjectCategory[] = [
  ...new Set(projects.map((p) => p.category)),
] as ProjectCategory[];
