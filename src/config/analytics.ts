import { business } from "./business";

/** Shared Lumix GA4 stream; change siteId for each contractor, not the tag ID. */
export const analytics = {
  measurementId: "G-G7C2WY6MYY",
  siteId: "garcia-fence",
  businessName: business.name,
  isDemo: business.isDemo,
  // Local development never sends visits or test clicks to the shared property.
  enabled: import.meta.env.PROD,
};
