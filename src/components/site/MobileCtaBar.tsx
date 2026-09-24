import { Phone, CalendarCheck } from "lucide-react";
import { business } from "@/config/business";

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-pine-deep/30 bg-cream/95 p-3 backdrop-blur sm:hidden">
      <a
        href={business.phoneHref}
        className="inline-flex items-center justify-center gap-2 rounded-md border border-pine px-4 py-3.5 text-sm font-bold text-pine"
      >
        <Phone className="size-4" aria-hidden="true" />
        Call now
      </a>
      <a
        href="#contact"
        className="inline-flex items-center justify-center gap-2 rounded-md bg-rust px-4 py-3.5 text-sm font-bold text-cream"
      >
        <CalendarCheck className="size-4" aria-hidden="true" />
        Consultation
      </a>
    </div>
  );
}
