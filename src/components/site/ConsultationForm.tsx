import { useState, type FormEvent } from "react";
import { business } from "@/config/business";

const fieldClass =
  "mt-2 w-full rounded-md border border-input bg-cream px-4 py-3 text-[15px] text-ink placeholder:text-stone-mid focus:border-pine focus:outline-none focus:ring-2 focus:ring-pine/30";

export function ConsultationForm() {
  const [notice, setNotice] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice(business.formDisabledMessage);
  }

  return (
    <section id="contact" className="bg-sand py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <div>
          <p className="eyebrow mb-3 text-rust">Get started</p>
          <h2 className="mb-5 text-3xl leading-tight sm:text-4xl">
            Request a consultation
          </h2>
          <p className="mb-8 max-w-md leading-relaxed text-ink/75">
            Tell us about your property and what you're hoping to build. We'll follow up
            to schedule an on-site walkthrough and put together a written estimate.
          </p>
          <dl className="space-y-4 text-[15px]">
            <div>
              <dt className="text-sm font-bold uppercase tracking-[0.15em] text-stone-mid">
                Owner
              </dt>
              <dd className="mt-1 text-ink/80">{business.owner}</dd>
            </div>
            <div>
              <dt className="text-sm font-bold uppercase tracking-[0.15em] text-stone-mid">
                Phone
              </dt>
              <dd className="mt-1">
                <a
                  href={business.phoneHref}
                  className="font-bold text-pine hover:text-forest"
                >
                  {business.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-bold uppercase tracking-[0.15em] text-stone-mid">
                Email
              </dt>
              <dd className="mt-1">
                <a href={`mailto:${business.email}`} className="text-ink/80 hover:text-pine">
                  {business.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-bold uppercase tracking-[0.15em] text-stone-mid">
                Hours
              </dt>
              <dd className="mt-1 text-ink/80">{business.hours}</dd>
            </div>
            <div>
              <dt className="text-sm font-bold uppercase tracking-[0.15em] text-stone-mid">
                Address
              </dt>
              <dd className="mt-1 text-ink/80">{business.address}</dd>
            </div>
          </dl>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-xl border border-border bg-cream p-6 sm:p-8"
          aria-label="Request a consultation"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block sm:col-span-2">
              <span className="text-sm font-semibold text-ink/80">Name</span>
              <input type="text" name="name" autoComplete="name" className={fieldClass} />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-ink/80">Phone</span>
              <input type="tel" name="phone" autoComplete="tel" className={fieldClass} />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-ink/80">Email</span>
              <input type="email" name="email" autoComplete="email" className={fieldClass} />
            </label>
            <label className="block sm:col-span-2">
              <span className="text-sm font-semibold text-ink/80">Project type</span>
              <select name="projectType" className={fieldClass} defaultValue="">
                <option value="" disabled>
                  Select a project type
                </option>
                {business.projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </label>
            <label className="block sm:col-span-2">
              <span className="text-sm font-semibold text-ink/80">Project description</span>
              <textarea name="description" rows={4} className={fieldClass} />
            </label>
          </div>
          <button
            type="submit"
            className="mt-6 w-full rounded-md bg-rust px-6 py-3.5 text-sm font-bold text-cream transition hover:brightness-110"
          >
            Request a Consultation
          </button>
          <p role="status" aria-live="polite" className="mt-4 min-h-5 text-center text-sm font-semibold text-pine">
            {notice}
          </p>
        </form>
      </div>
    </section>
  );
}
