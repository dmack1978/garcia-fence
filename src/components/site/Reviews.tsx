import { business } from "@/config/business";

export function Reviews() {
  if (business.reviews.length === 0) return null;

  return (
    <section aria-labelledby="reviews-heading" className="bg-pine py-20 text-cream lg:py-28">

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <h2 id="reviews-heading" className="mb-12 max-w-2xl text-3xl leading-tight sm:text-4xl">
          What {business.city} homeowners say
        </h2>
        <div className="grid gap-5 md:grid-cols-3">
          {business.reviews.map((review) => (
            <figure
              key={review.author}
              className="rounded-xl border border-cream/10 bg-cream/5 p-7"
            >
              <blockquote className="text-[15px] leading-relaxed text-cream/90">
                “{review.quote}”
              </blockquote>
              <figcaption className="mt-5 text-sm font-semibold text-sage-soft">
                {review.author}
                {review.location ? ` — ${review.location}` : ""}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
