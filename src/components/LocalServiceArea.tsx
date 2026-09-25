import type { ReactNode } from "react";
import { MapPin } from "lucide-react";
import { geoLocalities } from "@/data/geo";

export interface LocalServiceAreaProps {
  badge?: string;
  title: string | ReactNode;
  description: string | string[];
  localities?: string[];
  deskTitle?: string;
  companyName?: string;
  addressLines?: string[];
  phoneNumber?: string;
  formattedPhone?: string;
  email?: string;
  emailLabel?: string;
  hours?: string;
  sectionId?: string;
  className?: string;
  cardBgClassName?: string;
  pillBgClassName?: string;
  titleClassName?: string;
}

export default function LocalServiceArea({
  badge = "BASED IN NAGERCOIL",
  title,
  description,
  localities = geoLocalities,
  deskTitle = "Head Office & Engineering Desk",
  companyName = "SMS Construction",
  addressLines = [
    "25/1 Muthamizh Street, Near Court Road",
    "Nagercoil, Tamil Nadu 629001, India",
  ],
  phoneNumber = "+919488021183",
  formattedPhone = "+91 94880 21183",
  email = "smsconstructionngl@gmail.com",
  emailLabel = "Inquiries:",
  hours = "Monday – Saturday",
  sectionId = "local-geo-heading",
  className = "py-16 sm:py-24 lg:py-28 bg-[#F6F3EB] border-b border-[#E7E0D4]",
  cardBgClassName = "bg-white",
  pillBgClassName = "bg-white",
  titleClassName = "text-[30px] sm:text-[40px] lg:text-[46px] font-bold text-[#171714] leading-[1.18] tracking-tight mb-5",
}: LocalServiceAreaProps) {
  const paragraphs = Array.isArray(description) ? description : [description];

  return (
    <section aria-labelledby={sectionId} className={className}>
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Local Context */}
          <div className="lg:col-span-7">
            <span className="inline-block text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.22em] uppercase text-[#B08A52] mb-3">
              {badge}
            </span>
            <h2 id={sectionId} className={titleClassName}>
              {title}
            </h2>
            {paragraphs.map((para, idx) => (
              <p
                key={idx}
                className="text-[16px] sm:text-[17px] leading-relaxed text-[#68645D] mb-5 last:mb-8 font-sans"
              >
                {para}
              </p>
            ))}

            <div className="flex flex-wrap gap-2.5">
              {localities.map((place) => (
                <span
                  key={place}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full ${pillBgClassName} border border-[#E7E0D4] text-[12.5px] sm:text-[13px] font-sans text-[#68645D] hover:border-[#171714] transition-colors`}
                >
                  <MapPin size={13} className="text-[#B08A52] shrink-0" />
                  <span>{place}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Studio Coordinates Card */}
          <div className="lg:col-span-5">
            <div
              className={`p-7 sm:p-9 lg:p-10 rounded-[24px] ${cardBgClassName} border border-[#E7E0D4] shadow-sm`}
            >
              <span className="text-[11px] sm:text-[12px] font-sans font-semibold uppercase tracking-wider text-[#B08A52] block mb-2">
                {deskTitle}
              </span>
              <h3 className="font-serif text-[24px] sm:text-[26px] font-bold text-[#171714] mb-3">
                {companyName}
              </h3>
              <address className="not-italic text-[14px] sm:text-[15px] text-[#68645D] leading-relaxed mb-6 space-y-1 font-sans">
                {addressLines.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </address>

              <div className="pt-6 border-t border-[#E7E0D4] space-y-3.5 text-[13.5px] sm:text-[14px] font-sans">
                <div className="flex flex-col min-[420px]:flex-row min-[420px]:items-center justify-between gap-1 min-[420px]:gap-3">
                  <span className="text-[#77736C] shrink-0">Direct Line:</span>
                  <a
                    href={`tel:${phoneNumber}`}
                    className="font-medium text-[#171714] hover:text-[#B08A52] transition-colors min-[420px]:text-right"
                  >
                    {formattedPhone}
                  </a>
                </div>
                <div className="flex flex-col min-[420px]:flex-row min-[420px]:items-center justify-between gap-1 min-[420px]:gap-3">
                  <span className="text-[#77736C] shrink-0">{emailLabel}</span>
                  <a
                    href={`mailto:${email}`}
                    className="font-medium text-[#171714] hover:text-[#B08A52] transition-colors min-[420px]:text-right break-all min-[420px]:break-normal"
                  >
                    {email}
                  </a>
                </div>
                <div className="flex flex-col min-[420px]:flex-row min-[420px]:items-center justify-between gap-1 min-[420px]:gap-3">
                  <span className="text-[#77736C] shrink-0">Site Consultations:</span>
                  <span className="font-medium text-[#171714] min-[420px]:text-right">{hours}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
