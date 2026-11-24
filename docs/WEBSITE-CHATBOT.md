# Website FAQ assistant

Added November 2026. Every public HTML page loads `chatbot.css` and `chatbot.js`.

This is a free, local, prepared-answer chatbot, not a generative AI model or live chat. It needs no account, API key or subscription. It answers recognised topics from the current services and music-marketing pages, and sends unknown, sensitive or bespoke questions to the existing contact form or Calendly. It does not submit enquiries, send emails, confirm bookings or promise outcomes.

Chat text stays in memory in the current page and is not persisted, transmitted or included in analytics events. External links and the existing contact form have separate processing. The privacy page explains this. Rendering visitor input uses textContent, never HTML.

When changing pricing or services, update answers in `chatbot.js` at the same time. The old `ai-assistant/KNOWLEDGE-BASE.md` is a historic draft, not the active response source.

Validation: `npm install --no-save --package-lock=false jsdom playwright`, then `node tests/chatbot.cjs`. CI also installs Chromium and runs `node tests/chatbot.cjs --browser` for all eight pages at desktop, mobile and small-mobile widths. Browser tests cover opening/closing, focus, bounds, prepared replies, unsupported questions, injected markup, no chat network requests and conversation reset. Set CHROMIUM_PATH only if using an existing local Chromium installation.

To remove the chat, remove the two chatbot asset references from the eight HTML pages. For future generative AI, first select a provider and cost limit, then add a protected server-side endpoint, abuse controls and revised privacy information. Never embed provider API keys in browser JavaScript.
