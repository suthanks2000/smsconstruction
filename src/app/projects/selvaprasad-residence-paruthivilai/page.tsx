import type { Metadata } from "next";
import SelvaprasadResidenceClient from "./client";

export const metadata: Metadata = {
  title: "Selvaprasad Residence | Turnkey Interiors in Paruthivilai, Nagercoil | SMS Construction",
  description:
    "Explore the Selvaprasad Residence turnkey interior project by SMS Construction in Paruthivilai, Nagercoil — featuring a double-height crystal chandelier foyer, custom acoustic TV wall, window bay seating, and master joinery.",
};

export default function SelvaprasadResidencePage() {
  return <SelvaprasadResidenceClient />;
}
