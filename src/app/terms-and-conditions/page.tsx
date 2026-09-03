import Link from "next/link";

const sections = [
  { id: "acceptance-of-terms", number: "01", title: "Acceptance of Terms" },
  { id: "about-sms-construction", number: "02", title: "About SMS Construction" },
  { id: "website-use", number: "03", title: "Website Use" },
  { id: "project-information", number: "04", title: "Project Information" },
  { id: "enquiries-and-consultations", number: "05", title: "Enquiries and Consultations" },
  { id: "intellectual-property", number: "06", title: "Intellectual Property" },
  { id: "third-party-links", number: "07", title: "Third-Party Links" },
  { id: "accuracy-of-information", number: "08", title: "Accuracy of Information" },
  { id: "limitation-of-liability", number: "09", title: "Limitation of Liability" },
  { id: "changes-to-terms", number: "10", title: "Changes to These Terms" },
  { id: "governing-law", number: "11", title: "Governing Law" },
  { id: "contact-us", number: "12", title: "Contact Us" },
];

export default function TermsAndConditionsPage() {
  return (
    <main className="bg-[#F7F3ED] text-[#171614] min-h-screen pt-32 pb-24 md:pt-40 md:pb-32 selection:bg-[#B08A52] selection:text-white">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2.5 text-[13px] font-sans text-[#77736C]">
            <li>
              <Link
                href="/"
                className="hover:text-[#B08A52] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B08A52]"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-[#B08A52]/40">/</li>
            <li className="text-[#171614] font-medium" aria-current="page">
              Terms &amp; Conditions
            </li>
          </ol>
        </nav>

        {/* Header Block */}
        <header className="max-w-[850px] mb-12 md:mb-16">
          <p className="font-sans text-[11px] tracking-[0.28em] uppercase font-semibold text-[#B08A52] mb-4 flex items-center gap-2.5">
            <span className="inline-block w-6 h-px bg-[#B08A52]" aria-hidden="true" />
            LEGAL
          </p>

          <h1 className="font-serif text-[38px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold text-[#171614] tracking-tight leading-[1.08] mb-6">
            Terms &amp; Conditions
          </h1>

          <p className="font-sans text-[17px] md:text-[19px] leading-[1.7] text-[#77736C] font-normal mb-6 max-w-2xl">
            These Terms and Conditions govern your access to and use of the SMS Construction website, as well as any online enquiries submitted for our architectural and construction services.
          </p>

          <div className="inline-flex items-center gap-2 text-[13px] font-sans text-[#77736C] border border-[#E7E0D4] bg-[#FAF8F3] px-3.5 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B08A52]" aria-hidden="true" />
            <span>Last updated: September 3, 2026</span>
          </div>

          <hr className="border-[#E7E0D4] mt-10 md:mt-12" />
        </header>

        {/* Content Layout */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">
          {/* Main Editorial Article */}
          <article className="lg:col-span-8 max-w-[850px] space-y-12 md:space-y-16">
            {/* AEO Key Highlights Summary */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#FAF8F3] border border-[#E7E0D4] space-y-3">
              <p className="font-sans text-[11px] uppercase tracking-[0.24em] font-semibold text-[#B08A52]">
                Key Terms Summary &bull; Fast Facts
              </p>
              <ul className="space-y-2.5 text-[14px] sm:text-[15px] font-sans text-[#77736C] leading-relaxed list-none pl-0">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#B08A52] font-semibold shrink-0">&check;</span>
                  <span><strong className="text-[#171614] font-medium">Informational Purpose:</strong> Website materials, photos, and drawings showcase past projects and do not constitute a standard template contract.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#B08A52] font-semibold shrink-0">&check;</span>
                  <span><strong className="text-[#171614] font-medium">Formal Contracts:</strong> Enquiries and estimates are non-binding; architectural or construction agreements are formalized via written contracts.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#B08A52] font-semibold shrink-0">&check;</span>
                  <span><strong className="text-[#171614] font-medium">Intellectual Property:</strong> All project photography, blueprints, and branding are the exclusive property of SMS Construction.</span>
                </li>
              </ul>
            </div>

            {/* 01. Acceptance of Terms */}
            <section id="acceptance-of-terms" className="scroll-mt-32 pb-10 border-b border-[#E7E0D4]/70">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-sans text-[13px] font-bold text-[#B08A52] tracking-wider">01</span>
                <h2 className="font-serif text-[24px] sm:text-[28px] font-semibold text-[#171614] tracking-tight">
                  Acceptance of Terms
                </h2>
              </div>
              <p className="font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#171614]/85 font-light mb-4">
                By browsing, viewing, or interacting with the SMS Construction website, you agree to be bound by these Terms and Conditions and our accompanying{" "}
                <Link
                  href="/privacy-policy"
                  className="text-[#B08A52] underline underline-offset-4 decoration-[#B08A52]/40 hover:decoration-[#B08A52] transition-colors"
                >
                  Privacy Policy
                </Link>
                .
              </p>
              <p className="font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#171614]/85 font-light">
                If you do not agree with any part of these terms, you should refrain from using our website or submitting project enquiries through our digital forms.
              </p>
            </section>

            {/* 02. About SMS Construction */}
            <section id="about-sms-construction" className="scroll-mt-32 pb-10 border-b border-[#E7E0D4]/70">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-sans text-[13px] font-bold text-[#B08A52] tracking-wider">02</span>
                <h2 className="font-serif text-[24px] sm:text-[28px] font-semibold text-[#171614] tracking-tight">
                  About SMS Construction
                </h2>
              </div>
              <p className="font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#171614]/85 font-light mb-4">
                SMS Construction is an established architecture, interior design, and turnkey building practice based in Nagercoil, Kanyakumari District, Tamil Nadu. We specialize in bespoke residential developments, commercial projects, renovation works, and comprehensive interior fit-outs.
              </p>
              <p className="font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#171614]/85 font-light">
                Learn more about our methodology, philosophy, and background on our{" "}
                <Link
                  href="/about-us"
                  className="text-[#B08A52] underline underline-offset-4 decoration-[#B08A52]/40 hover:decoration-[#B08A52] transition-colors"
                >
                  About Us page
                </Link>
                .
              </p>
            </section>

            {/* 03. Website Use */}
            <section id="website-use" className="scroll-mt-32 pb-10 border-b border-[#E7E0D4]/70">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-sans text-[13px] font-bold text-[#B08A52] tracking-wider">03</span>
                <h2 className="font-serif text-[24px] sm:text-[28px] font-semibold text-[#171614] tracking-tight">
                  Website Use
                </h2>
              </div>
              <p className="font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#171614]/85 font-light mb-4">
                You agree to use this website solely for lawful purposes related to learning about our services, evaluating our design portfolio, and initiating legitimate project discussions. You agree not to:
              </p>
              <ul className="space-y-3 font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#171614]/85 font-light list-none pl-0">
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#B08A52] mt-3 shrink-0" aria-hidden="true" />
                  <span>Transmit any malicious software, automated scraping tools, or scripts that disrupt website performance or compromise infrastructure security.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#B08A52] mt-3 shrink-0" aria-hidden="true" />
                  <span>Submit false, deceptive, or spam enquiries through our online contact or estimate request forms.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#B08A52] mt-3 shrink-0" aria-hidden="true" />
                  <span>Attempt to reverse engineer, reproduce, or frame any portion of the website interface or design assets without prior written consent.</span>
                </li>
              </ul>
            </section>

            {/* 04. Project Information */}
            <section id="project-information" className="scroll-mt-32 pb-10 border-b border-[#E7E0D4]/70">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-sans text-[13px] font-bold text-[#B08A52] tracking-wider">04</span>
                <h2 className="font-serif text-[24px] sm:text-[28px] font-semibold text-[#171614] tracking-tight">
                  Project Information
                </h2>
              </div>
              <p className="font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#171614]/85 font-light mb-4">
                The architectural case studies, interior photographs, 3D renderings, floor plans, and material descriptions featured on our{" "}
                <Link
                  href="/projects"
                  className="text-[#B08A52] underline underline-offset-4 decoration-[#B08A52]/40 hover:decoration-[#B08A52] transition-colors"
                >
                  Projects gallery
                </Link>{" "}
                are presented to illustrate our past work and craftsmanship.
              </p>
              <p className="font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#171614]/85 font-light">
                Each building project is customized to individual site topography, client specifications, municipal building approvals, and structural requirements. Visual representations on the website do not constitute a standard template or an identical guarantee for future commissions.
              </p>
            </section>

            {/* 05. Enquiries and Consultations */}
            <section id="enquiries-and-consultations" className="scroll-mt-32 pb-10 border-b border-[#E7E0D4]/70">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-sans text-[13px] font-bold text-[#B08A52] tracking-wider">05</span>
                <h2 className="font-serif text-[24px] sm:text-[28px] font-semibold text-[#171614] tracking-tight">
                  Enquiries and Consultations
                </h2>
              </div>
              <p className="font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#171614]/85 font-light mb-4">
                Submitting an enquiry via our{" "}
                <Link
                  href="/contact"
                  className="text-[#B08A52] underline underline-offset-4 decoration-[#B08A52]/40 hover:decoration-[#B08A52] transition-colors"
                >
                  Contact form
                </Link>{" "}
                or contacting us through telephone, WhatsApp, or email does not automatically create a binding construction contract or service agreement.
              </p>
              <p className="font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#171614]/85 font-light">
                Formal architectural, engineering, or interior design contracts are established only when both parties formally execute a separate, mutually agreed-upon written work contract detailing project milestones, cost breakdowns, payment schedules, and structural specifications.
              </p>
            </section>

            {/* 06. Intellectual Property */}
            <section id="intellectual-property" className="scroll-mt-32 pb-10 border-b border-[#E7E0D4]/70">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-sans text-[13px] font-bold text-[#B08A52] tracking-wider">06</span>
                <h2 className="font-serif text-[24px] sm:text-[28px] font-semibold text-[#171614] tracking-tight">
                  Intellectual Property
                </h2>
              </div>
              <p className="font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#171614]/85 font-light mb-4">
                All content appearing on this website—including but not limited to the SMS Construction name, logo, architectural photography, interior renderings, design layouts, copywriting, and visual assets—is the exclusive intellectual property of SMS Construction or used under appropriate client/licensor consent.
              </p>
              <p className="font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#171614]/85 font-light">
                No material from this website may be copied, reproduced, republished, uploaded, posted, or distributed in any commercial form without our explicit prior written authorization.
              </p>
            </section>

            {/* 07. Third-Party Links */}
            <section id="third-party-links" className="scroll-mt-32 pb-10 border-b border-[#E7E0D4]/70">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-sans text-[13px] font-bold text-[#B08A52] tracking-wider">07</span>
                <h2 className="font-serif text-[24px] sm:text-[28px] font-semibold text-[#171614] tracking-tight">
                  Third-Party Links
                </h2>
              </div>
              <p className="font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#171614]/85 font-light mb-4">
                Our website includes outbound links to external services, including Google Maps, Instagram, LinkedIn, and WhatsApp. These external platforms are governed by their own independent terms of service and privacy policies.
              </p>
              <p className="font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#171614]/85 font-light">
                SMS Construction exercises no control over, and assumes no liability for, the content, availability, security, or business practices of third-party platforms.
              </p>
            </section>

            {/* 08. Accuracy of Information */}
            <section id="accuracy-of-information" className="scroll-mt-32 pb-10 border-b border-[#E7E0D4]/70">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-sans text-[13px] font-bold text-[#B08A52] tracking-wider">08</span>
                <h2 className="font-serif text-[24px] sm:text-[28px] font-semibold text-[#171614] tracking-tight">
                  Accuracy of Information
                </h2>
              </div>
              <p className="font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#171614]/85 font-light mb-4">
                We make every reasonable effort to keep the information on this website accurate, current, and clear. However, architectural methodologies, material market rates, structural codes, and statutory approval procedures evolve over time.
              </p>
              <p className="font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#171614]/85 font-light">
                Website materials are provided for general informational purposes. Prospective clients are advised to verify exact project timelines, material specifications, and regulatory guidelines during personalized consultation sessions.
              </p>
            </section>

            {/* 09. Limitation of Liability */}
            <section id="limitation-of-liability" className="scroll-mt-32 pb-10 border-b border-[#E7E0D4]/70">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-sans text-[13px] font-bold text-[#B08A52] tracking-wider">09</span>
                <h2 className="font-serif text-[24px] sm:text-[28px] font-semibold text-[#171614] tracking-tight">
                  Limitation of Liability
                </h2>
              </div>
              <p className="font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#171614]/85 font-light mb-4">
                To the fullest extent permitted by applicable law, SMS Construction, its proprietors, architects, engineers, and affiliates shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your access to, use of, or inability to use this website.
              </p>
              <p className="font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#171614]/85 font-light">
                We do not warrant that the website will function completely uninterrupted, error-free, or devoid of viruses or harmful components, although rigorous hosting protocols are maintained.
              </p>
            </section>

            {/* 10. Changes to These Terms */}
            <section id="changes-to-terms" className="scroll-mt-32 pb-10 border-b border-[#E7E0D4]/70">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-sans text-[13px] font-bold text-[#B08A52] tracking-wider">10</span>
                <h2 className="font-serif text-[24px] sm:text-[28px] font-semibold text-[#171614] tracking-tight">
                  Changes to These Terms
                </h2>
              </div>
              <p className="font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#171614]/85 font-light mb-4">
                SMS Construction reserves the right to modify or replace these Terms and Conditions at any time at our discretion. Any revisions will take effect immediately upon posting to this website, with an updated effective date indicated at the top.
              </p>
              <p className="font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#171614]/85 font-light">
                Your continued use of our website following the publication of any modifications constitutes full acceptance of the revised terms.
              </p>
            </section>

            {/* 11. Governing Law */}
            <section id="governing-law" className="scroll-mt-32 pb-10 border-b border-[#E7E0D4]/70">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-sans text-[13px] font-bold text-[#B08A52] tracking-wider">11</span>
                <h2 className="font-serif text-[24px] sm:text-[28px] font-semibold text-[#171614] tracking-tight">
                  Governing Law
                </h2>
              </div>
              <p className="font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#171614]/85 font-light mb-4">
                These Terms and Conditions shall be governed by, construed, and interpreted in accordance with the laws of the Republic of India.
              </p>
              <p className="font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#171614]/85 font-light">
                Any legal disputes, controversies, or claims arising from or related to the use of this website or online enquiries shall be subject to the exclusive jurisdiction of the competent courts in Tamil Nadu, India.
              </p>
            </section>

            {/* 12. Contact Us */}
            <section id="contact-us" className="scroll-mt-32 pt-2">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-sans text-[13px] font-bold text-[#B08A52] tracking-wider">12</span>
                <h2 className="font-serif text-[24px] sm:text-[28px] font-semibold text-[#171614] tracking-tight">
                  Contact Us
                </h2>
              </div>
              <p className="font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#171614]/85 font-light mb-6">
                If you have any questions or require clarification regarding these Terms and Conditions, please get in touch with us:
              </p>

              <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF8F3] border border-[#E7E0D4] space-y-4">
                <h3 className="font-serif text-[20px] font-bold text-[#171614]">
                  SMS Construction
                </h3>

                <address className="not-italic font-sans text-[15px] sm:text-[16px] leading-relaxed text-[#77736C]">
                  25/1 Muthamil Street,<br />
                  Near Court Road,<br />
                  Nagercoil, Tamil Nadu 629001, India
                </address>

                <div className="pt-2 flex flex-col sm:flex-row gap-4 sm:gap-8 font-sans text-[15px] text-[#171614]">
                  <div>
                    <span className="text-[#77736C] block text-[12px] uppercase tracking-wider mb-0.5">Phone</span>
                    <a
                      href="tel:+919488021183"
                      className="text-[#171614] font-medium hover:text-[#B08A52] transition-colors"
                    >
                      +91 94880 21183
                    </a>
                  </div>
                  <div>
                    <span className="text-[#77736C] block text-[12px] uppercase tracking-wider mb-0.5">Email</span>
                    <a
                      href="mailto:smsconstructionngl@gmail.com"
                      className="text-[#171614] font-medium hover:text-[#B08A52] transition-colors"
                    >
                      smsconstructionngl@gmail.com
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E7E0D4] flex flex-wrap gap-4 text-[13px] font-sans">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-[#B08A52] font-semibold hover:underline"
                  >
                    <span>Visit Contact Page</span>
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                  <span className="text-[#E7E0D4]">|</span>
                  <Link
                    href="/privacy-policy"
                    className="inline-flex items-center gap-1.5 text-[#77736C] hover:text-[#171614] transition-colors"
                  >
                    <span>Read Privacy Policy</span>
                  </Link>
                </div>
              </div>
            </section>
          </article>

          {/* Sticky On This Page Sidebar (Desktop Only) */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-36">
            <div className="p-6 rounded-2xl bg-[#FAF8F3] border border-[#E7E0D4] shadow-xs">
              <p className="font-sans text-[11px] uppercase tracking-[0.24em] font-semibold text-[#B08A52] mb-4">
                On This Page
              </p>
              <nav aria-label="Table of contents">
                <ul className="space-y-2 text-[13px] font-sans text-[#77736C]">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="group flex items-baseline gap-2 hover:text-[#B08A52] transition-colors py-0.5"
                      >
                        <span className="text-[11px] font-medium text-[#B08A52]/70 group-hover:text-[#B08A52]">
                          {section.number}
                        </span>
                        <span className="leading-snug">{section.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-6 pt-5 border-t border-[#E7E0D4]">
                <p className="text-[12px] font-sans text-[#77736C] mb-3">
                  Need to discuss custom project terms or drawings?
                </p>
                <Link
                  href="/contact"
                  className="inline-block text-[12px] font-sans uppercase tracking-[0.15em] font-semibold text-[#B08A52] hover:text-[#80633D] transition-colors"
                >
                  Book a Consultation &rarr;
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
