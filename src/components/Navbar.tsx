"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const phoneNumber = "+919488021183";

  const links = [
    { name: "Home", href: "/" },
    { name: "Interior Design", href: "/interior-design" },
    { name: "Construction", href: "/construction" },
    { name: "Projects", href: "/projects" },
    { name: "Journal", href: "/journal" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF8F3]/80 backdrop-blur-md border-b border-[#E7E0D4]/60 shadow-sm py-4"
          : "bg-transparent py-6 md:py-8"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-16">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-4 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A52]"
        >
          <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-[#E7E0D4] bg-[#FAF8F3] shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:border-[#B08A52]/40">
            <Image
              src="/logo.png"
              alt="SMS Construction Logo"
              fill
              priority
              className="object-contain p-1"
            />
          </div>

          <span className="font-serif text-[20px] font-bold tracking-tight text-[#171714] transition-colors duration-300 group-hover:text-[#B08A52]">
            SMS Construction
          </span>
        </Link>

        {/* Desktop Navigation */}

        <div className="hidden lg:flex items-center gap-9">
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 text-[15px] font-medium transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#B08A52] after:transition-all after:duration-300 ${
                  active
                    ? "text-[#B08A52] after:w-full"
                    : "text-[#68645D] hover:text-[#B08A52] after:w-0 hover:after:w-full"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}

        <a
          href={`tel:${phoneNumber}`}
          className="hidden lg:flex items-center gap-2 rounded-full bg-[#B08A52] px-6 py-3 text-[15px] font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#80633D]"
        >
          <span className="material-symbols-outlined text-[18px]">
            phone
          </span>

          Contact Us
        </a>

        {/* Mobile Toggle */}

        <button
          type="button"
          aria-label={menuOpen ? "Close Menu" : "Open Menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-full text-[#171714] transition hover:bg-[#F2EDE3] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A52] lg:hidden"
        >
          <span className="material-symbols-outlined text-[30px]">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen
            ? "max-h-[700px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-[#E7E0D4]/60 bg-[#FAF8F3]/95 px-6 py-6 backdrop-blur-md">
          <div className="flex flex-col gap-2">
            {links.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-4 py-3 transition ${
                    active
                      ? "border-l-2 border-[#B08A52] bg-[#F2EDE3] font-semibold text-[#B08A52]"
                      : "text-[#68645D] hover:bg-[#F2EDE3]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <a
              href={`tel:${phoneNumber}`}
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#B08A52] py-3 font-semibold text-white transition hover:bg-[#80633D]"
            >
              <span className="material-symbols-outlined">
                phone
              </span>

              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}