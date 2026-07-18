"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
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
      className={`fixed top-0 w-full z-50 transition-all duration-500 pt-10 pb-6 px-6 md:px-16 ${
        scrolled
          ? "bg-[#F8F4EE]/95 backdrop-blur-md shadow-[0_1px_24px_rgba(0,0,0,0.05)] pt-6 pb-6"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center w-full mx-auto max-w-[1440px]">
        {/* Left: Luxury Logo & Company Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-[#C89A47] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
            <span className="material-symbols-outlined text-white text-[22px] font-light">architecture</span>
          </div>
          <span className="font-serif text-[22px] md:text-[26px] font-bold tracking-tight text-[#1F1F1F] leading-none">
            SMS Construction
          </span>
        </Link>

        {/* Center: Navigation Links */}
        <div className="hidden lg:flex gap-8 items-center">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-sans font-medium text-[16px] text-[#1F1F1F]/80 hover:text-[#C89A47] transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C89A47] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right: Rounded Gold Contact Button */}
        <a
          href="tel:+1234567890"
          className="hidden md:flex bg-[#C89A47] text-white font-sans font-semibold text-[16px] px-6 py-3 rounded-full hover:bg-[#b08436] transition-all duration-300 shadow-[0_4px_20px_rgba(200,154,71,0.3)] hover:-translate-y-0.5 items-center gap-2"
        >
          <span className="material-symbols-outlined text-[18px]">phone</span>
          <span>Contact Us</span>
        </a>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-[#1F1F1F] p-2 hover:bg-black/5 rounded-full transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined" style={{ fontSize: 28 }}>
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#F8F4EE] border-t border-[#E7E0D4] px-6 py-6 flex flex-col gap-4 shadow-lg">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-sans font-medium text-[16px] text-[#1F1F1F] hover:text-[#C89A47] py-2 transition-colors border-b border-[#E7E0D4]/30"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:+1234567890"
            className="mt-4 bg-[#C89A47] text-white font-sans font-semibold text-[16px] py-4 rounded-full w-full flex items-center justify-center gap-2"
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
