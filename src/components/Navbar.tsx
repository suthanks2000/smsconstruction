"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "Interior Design", href: "/interior-design" },
    { name: "Construction", href: "/construction" },
    { name: "Projects", href: "/projects" },
    { name: "Journal", href: "/journal" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-4 sm:px-6 md:px-12 lg:px-16 ${
        scrolled
          ? "bg-[#FAF8F3]/95 border-b border-[#E7E0D4]/60 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-4"
          : "bg-transparent border-b border-transparent py-6 md:py-8"
      }`}
    >
      <div className="flex justify-between items-center w-full mx-auto max-w-[1440px]">
        {/* Left: Luxury Logo & Company Name */}
        <Link 
          href="/" 
          className="flex items-center gap-3 md:gap-4 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A52] rounded-lg"
        >
          <div className="relative w-10 h-10 md:w-11 md:h-11 flex items-center justify-center overflow-hidden rounded-lg bg-[#FAF8F3] border border-[#E7E0D4]/80 shadow-sm group-hover:shadow group-hover:border-[#B08A52]/30 group-hover:scale-105 transition-all duration-300">
            <Image
              src="/logo.png"
              alt="SMS Construction Logo"
              width={44}
              height={44}
              className="object-contain w-full h-full p-1"
              priority
              quality={100}
            />
          </div>
          <span className="font-serif text-[18px] sm:text-[20px] md:text-[23px] font-bold tracking-tight text-[#171714] leading-none transition-colors group-hover:text-[#B08A52]">
            SMS Construction
          </span>
        </Link>

        {/* Center: Navigation Links */}
        <div className="hidden lg:flex gap-7 xl:gap-9 items-center">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-sans text-[15px] font-medium tracking-wide transition-all duration-300 relative py-1 focus:outline-none focus-visible:text-[#B08A52] ${
                  isActive
                    ? "text-[#B08A52] font-semibold after:w-full"
                    : "text-[#68645D] hover:text-[#B08A52] after:w-0"
                } after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#B08A52] hover:after:w-full after:transition-all after:duration-300`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right: Rounded Gold Contact Button */}
        <a
          href="tel:+1234567890"
          className="hidden md:flex bg-[#B08A52] text-white font-sans font-semibold text-[14px] md:text-[15px] px-6 py-3 rounded-full hover:bg-[#80633D] transition-all duration-300 shadow-[0_4px_18px_rgba(176,138,82,0.15)] hover:shadow-[0_6px_22px_rgba(176,138,82,0.25)] hover:-translate-y-0.5 items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A52] focus-visible:ring-offset-2"
        >
          <span className="material-symbols-outlined text-[18px] font-light">phone</span>
          <span>Contact Us</span>
        </a>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-[#171714] p-2.5 hover:bg-[#F2EDE3] rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A52] touch-target"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close main menu" : "Open main menu"}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 26 }}>
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#FAF8F3]/98 border-t border-[#E7E0D4]/60 px-6 py-6 flex flex-col gap-3 shadow-[0_12px_30px_rgba(0,0,0,0.06)] backdrop-blur-md animate-fade-in">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-sans text-[15px] transition-all duration-200 py-2.5 px-3 rounded-lg border-l-2 flex items-center justify-between ${
                  isActive
                    ? "text-[#B08A52] font-semibold bg-[#F2EDE3]/50 border-[#B08A52]"
                    : "text-[#68645D] hover:text-[#B08A52] hover:bg-[#F2EDE3]/30 border-transparent"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span className="material-symbols-outlined text-[16px] text-[#B08A52]">
                    chevron_right
                  </span>
                )}
              </Link>
            );
          })}
          <a
            href="tel:+1234567890"
            className="mt-3 bg-[#B08A52] text-white font-sans font-semibold text-[15px] py-3.5 rounded-full w-full flex items-center justify-center gap-2 hover:bg-[#80633D] transition-colors shadow-[0_4px_15px_rgba(176,138,82,0.15)] touch-target"
            onClick={() => setMenuOpen(false)}
          >
            <span className="material-symbols-outlined text-[18px]">phone</span>
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}
