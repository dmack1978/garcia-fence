import { SiteImage } from "./SiteImage";
import { business } from "@/config/business";

export function FinalCta() {
  const { finalCta } = business;

  return (
    <section className="relative" data-analytics-location="closing_cta">
      <div className="relative min-h-[480px] sm:h-[52vh] sm:min-h-[420px]">
        <SiteImage
          image={finalCta.image}
          sizes="100vw"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="scrim-left absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto flex min-h-[480px] max-w-7xl flex-col justify-center px-5 py-12 sm:h-full sm:min-h-0 sm:px-8 sm:py-0">
          <div className="max-w-xl">
            <h2 className="mb-4 text-3xl leading-tight text-cream sm:text-4xl">
              {finalCta.heading}
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-cream/85">{finalCta.body}</p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-rust px-6 py-3.5 text-sm font-bold text-cream transition hover:brightness-110"
              >
                {business.actions.primary}
              </a>
              <a
                href={business.phoneHref || "#projects"}
                className="inline-flex items-center justify-center rounded-md border border-cream/50 px-6 py-3.5 text-sm font-bold text-cream transition hover:bg-cream/10"
              >
                {business.phoneHref ? `Call ${business.phoneDisplay}` : business.actions.secondary}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
