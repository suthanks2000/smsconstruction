import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | SMS Construction Nagercoil",
  description:
    "Read the Terms & Conditions for using the SMS Construction website and submitting project enquiries.",
  keywords: [
    "SMS Construction Terms and Conditions",
    "Terms and Conditions Nagercoil",
    "Construction Company Legal Terms Tamil Nadu",
    "SMS Construction Contract Terms",
    "Architecture Firm Terms Nagercoil",
  ],
  alternates: {
    canonical: "/terms-and-conditions",
  },
  openGraph: {
    title: "Terms & Conditions | SMS Construction Nagercoil",
    description:
      "Read the Terms & Conditions for using the SMS Construction website and submitting project enquiries.",
    url: "https://smsconstruction.in/terms-and-conditions",
    siteName: "SMS Construction",
    images: [
      {
        url: "/hero.jpeg",
        width: 1200,
        height: 630,
        alt: "SMS Construction Terms & Conditions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | SMS Construction Nagercoil",
    description:
      "Read the Terms & Conditions for using the SMS Construction website and submitting project enquiries.",
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

export default function TermsAndConditionsLayout({
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
        name: "Terms & Conditions",
        item: "https://smsconstruction.in/terms-and-conditions",
      },
    ],
  };

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://smsconstruction.in/terms-and-conditions#webpage",
    url: "https://smsconstruction.in/terms-and-conditions",
    name: "Terms & Conditions | SMS Construction Nagercoil",
    description:
      "Read the Terms & Conditions for using the SMS Construction website and submitting project enquiries.",
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
