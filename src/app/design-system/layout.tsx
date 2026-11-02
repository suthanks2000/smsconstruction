import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design System | SMS Construction",
  description: "Internal design system and component specifications.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function DesignSystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
