import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction & Interior Design Projects in Nagercoil | SMS Construction",
  description:
    "Explore residential construction and interior design projects by SMS Construction in Nagercoil, Tamil Nadu, including completed spaces and project case studies.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Construction & Interior Design Projects in Nagercoil | SMS Construction",
    description:
      "Explore residential construction and interior design projects by SMS Construction in Nagercoil, Tamil Nadu, including completed spaces and project case studies.",
    url: "https://smsconstruction.in/projects",
    siteName: "SMS Construction",
    images: [
      {
        url: "/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-living-room-wide.webp",
        width: 1200,
        height: 630,
        alt: "SMS Construction Selected Projects in Nagercoil",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction & Interior Design Projects in Nagercoil | SMS Construction",
    description:
      "Explore residential construction and interior design projects by SMS Construction in Nagercoil, Tamil Nadu, including completed spaces and project case studies.",
    images: [
      "/images/projects/nagarajan-residence-nagercoil-theroor/nagarajan-residence-living-room-wide.webp",
    ],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
