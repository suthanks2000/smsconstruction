import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

export const metadata: Metadata = {
  metadataBase: new URL("https://smsconstruction.in"),
  title: "SMS Construction | Best Interior & Construction in Nagercoil",
  description:
    "Top-rated Interior Design & Construction Company in Nagercoil. We build premium residential homes, turnkey commercial projects, and bespoke interior spaces across Kanyakumari District.",
  keywords:
    "Best Construction Company in Nagercoil, Top Interior Designers in Nagercoil, SMS Construction, Turnkey Interiors, Home Builders Kanyakumari, Commercial Construction, Architectural Design",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "SMS Construction | Best Interior & Construction in Nagercoil",
    description: "Premium Interior Design & Architecture in Nagercoil. Crafting bespoke luxury homes and seamless commercial spaces.",
    url: "https://smsconstruction.in",
    siteName: "SMS Construction",
    images: [
      {
        url: "/hero.jpeg",
        width: 1200,
        height: 630,
        alt: "SMS Construction Luxury Interior Design",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SMS Construction | Best Interior & Construction in Nagercoil",
    description: "Premium Interior Design & Architecture in Nagercoil.",
    images: ["/hero.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        {/* Title Icon (Favicon) */}
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />

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
      <body className="antialiased overflow-x-hidden">
        <LocalBusinessSchema />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
