import type { Metadata } from "next";
import dynamic from "next/dynamic";

const NagarajanResidenceClient = dynamic(() => import("./client"), {
  ssr: true,
});

export const metadata: Metadata = {
  title: "Nagarajan Residence | Interior Design in Nagercoil (Theroor) | SMS Construction",
  description: "Explore the Nagarajan Residence project by SMS Construction in Nagercoil (Theroor), featuring premium residential interior design and detailed bespoke spaces.",
};

export default function NagarajanResidencePage() {
  return <NagarajanResidenceClient />;
}
