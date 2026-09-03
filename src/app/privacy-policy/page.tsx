import Link from "next/link";

const sections = [
  { id: "introduction", number: "01", title: "Introduction" },
  { id: "information-we-collect", number: "02", title: "Information We Collect" },
  { id: "how-we-use-information", number: "03", title: "How We Use Your Information" },
  { id: "contact-forms-enquiries", number: "04", title: "Contact Forms and Enquiries" },
  { id: "cookies-analytics", number: "05", title: "Cookies and Analytics" },
  { id: "third-party-services", number: "06", title: "Third-Party Services" },
  { id: "data-retention", number: "07", title: "Data Retention" },
  { id: "data-security", number: "08", title: "Data Security" },
  { id: "your-rights", number: "09", title: "Your Rights" },
  { id: "childrens-privacy", number: "10", title: "Children’s Privacy" },
  { id: "changes-to-policy", number: "11", title: "Changes to This Privacy Policy" },
  { id: "contact-us", number: "12", title: "Contact Us" },
];

export default function PrivacyPolicyPage() {
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
              Privacy Policy
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
            Privacy Policy
          </h1>

          <p className="font-sans text-[17px] md:text-[19px] leading-[1.7] text-[#77736C] font-normal mb-6 max-w-2xl">
            This Privacy Policy outlines how SMS Construction collects, uses, and safeguards personal information when you explore our portfolio or submit project enquiries.
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
                Key Policy Summary &bull; Fast Facts
              </p>
              <ul className="space-y-2.5 text-[14px] sm:text-[15px] font-sans text-[#77736C] leading-relaxed list-none pl-0">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#B08A52] font-semibold shrink-0">&check;</span>
                  <span><strong className="text-[#171614] font-medium">No Third-Party Selling:</strong> We never sell, lease, or monetize your contact records or property information.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#B08A52] font-semibold shrink-0">&check;</span>
                  <span><strong className="text-[#171614] font-medium">Purpose-Bound Use:</strong> Data is strictly utilized to prepare structural quotes, interior drawings, and facilitate project discussions.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#B08A52] font-semibold shrink-0">&check;</span>
                  <span><strong className="text-[#171614] font-medium">Local Jurisdiction:</strong> Operations and data security are managed directly from our studio in Nagercoil, Tamil Nadu.</span>
                </li>
              </ul>
            </div>

            {/* 01. Introduction */}
            <section id="introduction" className="scroll-mt-32 pb-10 border-b border-[#E7E0D4]/70">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-sans text-[13px] font-bold text-[#B08A52] tracking-wider">01</span>
                <h2 className="font-serif text-[24px] sm:text-[28px] font-semibold text-[#171614] tracking-tight">
                  Introduction
                </h2>
              </div>
              <p className="font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#171614]/85 font-light mb-4">
                Welcome to SMS Construction (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). We are an established architecture, interior design, and turnkey building studio based in Nagercoil, Tamil Nadu. We deeply value your trust and are committed to protecting your personal privacy when you interact with our website or submit details regarding prospective architectural or construction commissions.
              </p>
              <p className="font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#171614]/85 font-light">
                By visiting our website or communicating with our team, you acknowledge the terms described in this Privacy Policy. If you have questions about how your information is handled, please reach out directly through our{" "}
                <Link
                  href="/contact"
                  className="text-[#B08A52] underline underline-offset-4 decoration-[#B08A52]/40 hover:decoration-[#B08A52] transition-colors"
                >
                  Contact page
                </Link>
                .
              </p>
            </section>

            {/* 02. Information We Collect */}
            <section id="information-we-collect" className="scroll-mt-32 pb-10 border-b border-[#E7E0D4]/70">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-sans text-[13px] font-bold text-[#B08A52] tracking-wider">02</span>
                <h2 className="font-serif text-[24px] sm:text-[28px] font-semibold text-[#171614] tracking-tight">
                  Information We Collect
                </h2>
              </div>
              <p className="font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#171614]/85 font-light mb-4">
                Depending on how you use our site, we may collect the following categories of information:
              </p>
              <ul className="space-y-3 font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#171614]/85 font-light list-none pl-0">
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#B08A52] mt-3 shrink-0" aria-hidden="true" />
                  <div>
                    <strong className="font-medium text-[#171614]">Contact &amp; Enquiry Details:</strong> Your full name, telephone or WhatsApp number, email address, property/plot location, estimated budget range, and any architectural specifications or notes you include in our enquiry forms.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#B08A52] mt-3 shrink-0" aria-hidden="true" />
                  <div>
                    <strong className="font-medium text-[#171614]">Communications:</strong> Records of your messages, phone discussions, WhatsApp exchanges, or email correspondence when requesting consultations, estimates, or site inspections.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#B08A52] mt-3 shrink-0" aria-hidden="true" />
                  <div>
                    <strong className="font-medium text-[#171614]">Technical &amp; Usage Data:</strong> Standard server logs, approximate geographic location (city level), browser type, operating system, and referral pathways collected anonymously during site browsing.
                  </div>
                </li>
              </ul>
            </section>

            {/* 03. How We Use Your Information */}
            <section id="how-we-use-information" className="scroll-mt-32 pb-10 border-b border-[#E7E0D4]/70">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-sans text-[13px] font-bold text-[#B08A52] tracking-wider">03</span>
                <h2 className="font-serif text-[24px] sm:text-[28px] font-semibold text-[#171614] tracking-tight">
                  How We Use Your Information
                </h2>
              </div>
              <p className="font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#171614]/85 font-light mb-4">
                We use collected information strictly to facilitate our construction and interior design services:
              </p>
              <ul className="space-y-3 font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#171614]/85 font-light list-none pl-0">
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#B08A52] mt-3 shrink-0" aria-hidden="true" />
                  <span>To respond promptly to project enquiries, schedule site assessments, and arrange design consultations.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#B08A52] mt-3 shrink-0" aria-hidden="true" />
                  <span>To prepare architectural proposals, material specifications, and structural cost estimates.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#B08A52] mt-3 shrink-0" aria-hidden="true" />
                  <span>To maintain customer service records throughout the lifecycle of commissioned building and interior projects.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#B08A52] mt-3 shrink-0" aria-hidden="true" />
                  <span>To optimize website responsiveness, readability, and performance across mobile and desktop devices.</span>
                </li>
              </ul>
              <p className="font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#171614]/85 font-light mt-4">
                We do not sell, rent, or trade your personal information to third-party marketing companies under any circumstances.
              </p>
            </section>

            {/* 04. Contact Forms and Enquiries */}
            <section id="contact-forms-enquiries" className="scroll-mt-32 pb-10 border-b border-[#E7E0D4]/70">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-sans text-[13px] font-bold text-[#B08A52] tracking-wider">04</span>
                <h2 className="font-serif text-[24px] sm:text-[28px] font-semibold text-[#171614] tracking-tight">
                  Contact Forms and Enquiries
                </h2>
              </div>
              <p className="font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#171614]/85 font-light mb-4">
                When submitting a form on our{" "}
                <Link
                  href="/contact"
                  className="text-[#B08A52] underline underline-offset-4 decoration-[#B08A52]/40 hover:decoration-[#B08A52] transition-colors"
                >
                  Contact Page
                </Link>
                , your information is routed directly to our project coordination team. By sending an enquiry, you consent to being contacted via phone, email, or messaging applications (such as WhatsApp) exclusively regarding your requested project or consultation.
              </p>
              <p className="font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#171614]/85 font-light">
                If you ever wish to cease communication or withdraw an active enquiry, simply notify us by email at{" "}
                <a
                  href="mailto:smsconstructionngl@gmail.com"
                  className="text-[#B08A52] underline underline-offset-4 decoration-[#B08A52]/40 hover:decoration-[#B08A52] transition-colors"
                >
                  smsconstructionngl@gmail.com
                </a>
                .
              </p>
            </section>

            {/* 05. Cookies and Analytics */}
            <section id="cookies-analytics" className="scroll-mt-32 pb-10 border-b border-[#E7E0D4]/70">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-sans text-[13px] font-bold text-[#B08A52] tracking-wider">05</span>
                <h2 className="font-serif text-[24px] sm:text-[28px] font-semibold text-[#171614] tracking-tight">
                  Cookies and Analytics
                </h2>
              </div>
              <p className="font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#171614]/85 font-light mb-4">
                Our website utilizes minimal, standard browser cookies and local browser storage essential for core functionality, such as preserving page preferences and smooth navigation transitions.
              </p>
              <p className="font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#171614]/85 font-light mb-4">
                We may evaluate aggregated, non-personally identifiable site statistics (such as page visit volumes and popular project case studies) to enhance user experience. You can choose to disable or block cookies through your individual browser settings at any time without restricting access to our core website content.
              </p>
            </section>

            {/* 06. Third-Party Services */}
            <section id="third-party-services" className="scroll-mt-32 pb-10 border-b border-[#E7E0D4]/70">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-sans text-[13px] font-bold text-[#B08A52] tracking-wider">06</span>
                <h2 className="font-serif text-[24px] sm:text-[28px] font-semibold text-[#171614] tracking-tight">
                  Third-Party Services
                </h2>
              </div>
              <p className="font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#171614]/85 font-light mb-4">
                Our website may incorporate reputable third-party integrations to deliver essential services:
              </p>
              <ul className="space-y-3 font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#171614]/85 font-light list-none pl-0">
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#B08A52] mt-3 shrink-0" aria-hidden="true" />
                  <div>
                    <strong className="font-medium text-[#171614]">Map &amp; Routing Services:</strong> Links to Google Maps to help you locate our Head Office on Muthamil Street in Nagercoil.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#B08A52] mt-3 shrink-0" aria-hidden="true" />
                  <div>
                    <strong className="font-medium text-[#171614]">Communication Channels:</strong> Direct messaging links to WhatsApp, telephone dialing, and email service clients.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#B08A52] mt-3 shrink-0" aria-hidden="true" />
                  <div>
                    <strong className="font-medium text-[#171614]">Social Platforms:</strong> Links to our verified profiles on Instagram and LinkedIn where we showcase ongoing works.
                  </div>
                </li>
              </ul>
              <p className="font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#171614]/85 font-light mt-4">
                These external providers operate under their respective privacy policies, which we encourage you to review when navigating away from our domain.
              </p>
            </section>

            {/* 07. Data Retention */}
            <section id="data-retention" className="scroll-mt-32 pb-10 border-b border-[#E7E0D4]/70">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-sans text-[13px] font-bold text-[#B08A52] tracking-wider">07</span>
                <h2 className="font-serif text-[24px] sm:text-[28px] font-semibold text-[#171614] tracking-tight">
                  Data Retention
                </h2>
              </div>
              <p className="font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#171614]/85 font-light">
                We retain enquiry records only for the period necessary to fulfil the business purposes described in this policy, including contract negotiation, structural warranty administration, regulatory building compliance, and legal verification. Once records are no longer required, they are securely purged or anonymized.
              </p>
            </section>

            {/* 08. Data Security */}
            <section id="data-security" className="scroll-mt-32 pb-10 border-b border-[#E7E0D4]/70">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-sans text-[13px] font-bold text-[#B08A52] tracking-wider">08</span>
                <h2 className="font-serif text-[24px] sm:text-[28px] font-semibold text-[#171614] tracking-tight">
                  Data Security
                </h2>
              </div>
              <p className="font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#171614]/85 font-light mb-4">
                We implement industry-standard organizational and technical safeguards to prevent unauthorized access, disclosure, alteration, or destruction of personal data. All communication between your web browser and our servers is encrypted using Secure Sockets Layer (SSL / TLS) protocols.
              </p>
              <p className="font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#171614]/85 font-light">
                While we exercise rigorous care to safeguard your records, no transmission over the public internet can be guaranteed 100% secure. We advise clients to exercise prudence when transmitting sensitive proprietary plans or personal documentation.
              </p>
            </section>

            {/* 09. Your Rights */}
            <section id="your-rights" className="scroll-mt-32 pb-10 border-b border-[#E7E0D4]/70">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-sans text-[13px] font-bold text-[#B08A52] tracking-wider">09</span>
                <h2 className="font-serif text-[24px] sm:text-[28px] font-semibold text-[#171614] tracking-tight">
                  Your Rights
                </h2>
              </div>
              <p className="font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#171614]/85 font-light mb-4">
                Under applicable Indian privacy and digital data protection laws, you possess specific rights regarding your personal records held by SMS Construction:
              </p>
              <ul className="space-y-3 font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#171614]/85 font-light list-none pl-0">
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#B08A52] mt-3 shrink-0" aria-hidden="true" />
                  <div>
                    <strong className="font-medium text-[#171614]">Access &amp; Review:</strong> The right to request confirmation of the personal information we maintain regarding your enquiries.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#B08A52] mt-3 shrink-0" aria-hidden="true" />
                  <div>
                    <strong className="font-medium text-[#171614]">Correction:</strong> The right to request updates or corrections to outdated or incomplete contact records.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#B08A52] mt-3 shrink-0" aria-hidden="true" />
                  <div>
                    <strong className="font-medium text-[#171614]">Deletion:</strong> The right to request the deletion of your personal records, subject to statutory building records or legal compliance exemptions.
                  </div>
                </li>
              </ul>
              <p className="font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#171614]/85 font-light mt-4">
                To exercise any of these privileges, please send a written request to{" "}
                <a
                  href="mailto:smsconstructionngl@gmail.com"
                  className="text-[#B08A52] underline underline-offset-4 decoration-[#B08A52]/40 hover:decoration-[#B08A52] transition-colors"
                >
                  smsconstructionngl@gmail.com
                </a>
                .
              </p>
            </section>

            {/* 10. Children’s Privacy */}
            <section id="childrens-privacy" className="scroll-mt-32 pb-10 border-b border-[#E7E0D4]/70">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-sans text-[13px] font-bold text-[#B08A52] tracking-wider">10</span>
                <h2 className="font-serif text-[24px] sm:text-[28px] font-semibold text-[#171614] tracking-tight">
                  Children’s Privacy
                </h2>
              </div>
              <p className="font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#171614]/85 font-light">
                Our services and website are tailored strictly for adult property owners, commercial enterprises, and clients aged 18 and older. We do not knowingly solicit or collect personal information from individuals under the age of 18. If you believe a minor has provided us with personal records without guardian consent, please contact us immediately for prompt deletion.
              </p>
            </section>

            {/* 11. Changes to This Privacy Policy */}
            <section id="changes-to-policy" className="scroll-mt-32 pb-10 border-b border-[#E7E0D4]/70">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-sans text-[13px] font-bold text-[#B08A52] tracking-wider">11</span>
                <h2 className="font-serif text-[24px] sm:text-[28px] font-semibold text-[#171614] tracking-tight">
                  Changes to This Privacy Policy
                </h2>
              </div>
              <p className="font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#171614]/85 font-light mb-4">
                We may periodically update this Privacy Policy to reflect modifications in our operational practices, new service offerings, or legal regulations. When amendments occur, the revised effective date at the top of this document will be revised accordingly.
              </p>
              <p className="font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#171614]/85 font-light">
                Continued use of our website following any updates constitutes acceptance of the amended terms. We recommend reviewing this page periodically.
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
                If you have inquiries, clarifications, or requests regarding this Privacy Policy or how your information is maintained, please reach out to our administration team:
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
                    href="/terms-and-conditions"
                    className="inline-flex items-center gap-1.5 text-[#77736C] hover:text-[#171614] transition-colors"
                  >
                    <span>Read Terms &amp; Conditions</span>
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
                  Have specific legal or architectural questions?
                </p>
                <Link
                  href="/contact"
                  className="inline-block text-[12px] font-sans uppercase tracking-[0.15em] font-semibold text-[#B08A52] hover:text-[#80633D] transition-colors"
                >
                  Contact Our Studio &rarr;
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
