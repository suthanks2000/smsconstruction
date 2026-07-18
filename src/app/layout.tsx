import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SMS Construction | Architectural Excellence",
  description:
    "Premier Interior Design & Construction Company in Nagercoil, blending architectural rigor with organic warmth. Home Interiors, Turnkey, Residential & Commercial Construction.",
  keywords:
    "SMS Construction, Interior Design, Nagercoil, Kanyakumari, Residential Construction, Turnkey Interiors",
  openGraph: {
    title: "SMS Construction | Architectural Excellence",
    description: "Premier Interior Design & Construction in Nagercoil",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Fonts preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Playfair Display + Inter */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Material Symbols */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,200,0,0"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
