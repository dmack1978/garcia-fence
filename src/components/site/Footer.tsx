import { business } from "@/config/business";
import { ContactDetails } from "./ContactDetails";

export function Footer() {
  return (
    <footer className="bg-pine-deep pb-[calc(6rem+env(safe-area-inset-bottom))] text-cream/80 sm:pb-0">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-4">
        <div>
          <img
            {...business.logo}
            loading="lazy"
            className="mb-5 h-28 w-auto rounded-md bg-cream p-2"
          />
          <p className="text-sm leading-relaxed">{business.footerDescription}</p>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.15em] text-cream">
            Services
          </h3>
          <ul className="space-y-2.5 text-sm">
            {business.services.map((service) => (
              <li key={service.slug}>
                <a href="#services" className="hover:text-cream">
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.15em] text-cream">Explore</h3>
          <ul className="space-y-2.5 text-sm">
            {business.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-cream">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.15em] text-cream">
            {business.name}
          </h3>
          <ContactDetails />
          {business.socialLinks.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-3 text-sm">
              {business.socialLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs leading-relaxed text-cream/70 sm:px-8 lg:flex-row lg:justify-between">
          <p>
            © {new Date().getFullYear()} {business.name}
          </p>
          {business.isDemo && <p className="max-w-xl">{business.demoNotice}</p>}
        </div>
      </div>
    </footer>
  );
}
