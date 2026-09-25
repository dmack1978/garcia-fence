import { ContactDetails } from "./ContactDetails";
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
          <p className="eyebrow mb-3 text-rust">{business.contact.eyebrow}</p>
          <h2 className="mb-5 text-3xl leading-tight sm:text-4xl">{business.contact.heading}</h2>
          <p className="mb-8 max-w-md leading-relaxed text-ink/75">{business.contact.body}</p>
          <ContactDetails />
        </div>

        <form
          aria-describedby="form-demo-notice"
          autoComplete="off"
          onSubmit={handleSubmit}
          noValidate
          className="rounded-xl border border-border bg-cream p-6 sm:p-8"
          aria-label={business.contact.heading}
        >
          <p
            id="form-demo-notice"
            className="mb-6 rounded-md border border-pine/20 bg-sand p-4 text-sm leading-relaxed text-ink/80"
          >
            {business.contact.demoNote}
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block sm:col-span-2">
              <span className="text-sm font-semibold text-ink/80">Name</span>
              <input
                type="text"
                placeholder="Your name"
                autoComplete="off"
                className={fieldClass}
              />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-ink/80">Phone</span>
              <input
                type="tel"
                placeholder="Your phone number"
                autoComplete="off"
                className={fieldClass}
              />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-ink/80">Email</span>
              <input
                type="email"
                placeholder="Your email address"
                autoComplete="off"
                className={fieldClass}
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="text-sm font-semibold text-ink/80">Project type</span>
              <select className={fieldClass} defaultValue="">
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
              <textarea
                rows={4}
                placeholder={business.contact.descriptionPlaceholder}
                className={fieldClass}
              />
            </label>
          </div>
          <button
            type="button"
            data-analytics-event="estimate_click"
            data-analytics-location="estimate_form"
            onClick={() => setNotice(business.formDisabledMessage)}
            className="mt-6 w-full rounded-md bg-rust px-6 py-3.5 text-sm font-bold text-cream transition hover:brightness-110"
          >
            {business.actions.form}
          </button>
          <p
            role="status"
            aria-live="polite"
            className="mt-4 min-h-5 text-center text-sm font-semibold text-pine"
          >
            {notice}
          </p>
        </form>
      </div>
    </section>
  );
}
