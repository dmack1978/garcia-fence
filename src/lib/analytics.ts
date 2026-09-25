export type AnalyticsConfig = {
  measurementId: string;
  siteId: string;
  businessName: string;
  isDemo: boolean;
};

type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
    __lumixGa4Ids?: string[];
  }
}

/** Use GA's automatic page views/sessions, not a second manual page-view sender. */
export function initializeAnalytics(config: AnalyticsConfig): void {
  if (typeof window === "undefined" || !/^G-[A-Z0-9]+$/.test(config.measurementId)) return;
  const initialized = (window.__lumixGa4Ids ??= []);
  if (initialized.includes(config.measurementId)) return;

  const queue = (window.dataLayer ??= []);
  window.gtag ??= function () {
    // gtag's documented queue format is an Arguments object, not a plain event object.
    // eslint-disable-next-line prefer-rest-params
    queue.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", config.measurementId, {
    send_page_view: true,
    site_id: config.siteId,
    business_name: config.businessName,
    is_demo: config.isDemo,
  });
  initialized.push(config.measurementId);

  const script = document.createElement("script");
  script.id = `lumix-ga4-${config.measurementId}`;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(config.measurementId)}`;
  document.head.appendChild(script);
}

/** Derive only public CTA information; never read form values or user input. */
export function getLeadIntent(target: Element, pageLocation: string) {
  const cta = target.closest<HTMLAnchorElement | HTMLButtonElement>(
    "a[href], button[data-analytics-event]",
  );
  if (!cta || cta.matches(":disabled, [aria-disabled='true']")) return null;

  const href = cta.getAttribute("href")?.trim() ?? "";
  const destination = href ? new URL(href, pageLocation) : null;
  const current = new URL(pageLocation);
  const isContactAnchor =
    destination?.origin === current.origin &&
    destination.pathname === current.pathname &&
    destination.hash === "#contact";
  const explicitEvent = cta.getAttribute("data-analytics-event");
  const event =
    destination?.protocol === "tel:"
      ? "phone_click"
      : explicitEvent === "estimate_click" || isContactAnchor
        ? "estimate_click"
        : null;
  if (!event) return null;

  const placement = cta.closest("[data-analytics-location], form, header, footer, section");
  const ctaLocation =
    placement?.getAttribute("data-analytics-location") ||
    placement?.id ||
    placement?.tagName.toLowerCase() ||
    "page";
  const label =
    cta.getAttribute("data-analytics-label") ||
    cta.getAttribute("aria-label") ||
    cta.textContent ||
    "";

  return {
    event,
    parameters: {
      // Keep the complete URL, including utm_* query parameters, intact.
      page_location: pageLocation,
      cta_location: ctaLocation,
      cta_label: label.replace(/\s+/g, " ").trim().slice(0, 100),
      ...(destination ? { link_url: destination.href } : {}),
    },
  };
}

/** Capture nested icon/text clicks before React closes a menu. Never delay navigation. */
export function listenForLeadIntent(config: AnalyticsConfig): () => void {
  const onClick = (click: MouseEvent) => {
    try {
      if (!(click.target instanceof Element)) return;
      const intent = getLeadIntent(click.target, window.location.href);
      if (!intent) return;
      window.gtag?.("event", intent.event, {
        ...intent.parameters,
        page_title: document.title,
        site_id: config.siteId,
        business_name: config.businessName,
        is_demo: config.isDemo,
        send_to: config.measurementId,
      });
    } catch {
      // An unavailable analytics tag must never interfere with a call or CTA.
    }
  };
  document.addEventListener("click", onClick, true);
  return () => document.removeEventListener("click", onClick, true);
}
