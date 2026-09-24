import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { business } from "@/config/business";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-cream/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" className="flex shrink-0 items-center">
          <img
            src={business.logo}
            alt={business.logoAlt}
            width={945}
            height={455}
            className="h-10 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-ink/75 lg:flex">
          {business.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-pine"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-5">
          <a
            href={business.phoneHref}
            className="hidden items-center gap-2 text-sm font-bold text-pine transition-colors hover:text-forest sm:flex"
          >
            <span className="size-1.5 rounded-full bg-rust" aria-hidden="true" />
            {business.phoneDisplay}
          </a>
          <a
            href="#contact"
            className="hidden items-center justify-center rounded-md bg-pine px-5 py-2.5 text-sm font-bold text-cream transition-colors hover:bg-forest sm:inline-flex"
          >
            Request a Consultation
          </a>
          <a
            href={business.phoneHref}
            aria-label={`Call ${business.name} at ${business.phoneDisplay}`}
            className="inline-flex size-10 items-center justify-center rounded-md bg-pine text-cream sm:hidden"
          >
            <Phone className="size-5" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-10 items-center justify-center rounded-md border border-border text-ink lg:hidden"
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-cream px-5 py-4 lg:hidden">
          <ul className="space-y-1">
            {business.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 text-base font-semibold text-ink/80 hover:bg-sand"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center rounded-md bg-rust px-5 py-3.5 text-sm font-bold text-cream"
          >
            Request a Consultation
          </a>
        </nav>
      )}
    </header>
  );
}
