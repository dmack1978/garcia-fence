import { business } from "@/config/business";

const TILE_LAYOUTS = [
  { className: "col-span-2 row-span-2 min-h-[320px]", large: true },
  { className: "", large: false },
  { className: "", large: false },
  { className: "col-span-2 min-h-[180px]", large: true },
];

export function Projects() {
  return (
    <section id="projects" className="bg-sand py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3 text-rust">Recent work</p>
            <h2 className="text-3xl leading-tight sm:text-4xl">
              Projects from around {business.city}
            </h2>
          </div>
          <a
            href="#contact"
            className="shrink-0 text-sm font-bold text-pine transition-colors hover:text-forest"
          >
            Start your project →
          </a>
        </div>

        <div className="grid auto-rows-fr grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2">
          {business.projects.map((project, i) => {
            const layout = TILE_LAYOUTS[i] ?? { className: "", large: false };
            return (
              <ProjectTile
                key={project.title}
                project={project}
                className={layout.className}
                large={layout.large}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectTile({
  project,
  className = "",
  large = false,
}: {
  project: (typeof business.projects)[number];
  className?: string;
  large?: boolean;
}) {
  return (
    <figure className={`relative overflow-hidden rounded-xl ${className}`}>
      <img
        src={project.image}
        alt={project.alt}
        loading="lazy"
        style={{ objectPosition: project.focus ?? "50% 60%" }}
        className="size-full object-cover transition-transform duration-500 hover:scale-[1.03]"
      />
      <div className="scrim-bottom absolute inset-0" aria-hidden="true" />
      <figcaption className={`absolute bottom-0 left-0 ${large ? "p-5" : "p-4"}`}>
        <p
          className={`font-bold uppercase tracking-[0.15em] text-sage-soft ${
            large ? "text-[11px]" : "text-[10px]"
          }`}
        >
          {project.category}
        </p>
        <p
          className={`font-display font-semibold text-cream ${large ? "text-lg" : "text-base"}`}
        >
          {project.title}
        </p>
      </figcaption>
    </figure>
  );
}
