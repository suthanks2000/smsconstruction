"use client";

import { LocalBusiness, WithContext } from "schema-dts";

export default function LocalBusinessSchema() {
  const jsonLd: WithContext<LocalBusiness> = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "SMS Construction",
    image: "https://smsconstruction.in/hero.jpeg",
    "@id": "https://smsconstruction.in",
    url: "https://smsconstruction.in",
    telephone: "+919488021183",
    email: "smsconstructionngl@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "25/1 Muthamizh Street, Near Court Road",
      addressLocality: "Nagercoil",
      addressRegion: "Tamil Nadu",
      postalCode: "629001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 8.1833, // Nagercoil approx coords
      longitude: 77.4119,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    priceRange: "$$$",
    description:
      "Premier Construction & Interior Design Studio based in Nagercoil. Crafting bespoke residential, commercial, and industrial spaces with seamless interiors and architectural excellence across Kanyakumari.",
    areaServed: [
      {
        "@type": "City",
        name: "Nagercoil",
      },
      {
        "@type": "AdministrativeArea",
        name: "Kanyakumari District",
      },
      {
        "@type": "State",
        name: "Tamil Nadu",
      },
    ],
    sameAs: [
      "https://instagram.com",
      "https://linkedin.com",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
