import { Phone, ArrowUpRight, Images } from "lucide-react";
import { business } from "@/config/business";

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-pine-deep/30 bg-cream/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur sm:hidden">
      <a
        href={business.phoneHref || "#projects"}
        className="inline-flex items-center justify-center gap-2 rounded-md border border-pine px-3 py-3.5 text-sm font-bold text-pine"
      >
        {business.phoneHref ? (
          <Phone className="size-4" aria-hidden="true" />
        ) : (
          <Images className="size-4" aria-hidden="true" />
        )}
        {business.phoneHref ? "Call now" : business.actions.secondary}
      </a>
      <a
        href="#contact"
        className="inline-flex items-center justify-center gap-2 rounded-md bg-rust px-3 py-3.5 text-sm font-bold text-cream"
      >
        <ArrowUpRight className="size-4" aria-hidden="true" />
        {business.actions.primaryShort}
      </a>
    </div>
  );
}
