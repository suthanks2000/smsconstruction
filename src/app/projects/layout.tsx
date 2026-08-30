import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects | SMS Construction — Nagercoil",
  description:
    "Explore completed residential construction, interior design, turnkey interiors and renovation projects by SMS Construction in Nagercoil and Kanyakumari district.",
  keywords:
    "SMS Construction projects, residential construction Nagercoil, interior design Kanyakumari, turnkey interiors, renovation Nagercoil, construction portfolio",
  openGraph: {
    title: "Our Projects | SMS Construction",
    description:
      "Completed residential construction, interior design and turnkey projects by SMS Construction in Nagercoil, Kanyakumari.",
    type: "website",
    url: "https://smsconstruction.in/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
