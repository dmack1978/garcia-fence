import { business } from "@/config/business";

export function FinalCta() {
  const { finalCta } = business;

  return (
    <section className="relative">
      <div className="relative h-[52vh] min-h-[420px]">
        <img
          src={finalCta.image}
          alt={finalCta.alt}
          width={1920}
          height={912}
          loading="lazy"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="scrim-left absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-5 sm:px-8">
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
                Request a Consultation
              </a>
              <a
                href={business.phoneHref}
                className="inline-flex items-center justify-center rounded-md border border-cream/50 px-6 py-3.5 text-sm font-bold text-cream transition hover:bg-cream/10"
              >
                Call {business.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
