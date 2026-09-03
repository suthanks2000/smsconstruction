import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | SMS Construction Nagercoil",
  description:
    "Read the Privacy Policy for SMS Construction, a construction and interior design studio in Nagercoil, Tamil Nadu.",
  keywords: [
    "SMS Construction Privacy Policy",
    "Privacy Policy Nagercoil",
    "Construction Company Privacy Policy Tamil Nadu",
    "Interior Designers Nagercoil Legal",
    "SMS Construction Nagercoil Data Policy",
  ],
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | SMS Construction Nagercoil",
    description:
      "Read the Privacy Policy for SMS Construction, a construction and interior design studio in Nagercoil, Tamil Nadu.",
    url: "https://smsconstruction.in/privacy-policy",
    siteName: "SMS Construction",
    images: [
      {
        url: "/hero.jpeg",
        width: 1200,
        height: 630,
        alt: "SMS Construction Privacy Policy",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | SMS Construction Nagercoil",
    description:
      "Read the Privacy Policy for SMS Construction, a construction and interior design studio in Nagercoil, Tamil Nadu.",
    images: ["/hero.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Nagercoil, Kanyakumari District, Tamil Nadu",
    "geo.position": "8.1807;77.4309",
    "ICBM": "8.1807, 77.4309",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://smsconstruction.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Privacy Policy",
        item: "https://smsconstruction.in/privacy-policy",
      },
    ],
  };

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://smsconstruction.in/privacy-policy#webpage",
    url: "https://smsconstruction.in/privacy-policy",
    name: "Privacy Policy | SMS Construction Nagercoil",
    description:
      "Read the Privacy Policy for SMS Construction, a construction and interior design studio in Nagercoil, Tamil Nadu.",
    inLanguage: "en-IN",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://smsconstruction.in/#website",
      url: "https://smsconstruction.in",
      name: "SMS Construction",
    },
    about: {
      "@type": "HomeAndConstructionBusiness",
      "@id": "https://smsconstruction.in",
      name: "SMS Construction",
    },
    publisher: {
      "@type": "HomeAndConstructionBusiness",
      "@id": "https://smsconstruction.in",
      name: "SMS Construction",
      telephone: "+919488021183",
      email: "smsconstructionngl@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "25/1 Muthamil Street, Near Court Road",
        addressLocality: "Nagercoil",
        addressRegion: "Tamil Nadu",
        postalCode: "629001",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 8.1807,
        longitude: 77.4309,
      },
    },
    datePublished: "2026-01-01",
    dateModified: "2026-09-03",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      {children}
    </>
  );
}
