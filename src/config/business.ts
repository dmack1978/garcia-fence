/**
 * ─────────────────────────────────────────────────────────────
 *  BUSINESS CONFIGURATION — the only file you edit per client.
 * ─────────────────────────────────────────────────────────────
 *  Everything business-specific lives here: name, contact info,
 *  services, projects, reviews, service areas, and page copy.
 *  Components read from this file and never hard-code content.
 * ─────────────────────────────────────────────────────────────
 */

import heroImage from "@/assets/hero-retaining-wall.jpg";

import fplLogo from "@/assets/logo_2-fix.png";

import fpStoneWallsSteps from "@/assets/2000_695369a20ba5e.webp";
import fpRiverRockDeck from "@/assets/2000_689e9dda3f3ec.webp";
import fpStoneBedWall from "@/assets/2000_695369e469613.webp";
import fpPaverPatioPath from "@/assets/2000_689e9f647c2f7.webp";
import fpFrontWallWalkway from "@/assets/2000_695369e469613.webp";
import fpPaverPatioFirepit from "@/assets/760472255_122125384005348508_8502470735218145707_n.jpg";
import fpFrontRockBed from "@/assets/2000_689e9f26d22e6.webp";
import fpDrainageSideYard from "@/assets/2000_689e9f68d319e.jpg";
import fpCrewPatioBuild from "@/assets/2000_689e9dd610933.webp";

export type Service = {
  slug: string;
  title: string;
  blurb: string;
  image: string;
  alt: string;
  /** CSS object-position for cropping, e.g. "50% 60%" */
  focus?: string;
};

export type Project = {
  title: string;
  category: string;
  image: string;
  alt: string;
  focus?: string;
};

export type Review = {
  quote: string;
  author: string;
  location?: string;
};

export const business = {
  /* ── Identity ───────────────────────────────────────────── */
  name: "Friendly Pro Landscapes",
  shortName: "Friendly Pro",
  initials: "FP",
  tagline: "Landscapes",
  city: "Greensboro",
  state: "North Carolina",
  stateAbbr: "NC",
  region: "Guilford County",
  owner: "Ben Miller",
  address: "1703 Biscayne Drive, Greensboro, NC 27410",

  /* ── Logo — authentic Friendly Pro Landscapes mark ──────── */
  logo: fplLogo,
  logoAlt: "Friendly Pro Landscapes logo",

  /* ── Contact ────────────────────────────────────────────── */
  phoneDisplay: "1-336-392-8077",
  phoneHref: "tel:+13363928077",
  email: "ben@friendlyprolandscapes.com",
  hours: "Mon–Sat, 7:00am – 6:00pm",
  socialLinks: [
    { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61590455255069" },
  ] as { label: string; href: string }[],

  /* ── Demo mode ──────────────────────────────────────────── */
  isDemo: true,
  demoNotice:
    "Website concept prepared for Friendly Pro Landscapes. This is not the company's current official website.",
  formDisabledMessage: "This form is disabled on the demonstration website.",

  /* ── Hero copy ──────────────────────────────────────────── */
  hero: {
    eyebrow: "Greensboro, North Carolina",
    heading:
      "Transform Your Outdoor Space!",
    subheading:
      "Drainage, landscaping and hardscape solutions for homeowners throughout Greensboro and the Triad.",
    image: heroImage,
    // NOTE: stand-in hero photograph, not a Friendly Pro project.
    alt: "Tiered natural stone retaining wall with landscape lighting at sunset",
  },

  /* ── Trust strip — factual statements only ──────────────── */
  trustPoints: [
    "Greensboro, North Carolina",
    "Drainage solutions",
    "Landscape install & renovation",
    "Hardscape, retaining walls & walkways",
    "Lawncare",
  ],

  /* ── About / why choose ─────────────────────────────────── */
  about: {
    heading: "A local crew that treats your yard like its own",
    body: "Friendly Pro Landscapes is a Greensboro-based crew led by Ben Miller. We handle drainage solutions, landscape installation and renovation, hardscape work including retaining walls and walkways, and seasonal lawncare — from the first site walk to the final cleanup.",
    points: [
      "One crew from consultation through completion",
      "Drainage, landscape install, hardscape and lawncare",
      "Based in Greensboro, North Carolina",
    ],
    image: fpCrewPatioBuild,
    alt: "Friendly Pro crew building a paver patio and deck landing behind a Greensboro home",
  },

  /* ── Services ───────────────────────────────────────────── */
  services: [
    {
      slug: "drainage-solutions",
      title: "Drainage Solutions",
      blurb:
        "French drains, downspout extensions, river rock channels and grading that move water away from the foundation and stop pooling in the yard.",
      image: fpDrainageSideYard,
      alt: "River rock drainage channel running along the side of a home to the driveway",
      focus: "50% 65%",
    },
    {
      slug: "landscape-install-renovation",
      title: "Landscape Install & Renovation",
      blurb:
        "New beds, plantings, stone edging, mulch and complete yard renovations that make the front and back yard feel finished.",
      image: fpStoneBedWall,
      alt: "Curved stacked stone bed wall with fresh mulch and mature trees in a front yard",
      focus: "50% 58%",
    },
    {
      slug: "hardscape-retaining-walls-walkways",
      title: "Hardscape (Retaining Walls & Walkways)",
      blurb:
        "Natural stone and block retaining walls, paver walkways, steps and patios built on a proper base so they stay level and look right for years.",
      image: fpStoneWallsSteps,
      alt: "Friendly Pro stacked stone retaining walls flanking brick front entry steps",
      focus: "50% 40%",
    },
    {
      slug: "lawncare",
      title: "Lawncare",
      blurb:
        "Aeration, seeding, mowing and ongoing lawn maintenance that keeps turf thick, healthy and presentable through the season.",
      image: fpFrontRockBed,
      alt: "Front yard river rock bed with maintained lawn wrapping a beige home",
      focus: "50% 55%",
    },
  ] satisfies Service[],

  /* ── Featured projects ──────────────────────────────────── */
  projects: [
    {
      title: "Front entry walls and walkway",
      category: "Retaining Wall",
      image: fpFrontWallWalkway,
      alt: "Stacked stone retaining walls and mulched beds along a front walkway with iron handrail",
      focus: "50% 55%",
    },
    {
      title: "Paver patio with fire pit",
      category: "Hardscaping",
      image: fpPaverPatioFirepit,
      alt: "Paver patio with a circular fire pit, stone edging and fresh mulch bed",
      focus: "50% 65%",
    },
    {
      title: "Paver walkway and patio",
      category: "Hardscaping",
      image: fpPaverPatioPath,
      alt: "Paver walkway and patio beside a home with a low stone wall and gravel side path",
      focus: "50% 70%",
    },
    {
      title: "Side yard drainage channel",
      category: "Drainage",
      image: fpRiverRockDeck,
      alt: "River rock drainage bed installed alongside a raised deck and mulched bed",
      focus: "50% 60%",
    },
  ] satisfies Project[],

  /* ── Reviews — add real excerpts only; empty hides section ─ */
  reviews: [
    {
      quote:
        "Fantastic job. Helped solve eroding and water pooling issue. They were creative and came up with better solutions at a more affordable cost than the 3 other landscapers who quoted us. They were efficient, friendly, professional, and a step above anyone we've had work on our yard. We are beyond impressed and will use them again for any of our yard needs. I yard looks beautiful and no standing water in sight. Couldn't recommend more.",
      author: "Hayley Harwell",
    },
    {
      quote: "Ben and his team are great! They're reliable and skilled- highly recommend",
      author: "Adam Kerr",
    },
    {
      quote:
        "Ben and his crew did our aerating and seeding for us and were awesome. Communicated great while we were setting the work up and were there right on time. Did a really nice job and took his time to discuss other projects we'll probably have them do for us in the future. I would highly recommend Ben for any yard/Landscaping work you may have",
      author: "Micheal Totman",
    },
    {
      quote:
        "I highly recommend Ben for the lawn aeration and seeding, he has very reasonable costs and is reliable. You can expect him to communicate and arrive on time, and he does a great job. -Posted October 18th, 2021",
      author: "Stevie Collins",
    },
    {
      quote:
        "I highly recommend Ben. I have been using him since 2019 for my aeration & seeding. He communicates well, is attentive to the work and does a thorough job. Delighted to see him continue to grow and thrive in his work. -Posted August 12, 2022",
      author: "Kimberly Ross",
    },
    {
      quote:
        "Do yourself a favor and call Ben! He's awesome - proactive, efficient, and (just like the name says) - super friendly! Ben has cared for my lawn for years and it's been such a pleasure working with him. Posted August 12th, 2022",
      author: "Julia MacFall",
    },
    {
      quote:
        "Ben and his crew solved my drainage issue. In one day they put in a French drain and now the back yard is not a lake after a heavy rain. Thanks to Ben for making the process easy and for following up to make sure everything was working. I am already thinking of new projects!",
      author: "Jennifer Mattox",
    },
    {
      quote: "Ben was fast, efficient and I thought very reasonable in his pricing. Highly recommend him!",
      author: "Scott Orr",
    },
    {
      quote:
        "Ben and his crew are an excellent investment for your money. He always shows up on time, communicates with me, and has done amazing work with several different jobs for my yard. My husband and I can totally recommend him and his crew.",
      author: "Jennifer H.",
    },
    {
      quote:
        "I had Ben and his team install a French Drain system helping move the stream of water from the backyard down through the front yard and out through the street. It has helped get rid of some spots that used to get really wet in the yard, and has improved our ability to grow grass in that area as well.",
      author: "Gavin T.",
    },
    {
      quote:
        "Friendly Pro Landscapes were a FIRST CLASS solution to our ongoing water issues. Ben and his crew were very professional, courteous and delivered a final product with which we are very happy. All of this was carried out during a heat wave, but this did not deter their work!",
      author: "Mark and Esther",
    },
  ] as Review[],

  /* ── Service areas ──────────────────────────────────────── */
  serviceAreas: ["High Point", "Jamestown"],
  serviceAreaBody:
    "We're based in Greensboro, North Carolina and work with homeowners in High Point, Jamestown and the surrounding area. If you're not sure whether we cover your neighborhood, just ask.",

  /* ── Final CTA ──────────────────────────────────────────── */
  finalCta: {
    heading: "Planning an outdoor project?",
    body: "Request a consultation and we'll walk your property, answer your questions and put together a written estimate.",
    image: fpPaverPatioFirepit,
    alt: "Finished paver patio with fire pit and mulched beds behind a Greensboro home",
    focus: "50% 65%",
  },

  /* ── Form options ───────────────────────────────────────── */
  projectTypes: [
    "Drainage solution",
    "Landscape install / renovation",
    "Retaining wall / walkway",
    "Patio / outdoor living",
    "Lawncare",
    "Not sure yet",
  ],

  /* ── Navigation ─────────────────────────────────────────── */
  nav: [
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Service Areas", href: "#areas" },
    { label: "Contact", href: "#contact" },
  ],

  /* ── SEO ────────────────────────────────────────────────── */
  seo: {
    title:
      "Friendly Pro Landscapes | Drainage, Landscape & Hardscape in Greensboro, NC",
    description:
      "Greensboro, NC contractor for drainage solutions, landscape installation, retaining walls, walkways, patios and lawncare. Request a consultation with Friendly Pro Landscapes.",
    noindex: true,
  },
} as const;

export type Business = typeof business;
