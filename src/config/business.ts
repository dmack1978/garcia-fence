/** Business copy and assets for this contractor. Empty contact fields are hidden. */
export type SitePhoto = {
  src: string;
  srcSet?: string;
  alt: string;
  width: number;
  height: number;
  focus?: string;
};
export type Service = { slug: string; title: string; blurb: string; image: SitePhoto };
export type Project = { title: string; category: string; image: SitePhoto };
export type Review = { quote: string; author: string; location?: string };

function photo(name: string, alt: string, focus = "50% 50%", originalHeight = 1542): SitePhoto {
  const base = `/images/garcia/optimized/${name}`;
  return {
    src: `${base}-1024.webp`,
    srcSet: [640, 1024, 1600].map((width) => `${base}-${width}.webp ${width}w`).join(", "),
    width: 1024,
    height: Math.round(originalHeight / 2),
    alt,
    focus,
  };
}

export const business = {
  name: "Garcia Fence Inc.",
  city: "Reidsville",
  state: "North Carolina",
  stateAbbr: "NC",
  // Add only verified details. No placeholder contact links are rendered.
  owner: "",
  address: "",
  phoneDisplay: "(336) 348-6848",
  phoneHref: "tel:+13363486848",
  email: "",
  hours: "",
  socialLinks: [] as { label: string; href: string }[],
  logo: {
    src: "/images/garcia/optimized/logo.webp",
    alt: "Garcia Fence Inc. logo",
    width: 462,
    height: 320,
  },
  favicon: "/favicon.png",
  isDemo: true,
  demoNotice:
    "Website concept prepared for Garcia Fence Inc. This is not the company's current official website.",
  formDisabledMessage:
    "This concept form does not send or save information. Nothing was submitted. Please call (336) 348-6848 for a free estimate.",
  actions: {
    primary: "Get a Free Estimate",
    primaryShort: "Free Estimate",
    secondary: "View Our Work",
    service: "Get a Free Estimate",
    form: "Request a Free Estimate",
  },
  hero: {
    eyebrow: "Garcia Fence Inc. · Reidsville, NC",
    heading: "Fence installation in Reidsville, NC",
    subheading:
      "Need a new fence for your home, pool, business, or property? Garcia Fence installs privacy, vinyl, aluminum, chain-link and agricultural fencing in Reidsville. Call for a free estimate.",
    image: photo(
      "vinyl_big1",
      "White vinyl privacy fence enclosing a backyard beside a two-story home",
      "60% 56%",
    ),
  },
  trustPoints: ["Reidsville, NC", "Residential & Commercial", "Free Estimates"],
  sections: {
    servicesEyebrow: "Fencing options",
    servicesHeading: "Fencing for homes, businesses & properties",
    servicesBody:
      "We install fences for yards, pools, businesses and farms. Need a gate or a fence repaired? We do that too. Tell us what you need and ask for a free estimate.",
    projectsEyebrow: "Our work",
    projectsHeading: "Fences we’ve installed",
    aboutEyebrow: "About Garcia Fence",
    reviewsHeading: "What our customers say",
    areasEyebrow: "Our location",
    areasHeading: "A fence company in Reidsville, NC",
  },
  about: {
    heading: "New fences, gates & fence repair",
    body: "Garcia Fence Inc. installs and repairs fences for homeowners, businesses and property owners in Reidsville, NC. Whether you need more privacy in the yard, a fence around the pool, or a gate for your property, give us a call. We’ll talk through the job and help you choose a fence.",
    points: [
      "Residential, commercial and agricultural fencing",
      "Fence installation, gates and repairs",
      "Free estimates for your fence project",
    ],
    image: photo(
      "privacy_fence2",
      "Horizontal privacy fence with dark posts following a shaded property line",
      "52% 50%",
    ),
  },
  services: [
    {
      slug: "vinyl-fencing",
      title: "Vinyl fencing",
      blurb:
        "Vinyl fences for backyard privacy and space around your home. Ask us about a fence and gate layout that works for your yard.",
      image: photo("vinyl_big1", "White vinyl privacy fence with a gate beside a home", "60% 60%"),
    },
    {
      slug: "privacy-fencing",
      title: "Wood & privacy fencing",
      blurb:
        "Want more privacy from the road or next door? We install wood and privacy fences for yards and homes.",
      image: photo("privacy_fence2", "Brown horizontal privacy panels framed by dark fence posts"),
    },
    {
      slug: "aluminum-fencing",
      title: "Aluminum fencing",
      blurb:
        "Aluminum fencing for yards and pools when you want a fence without blocking the view. We can include gates where you need access.",
      image: photo("aluminum_fence1", "Black aluminum fence around an open lawn", "50% 60%"),
    },
    {
      slug: "chain-link-fencing",
      title: "Chain-link fencing",
      blurb:
        "Chain-link fences for homes, businesses and larger properties. Talk with us about the fence and gates you need.",
      image: photo(
        "chain_link_black_vinyl_fence",
        "Black-coated chain-link fence beside a brick home",
        "50% 60%",
      ),
    },
    {
      slug: "pool-fencing",
      title: "Pool fencing",
      blurb:
        "Fence installation around your pool, with gates for access. Call us to discuss your pool area and get a free estimate.",
      image: photo("pool_fence", "Black metal pool enclosure with a double gate", "50% 58%"),
    },
    {
      slug: "rail-wire-fencing",
      title: "Agricultural & rail fencing",
      blurb:
        "Agricultural, rail and wire fencing for farms and larger properties. We also install gates for access to fields and property.",
      image: photo(
        "rail_fence_with_wire",
        "Timber rail fence with wire mesh beside a grassy field",
        "50% 55%",
        1536,
      ),
    },
  ] satisfies Service[],
  projects: [
    {
      title: "Privacy Fence",
      category: "Privacy fencing",
      image: photo(
        "fence_privacy1",
        "Warm-toned privacy fence stepping along a sloped yard beside a house",
        "58% 55%",
      ),
    },
    {
      title: "Aluminum Fence",
      category: "Aluminum fencing",
      image: photo(
        "aluminum_fence1",
        "Black aluminum fence with a corner and gate around a lawn",
        "50% 60%",
      ),
    },
    {
      title: "Pool Fence",
      category: "Pool fencing",
      image: photo(
        "pool_fence2",
        "Black metal fencing surrounding a backyard swimming pool",
        "50% 58%",
      ),
    },
    {
      title: "Commercial Fence",
      category: "Commercial fencing",
      image: photo(
        "commercial_fence1",
        "Light-colored privacy fence along a commercial parking area",
        "50% 40%",
        1536,
      ),
    },
  ] satisfies Project[],
  reviews: [] as Review[],
  // No surrounding towns or coverage radius have been verified.
  serviceAreas: [] as string[],
  serviceAreaBody:
    "Garcia Fence is based in Reidsville, North Carolina. Call to discuss installation or repair at your home, business or property. We can confirm whether we serve your address.",
  finalCta: {
    heading: "Ready to talk about your fence project?",
    body: "Call Garcia Fence to discuss your installation or repair and get a free estimate.",
    image: photo(
      "ag_fence2",
      "Wire fencing with timber posts following a rural property boundary",
      "50% 60%",
    ),
  },
  contact: {
    eyebrow: "Let’s talk about your fence",
    heading: "Request a Free Estimate",
    descriptionPlaceholder: "For example: a privacy fence along the backyard with a gate.",
    body: "Need a new fence, a gate, or a repair? Tell us what you have in mind. Call (336) 348-6848 for a free estimate.",
    demoNote:
      "This concept form does not currently send or save information. Garcia Fence will not receive entries made here. Please do not enter personal information. Call (336) 348-6848 to request a free estimate.",
  },
  projectTypes: [
    "Vinyl fencing",
    "Wood / privacy fencing",
    "Aluminum fencing",
    "Chain-link fencing",
    "Pool fencing",
    "Agricultural / rail fencing",
    "Commercial fencing",
    "Gates",
    "Fence repair",
    "Not sure yet",
  ],
  footerDescription:
    "Fence installation, gates and repairs for homes, businesses and properties in Reidsville, NC. Call for a free estimate.",
  nav: [
    { label: "Fencing", href: "#services" },
    { label: "View Our Work", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Location", href: "#areas" },
    { label: "Free Estimate", href: "#contact" },
  ],
  seo: {
    title: "Fence Installation in Reidsville, NC | Garcia Fence Inc.",
    description:
      "Garcia Fence Inc. installs and repairs residential, commercial and agricultural fences in Reidsville, NC. Call (336) 348-6848 for a free estimate.",
    schemaType: "HomeAndConstructionBusiness",
    noindex: true,
    // Set the verified public website URL before a production launch.
    siteUrl: "",
    image: "/images/garcia/optimized/vinyl_big1-1600.webp",
  },
};
