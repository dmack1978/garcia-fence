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

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  name: business.name,
  description: business.seo.description,
  telephone: business.phoneDisplay,
  email: business.email,
  areaServed: business.serviceAreas.map((area) => ({
    "@type": "City",
    name: `${area}, ${business.stateAbbr}`,
  })),
  address: {
    "@type": "PostalAddress",
    addressLocality: business.city,
    addressRegion: business.stateAbbr,
    addressCountry: "US",
  },
  makesOffer: business.services.map((service) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: service.title },
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: business.seo.title },
      { name: "description", content: business.seo.description },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: business.seo.title },
      { property: "og:description", content: business.seo.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
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
      <main>
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
