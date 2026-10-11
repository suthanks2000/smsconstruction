import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://smsconstruction.in"),
  title: "Interior Design & Construction in Nagercoil | SMS Construction",
  description:
    "Premier Interior Design & Construction Company in Nagercoil. Bespoke residential interior design, turnkey house construction, and specialized interior works across Kanyakumari District.",
  keywords:
    "Interior Design in Nagercoil, Best Interior Designers in Nagercoil, Construction Company in Nagercoil, Interior Works Nagercoil, SMS Construction, Turnkey Interiors, Home Builders Kanyakumari, Commercial Construction, Architectural Design",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Interior Design & Construction in Nagercoil | SMS Construction",
    description:
      "Premier Interior Design & Construction Company in Nagercoil. Bespoke residential interior design, turnkey house construction, and specialized interior works.",
    url: "https://smsconstruction.in",
    siteName: "SMS Construction",
    images: [
      {
        url: "/hero.webp",
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
    title: "Interior Design & Construction in Nagercoil | SMS Construction",
    description:
      "Premier Interior Design & Construction Company in Nagercoil. Bespoke residential interior design, turnkey construction, and interior works.",
    images: ["/hero.webp"],
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
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        {/* Title Icon (Favicon) */}
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />

        {/* Preload critical LCP Hero Image */}
        <link
          rel="preload"
          as="image"
          href="/hero.webp"
          type="image/webp"
          fetchPriority="high"
        />

        {/* Google Fonts preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Playfair Display + Inter */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,700&family=Inter:wght@300;400;500;600;700&display=swap"
        />

        {/* Material Symbols */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,200,0,0&display=swap"
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
