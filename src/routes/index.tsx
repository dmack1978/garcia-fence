import { createFileRoute } from "@tanstack/react-router";

import { business } from "@/config/business";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { TrustStrip } from "@/components/site/TrustStrip";
import { Services } from "@/components/site/Services";
import { Projects } from "@/components/site/Projects";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Reviews } from "@/components/site/Reviews";
import { ServiceAreas } from "@/components/site/ServiceAreas";
import { FinalCta } from "@/components/site/FinalCta";
import { ConsultationForm } from "@/components/site/ConsultationForm";
import { Footer } from "@/components/site/Footer";
import { MobileCtaBar } from "@/components/site/MobileCtaBar";

const siteUrl = business.seo.siteUrl;
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": business.seo.schemaType,
  name: business.name,
  description: business.seo.description,
  ...(siteUrl ? { url: siteUrl } : {}),
  ...(business.phoneDisplay ? { telephone: business.phoneDisplay } : {}),
  ...(business.email ? { email: business.email } : {}),
  address: {
    "@type": "PostalAddress",
    addressLocality: business.city,
    addressRegion: business.stateAbbr,
    addressCountry: "US",
    ...(business.address ? { streetAddress: business.address } : {}),
  },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: business.seo.title },
      { name: "description", content: business.seo.description },

      { property: "og:title", content: business.seo.title },
      { property: "og:description", content: business.seo.description },
      { property: "og:type", content: "website" },
      ...(siteUrl
        ? [
            { property: "og:url", content: siteUrl },
            { property: "og:image", content: new URL(business.seo.image, siteUrl).href },
            { name: "twitter:image", content: new URL(business.seo.image, siteUrl).href },
          ]
        : []),
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: siteUrl ? [{ rel: "canonical", href: siteUrl }] : [],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessJsonLd),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <TrustStrip />
        <Services />
        <Projects />
        <WhyChooseUs />
        <Reviews />
        <ServiceAreas />
        <FinalCta />
        <ConsultationForm />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
