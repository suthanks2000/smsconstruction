"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import gsap from "gsap";

const servicesData = [
  {
    category: "Interior Works",
    isPrimary: true,
    href: "/interior-design",
  },
  {
    category: "Construction",
    href: "/construction",
  },
  {
    category: "Design & Planning",
    href: "/interior-design",
  },
  {
    category: "Survey & Approvals",
    href: "/construction",
  },
  {
    category: "Fabrication Works",
    href: "/construction",
  },
];
const MagneticContactButton = ({ href, className }: { href: string, className?: string, isMobile?: boolean }) => {
  return (
    <a
      href={href}
      className={`group flex items-center justify-center gap-2 font-semibold text-white shadow-sm transition-all duration-200 ease-out hover:shadow-md hover:brightness-105 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] ${className || ""}`}
    >
      <span className="material-symbols-outlined text-[18px] transition-transform duration-200 ease-out group-hover:scale-110">
        phone
      </span>
      <span>Contact Us</span>
    </a>
  );
};

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasDarkHero, setHasDarkHero] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const phoneNumber = "+919488021183";

  const links = [
    { name: "Home", href: "/" },
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
    const isDarkPath =
      pathname === "/" ||
      pathname === "/interior-design" ||
      pathname === "/construction" ||
      pathname === "/about-us";

    const checkDarkHero = () => {
      const el = document.querySelector("[data-header-theme='dark']");
      setHasDarkHero(isDarkPath || !!el);
    };

    checkDarkHero();

    const observer = new MutationObserver(checkDarkHero);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [pathname]);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
    setMobileServicesOpen(false);
  }

  const [prevMenuOpen, setPrevMenuOpen] = useState(menuOpen);
  if (menuOpen !== prevMenuOpen) {
    setPrevMenuOpen(menuOpen);
    if (!menuOpen) {
      setMobileServicesOpen(false);
    }
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      gsap.fromTo(
        ".mobile-stagger-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          delay: 0.15,
        }
      );
    } else {
      gsap.set(".mobile-stagger-item", { opacity: 0 });
    }
  }, [menuOpen]);

  const isServicesActive = servicesData.some((cat) => cat.href === pathname);
  const showSolidNavbar = scrolled || menuOpen;
  const useDarkTheme = !showSolidNavbar && hasDarkHero;

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-300 ${showSolidNavbar
          ? "bg-[#FAF8F3]/95 backdrop-blur-md border-b border-[#E7E0D4]/60 shadow-sm py-4"
          : "bg-transparent py-6"
          }`}
      >
        <div className="relative mx-auto flex max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          {/* Logo */}
          <Link
            href="/"
            className="group relative z-[60] flex w-auto lg:min-w-[170px] h-[55px] items-center gap-3 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A52]"
          >
            <div className="relative flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="SMS Construction Logo"
                width={60}
                height={60}
                priority
                className="object-contain"
              />
            </div>

            <div className="flex flex-col justify-center">
              <span
                className={`font-serif text-[18px] font-semibold leading-none tracking-tight whitespace-nowrap transition-colors duration-300 group-hover:text-[#B08A52] ${useDarkTheme ? "text-white" : "text-[#171714]"
                  }`}
              >
                SMS Construction
              </span>
              <div
                className={`flex justify-between w-full text-[8px] tracking-[0.4px] uppercase mt-1 transition-colors duration-300 font-sans ${useDarkTheme ? "text-white/70" : "text-[#68645D]"
                  }`}
              >
                <span>Design</span>
                <span>|</span>
                <span>Build</span>
                <span>|</span>
                <span>Deliver</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}

          <div className="hidden lg:flex items-center gap-9">
            {/* Home */}
            <Link
              href="/"
              className={`relative py-1 text-[15px] font-medium transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:transition-all after:duration-300 ${pathname === "/"
                ? useDarkTheme
                  ? "text-[#e5c093] after:bg-[#e5c093] after:w-full"
                  : "text-[#B08A52] after:bg-[#B08A52] after:w-full"
                : useDarkTheme
                  ? "text-white/80 hover:text-white after:bg-white after:w-0 hover:after:w-full"
                  : "text-[#68645D] hover:text-[#B08A52] after:bg-[#B08A52] after:w-0 hover:after:w-full"
                }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="group/services relative">
              <button
                className={`relative py-1 flex items-center gap-0.5 text-[15px] font-medium transition-colors duration-300 focus:outline-none after:absolute after:bottom-0 after:left-0 after:h-[2px] after:transition-all after:duration-300 ${
                  isServicesActive
                    ? useDarkTheme
                      ? "text-[#e5c093] after:bg-[#e5c093] after:w-full"
                      : "text-[#B08A52] after:bg-[#B08A52] after:w-full"
                    : useDarkTheme
                      ? "text-white/80 hover:text-white after:bg-white after:w-0 hover:after:w-full"
                      : "text-[#68645D] hover:text-[#B08A52] after:bg-[#B08A52] after:w-0 hover:after:w-full"
                }`}
              >
                Services
                <span className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover/services:rotate-180">
                  keyboard_arrow_down
                </span>
              </button>

              {/* Dropdown Panel */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-[#FAF8F3] border border-[#E7E0D4] rounded-[20px] shadow-2xl p-2.5 opacity-0 invisible translate-y-2 group-hover/services:opacity-100 group-hover/services:visible group-hover/services:translate-y-0 transition-all duration-300 z-50">
                <div className="flex flex-col gap-1 text-left">
                  {servicesData.map((cat) => (
                    <Link
                      key={cat.category}
                      href={cat.href}
                      className={`rounded-xl px-4.5 py-3.5 flex items-center justify-between transition-all duration-300 border border-transparent group/cat ${cat.isPrimary
                        ? "bg-white shadow-[0_4px_12px_rgba(176,138,82,0.06)] border-[#B08A52]/15 text-[#B08A52] font-semibold"
                        : "text-[#68645D] hover:bg-white/60 hover:text-[#B08A52] hover:border-[#E7E0D4]/30"
                        }`}
                    >
                      <span className="text-[15px] font-medium">{cat.category}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Remaining links: Projects, Journal, About Us, Contact */}
            {links.slice(1).map((link) => {
              const active = pathname === link.href;
              const linkColorClass = active
                ? useDarkTheme
                  ? "text-[#e5c093] after:bg-[#e5c093] after:w-full"
                  : "text-[#B08A52] after:bg-[#B08A52] after:w-full"
                : useDarkTheme
                  ? "text-white/80 hover:text-white after:bg-white after:w-0 hover:after:w-full"
                  : "text-[#68645D] hover:text-[#B08A52] after:bg-[#B08A52] after:w-0 hover:after:w-full";

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-1 text-[15px] font-medium transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:transition-all after:duration-300 ${linkColorClass}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}

          <MagneticContactButton
            href={`tel:${phoneNumber}`}
            className="hidden lg:flex rounded-full bg-[#B08A52] px-6 py-3 text-[15px]"
          />

          {/* Mobile Toggle */}

          <button
            type="button"
            aria-label={menuOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className={`relative z-[60] flex h-11 w-11 items-center justify-center rounded-full transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A52] lg:hidden ${useDarkTheme
              ? "text-white hover:bg-white/10"
              : "text-[#171714] hover:bg-[#F2EDE3]"
              }`}
          >
            <span className="material-symbols-outlined text-[30px]">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}

      <div
        className={`lg:hidden fixed top-0 right-0 z-[90] w-full h-[100dvh] bg-[#FAF8F3] shadow-2xl transition-transform duration-500 ease-in-out ${menuOpen
          ? "translate-x-0 pointer-events-auto"
          : "translate-x-full pointer-events-none"
          }`}
      >
        <div className="px-5 py-[85px] overflow-y-auto h-full flex flex-col">
          <div className="flex flex-col gap-2 min-h-full flex-1 pt-4">
            {/* Home */}
            <div className="mobile-stagger-item opacity-0">
              <Link
                href="/"
                className={`rounded-xl px-4 py-3 flex items-center justify-between transition-all duration-300 border ${pathname === "/"
                  ? "bg-white shadow-[0_4px_12px_rgba(176,138,82,0.06)] border-[#B08A52]/20 text-[#B08A52] font-semibold"
                  : "text-[#68645D] border-transparent hover:bg-white/60 hover:text-[#B08A52]"
                  }`}
              >
                <span className="text-[14px]">Home</span>
              </Link>
            </div>

            {/* Services Collapsible Accordion */}
            <div className="mobile-stagger-item opacity-0 flex flex-col">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className={`rounded-xl px-4 py-3 flex items-center justify-between transition-all duration-300 border w-full text-left ${
                  isServicesActive
                    ? "bg-white shadow-[0_4px_12px_rgba(176,138,82,0.06)] border-[#B08A52]/20 text-[#B08A52] font-semibold"
                    : mobileServicesOpen
                      ? "bg-white/60 border-[#B08A52]/30 text-[#B08A52] font-semibold"
                      : "text-[#68645D] border-transparent hover:bg-white/60 hover:text-[#B08A52]"
                }`}
              >
                <span className="text-[14px]">Services</span>
                <span className={`material-symbols-outlined text-[18px] transition-transform duration-300 ${mobileServicesOpen ? "rotate-180 text-[#B08A52]" : "text-[#68645D]"
                  }`}>
                  keyboard_arrow_down
                </span>
              </button>

              {/* Collapsible Services List */}
              <div
                className={`overflow-hidden transition-all duration-300 pl-3 ${mobileServicesOpen ? "max-h-[500px] opacity-100 mt-1" : "max-h-0 opacity-0"
                  }`}
              >
                <div className="flex flex-col gap-0.5 border-l border-[#E7E0D4] pl-3 py-1">
                  {servicesData.map((cat) => (
                    <Link
                      key={cat.category}
                      href={cat.href}
                      className={`py-1.5 text-[14px] font-medium text-left transition-colors duration-300 block ${cat.isPrimary ? "text-[#B08A52]" : "text-[#68645D] hover:text-[#B08A52]"
                        }`}
                    >
                      {cat.category}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Remaining links: Projects, Journal, About Us, Contact */}
            {links.slice(1).map((link, index) => {
              const active = pathname === link.href;

              return (
                <div
                  key={link.href}
                  className="mobile-stagger-item opacity-0"
                >
                  <Link
                    href={link.href}
                    className={`rounded-xl px-4 py-3 flex items-center justify-between transition-all duration-300 border ${active
                      ? "bg-white shadow-[0_4px_12px_rgba(176,138,82,0.06)] border-[#B08A52]/20 text-[#B08A52] font-semibold"
                      : "text-[#68645D] border-transparent hover:bg-white/60 hover:text-[#B08A52]"
                      }`}
                  >
                    <span className="text-[14px]">{link.name}</span>
                  </Link>
                </div>
              );
            })}

            <div className="mobile-stagger-item opacity-0 mt-auto flex flex-col gap-2 pt-6">
              <MagneticContactButton
                href={`tel:${phoneNumber}`}
                className="mt-1 rounded-xl bg-[#B08A52] py-3.5 text-[14px] w-full"
                isMobile={true}
              />

              {/* Elegant Divider */}
              <div className="my-1 border-t border-[#E7E0D4]" />

              {/* Quick Actions Grid */}
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="mailto:smsconstructionngl@gmail.com"
                  className="flex items-center justify-center gap-1.5 rounded-xl border border-[#E7E0D4] bg-white py-3 text-[13px] font-semibold text-[#68645D] transition-all duration-300 hover:bg-[#FAF8F3] hover:text-[#B08A52] hover:border-[#B08A52]/40 active:scale-[0.98]"
                >
                  <span className="material-symbols-outlined text-[16px]">mail</span>
                  Email Us
                </a>
                <a
                  href="https://wa.me/919488021183"
                  className="flex items-center justify-center gap-1.5 rounded-xl border border-[#E7E0D4] bg-white py-3 text-[13px] font-semibold text-[#68645D] transition-all duration-300 hover:bg-[#FAF8F3] hover:text-[#B08A52] hover:border-[#B08A52]/40 active:scale-[0.98]"
                >
                  <span className="material-symbols-outlined text-[16px]">chat</span>
                  WhatsApp
                </a>
              </div>

              {/* Branding Tagline */}
              <div className="mt-2 text-center">
                <p className="text-[9px] tracking-[0.25em] uppercase text-[#68645D]/60 font-sans font-medium">
                  Design • Build • Deliver
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}