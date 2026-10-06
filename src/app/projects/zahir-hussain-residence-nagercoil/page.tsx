import type { Metadata } from "next";
import ZahirHussainResidenceClient from "./client";

export const metadata: Metadata = {
  title: "Zahir Hussain Residence | Turnkey Interiors in Nagercoil | SMS Construction",
  description:
    "Explore the Zahir Hussain Residence project by SMS Construction in Nagercoil, featuring bespoke marble TV wall paneling, high-gloss gold-inlay wardrobes, illuminated staircase, and luxury modular kitchen.",
};

export default function ZahirHussainResidencePage() {
  return <ZahirHussainResidenceClient />;
}
