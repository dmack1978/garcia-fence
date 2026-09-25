import { SiteImage } from "./SiteImage";
import { business } from "@/config/business";

export function WhyChooseUs() {
  const { about } = business;

  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <SiteImage
          image={about.image}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="aspect-[4/3] w-full rounded-xl object-cover"
        />
        <div>
          <p className="eyebrow mb-3 text-rust">{business.sections.aboutEyebrow}</p>
          <h2 className="mb-6 text-3xl leading-tight sm:text-4xl">{about.heading}</h2>
          <p className="mb-6 leading-relaxed text-ink/75">{about.body}</p>
          <ul className="space-y-3">
            {about.points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-1.5 size-2 shrink-0 rounded-full bg-rust" aria-hidden="true" />
                <span className="text-[15px] text-ink/80">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
