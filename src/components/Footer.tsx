"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const interiorWorks = [
    { name: "Residential Construction", href: "/projects" },
    { name: "Interior Design", href: "/projects" },
    { name: "Turnkey Interiors", href: "/projects" },
    { name: "Commercial Construction", href: "/projects" },
    { name: "Renovation", href: "/projects" },
  ];

  const construction = [
    { name: "Construction", href: "/construction" },
    { name: "Design & Planning", href: "/interior-design" },
    { name: "Survey & Approvals", href: "/construction" },
    { name: "Fabrication Works", href: "/construction" },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about-us" },
    { name: "Projects", href: "/projects" },
    { name: "Our Process", href: "/process" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="url(#ig-grad)" className="group-hover:scale-110 transition-transform duration-300">
          <defs>
            <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F58529" />
              <stop offset="50%" stopColor="#DD2A7B" />
              <stop offset="100%" stopColor="#8134AF" />
            </linearGradient>
          </defs>
          <path fill="url(#ig-grad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      )
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/919488021183",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#25D366" className="group-hover:scale-110 transition-transform duration-300">
          <path d="M12.031 0C5.397 0 .013 5.385.013 12.019c0 2.122.553 4.195 1.603 6.015L.031 24l6.113-1.604c1.761.966 3.766 1.474 5.885 1.474 6.634 0 12.017-5.384 12.017-12.019C24.047 5.384 18.665 0 12.031 0zM17.438 17.15c-.266.748-1.542 1.393-2.135 1.464-.543.065-1.238.118-3.791-.885-3.09-1.214-5.068-4.382-5.218-4.582-.15-.2-1.246-1.658-1.246-3.161 0-1.503.784-2.247 1.066-2.545.281-.299.613-.374.815-.374.202 0 .405.002.585.01.187.009.441-.073.69.529.266.643.913 2.235.993 2.395.08.16.133.348.033.548-.1.2-.15.324-.3.498-.15.174-.316.386-.449.524-.15.15-.308.315-.133.614.175.299.78 1.285 1.671 2.078 1.15.999 2.115 1.309 2.414 1.459.299.15.474.124.648-.075.174-.2.747-.872.946-1.171.199-.299.398-.249.672-.15.274.1.733 1.059 1.442 1.576.71.517.946.666 1.08.83.134.164.134.966-.132 1.714z" />
        </svg>
      )
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#0A66C2" className="group-hover:scale-110 transition-transform duration-300">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )
    }
  ];

  return (
    <footer className="relative bg-[#11100F] text-white pt-12 md:pt-28 pb-8 overflow-hidden">

      {/* Subtle Luxury Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#11100F] via-[#161411] to-[#1D180F]" />

      {/* Ambient Gold Glow at the bottom */}
      <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[80%] h-[50%] bg-[#C89A47] opacity-[0.05] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12 xl:px-16">

        {/* Main Footer Content - Stacked on Mobile/Tablet/Laptop (< 1280px), Side-by-Side on Desktop (>= 1280px) */}
        <div className="flex flex-col xl:flex-row justify-between gap-12 xl:gap-8 pb-16 border-b border-white/10">

          {/* Brand & Location */}
          <div className="w-full xl:max-w-[360px] 2xl:max-w-[400px] flex flex-col md:flex-row xl:flex-col justify-between md:items-start xl:items-stretch gap-6 md:gap-12 xl:gap-5 xl:pr-8">
            <div className="md:max-w-md xl:max-w-none">
              <Link href="/" title="Go to SMS Construction Home" className="flex items-center gap-3 mb-6 group w-fit">
                <div className="w-14 h-14 relative flex items-center justify-center shrink-0">
                  <Image src="/logo.png" alt="SMS Construction" fill sizes="56px" className="object-contain" />
                </div>
                <h3 className="font-serif text-[28px] md:text-[32px] font-bold text-white tracking-tight whitespace-nowrap group-hover:text-[#C89A47] transition-colors">
                  SMS Construction
                </h3>
              </Link>
              <p className="text-white/60 text-[15px] md:text-[16px] leading-relaxed font-light">
                Premier Construction &amp; Interior Design Studio based in Nagercoil.
                Crafting bespoke residential, commercial, and industrial spaces with seamless interiors and architectural excellence across Kanyakumari.
              </p>
            </div>

            <div className="pt-2 md:pt-1 xl:pt-2 shrink-0 md:min-w-[240px]">
              <h4 className="font-sans text-[12px] uppercase tracking-[0.2em] font-semibold text-[#C89A47] mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px]">location_on</span>
                Head Office
              </h4>
              <address className="not-italic text-[14px] leading-[1.8] font-light">
                <a 
                  href="https://www.google.com/maps/dir//SMS+CONSTRUCTION,+25%2F1,+Muthamizh+St,+near+Court+Road,+Nagercoil,+Tamil+Nadu+629001/@8.1807325,77.4307402,66m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3b04f108ea52fa71:0x479afff108b86846!2m2!1d77.4308799!2d8.1806677?hl=en-GB&authuser=2&entry=ttu&g_ep=EgoyMDI2MDgzMS4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="View on Google Maps"
                  className="text-white/70 hover:text-[#C89A47] transition-colors block"
                >
                  25/1 Muthamizh St, Near Court Road,<br />
                  Nagercoil, Tamil Nadu 629001, India
                </a>
              </address>
            </div>
          </div>

          {/* Links Section Wrapper - 2 cols on mobile (<768px), 4 equal cols on tablet/laptop (768px-1279px), flex row on desktop (>=1280px) */}
          <nav aria-label="Footer Navigation" className="w-full xl:flex-1 grid grid-cols-2 md:grid-cols-4 xl:flex xl:flex-nowrap xl:justify-between gap-x-6 sm:gap-x-10 md:gap-x-8 gap-y-10 xl:gap-6 xl:pl-10">

            {/* Interior Works - Left (Row 1 on mobile) */}
            <div className="w-full lg:w-auto lg:min-w-[140px]">
              <h4 className="font-sans text-[12px] uppercase tracking-[0.2em] font-semibold text-[#C89A47] mb-5 sm:mb-6">Interior Works</h4>
              <ul className="space-y-3">
                {interiorWorks.map((s) => (
                  <li key={s.name}>
                    <Link
                      href={s.href}
                      title={`Navigate to ${s.name}`}
                      className="group flex items-center text-white/60 hover:text-white text-[14px] sm:text-[15px] md:text-[16px] transition-colors duration-300 w-fit"
                    >
                      <span className="w-0 overflow-hidden group-hover:w-4 group-hover:mr-2 transition-all duration-300 text-[#C89A47]">
                        <ArrowUpRight size={16} />
                      </span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">{s.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Construction - Right (Row 1 on mobile) */}
            <div className="w-full lg:w-auto lg:min-w-[140px]">
              <h4 className="font-sans text-[12px] uppercase tracking-[0.2em] font-semibold text-[#C89A47] mb-5 sm:mb-6">Construction</h4>
              <ul className="space-y-3">
                {construction.map((s) => (
                  <li key={s.name}>
                    <Link
                      href={s.href}
                      title={`Navigate to ${s.name}`}
                      className="group flex items-center text-white/60 hover:text-white text-[14px] sm:text-[15px] md:text-[16px] transition-colors duration-300 w-fit"
                    >
                      <span className="w-0 overflow-hidden group-hover:w-4 group-hover:mr-2 transition-all duration-300 text-[#C89A47]">
                        <ArrowUpRight size={16} />
                      </span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">{s.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links - Left (Row 2 on mobile) */}
            <div className="w-full lg:w-auto lg:min-w-[120px]">
              <h4 className="font-sans text-[12px] uppercase tracking-[0.2em] font-semibold text-[#C89A47] mb-5 sm:mb-6">Navigation</h4>
              <ul className="space-y-3">
                {quickLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      title={`Navigate to ${item.name}`}
                      className="group flex items-center text-white/60 hover:text-white text-[14px] sm:text-[15px] md:text-[16px] transition-colors duration-300 w-fit"
                    >
                      <span className="w-0 overflow-hidden group-hover:w-4 group-hover:mr-2 transition-all duration-300 text-[#C89A47]">
                        <ArrowUpRight size={16} />
                      </span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect - Right (Row 2 on mobile) */}
            <div className="w-full lg:w-auto lg:min-w-[190px]">
              <h4 className="font-sans text-[12px] uppercase tracking-[0.2em] font-semibold text-[#C89A47] mb-5 sm:mb-6">Connect</h4>
              <div className="space-y-3.5 sm:space-y-4">
                <a href="tel:+919488021183" title="Call SMS Construction" className="block text-[14px] sm:text-[16px] md:text-[18px] text-white/90 hover:text-[#C89A47] transition-colors font-medium">
                  +91 94880 21183
                </a>
                <a href="mailto:smsconstructionngl@gmail.com" title="Email SMS Construction" className="block text-[12.5px] sm:text-[14px] md:text-[16px] text-white/60 hover:text-white transition-colors break-words">
                  smsconstructionngl@gmail.com
                </a>

                <div className="pt-2 sm:pt-4 flex gap-3 sm:gap-4">
                  {socialLinks.map((platform) => (
                    <Link
                      key={platform.name}
                      href={platform.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Visit our ${platform.name}`}
                      className="p-2 sm:p-2.5 rounded-full bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 group flex items-center justify-center shrink-0"
                      aria-label={platform.name}
                    >
                      {platform.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] md:text-[14px] text-white/40">
          <div className="text-center md:text-left">
            © {new Date().getFullYear()} SMS Construction. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
