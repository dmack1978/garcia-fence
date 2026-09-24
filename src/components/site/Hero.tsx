import { business } from "@/config/business";

export function Hero() {
  const { hero } = business;

  return (
    <section className="relative" id="top">
      <div className="relative min-h-[560px] sm:h-[62vh] sm:max-h-[720px] sm:min-h-[460px]">
        <img
          src={hero.image}
          alt={hero.alt}
          width={1920}
          height={1088}
          fetchPriority="high"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="scrim-left absolute inset-0" aria-hidden="true" />
       <div className="relative mx-auto flex min-h-[560px] max-w-7xl flex-col justify-center px-5 py-12 sm:h-full sm:min-h-0 sm:px-8 sm:pb-10 sm:pt-0">
          <p className="eyebrow mb-5 text-sage-soft">{hero.eyebrow}</p>
          <h1 className="max-w-2xl text-4xl leading-[1.05] text-cream sm:text-5xl lg:text-6xl">
            {hero.heading}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg">
            {hero.subheading}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
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
    </section>
  );
}
