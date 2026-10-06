import type { Metadata } from "next";
import DrArunKumarResidenceClient from "./client";

export const metadata: Metadata = {
  title: "Dr. Arun Kumar Residence | Luxury Villa & Turnkey Interiors in Nagercoil | SMS Construction",
  description:
    "Explore the Dr. Arun Kumar Residence project by SMS Construction in Nagercoil, featuring a triple-height atrium, glass-enclosed indoor courtyard garden, floating staircase, bespoke modular kitchen, and luxury joinery.",
};

export default function DrArunKumarResidencePage() {
  return <DrArunKumarResidenceClient />;
}
