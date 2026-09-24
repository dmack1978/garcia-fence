import { business } from "@/config/business";

export function Footer() {
  return (
    <footer className="bg-pine-deep pb-20 text-cream/70 sm:pb-0">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-4">
        <div>
          <div className="mb-4">
            <img
              src={business.logo}
              alt={business.logoAlt}
              width={945}
              height={455}
              className="h-12 w-auto rounded-sm bg-cream p-1.5"
            />
          </div>
          <p className="text-sm leading-relaxed">
            Drainage solutions, landscape install & renovation, hardscape and lawncare for{" "}
            {business.city}, {business.state}.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.15em] text-cream">
            Services
          </h3>
          <ul className="space-y-2.5 text-sm">
            {business.services.map((service) => (
              <li key={service.slug}>
                <a href="#services" className="transition-colors hover:text-cream">
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.15em] text-cream">
            Company
          </h3>
          <ul className="space-y-2.5 text-sm">
            {business.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-cream">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.15em] text-cream">
            Contact
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href={business.phoneHref} className="transition-colors hover:text-cream">
                {business.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${business.email}`}
                className="transition-colors hover:text-cream"
              >
                {business.email}
              </a>
            </li>
            <li>{business.address}</li>
            <li>{business.hours}</li>
            {business.socialLinks.length > 0 && (
              <li className="flex flex-wrap gap-3 pt-1">
                {business.socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-cream"
                  >
                    {link.label}
                  </a>
                ))}
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-cream/45 sm:flex-row sm:px-8">
          <p>
            © {new Date().getFullYear()} {business.name}
          </p>
          {business.isDemo && <p>{business.demoNotice}</p>}
        </div>
      </div>
    </footer>
  );
}
