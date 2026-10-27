# Portfolio case study: SEO, structured data and GEO readiness

**Project:** Toby Williams Digital — music-first digital marketing website  
**Date:** 27 October 2026  
**Role demonstrated:** Digital marketing strategy, technical SEO, content strategy and website implementation  
**Website:** https://tobywilliamsdigital.co.uk  
**Status:** Implementation committed to GitHub and reviewed through a successful Netlify deployment-preview status. Production deployment and live visual validation must be checked separately. This case study does not claim verified search-performance gains.

## Business context

Toby Williams Digital is a UK-based digital marketing business focusing on independent musicians, bands and music businesses, while also serving other sectors. Its website needs to communicate services clearly and help prospective clients discover relevant information through conventional search and AI-assisted discovery.

## Problem and audit findings

A source-code audit of the GitHub website identified three opportunities:

1. **Incomplete XML sitemap:** `sitemap.xml` listed six public pages but omitted the existing `music-marketing.html` service page. The confirmation/thank-you page should not be promoted as an organic landing page.
2. **Missing structured data:** The homepage and music marketing page did not contain JSON-LD to explicitly describe the organisation and music marketing service.
3. **Limited direct-answer content:** The music marketing page described services and packages but lacked a compact FAQ answering practical questions in natural language.

## Objective

Improve the site's **technical discoverability, machine-readable context and answer clarity**, while retaining the current visual design and avoiding unsupported claims about clients or campaign results.

In this case study, **GEO (generative engine optimisation)** means making accurate, useful information easy for AI-powered search experiences to interpret and cite. There is no guaranteed way to secure inclusion or ranking in an AI answer.

## Changes implemented

### 1. XML sitemap completeness

Added `https://tobywilliamsdigital.co.uk/music-marketing.html` to `sitemap.xml`. The sitemap now lists **seven intended public pages** and continues to use the site's canonical HTTPS domain. The thank-you page remains excluded.

**Why it matters:** A complete sitemap helps search engines discover important canonical pages, though inclusion does not guarantee indexing.

### 2. Structured data using Schema.org JSON-LD

- Added an **Organization** entity to the homepage with the business name, site URL, description, contact email, founder and worldwide service area.
- Added a **Service** entity to the music marketing page, linked to the same organisation ID.
- Added **FAQPage** markup whose questions and answers match visible page content.

**Why it matters:** Structured data clarifies relationships among the business, services and content. Search engines may use it to understand pages; rich-result eligibility is not guaranteed, and FAQ rich results are restricted on Google.

### 3. GEO-focused, answer-first content

Added four visible FAQs explaining:
- what a music marketing agency does;
- whether the agency supports independent single/EP releases;
- whether international artists can work with a UK-based provider;
- whether advertising spend is included in package prices.

**Why it matters:** Concise, factual answers improve usefulness for human readers and can make page information easier for search and AI systems to interpret. The content avoids fabricated testimonials, rankings and guaranteed results.

## Skills demonstrated

| Capability | Evidence |
| --- | --- |
| Technical SEO | Audited and corrected XML sitemap coverage |
| Semantic SEO | Implemented Organization, Service and FAQPage JSON-LD |
| Content strategy | Developed audience-led questions based on service and purchase intent |
| GEO readiness | Produced direct answers with explicit entity, audience and service context |
| UX and CRO | Placed useful answers before the consultation call to action |
| Professional reporting | Documented problem, intervention, limitations and validation plan |
| Git workflow | Prepared isolated changes for review before production deployment |

## Validation and measurement plan

**Code-level acceptance checks**
- Parse the sitemap as XML; confirm seven unique HTTPS URLs, including the music marketing page.
- Parse each JSON-LD block as JSON; check entity IDs, URLs and consistency with visible content.
- Confirm each FAQ answer is present in visible HTML.
- Check the layout and mobile presentation, and ensure the existing enquiry and consultation journeys are unaffected.

**After production deployment**
1. Open `/sitemap.xml` and the music marketing page on the live site.
2. Resubmit or recheck the sitemap in Google Search Console, and inspect indexing status for the music marketing URL.
3. Use Schema Markup Validator and Google Rich Results Test for syntax and applicable features.
4. Establish a baseline and monitor Search Console impressions, clicks, CTR and queries, and GA4 engagement/enquiries over the following weeks.
5. If evaluating AI referrals, use available analytics referral data and manual citation checks; treat these as directional rather than guaranteed attribution.

## Outcomes and limitations

**Implemented in GitHub:** Sitemap coverage, structured data and visible FAQ content; changes prepared for production through the pull-request workflow.

**Not yet established:** Production deployment, improved rankings, increased traffic, AI citations, rich results or lead uplift. Those outcomes require a live release, baseline data and follow-up measurement. This case study must be updated with dated evidence rather than assumed gains.

## Recruiter summary

> Audited a live digital marketing website and implemented an XML sitemap correction, Schema.org structured data and audience-led, answer-first music marketing FAQs. Documented the changes, validation plan and measurement framework as an SEO/GEO portfolio case study, without making unsupported performance claims.
