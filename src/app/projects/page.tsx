"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─── Types & Mock Data ───────────────────────────────── */
interface Project {
  id: string;
  title: string;
  category: string; // 'Interior Design' | 'Residential Construction' | 'Commercial Construction' | 'Renovation' | 'Turnkey Interiors'
  location: string;
  desc: string;
  img: string;
  aspect: string; // 'aspect-[3/4]' (portrait) or 'aspect-[4/3]' (landscape) or 'aspect-square'
  // Case Study fields
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

const mockProjects: Project[] = [
  {
    id: "serene-villa",
    title: "The Serene Villa",
    category: "Residential Construction",
    location: "Suchindram, Nagercoil",
    desc: "A breathtaking villa marrying modern clean geometry with local limestone structural craftsmanship.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlv89jHFn8icc2eVUZmKWCOzjLHWk7Z82nBjF1Jbt2-6P-hmpSPsGV8WUynyZrOWk4QuMzJbLrtMkNK-PuqBQVck-VOkebUt4C3e2HaaMcDE3xDhTgiSxKlcqz7V2P6J86F04-0atYfeUrBWJwFlISijsZgou5sIAlM5x96pOfs21P7MReGnQebiKUFLB2xp2-B3mACSxdoO6ZoTiT53UspCQGeOZq2h5HgwW3-jk5Ri-_8mlbmnbp",
    aspect: "aspect-[4/3]",
    area: "4,200 Sq. Ft.",
    duration: "14 Months",
    completionDate: "October 2025",
    materials: ["Local Limestone", "Artisan Teak Wood", "Custom Low-E Glazing", "Eco-Concrete"],
    overview: "A premium private residence built on a gently sloping terrain in Suchindram, Nagercoil. The architectural intent was to celebrate the surrounding landscape while providing ultimate privacy and luxurious comfort. By using floor-to-ceiling glass and local natural limestone, we created a structure that feels embedded in its environment.",
    requirements: "The client requested a modern 4-bedroom home that prioritized open-plan living, maximize natural cross-ventilation, and integrate a private swimming pool with direct outdoor access from the main lounge.",
    concept: "We developed a 'floating pavilion' concept. Two heavy limestone-clad block volumes anchor the structure, while a lightweight steel-and-wood roof plane floats above the central open living spaces, emphasizing horizontal lines.",
    process: "We began with rigorous soil testing and site grading to ensure stability. The foundation was reinforced with Grade-A steel. Local stone masons hand-carved the limestone panels, which were dry-hung onto the concrete walls.",
    challenges: "The regional monsoon seasons introduced severe humidity and heavy rains, threatening execution delays and material weathering.",
    solutions: "We scheduled structure and exterior cladding phases before the monsoon, using specialized moisture barrier membranes and premium weather-resistant wood seals for the teak finishings.",
    finalResult: "An architectural landmark in Nagercoil that seamlessly connects high-end luxury with sustainable regional elements. The client reports supreme thermal comfort and beautiful light transitions throughout the day.",
    clientReview: {
      text: "SMS Construction has exceeded every expectation. Their commitment to structural integrity, material beauty, and timeless design has given us our dream home.",
      author: "Dr. Anand Krishnan",
      role: "Homeowner",
    },
    gallery: {
      before: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCUecCBc6LTh8fKtOha47Fe_2GFXl2qv3YinrkfapKZ5VUAYrWFETYbGRb2R78QKNxXPvV7-UGZLZaXfGG0BmHIc6ilAxCrku03kE553zXtl-lDukuLkqboqb_LFZWOgLVLhiduMx4UBVeJVzFhO64mn-UidQs7GGGkMu1i0TeTqh59l867NjSSxfZeepZzatisCegk8K3E0TgPn-_UkWMTJrkBk3aAEh0ZFsbncyko-mBbss7J3n4d",
      ],
      progress: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAyzSqguT_CG4dDNc40ENJqUenHE48xgelLoh0RUdKoe7gU1L3QMKhbuQNaZG0G5fHLa_qqged4HvrHHsK1MopflLauMXt4NmnifxZ5ik6cY6Sk7eRx0YopCgdjNuK3JqLw-vpaiNb9g-w6Snzfr-ROcw8-HA-mAX96HRb2QL-jraFBoR_ifF2mjimdKWH5AD2_cINWjW4XdrE60ZCLUl8aAkpqUHzDnDcQN3deK_LjzbpvDKOrYhtH",
      ],
      completed: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAlv89jHFn8icc2eVUZmKWCOzjLHWk7Z82nBjF1Jbt2-6P-hmpSPsGV8WUynyZrOWk4QuMzJbLrtMkNK-PuqBQVck-VOkebUt4C3e2HaaMcDE3xDhTgiSxKlcqz7V2P6J86F04-0atYfeUrBWJwFlISijsZgou5sIAlM5x96pOfs21P7MReGnQebiKUFLB2xp2-B3mACSxdoO6ZoTiT53UspCQGeOZq2h5HgwW3-jk5Ri-_8mlbmnbp",
      ],
    },
  },
  {
    id: "aura-penthouse",
    title: "Aura Penthouse",
    category: "Interior Design",
    location: "Court Road, Nagercoil",
    desc: "A high-end luxury apartment featuring curved cream furniture, warm bronze accents, and tactile ivory textiles.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsc46s9mdARWyrZMovUG0R9EcoPiVtJuxkdDdXl3F4U8pAuKD6jUPx6SwIJoIPV7BvYGkI0NdWOiwH9nE3xsc61Jt5-m4xHO0VuqtfHW-v9LJD1Ey0WG_elwwqw0HSWnTXGRwmakqagm7aLrTmpqz_v6MJhsR0Ovs_af4lMyFvhFmgut19txMukscULqoKdybC11FxEPfg1_5kDZmqEtWHq6ea5lkU9NYFJexr-PYrxOfgFnjRWuC-",
    aspect: "aspect-[3/4]",
    area: "2,800 Sq. Ft.",
    duration: "6 Months",
    completionDate: "January 2026",
    materials: ["Calacatta Marble", "Brushed Bronze", "Bouclé Fabric", "Smoked Oak Flooring"],
    overview: "A luxury interior transformation of a duplex penthouse off Court Road, Nagercoil. The design philosophy was rooted in soft minimalism and warm, layered textures to create a highly sophisticated sanctuary away from the city's hustle.",
    requirements: "The client wanted a luxurious, gallery-like space to display curated art pieces while keeping the environment comfortable, warm, and inviting for family gatherings.",
    concept: "We embraced 'Tactile Luxury' with organic curves, a neutral palette of ivory and warm beige, and strategic metallic highlights in brushed bronze and brass.",
    process: "We completely gutted the partition walls to establish an open-concept flow. Built-in cabinetry was finished in custom smoked oak, and the central fireplace wall was clad in book-matched Calacatta marble.",
    challenges: "Achieving seamless curved plaster walls and integrating hidden ducted climate control without dropping the high ceiling height.",
    solutions: "Our expert craftsmen utilized flexible wire laths to build precise plaster sweeps, and climate ducts were routing strategically through custom-designed wall moldings.",
    finalResult: "A stunning editorial-grade interior space featuring a harmonious blend of light, texture, and materials. A true showcase of modern luxury interior design.",
    clientReview: {
      text: "The level of detail and execution in our penthouse is stunning. Every corner feels intentional, luxurious, and peaceful.",
      author: "Meera & Rajesh Nair",
      role: "Clients",
    },
    gallery: {
      before: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDu8e95pXVMGM03kuX9XjUvW8KK_nMprODSBCGQapLM3eowKJ5lY2mop_2u_lh7hB6xRxdFzGa17VGWGYt_8NdEzW6AVOCQz_ddDGQ7bzuEu3fyE-Zozx5h_uIWbka-Zr3dvH6VLFftByacCFoPZE48tdpB2d3s1oycSg0XxBJrjRJuHLHKDpLAs4QtqSQLubImvoPfiNzsgd2F0arXNw8-nwgq1OgzUTN_cYsab179GE1cDd3XoqvR",
      ],
      progress: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAu-EsIC0lQ3ICdSoyJJsSM5jYzjC30Bbb0wIRJJ9TVyNMrtbYSh67LSDluKK5xiD0xbOwyKQALdDyuTPvS23Hkk0QizGYAcVghkQyAilMe3PF7WUI8xB5YUtpVbU51VUN2E3g-IGzBeEn22lxXmnfmIPUe2MbYzb9kLMd8heavMZI13YvYLI2IRYqbEMPnnH65aFaJ4DnpSxqlcrp0sdX79mNYcHk_almjT5mYn476GC11oQlvhr5c",
      ],
      completed: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAsc46s9mdARWyrZMovUG0R9EcoPiVtJuxkdDdXl3F4U8pAuKD6jUPx6SwIJoIPV7BvYGkI0NdWOiwH9nE3xsc61Jt5-m4xHO0VuqtfHW-v9LJD1Ey0WG_elwwqw0HSWnTXGRwmakqagm7aLrTmpqz_v6MJhsR0Ovs_af4lMyFvhFmgut19txMukscULqoKdybC11FxEPfg1_5kDZmqEtWHq6ea5lkU9NYFJexr-PYrxOfgFnjRWuC-",
      ],
    },
  },
  {
    id: "apex-hq",
    title: "Apex Corporate HQ",
    category: "Commercial Construction",
    location: "Kanyakumari",
    desc: "A corporate landmark showing polished terrazzo, vertical wood slats, and a grand curved reception lobby.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvrJqbPm9hy3nYRxKNsmn2GKYTfq2a7mL2ATXoUNQGRHE4fL5uIaBF_uJjgU8u28hr-K0P5DC3AbYPJNILoIlk-c3ycdUoBby578kGisoCg2eluPYU5qvV61i9t6-fqtbkKu4piESjghXO4O56Jzp8pkkeQisbccvH4umTxsPoAALcOkwuNeFJ7Rr03r3DI5ILVXaamXiTiDXp-J79ktrz6dXydNmjpVk6gXQA4P_gH90jYVwCWtZ9",
    aspect: "aspect-[4/3]",
    area: "18,500 Sq. Ft.",
    duration: "18 Months",
    completionDate: "December 2024",
    materials: ["Terrazzo Flooring", "American Walnut Wood", "Structural Steel", "Double Glazed Acoustic Glass"],
    overview: "A premium commercial headquarters built to define the growing skyline of Kanyakumari. The architectural vision integrates workspace efficiency with hospitality-inspired common areas.",
    requirements: "The project demanded high-efficiency office layouts, soundproof conference rooms, a prominent corporate lobby, and an eco-friendly structural design.",
    concept: "We utilized double-height vertical spaces and warm timber screening to create visual continuity, bringing warmth to a corporate environment.",
    process: "Built with structural steel framing for quick, precise erection and maximum open floor spans. Large-format terrazzo flooring was cast on-site.",
    challenges: "The seaside location created potential salt-spray corrosion hazards for metal surfaces and structural elements.",
    solutions: "All structural steel was treated with high-grade anti-corrosive primer and marine coat seals, and external metal brackets are solid brass or anodized aluminum.",
    finalResult: "A landmark commercial property combining state-of-the-art office utility with high-end architectural elegance.",
    clientReview: {
      text: "Our new headquarters represents our brand's growth and values perfectly. The design has improved employee collaboration and wowed our visitors.",
      author: "CEO, Apex Corp",
      role: "Commercial Partner",
    },
    gallery: {
      before: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCUecCBc6LTh8fKtOha47Fe_2GFXl2qv3YinrkfapKZ5VUAYrWFETYbGRb2R78QKNxXPvV7-UGZLZaXfGG0BmHIc6ilAxCrku03kE553zXtl-lDukuLkqboqb_LFZWOgLVLhiduMx4UBVeJVzFhO64mn-UidQs7GGGkMu1i0TeTqh59l867NjSSxfZeepZzatisCegk8K3E0TgPn-_UkWMTJrkBk3aAEh0ZFsbncyko-mBbss7J3n4d",
      ],
      progress: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDPJJQMe1s3IAn4zdrWvAzu3ZsYjXF8BuLwWrfjsoSFXMwRHO1iTa61gWZCig2i0MWLk92F0Ybpoa0_zB_VZipeTuf7f_om4oyVFgn-Z3qt1z9voHoJSk4hnlm2b5e9apKT6EDaHAV551M7aBaI2ttSXR9T66KxgF2kKQKUuECDWaY_UVOgkcxlRK6a4qTzG-MslpzZHF0ErP6qF3FdIhTtqIJgQiGHgYoLsgW43cu8vIyNQyrrtugM",
      ],
      completed: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCvrJqbPm9hy3nYRxKNsmn2GKYTfq2a7mL2ATXoUNQGRHE4fL5uIaBF_uJjgU8u28hr-K0P5DC3AbYPJNILoIlk-c3ycdUoBby578kGisoCg2eluPYU5qvV61i9t6-fqtbkKu4piESjghXO4O56Jzp8pkkeQisbccvH4umTxsPoAALcOkwuNeFJ7Rr03r3DI5ILVXaamXiTiDXp-J79ktrz6dXydNmjpVk6gXQA4P_gH90jYVwCWtZ9",
      ],
    },
  },
  {
    id: "heritage-restoration",
    title: "Heritage Restoration",
    category: "Renovation",
    location: "Parvathipuram, Nagercoil",
    desc: "Meticulous renovation of a classical home, detailing kitchen spaces with bespoke teak carpentry and marble.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzZDQ0pMf13glpDeDquunUos_G8SxntUiWdm9OKAL6gdZSp_ZRETRy8MG_LR5lseRmMXx1mHV0mTL7fHwDYw4mmHy3P2_4zTT1QvqYe4m9Qyb6vAqrzfqyEHA7Owl0Y6G2EjoKYLvCNeQXQEb3F84Xw4dxNl5mqGcuL3Ec16vhT_3WgFT0bvXujUj64h_sSkeY_dvEAjBRJOvv-mAk_jubq3SWiY2Js32WR1kzbBhcXMBMDJ1yIR_n",
    aspect: "aspect-[3/4]",
    area: "3,100 Sq. Ft.",
    duration: "8 Months",
    completionDate: "September 2025",
    materials: ["Carrara Marble", "Bespoke Teak Cabinetry", "Traditional Plastering", "Unlacquered Brass"],
    overview: "A delicate renovation of a 60-year-old traditional residence in Parvathipuram, Nagercoil. The objective was to modernize the layout and structural stability while honoring the original architectural spirit and woodworking.",
    requirements: "The client wanted to integrate a modern modular kitchen, upgrade the master bath, and restore the extensive teak-wood detailing on the central courtyard columns.",
    concept: "We developed a design concept called 'Preserved Modernism' — cleanly inserting modern conveniences without disturbing the original solid-timber structures.",
    process: "We carefully dismantled deteriorated plaster, replacing it with traditional lime-plaster mixes to allow the old brickwork to breathe. Woodcarving artisans hand-restored the columns.",
    challenges: "Original framing had settled, leading to uneven floors and doorways that had to be corrected to fit modern precision-built kitchen elements.",
    solutions: "We installed hidden steel joist supports underneath the floors to level them and built custom shims behind the cabinetry to achieve perfect alignment.",
    finalResult: "A stunning heritage home that now offers 21st-century modular convenience while looking as magnificent and culturally rich as the day it was built.",
    clientReview: {
      text: "The sensitivity SMS Construction showed to our family's heritage home was outstanding. They restored its soul while making it perfectly liveable.",
      author: "Mr. S. Sundaram",
      role: "Homeowner",
    },
    gallery: {
      before: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDPJJQMe1s3IAn4zdrWvAzu3ZsYjXF8BuLwWrfjsoSFXMwRHO1iTa61gWZCig2i0MWLk92F0Ybpoa0_zB_VZipeTuf7f_om4oyVFgn-Z3qt1z9voHoJSk4hnlm2b5e9apKT6EDaHAV551M7aBaI2ttSXR9T66KxgF2kKQKUuECDWaY_UVOgkcxlRK6a4qTzG-MslpzZHF0ErP6qF3FdIhTtqIJgQiGHgYoLsgW43cu8vIyNQyrrtugM",
      ],
      progress: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAyzSqguT_CG4dDNc40ENJqUenHE48xgelLoh0RUdKoe7gU1L3QMKhbuQNaZG0G5fHLa_qqged4HvrHHsK1MopflLauMXt4NmnifxZ5ik6cY6Sk7eRx0YopCgdjNuK3JqLw-vpaiNb9g-w6Snzfr-ROcw8-HA-mAX96HRb2QL-jraFBoR_ifF2mjimdKWH5AD2_cINWjW4XdrE60ZCLUl8aAkpqUHzDnDcQN3deK_LjzbpvDKOrYhtH",
      ],
      completed: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAzZDQ0pMf13glpDeDquunUos_G8SxntUiWdm9OKAL6gdZSp_ZRETRy8MG_LR5lseRmMXx1mHV0mTL7fHwDYw4mmHy3P2_4zTT1QvqYe4m9Qyb6vAqrzfqyEHA7Owl0Y6G2EjoKYLvCNeQXQEb3F84Xw4dxNl5mqGcuL3Ec16vhT_3WgFT0bvXujUj64h_sSkeY_dvEAjBRJOvv-mAk_jubq3SWiY2Js32WR1kzbBhcXMBMDJ1yIR_n",
      ],
    },
  },
  {
    id: "oasis-suite",
    title: "The Oasis Living Suite",
    category: "Turnkey Interiors",
    location: "Vadasery, Nagercoil",
    desc: "A warm minimalist living environment utilizing tactile textures, bespoke teak coffee tables, and natural lighting.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDu8e95pXVMGM03kuX9XjUvW8KK_nMprODSBCGQapLM3eowKJ5lY2mop_2u_lh7hB6xRxdFzGa17VGWGYt_8NdEzW6AVOCQz_ddDGQ7bzuEu3fyE-Zozx5h_uIWbka-Zr3dvH6VLFftByacCFoPZE48tdpB2d3s1oycSg0XxBJrjRJuHLHKDpLAs4QtqSQLubImvoPfiNzsgd2F0arXNw8-nwgq1OgzUTN_cYsab179GE1cDd3XoqvR",
    aspect: "aspect-[4/3]",
    area: "1,500 Sq. Ft.",
    duration: "4 Months",
    completionDate: "November 2025",
    materials: ["Textured Oatmeal Fabrics", "Bespoke Teak Wood", "Raw Plaster Finish", "Polished Concrete"],
    overview: "A complete turnkey interior design and styling package for a modern penthouse in Vadasery, Nagercoil. Focus was placed on natural sunlight interaction, raw organic finishes, and custom furniture.",
    requirements: "The client requested an open-plan layout that felt peaceful and relaxing. They favored low-profile modular furniture and simple, raw textures over shiny materials.",
    concept: "We embraced 'Warm Tactility' using soft plaster wall washes, neutral oatmeal curtains, and solid-teak custom accent pieces.",
    process: "Our design-to-build pipeline handled layout drafting, furniture manufacture in our studio workshop, installation, and architectural lighting setup in a single unified workflow.",
    challenges: "The compact floor plan required careful space-planning to prevent furniture pieces from feeling overcrowded.",
    solutions: "We crafted custom multi-functional furniture, such as a low modular sofa with built-in storage panels and a sliding teak desk system.",
    finalResult: "A serene space that feels incredibly open and tactile, demonstrating the success of unified design-build coordination.",
    clientReview: {
      text: "The team turned our empty apartment into a peaceful oasis. Everything is crafted beautifully and matches our lifestyle.",
      author: "Amit & Shalini Sen",
      role: "Homeowners",
    },
    gallery: {
      before: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBwprjTqi_8K9UWSVMH2LJ2e6RBTXv9L6aDJFJBMNYB1P9qi4ZTq6D9y8XvbdtseSczyoZVaeI80kvC_JroKbftCeCgY-AokTGsZ4D0LFzYcIELfjde_no2uvN_wEe1qI4RXIqaDysh6c_yo5fODKcYnk13tT8SVY6dT7w_KA204n64Z119SAZRoZ5yXRVUvXn4J6d_OfvUrvtrycYw2SG6mOVCwKh0kf8XoKaorPNwo_OCaycDGMS5",
      ],
      progress: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDPJJQMe1s3IAn4zdrWvAzu3ZsYjXF8BuLwWrfjsoSFXMwRHO1iTa61gWZCig2i0MWLk92F0Ybpoa0_zB_VZipeTuf7f_om4oyVFgn-Z3qt1z9voHoJSk4hnlm2b5e9apKT6EDaHAV551M7aBaI2ttSXR9T66KxgF2kKQKUuECDWaY_UVOgkcxlRK6a4qTzG-MslpzZHF0ErP6qF3FdIhTtqIJgQiGHgYoLsgW43cu8vIyNQyrrtugM",
      ],
      completed: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDu8e95pXVMGM03kuX9XjUvW8KK_nMprODSBCGQapLM3eowKJ5lY2mop_2u_lh7hB6xRxdFzGa17VGWGYt_8NdEzW6AVOCQz_ddDGQ7bzuEu3fyE-Zozx5h_uIWbka-Zr3dvH6VLFftByacCFoPZE48tdpB2d3s1oycSg0XxBJrjRJuHLHKDpLAs4QtqSQLubImvoPfiNzsgd2F0arXNw8-nwgq1OgzUTN_cYsab179GE1cDd3XoqvR",
      ],
    },
  },
  {
    id: "culinary-studio",
    title: "Executive Culinary Studio",
    category: "Turnkey Interiors",
    location: "Ozhuginasery, Nagercoil",
    desc: "A custom modular kitchen pairing matte charcoal panels with integrated premium lighting and marble backsplashes.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLYkHmnxZIDSEf8WY0IDSLimxJ5ApY7Q_uu7oRG2pkqAOZNiVJmxNp2dHWXKR9fHqFMvRDESg9KDIergPC8y-_B2RQfPPP_yVToeEkg4BXw7r36eFMo-TCxKfl5_wbykDyy2dOslt1moWUohkniIkgYWW3kChJBpF-bObOKT1lzsDK5WrInlLhOCRdWLzzSC--X4aE_XaWrSTUH12xnp3mFdkCR9BV3dFvjxFntllUx46IzWWbFuwk",
    aspect: "aspect-square",
    area: "950 Sq. Ft. (Kitchen Wing)",
    duration: "3 Months",
    completionDate: "February 2026",
    materials: ["Matte Charcoal Cabinetry", "Nero Marquina Marble", "Integrated LED Profiles", "Brass Hardware"],
    overview: "A state-of-the-art kitchen renovation for a private culinary collector in Ozhuginasery, Nagercoil. The objective was to design a highly professional kitchen that remains warm and aesthetically integrated with the main residence.",
    requirements: "The client needed commercial-grade induction and convection appliances, extensive hidden spice and utensil storage, and a large central breakfast bar to host interactive cooking events.",
    concept: "We executed a 'Shadow & Light' concept: high-contrast dark matte panels paired with bright white marble tiles and glowing integrated LED light channels.",
    process: "The existing kitchen layouts were fully stripped. We installed new high-load wiring circuits, set up professional ceiling exhaust ducts, and fabricated the cabinetry panels in our local joinery workshop.",
    challenges: "The extremely dark cabinets threatened to make the space feel cramped and gloomy if not properly lit.",
    solutions: "We installed extensive under-cabinet, inside-drawer, and recessed ceiling LED strips to cast a bright, warm glow, bouncing light off the polished marble surfaces.",
    finalResult: "A breathtaking culinary workspace featuring absolute premium convenience and clean, minimalist modern styling.",
    clientReview: {
      text: "The craft is exceptional. Every drawer slides perfectly, and the lighting configuration makes hosting cooking sessions an absolute pleasure.",
      author: "Chef K. Raghavan",
      role: "Client",
    },
    gallery: {
      before: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDPJJQMe1s3IAn4zdrWvAzu3ZsYjXF8BuLwWrfjsoSFXMwRHO1iTa61gWZCig2i0MWLk92F0Ybpoa0_zB_VZipeTuf7f_om4oyVFgn-Z3qt1z9voHoJSk4hnlm2b5e9apKT6EDaHAV551M7aBaI2ttSXR9T66KxgF2kKQKUuECDWaY_UVOgkcxlRK6a4qTzG-MslpzZHF0ErP6qF3FdIhTtqIJgQiGHgYoLsgW43cu8vIyNQyrrtugM",
      ],
      progress: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAyzSqguT_CG4dDNc40ENJqUenHE48xgelLoh0RUdKoe7gU1L3QMKhbuQNaZG0G5fHLa_qqged4HvrHHsK1MopflLauMXt4NmnifxZ5ik6cY6Sk7eRx0YopCgdjNuK3JqLw-vpaiNb9g-w6Snzfr-ROcw8-HA-mAX96HRb2QL-jraFBoR_ifF2mjimdKWH5AD2_cINWjW4XdrE60ZCLUl8aAkpqUHzDnDcQN3deK_LjzbpvDKOrYhtH",
      ],
      completed: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDLYkHmnxZIDSEf8WY0IDSLimxJ5ApY7Q_uu7oRG2pkqAOZNiVJmxNp2dHWXKR9fHqFMvRDESg9KDIergPC8y-_B2RQfPPP_yVToeEkg4BXw7r36eFMo-TCxKfl5_wbykDyy2dOslt1moWUohkniIkgYWW3kChJBpF-bObOKT1lzsDK5WrInlLhOCRdWLzzSC--X4aE_XaWrSTUH12xnp3mFdkCR9BV3dFvjxFntllUx46IzWWbFuwk",
      ],
    },
  },
];

const categories = ["All Projects", "Interior Design", "Residential Construction", "Commercial Construction", "Renovation", "Turnkey Interiors"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  // Scroll to top when selected project changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedProject]);

  const filteredProjects = mockProjects.filter((p) => {
    if (selectedCategory === "All Projects") return true;
    return p.category === selectedCategory;
  });

  // Simple pagination logic (2 projects per page)
  const itemsPerPage = 4;
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const paginatedProjects = filteredProjects.slice(0, page * itemsPerPage);

  const loadMore = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handleBackToList = () => {
    setSelectedProject(null);
  };

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <>
      <Navbar />

      {selectedProject ? (
        /* ────────────────────────────────────────────────────────── */
        /* ── PROJECT CASE STUDY DETAILS VIEW ─────────────────────── */
        /* ────────────────────────────────────────────────────────── */
        <main className="min-h-screen bg-[#FAF8F3] pt-32 pb-24 text-[#1F1F1F]">
          {/* Back Button */}
          <div className="max-w-[1440px] mx-auto px-6 md:px-20 mb-8">
            <button
              onClick={handleBackToList}
              className="inline-flex items-center gap-2 font-sans font-semibold text-[13px] tracking-[0.15em] uppercase text-[#795825] hover:text-[#1D1C19] transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              Back to Projects
            </button>
          </div>

          {/* Hero */}
          <section className="relative w-full h-[60vh] md:h-[80vh] mb-16 overflow-hidden">
            <Image
              src={selectedProject.img}
              alt={selectedProject.title}
              fill
              className="object-cover"
              priority
              unoptimized
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute bottom-12 left-0 w-full z-10 text-white px-6 md:px-20">
              <div className="max-w-[1440px] mx-auto">
                <span className="font-sans font-semibold text-[13px] tracking-[0.15em] uppercase text-[#e5c093] mb-3 block">
                  {selectedProject.category}
                </span>
                <h1 className="font-serif font-bold text-[40px] md:text-[64px] leading-tight mb-4">
                  {selectedProject.title}
                </h1>
                <p className="font-sans text-[16px] md:text-[18px] opacity-90 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">location_on</span>
                  {selectedProject.location}
                </p>
              </div>
            </div>
          </section>

          {/* Details Content Container */}
          <div className="max-w-[1440px] mx-auto px-6 md:px-20">
            {/* Quick Stats Bar */}
            <section className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-[#E7E0D4] mb-16">
              <div>
                <span className="font-sans text-[12px] tracking-[0.15em] uppercase text-[#68645D]/70 block mb-1">
                  Area
                </span>
                <span className="font-serif font-bold text-[20px] text-[#1D1C19]">
                  {selectedProject.area}
                </span>
              </div>
              <div>
                <span className="font-sans text-[12px] tracking-[0.15em] uppercase text-[#68645D]/70 block mb-1">
                  Duration
                </span>
                <span className="font-serif font-bold text-[20px] text-[#1D1C19]">
                  {selectedProject.duration}
                </span>
              </div>
              <div>
                <span className="font-sans text-[12px] tracking-[0.15em] uppercase text-[#68645D]/70 block mb-1">
                  Completion
                </span>
                <span className="font-serif font-bold text-[20px] text-[#1D1C19]">
                  {selectedProject.completionDate}
                </span>
              </div>
              <div>
                <span className="font-sans text-[12px] tracking-[0.15em] uppercase text-[#68645D]/70 block mb-1">
                  Materials
                </span>
                <span className="font-sans font-semibold text-[13px] text-[#795825] truncate block">
                  {selectedProject.materials.slice(0, 2).join(", ")}
                </span>
              </div>
            </section>

            {/* Layout Split: Overview & Concept vs Process & Challenges */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-12">
                <div>
                  <h3 className="font-serif font-bold text-[24px] text-[#1D1C19] mb-4">Project Overview</h3>
                  <p className="font-sans text-[16px] leading-[1.8] text-[#68645D]">
                    {selectedProject.overview}
                  </p>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[24px] text-[#1D1C19] mb-4">Client Requirements</h3>
                  <p className="font-sans text-[16px] leading-[1.8] text-[#68645D]">
                    {selectedProject.requirements}
                  </p>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[24px] text-[#1D1C19] mb-4">Design Concept</h3>
                  <p className="font-sans text-[16px] leading-[1.8] text-[#68645D]">
                    {selectedProject.concept}
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-5 space-y-12 lg:pl-8">
                <div>
                  <h3 className="font-serif font-bold text-[24px] text-[#1D1C19] mb-4">Construction Process</h3>
                  <p className="font-sans text-[16px] leading-[1.8] text-[#68645D]">
                    {selectedProject.process}
                  </p>
                </div>
                <div className="bg-white p-8 rounded-[28px] border border-[#E7E0D4] shadow-sm">
                  <h3 className="font-serif font-bold text-[20px] text-[#1F1F1F] mb-4">Key Materials Used</h3>
                  <ul className="space-y-3">
                    {selectedProject.materials.map((m, idx) => (
                      <li key={idx} className="flex items-center gap-3 font-sans text-[15px] text-[#68645D]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#795825] shrink-0" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[24px] text-[#1D1C19] mb-4">Challenges &amp; Solutions</h3>
                  <div className="space-y-4">
                    <p className="font-sans text-[15px] leading-[1.7] text-[#68645D]">
                      <strong className="text-[#1D1C19]">Challenge:</strong> {selectedProject.challenges}
                    </p>
                    <p className="font-sans text-[15px] leading-[1.7] text-[#68645D]">
                      <strong className="text-[#795825]">Solution:</strong> {selectedProject.solutions}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery Case Study Images */}
            <section className="mb-24">
              <h3 className="font-serif font-bold text-[28px] text-[#1D1C19] mb-8 text-center">Project Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Before */}
                <div className="space-y-4">
                  <span className="font-sans font-semibold text-[12px] tracking-[0.15em] uppercase text-[#68645D]/70 block text-center">
                    Initial Site / Preparation
                  </span>
                  <div
                    onClick={() => setLightboxImg(selectedProject.gallery.before[0])}
                    className="relative h-64 rounded-[20px] overflow-hidden cursor-zoom-in group shadow-md"
                  >
                    <Image
                      src={selectedProject.gallery.before[0]}
                      alt="Before"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                  </div>
                </div>

                {/* Progress */}
                <div className="space-y-4">
                  <span className="font-sans font-semibold text-[12px] tracking-[0.15em] uppercase text-[#68645D]/70 block text-center">
                    Work Progress
                  </span>
                  <div
                    onClick={() => setLightboxImg(selectedProject.gallery.progress[0])}
                    className="relative h-64 rounded-[20px] overflow-hidden cursor-zoom-in group shadow-md"
                  >
                    <Image
                      src={selectedProject.gallery.progress[0]}
                      alt="Progress"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                  </div>
                </div>

                {/* Completed */}
                <div className="space-y-4">
                  <span className="font-sans font-semibold text-[12px] tracking-[0.15em] uppercase text-[#795825] block text-center">
                    Completed Finish
                  </span>
                  <div
                    onClick={() => setLightboxImg(selectedProject.gallery.completed[0])}
                    className="relative h-64 rounded-[20px] overflow-hidden cursor-zoom-in group shadow-md"
                  >
                    <Image
                      src={selectedProject.gallery.completed[0]}
                      alt="Completed"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                  </div>
                </div>
              </div>
            </section>

            {/* Testimonial Card */}
            <section className="max-w-3xl mx-auto mb-24 bg-white p-10 md:p-16 rounded-[40px] border border-[#E7E0D4] shadow-sm text-center relative">
              <span className="material-symbols-outlined text-[64px] text-[#795825]/20 absolute top-6 left-1/2 -translate-x-1/2 select-none">
                format_quote
              </span>
              <p className="font-serif italic text-[18px] md:text-[22px] leading-relaxed text-[#1D1C19] mb-8 relative z-10 pt-4">
                &ldquo;{selectedProject.clientReview.text}&rdquo;
              </p>
              <div className="font-sans font-semibold text-[16px] text-[#1F1F1F]">
                {selectedProject.clientReview.author}
              </div>
              <div className="font-sans text-[14px] text-[#68645D] mt-1">
                {selectedProject.clientReview.role}
              </div>
            </section>

            {/* Related Projects */}
            <section className="border-t border-[#E7E0D4] pt-24 mb-16">
              <h3 className="font-serif font-bold text-[32px] text-[#1D1C19] mb-12 text-center">Related Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {mockProjects
                  .filter((p) => p.id !== selectedProject.id)
                  .slice(0, 3)
                  .map((proj) => (
                    <div
                      key={proj.id}
                      onClick={() => handleSelectProject(proj)}
                      className="group cursor-pointer bg-white rounded-[28px] overflow-hidden border border-[#E7E0D4] shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="relative h-60 w-full overflow-hidden">
                        <Image
                          src={proj.img}
                          alt={proj.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          unoptimized
                        />
                      </div>
                      <div className="p-6">
                        <span className="font-sans font-semibold text-[11px] tracking-[0.15em] uppercase text-[#795825] mb-2 block">
                          {proj.category}
                        </span>
                        <h4 className="font-serif font-bold text-[20px] text-[#1F1F1F] group-hover:text-[#795825] transition-colors mb-2">
                          {proj.title}
                        </h4>
                        <p className="font-sans text-[14px] text-[#68645D] flex items-center gap-1">
                          <span className="material-symbols-outlined text-[15px]">location_on</span>
                          {proj.location}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </section>
          </div>

          {/* Dark Luxury CTA block */}
          <section className="bg-[#1D1C19] text-[#F8F4EE] py-24 text-center px-6 md:px-20">
            <div className="max-w-3xl mx-auto">
              <span className="font-sans font-semibold text-[12px] tracking-[0.15em] uppercase text-[#e5c093] mb-4 block">
                Partner with us
              </span>
              <h2 className="font-serif font-bold text-[36px] md:text-[56px] leading-[1.15] mb-8">
                Start Your Dream Project Today
              </h2>
              <p className="font-sans text-[16px] md:text-[18px] text-[#F8F4EE]/70 max-w-2xl mx-auto mb-12">
                Our design consultants and structural engineers are ready to walk you through our
                materials library and project planning process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-[#e5c093] text-[#1D1C19] font-sans font-semibold text-[13px] tracking-[0.15em] uppercase px-10 py-5 rounded-full hover:scale-105 transition-all">
                  Book Free Consultation
                </button>
                <button className="border border-[#F8F4EE]/30 text-[#F8F4EE] font-sans font-semibold text-[13px] tracking-[0.15em] uppercase px-10 py-5 rounded-full hover:bg-white/5 transition-all">
                  Contact SMS Studio
                </button>
              </div>
            </div>
          </section>
        </main>
      ) : (
        /* ────────────────────────────────────────────────────────── */
        /* ── PROJECT LISTING MASONRY GALLERY VIEW ────────────────── */
        /* ────────────────────────────────────────────────────────── */
        <main className="min-h-screen bg-[#FAF8F3] pt-32 pb-24 text-[#1F1F1F]">
          {/* Hero Section */}
          <section className="px-6 md:px-20 max-w-[1440px] mx-auto mt-12 md:mt-24 mb-16 md:mb-24">
            <div className="max-w-4xl">
              <h1 className="font-serif font-bold text-[48px] md:text-[84px] leading-[1.05] tracking-[-0.02em] text-[#1F1F1F] mb-6">
                Our Projects
              </h1>
              <p className="font-sans text-[18px] md:text-[20px] leading-[1.7] text-[#68645D] mb-10 max-w-2xl">
                A curated selection of our finest architectural and interior design endeavors. Each
                project reflects our commitment to warm architectural luxury, meticulous craftsmanship,
                and enduring design in Nagercoil.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#grid"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#1D1C19] text-[#FAF8F3] font-sans font-semibold text-[12px] tracking-[0.15em] uppercase hover:scale-105 transition-transform duration-300 shadow-md"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-[#795825] text-[#795825] font-sans font-semibold text-[12px] tracking-[0.15em] uppercase hover:bg-[#795825]/5 transition-colors duration-300"
                >
                  Start Your Project
                </a>
              </div>
            </div>
          </section>

          {/* Interactive Filters */}
          <section className="px-6 md:px-20 max-w-[1440px] mx-auto mb-16">
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setPage(1);
                  }}
                  className={`px-5 py-2.5 rounded-full font-sans text-[14px] font-medium transition-all duration-300 border ${
                    selectedCategory === cat
                      ? "bg-[#795825] border-[#795825] text-white shadow-sm"
                      : "bg-[#F2EDE3] border-[#E7E0D4] text-[#68645D] hover:border-[#795825] hover:text-[#795825]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </section>

          {/* Luxury Masonry Projects Grid */}
          <section className="px-6 md:px-20 max-w-[1440px] mx-auto mb-24" id="grid">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {paginatedProjects.map((project, idx) => (
                <article
                  key={project.id}
                  onClick={() => handleSelectProject(project)}
                  className={`group cursor-pointer flex flex-col justify-between ${
                    idx % 2 === 1 ? "md:translate-y-12" : ""
                  }`}
                >
                  <div className="relative w-full overflow-hidden rounded-[28px] mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500 bg-[#F2EDE3]">
                    <div className={`relative w-full ${project.aspect}`}>
                      <Image
                        src={project.img}
                        alt={project.title}
                        fill
                        className="object-cover transform transition-transform duration-[1.2s] group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        unoptimized
                      />
                      {/* Interactive hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1D1C19]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                        <span className="font-sans font-semibold text-[12px] tracking-[0.15em] uppercase text-[#e5c093] mb-2 block">
                          {project.category}
                        </span>
                        <h4 className="font-serif font-bold text-[28px] md:text-[32px] text-white mb-2">
                          {project.title}
                        </h4>
                        <span className="inline-flex items-center gap-2 font-sans font-semibold text-[13px] tracking-[0.15em] uppercase text-white/90">
                          View Case Study
                          <span className="material-symbols-outlined text-[16px] group-hover:translate-x-2 transition-transform">
                            arrow_forward
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-serif font-bold text-[24px] md:text-[28px] text-[#1F1F1F] group-hover:text-[#795825] transition-colors leading-tight">
                        {project.title}
                      </h3>
                      <span className="material-symbols-outlined text-[#795825] opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300 text-[24px]">
                        arrow_forward
                      </span>
                    </div>
                    <p className="font-sans text-[15px] leading-relaxed text-[#68645D] mb-3">
                      {project.desc}
                    </p>
                    <div className="flex items-center gap-4 text-[#68645D] text-[13px] font-sans">
                      <span className="flex items-center gap-1 font-semibold text-[#795825] uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">location_on</span>
                        {project.location}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            {/* Pad bottom for offset column */}
            <div className="h-16 hidden md:block"></div>
          </section>

          {/* Load More Option */}
          {page < totalPages && (
            <section className="flex justify-center items-center gap-4 px-6 mb-24">
              <button
                onClick={loadMore}
                className="px-10 py-4 rounded-full border border-[#E7E0D4] bg-white text-[#795825] font-sans font-semibold text-[13px] tracking-[0.15em] uppercase hover:border-[#795825] transition-colors shadow-sm"
              >
                Load More Projects
              </button>
            </section>
          )}

          {/* Call to Action */}
          <section className="px-6 md:px-20 max-w-[1440px] mx-auto" id="contact">
            <div className="bg-[#F2EDE3] rounded-[40px] p-12 md:p-24 text-center border border-[#E7E0D4] shadow-sm">
              <h2 className="font-serif font-bold text-[32px] md:text-[48px] leading-[1.15] text-[#1F1F1F] mb-6">
                Let&apos;s Build Your Dream Space
              </h2>
              <p className="font-sans text-[18px] text-[#68645D] max-w-2xl mx-auto mb-10">
                Ready to transform your vision into an enduring architectural reality? Contact our
                studio to discuss your next project in Nagercoil.
              </p>
              <button className="bg-[#1F1F1F] text-white font-sans font-semibold text-[13px] tracking-[0.15em] uppercase px-12 py-5 rounded-full hover:scale-105 transition-transform duration-300 shadow-md">
                Schedule a Consultation
              </button>
            </div>
          </section>
        </main>
      )}

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setLightboxImg(null)}
        >
          <div className="relative max-w-5xl max-h-[85vh] w-full h-full">
            <Image
              src={lightboxImg}
              alt="Project Showcase Large View"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
          <button
            onClick={() => setLightboxImg(null)}
            className="absolute top-6 right-6 text-white text-[32px] hover:text-[#e5c093] transition-colors material-symbols-outlined"
          >
            close
          </button>
        </div>
      )}

      <Footer />
    </>
  );
}
