"use client";

export default function Footer() {
  const services = ["Home Interiors", "Turnkey Interiors", "Residential Construction", "Commercial Construction", "Renovation"];
  const company = ["About Us", "Projects", "Studio", "Journal", "Contact"];

  return (
    <footer className="bg-[#1F1F1F] text-white">
      <div className="px-6 md:px-16 py-16 md:py-24 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-[28px] md:text-[36px] text-white tracking-tight mb-4">
              SMS Construction
            </h3>
            <p className="text-[#8A8A8A] text-[14px] leading-relaxed max-w-sm">
              Premier Interior Design &amp; Construction Company in Nagercoil, Kanyakumari District.
              Blending architectural rigor with organic warmth since 2009.
            </p>
          </div>

          {/* Services */}
          <div>
            <div className="text-label-caps text-[#e3c381] mb-6">Services</div>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a href="#" className="text-[#8A8A8A] text-[13px] hover:text-white transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-label-caps text-[#e3c381] mb-6">Company</div>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c}>
                  <a href="#" className="text-[#8A8A8A] text-[13px] hover:text-white transition-colors">
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-label-caps text-[#8A8A8A]">
            © 2026 SMS Construction. All rights reserved.
          </div>
          <div className="flex gap-6">
            {["Instagram", "LinkedIn", "Privacy", "Terms"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-[#8A8A8A] text-[12px] hover:text-[#e3c381] transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
