import { business } from "@/config/business";

export function TrustStrip() {
  return (
    <section aria-label="Business highlights" className="border-b border-border bg-cream">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-5 py-6 text-sm font-semibold text-ink/70 sm:px-8">
        {business.trustPoints.map((point, i) => (
          <span key={point} className="flex items-center gap-2">
            <span
              className={`size-2 rounded-full ${i === 0 ? "bg-rust" : "bg-pine"}`}
              aria-hidden="true"
            />
            {point}
          </span>
        ))}
      </div>
    </section>
  );
}
