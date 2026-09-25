import { business } from "@/config/business";

/** Unknown business details are omitted rather than replaced with placeholders. */
export function ContactDetails() {
  const details = [
    {
      label: "Location",
      value: business.address || `${business.city}, ${business.stateAbbr}`,
      href: "",
    },
    { label: "Phone", value: business.phoneDisplay, href: business.phoneHref },
    {
      label: "Email",
      value: business.email,
      href: business.email ? `mailto:${business.email}` : "",
    },
    { label: "Hours", value: business.hours, href: "" },
    { label: "Owner", value: business.owner, href: "" },
  ].filter((item) => item.value);
  return (
    <dl className="space-y-4 text-sm">
      {details.map((item) => (
        <div key={item.label}>
          <dt className="mb-1 text-xs font-bold uppercase tracking-[0.15em] opacity-70">
            {item.label}
          </dt>
          <dd>
            {item.href ? (
              <a
                href={item.href}
                className="underline decoration-current/30 underline-offset-4 hover:decoration-current"
              >
                {item.value}
              </a>
            ) : (
              item.value
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}
