"use client";

import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ui/ProjectCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import Accordion from "@/components/ui/Accordion";
import { Input, Textarea } from "@/components/ui/Input";
import FloatingCTA from "@/components/ui/FloatingCTA";

export default function DesignSystemPage() {
  const colors = [
    { name: "Primary Background", hex: "#FAF8F3", text: "#171714", border: true },
    { name: "Secondary Background", hex: "#F2EDE3", text: "#171714" },
    { name: "White Surface", hex: "#FFFFFF", text: "#171714", border: true },
    { name: "Primary Text", hex: "#171714", text: "#FFFFFF" },
    { name: "Secondary Text", hex: "#68645D", text: "#FFFFFF" },
    { name: "Luxury Bronze Accent", hex: "#B08A52", text: "#FFFFFF" },
    { name: "Dark Bronze", hex: "#80633D", text: "#FFFFFF" },
    { name: "Dark Contrast", hex: "#1D1C19", text: "#FFFFFF" },
    { name: "Border", hex: "#E7E0D4", text: "#171714" },
    { name: "Divider", hex: "#EFEAE2", text: "#171714" },
    { name: "Success", hex: "#2F7D4E", text: "#FFFFFF" },
    { name: "Warning", hex: "#D9982B", text: "#FFFFFF" },
    { name: "Error", hex: "#C44536", text: "#FFFFFF" },
  ];

  const breakpoints = [
    { name: "Mobile", range: "320px – 767px", layout: "Single-column, full width, 16px container padding, sticky CTAs" },
    { name: "Tablet", range: "768px – 1023px", layout: "2-column balanced layouts, 32px padding, hamburger nav" },
    { name: "Laptop", range: "1024px – 1439px", layout: "Multi-column editorial grid, 48px padding, horizontal nav" },
    { name: "Desktop", range: "1440px and above", layout: "Max width 1280px container, large white space, 12-column grid" },
  ];

  const faqItems = [
    {
      question: "What defines the Warm Architectural Luxury style?",
      answer:
        "Warm Architectural Luxury blends clean structural geometry, natural stone, rich teak wood, and subtle warm bronze tones to create serene, high-end residential and commercial spaces in Tamil Nadu.",
    },
    {
      question: "How does SMS Construction handle Turnkey Interior & Construction projects in Nagercoil?",
      answer:
        "We manage the entire lifecycle from preliminary architectural drafting, structural engineering, 3D interior visualization, to local municipal approvals and site delivery.",
    },
    {
      question: "What materials and craftsmanship standards are maintained?",
      answer:
        "We specify genuine Italian marble, seasoned teakwood joinery, stainless steel fittings, low-VOC paints, and structural concrete tested for long-term durability in coastal climate conditions.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F3] text-[#171714] font-sans">

      {/* Header Banner */}
      <header className="pt-36 md:pt-40 pb-16 md:pb-20 bg-[#F2EDE3] border-b border-[#E7E0D4]">
        <div className="container-custom">
          <div className="text-section-label mb-3">GLOBAL BRAND &amp; RESPONSIVE SPECIFICATION</div>
          <h1 className="text-page-title mb-6">Warm Architectural Luxury Design System</h1>
          <p className="text-body max-w-[760px] text-[#68645D]">
            Official design language, responsive typography clamps, color tokens, 44px+ touch targets, mobile quick actions, and component standards for SMS Construction, Nagercoil.
          </p>
        </div>
      </header>

      {/* 1. Responsive Breakpoints & Rules Section */}
      <section className="section-padding container-custom border-b border-[#E7E0D4]">
        <SectionHeader
          label="RESPONSIVE ARCHITECTURE"
          title="Viewport Breakpoints &amp; Layout Behavior"
          description="Ensuring optimal readability, speed, touch target sizes, and editorial spacing from 320px mobile up to 1440px+ desktop."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {breakpoints.map((b) => (
            <Card key={b.name} className="flex flex-col justify-between">
              <div>
                <div className="text-section-label text-[#B08A52] mb-1">{b.name}</div>
                <h3 className="font-serif text-[24px] font-bold text-[#171714] mb-3">{b.range}</h3>
                <p className="text-small text-[#68645D]">{b.layout}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* 2. Color Palette Section */}
      <section className="section-padding container-custom border-b border-[#E7E0D4]">
        <SectionHeader
          label="COLOR SYSTEM"
          title="Curated Architectural Palette"
          description="Warm neutral backgrounds combined with luxury bronze accents, dark charcoal contrast, and soft subtle borders."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {colors.map((c) => (
            <div
              key={c.name}
              className={`p-6 rounded-[24px] shadow-sm flex flex-col justify-between h-36 ${
                c.border ? "border border-[#E7E0D4]" : ""
              }`}
              style={{ backgroundColor: c.hex, color: c.text }}
            >
              <span className="font-serif text-[18px] font-bold">{c.name}</span>
              <span className="font-mono text-[14px] uppercase tracking-wider opacity-90">{c.hex}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Typography Scale Section */}
      <section className="section-padding container-custom border-b border-[#E7E0D4]">
        <SectionHeader
          label="TYPOGRAPHY SYSTEM"
          title="Editorial Serif &amp; Modern Sans Fluid Clamps"
          description="Playfair Display for large editorial serif titles and Inter for clear, accessible body typography across Mobile, Tablet, and Desktop."
        />
        <div className="space-y-8 bg-white p-6 md:p-12 rounded-[24px] border border-[#E7E0D4]">
          <div className="pb-6 border-b border-[#EFEAE2]">
            <div className="text-section-label mb-2">Display Hero (Mobile: 34-42px | Tablet: 48-60px | Desktop: 72-96px)</div>
            <div className="text-display-hero">Architectural Excellence</div>
          </div>
          <div className="pb-6 border-b border-[#EFEAE2]">
            <div className="text-section-label mb-2">Page Title (Mobile: 32-38px | Tablet: 40-48px | Desktop: 48-60px)</div>
            <div className="text-page-title">Turnkey Interior Design &amp; Build</div>
          </div>
          <div className="pb-6 border-b border-[#EFEAE2]">
            <div className="text-section-label mb-2">Section Title (Mobile: 28-32px | Tablet: 32-36px | Desktop: 36-44px)</div>
            <div className="text-section-title">Crafting Timeless Luxury Residences</div>
          </div>
          <div className="pb-6 border-b border-[#EFEAE2]">
            <div className="text-section-label mb-2">Subheading (20px - 28px)</div>
            <div className="text-subheading">Seamless Integration of Form and Function</div>
          </div>
          <div className="pb-6 border-b border-[#EFEAE2]">
            <div className="text-section-label mb-2">Body Text (Mobile: 16px | Tablet: 17px | Desktop: 18px)</div>
            <div className="text-body max-w-[760px]">
              Every space we design in Nagercoil reflects a commitment to structural precision, natural light, and refined material selections. We blend modern aesthetic sensibilities with local climate engineering.
            </div>
          </div>
          <div>
            <div className="text-section-label mb-2">Small Text (14px - 15px)</div>
            <div className="text-small">
              © 2026 SMS Construction. Registered Architectural &amp; Turnkey Firm, Kanyakumari District.
            </div>
          </div>
        </div>
      </section>

      {/* 4. Button & Touch Target System Section */}
      <section className="section-padding container-custom border-b border-[#E7E0D4]">
        <SectionHeader
          label="BUTTON &amp; TOUCH TARGET SYSTEM"
          title="Min 48px – 56px Tap Targets &amp; Mobile Full Width"
          description="16px rounded buttons featuring bronze background, dark bronze hover, full width on mobile, and 44px+ touch target compliance."
        />
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-stretch sm:items-center bg-white p-6 md:p-12 rounded-[24px] border border-[#E7E0D4]">
          <Button variant="primary" icon="arrow_forward" fullWidthMobile>
            Primary Bronze CTA
          </Button>
          <Button variant="secondary" icon="phone" fullWidthMobile>
            Secondary Outline Button
          </Button>
          <Button variant="link">
            Interactive Text Link
          </Button>
        </div>
      </section>

      {/* 5. Responsive Data Table Preview Section */}
      <section className="section-padding container-custom border-b border-[#E7E0D4]">
        <SectionHeader
          label="RESPONSIVE TABLES"
          title="Scrollable &amp; Stacked Table Data"
          description="Tables adapt gracefully on mobile viewports with horizontal touch scrolling and clean row indicators."
        />
        <div className="bg-white p-6 md:p-8 rounded-[24px] border border-[#E7E0D4] shadow-sm">
          <div className="table-responsive">
            <table className="w-full text-left font-sans text-[15px]">
              <thead>
                <tr className="border-b border-[#EFEAE2] text-[#171714] font-serif font-bold">
                  <th className="py-4 px-4">Service Tier</th>
                  <th className="py-4 px-4">Scope Included</th>
                  <th className="py-4 px-4">Materials Specified</th>
                  <th className="py-4 px-4">Average Timeline</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EFEAE2]/60 text-[#68645D]">
                <tr>
                  <td className="py-4 px-4 font-semibold text-[#171714]">Luxury Home Interiors</td>
                  <td className="py-4 px-4">Space planning, 3D renders, millwork, lighting</td>
                  <td className="py-4 px-4">Seasoned Teak, Italian Marble, Brass</td>
                  <td className="py-4 px-4">45 – 90 Days</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-[#171714]">Turnkey Execution</td>
                  <td className="py-4 px-4">Full design, procurement, civil work &amp; handover</td>
                  <td className="py-4 px-4">Turnkey custom fittings &amp; appliances</td>
                  <td className="py-4 px-4">90 – 120 Days</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-[#171714]">Residential Construction</td>
                  <td className="py-4 px-4">Ground-up architectural structure &amp; elevation</td>
                  <td className="py-4 px-4">Tested Concrete, TMT Steel, Granite</td>
                  <td className="py-4 px-4">8 – 14 Months</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. Card System & Project Showcase Section */}
      <section className="section-padding container-custom border-b border-[#E7E0D4]">
        <SectionHeader
          label="CARD SYSTEM"
          title="White 24px Cards &amp; Project Cards"
          description="Rounded 24px cards with subtle border (#E7E0D4), generous internal padding, and smooth image scale zoom."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <ProjectCard
            title="The Grand Courtyard Villa"
            category="Residential Architecture"
            location="Nagercoil, TN"
            imageSrc="/hero.jpeg"
          />
          <ProjectCard
            title="Minimalist Teak Residence"
            category="Interior Design"
            location="Kanyakumari, TN"
            imageSrc="/hero.jpeg"
          />
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TestimonialCard
            quote="SMS Construction transformed our ancestral plot into a modern architectural sanctuary. Their attention to teak wood details and natural ventilation is unmatched."
            author="Dr. S. Ramachandran"
            role="Homeowner"
            location="Nagercoil"
          />
          <TestimonialCard
            quote="The turnkey interior project was delivered ahead of schedule with flawless marble finishes and custom lighting."
            author="Anitha Krishnan"
            role="Studio Director"
            location="Kanyakumari"
          />
        </div>
      </section>

      {/* 7. Form Design Section */}
      <section className="section-padding container-custom border-b border-[#E7E0D4]">
        <SectionHeader
          label="FORM DESIGN"
          title="Rounded 16px Form Inputs &amp; Focus States"
          description="Clear labels, 52px height inputs, 16px radius, and elegant bronze outline focus indicators."
        />
        <div className="bg-white p-6 lg:p-12 rounded-[24px] border border-[#E7E0D4] max-w-[760px]">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
            <Input label="Full Name" placeholder="e.g. Anand Varma" required />
            <Input label="Phone / WhatsApp" placeholder="+91 98765 43210" required />
            <Input label="Email Address" type="email" placeholder="anand@example.com" />
            <Textarea label="Project Details" placeholder="Describe your site location, scope, and timeline..." rows={4} />
            <Button variant="primary" type="submit" icon="send" fullWidthMobile>
              Submit Inquiry
            </Button>
          </form>
        </div>
      </section>

      {/* 8. Accordion Section */}
      <section className="section-padding container-custom">
        <SectionHeader
          label="FAQ ACCORDION"
          title="Minimal Accordion System"
          description="Smooth max-height transition, soft interior dividers, and bronze active indicators."
        />
        <Accordion items={faqItems} className="max-w-[840px]" />
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
