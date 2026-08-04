"use client";

import Link from "next/link";

export default function Footer() {
  const services = [
    { name: "Luxury Home Interiors", href: "/interior-design" },
    { name: "Turnkey Interiors", href: "/interior-design" },
    { name: "Residential Construction", href: "/construction" },
    { name: "Commercial Construction", href: "/construction" },
    { name: "Architectural Renovation", href: "/construction" },
  ];

  const quickLinks = [
    { name: "About SMS", href: "/about-us" },
    { name: "Featured Projects", href: "/projects" },
    { name: "Design Journal", href: "/journal" },
    { name: "Contact Studio", href: "/contact" },
  ];

  return (
    <footer className="bg-[#1D1C19] text-white pt-16 md:pt-20 pb-24 md:pb-12 border-t border-[#E7E0D4]/10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 md:pb-16 border-b border-white/10">
          {/* Brand & Location (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-[12px] bg-[#B08A52] flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-[22px] font-light">
                  architecture
                </span>
              </div>
              <h3 className="font-serif text-[24px] md:text-[26px] font-bold text-white tracking-tight">
                SMS Construction
              </h3>
            </div>
            <p className="text-[#68645D] text-[15px] md:text-[16px] leading-relaxed max-w-md">
              Premier Interior Design &amp; Architectural Construction Studio based in Nagercoil, Tamil Nadu.
              Crafting bespoke luxury homes, turnkey interiors, and architectural landmarks across Kanyakumari District.
            </p>
            <div className="flex items-center gap-2 text-[#B08A52] text-[14px] md:text-[15px] pt-1">
              <span className="material-symbols-outlined text-[18px]">location_on</span>
              <span>Nagercoil, Kanyakumari District, Tamil Nadu</span>
            </div>
          </div>

          {/* Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-section-label text-[#B08A52]">Our Services</div>
            <ul className="space-y-1">
              {services.map((s) => (
                <li key={s.name}>
                  <Link
                    href={s.href}
                    className="min-h-[44px] text-[#68645D] hover:text-white text-[15px] transition-colors duration-300 flex items-center gap-2 group touch-target"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B08A52] opacity-60 group-hover:opacity-100 transition-opacity" />
                    <span>{s.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-section-label text-[#B08A52]">Navigation</div>
            <ul className="space-y-1">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="min-h-[44px] text-[#68645D] hover:text-white text-[15px] transition-colors duration-300 flex items-center gap-2 group touch-target"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B08A52] opacity-60 group-hover:opacity-100 transition-opacity" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-section-label text-[#B08A52]">Connect</div>
            <div className="space-y-3 text-[15px] text-[#68645D]">
              <p>
                <a href="tel:+919488021183" className="hover:text-[#B08A52] transition-colors inline-flex items-center min-h-[44px] touch-target">
                  +91 94880 21183
                </a>
              </p>
              <p>
                <a href="mailto:smsconstructionngl@gmail.com" className="hover:text-[#B08A52] transition-colors inline-flex items-center min-h-[44px] touch-target">
                  smsconstructionngl@gmail.com
                </a>
              </p>
              <div className="pt-1 flex gap-4 text-[#B08A52]">
                {["Instagram", "WhatsApp", "LinkedIn"].map((platform) => (
                  <a key={platform} href="#" className="hover:text-white text-[14px] min-h-[44px] inline-flex items-center touch-target">
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[14px] text-[#68645D] text-center md:text-left">
          <div>
            © {new Date().getFullYear()} SMS Construction. All rights reserved. Architectural Interior &amp; Construction Studio, Nagercoil.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors min-h-[44px] inline-flex items-center touch-target">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors min-h-[44px] inline-flex items-center touch-target">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
