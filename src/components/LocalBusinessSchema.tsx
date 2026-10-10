import { LocalBusiness, WithContext } from "schema-dts";

export default function LocalBusinessSchema() {
  const jsonLd: WithContext<LocalBusiness> = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "SMS Construction",
    image: "https://smsconstruction.in/hero.webp",
    "@id": "https://smsconstruction.in/#organization",
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
      latitude: 8.1806677,
      longitude: 77.4308799,
    },
    hasMap:
      "https://www.google.com/maps/dir//SMS+CONSTRUCTION,+25%2F1,+Muthamizh+St,+near+Court+Road,+Nagercoil,+Tamil+Nadu+629001/@8.1807325,77.4307402,66m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3b04f108ea52fa71:0x479afff108b86846!2m2!1d77.4308799!2d8.1806677",
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
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
