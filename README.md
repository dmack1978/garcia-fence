# Garcia Fence Inc. website concept

Single-page contractor website concept for Garcia Fence Inc. in Reidsville, NC.
Built with React, TypeScript, TanStack Start, Tailwind CSS, Vite, and the existing Lovable/Nitro integration.

## Content and reuse

- `src/config/business.ts`: identity, optional contact details, section copy, services, projects, reviews, navigation, SEO, and image crops.
- `src/components/site/`: shared section layouts. `SiteImage` handles responsive images; `ContactDetails` hides unknown details.
- `src/styles.css`: shared design and brand palette. Existing color utility names are retained to keep the conversion small.
- `public/images/garcia/`: untouched supplied originals; `optimized/` contains WebP display versions.
- `src/routes/index.tsx`: homepage composition and business structured data.
- `src/routes/__root.tsx`: document shell, fonts, favicon, and indexing policy.

For the next contractor, replace the business configuration and assets, then adjust the palette. Keep layout changes separate from business content. Reviews are hidden when empty. Empty contact fields produce no placeholder links. Service cards currently link to the planning section; there are no separate service pages.

## Demo behavior

The site is a concept, not the company's official website. The sample form does not transmit or persist entries. Its preview button only displays a notice. The verified phone number is (336) 348-6848, and free estimates are offered. Email, owner, hours, street address, specific surrounding service areas, credentials, and reviews have not been supplied.

Robots metadata is controlled by `isDemo` / `seo.noindex`; `public/robots.txt` also blocks crawling. Before a real launch, verify all business information and services, connect and validate a submission backend, replace demo copy and behavior, set `seo.siteUrl`, and deliberately update both indexing controls. Changing `isDemo` alone does not enable form delivery.

## Development and validation

Use a current compatible Node runtime (Node 22.12+ or compatible newer LTS) and Bun with the committed `bun.lock`.

```sh
bun install --frozen-lockfile
bun run dev
bun run typecheck
bun run lint
bun run build
```

Do not add duplicate TanStack, React, Tailwind, or Nitro plugins: `@lovable.dev/vite-tanstack-config` already supplies them. Preserve the custom server entry and error handling. Vercel supports this Lovable configuration version through framework detection; validate a preview deployment before launch. No production domain or deployment has been configured by this conversion.

## Photography

Display copies are WebP at 640, 1024, and 1600 pixels wide (quality 80), with dimensions, responsive source sets, crop positions, and descriptive alt text. Only the hero loads eagerly. The optimized logo retains the real mark and transparency; the favicon is derived from that mark. Originals remain unchanged. Image descriptions do not assign unverified dates, locations, or customer stories to projects.

## Analytics (Lumix contractor demos)

`src/config/analytics.ts` holds the shared measurement ID `G-G7C2WY6MYY` and the contractor-specific `siteId`. Copy the integration to the next site and change `siteId`; `businessName` and `isDemo` come from its business configuration. No additional dependency or deployment setting is required.

The root shell mounts one invisible `Analytics` component. In production builds it initializes Google's asynchronous `gtag.js` once. Standard GA4 configuration sends the initial page view and lets GA4 manage sessions and attribution. Development mode is disabled to avoid polluting the shared property. Production previews do send analytics if opened in a browser.

Keep GA4 Enhanced Measurement's page views/history-change option enabled for future client-side routes. There is no second manual page-view listener to double-count automatic views. Full URLs and `utm_*` parameters are not stripped, rewritten, or replaced with the canonical URL; GA4 can read campaign attribution normally. Section links preserve the query string.

A delegated capture-phase listener records `phone_click` for every `tel:` link and `estimate_click` for links to the current page's `#contact` section. Buttons or future CTAs can opt in with `data-analytics-event="estimate_click"`. Optional `data-analytics-location` and `data-analytics-label` attributes override automatic placement and label detection. The listener also handles clicks on nested text/icons and is cleaned up on unmount. It never prevents or delays the original action.

Custom events include `page_location` (full current URL), `page_title`, `cta_location`, `cta_label`, `link_url` when present, `site_id`, `business_name`, and `is_demo`. The estimate-form button records intent only, not a completed lead or form submission. Form field values are never read by this integration.

In GA4, use hostname/page location to distinguish demo sites. Register event-scoped custom dimensions for `site_id`, `business_name`, `cta_location`, `cta_label`, and `is_demo` if you want them in standard reports or explorations. After deployment, verify reception in Realtime/DebugView using a tagged URL such as `?utm_source=outreach&utm_medium=email&utm_campaign=garcia_demo`. Build and local mocked tests do not prove collection in the remote GA4 property.

Google references: [page views](https://developers.google.com/analytics/devguides/collection/ga4/views), [Google tag configuration](https://developers.google.com/tag-platform/gtagjs/configure).
