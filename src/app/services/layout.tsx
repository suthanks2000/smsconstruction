import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction & Interior Design Services in Nagercoil | SMS Construction",
  description:
    "Explore SMS Construction services in Nagercoil, including interior design, construction, design and planning, survey services and fabrication works.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Construction & Interior Design Services in Nagercoil | SMS Construction",
    description:
      "Explore SMS Construction services in Nagercoil, including interior design, construction, design and planning, survey services and fabrication works.",
    url: "https://smsconstruction.in/services",
    siteName: "SMS Construction",
    images: [
      {
        url: "/images/services/interior.webp",
        width: 1200,
        height: 630,
        alt: "SMS Construction Services Hub in Nagercoil",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction & Interior Design Services in Nagercoil | SMS Construction",
    description:
      "Explore SMS Construction services in Nagercoil, including interior design, construction, design and planning, survey services and fabrication works.",
    images: ["/images/services/interior.webp"],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
