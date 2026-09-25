import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { business } from "@/config/business";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-cream/95 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-cream focus:p-3"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" className="shrink-0" aria-label={`${business.name} home`}>
          <img {...business.logo} className="h-20 w-auto" />
        </a>
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 text-sm font-semibold text-ink/75 lg:flex"
        >
          {business.nav.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-pine">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          {business.phoneHref && (
            <a
              href={business.phoneHref}
              aria-label={`Call ${business.phoneDisplay}`}
              className="inline-flex items-center gap-2 font-bold text-pine"
            >
              <Phone className="size-5" aria-hidden="true" />
              <span className="hidden xl:inline">{business.phoneDisplay}</span>
            </a>
          )}
          <a
            href="#contact"
            className="hidden rounded-md bg-pine px-5 py-3 text-sm font-bold text-cream transition-colors hover:bg-forest sm:inline-flex"
          >
            {business.actions.primary}
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-11 items-center justify-center rounded-md border border-border text-ink lg:hidden"
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
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="max-h-[calc(100dvh-180px)] overflow-y-auto border-t border-border bg-cream px-5 py-4 lg:hidden"
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setOpen(false);
              document
                .querySelector<HTMLButtonElement>('[aria-controls="mobile-navigation"]')
                ?.focus();
            }
          }}
        >
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
            className="mt-3 flex justify-center rounded-md bg-rust px-5 py-3.5 text-sm font-bold text-cream"
          >
            {business.actions.primary}
          </a>
        </nav>
      )}
    </header>
  );
}
