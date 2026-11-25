# SEO, GEO and AEO review: 25 November 2026

## Verified starting state

The production homepage, services, music marketing, about, portfolio, contact, robots.txt and sitemap.xml returned HTTP 200 during this review. The live site already contained page-specific titles/descriptions, canonical URLs, Organization and music Service structured data, and four visible music FAQs. Previous work therefore already included answer-focused content, even though it had not been described consistently as AEO.

The sitemap contains seven unique canonical public URLs. The thank-you page remains excluded and has a noindex directive. The extensionless and .html routes both served content with the same .html canonical; no redirect or hosting configuration change was required in this pass. Netlify rewrites internal link formatting in deployed HTML, so a byte-level difference alone does not establish a content mismatch.

## This update

- Added a direct business summary and links to the relevant service pages on the homepage.
- Added six readable service explanations and seven customer questions to the services page, covering scope, sectors, remote working, combined packages, external costs, quotations and realistic outcomes.
- Added SEO, Google Ads, email/automation, analytics and Shopify choices to the existing enquiry form.
- Clarified the Rotherham/South Yorkshire location without publishing a home address or suggesting a public office.
- Added WebSite/WebPage, AboutPage/Person, ContactPage, service catalogue and breadcrumb structured data where appropriate. No invented ratings, offers, qualifications or prices were added.
- Added page-specific Open Graph metadata and a summary social-card declaration across seven public pages.
- Retained the existing canonical URLs, prices, consultation links, analytics consent and chatbot assets.

The new customer answers are visible HTML. No new FAQPage markup or special AI files are required to make them useful. Existing music FAQ markup was retained without promising a Google FAQ display.

## Validation

Local static checks passed for all eight HTML pages: one H1 per page; unique canonical/social title declarations on public pages; parseable JSON-LD; existing local link targets; preservation of form/input/select/textarea attributes; preservation of analytics and chatbot script inclusion. Sitemap validation passed for seven unique public URLs and exclusion of the thank-you page.

Production publication, final mobile visual review, Search Console account inspection, indexing changes, rankings, AI citations and enquiry uplift must be verified separately. Do not present source changes as a confirmed live deployment.

## Official guidance

Google states that existing SEO fundamentals apply to its AI features. Helpful readable content, internal links, crawlability and truthful structured data matter; there is no special schema or AI text file required and inclusion is not guaranteed.

https://developers.google.com/search/docs/appearance/ai-features
https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
