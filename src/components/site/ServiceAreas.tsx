import { business } from "@/config/business";

export function ServiceAreas() {
  return (
    <section id="areas" className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <p className="eyebrow mb-3 text-rust">Service area</p>
        <h2 className="mb-6 text-3xl leading-tight sm:text-4xl">
          Proudly serving {business.city} and nearby towns
        </h2>
        <p className="mb-8 leading-relaxed text-ink/75">{business.serviceAreaBody}</p>
        <ul className="flex flex-wrap justify-center gap-2.5">
          {business.serviceAreas.map((area) => (
            <li
              key={area}
              className="rounded-full border border-border bg-sand px-4 py-2 text-sm font-semibold text-ink/80"
            >
              {area}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
