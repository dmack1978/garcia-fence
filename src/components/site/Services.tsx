import { business } from "@/config/business";

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow mb-3 text-rust">What we build</p>
          <h2 className="text-3xl leading-tight sm:text-4xl">
            High-value outdoor work, built to last
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {business.services.map((service) => (
            <a
              key={service.slug}
              href="#contact"
              className="group overflow-hidden rounded-xl border border-border bg-cream transition hover:border-pine/40"
            >
              <img
                src={service.image}
                alt={service.alt}
                width={1024}
                height={768}
                loading="lazy"
                style={{ objectPosition: service.focus ?? "50% 60%" }}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  {service.blurb}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold text-pine transition-all group-hover:gap-2.5">
                  View service →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
