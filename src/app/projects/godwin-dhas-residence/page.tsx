import type { Metadata } from "next";
import GodwinDhasResidenceClient from "./client";

export const metadata: Metadata = {
  title: "Godwin Dhas Residence | Turnkey Interiors & Luxury Suites in Nagercoil | SMS Construction",
  description:
    "Explore the Godwin Dhas Residence turnkey interior project by SMS Construction in Nagercoil — featuring a presidential master suite with neon-canopy floating bed, high-gloss acrylic kitchen, and bespoke CNC jali wooden partitions.",
};

export default function GodwinDhasResidencePage() {
  return <GodwinDhasResidenceClient />;
}
