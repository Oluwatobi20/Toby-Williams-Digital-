/* Toby Williams Digital: optional GA4 analytics, loaded only after consent. */
(function () {
  'use strict';
  const measurementId = 'G-F6XS8Y241T';
  const storageKey = 'twd-analytics-consent-v1';
  let consent = null;
  try { consent = localStorage.getItem(storageKey); } catch (e) {}
  let started = false;

  function startAnalytics() {
    if (started) return;
    started = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', measurementId, { anonymize_ip: true });
    const tag = document.createElement('script');
    tag.async = true;
    tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(measurementId);
    document.head.appendChild(tag);
  }

  function removeAnalyticsCookies() {
    const names = document.cookie.split(';').map(v => v.trim().split('=')[0]);
    names.forEach(name => {
      if (name === '_ga' || name.indexOf('_ga_') === 0) {
        document.cookie = name + '=; Max-Age=0; path=/; SameSite=Lax';
        document.cookie = name + '=; Max-Age=0; path=/; domain=.tobywilliamsdigital.co.uk; SameSite=Lax';
      }
    });
  }

  function saveConsent(value) {
    const previous = consent;
    consent = value;
    try { localStorage.setItem(storageKey, value); } catch (e) {}
    const banner = document.getElementById('twd-cookie-banner');
    if (banner) banner.hidden = true;
    if (value === 'accepted') startAnalytics();
    if (value === 'rejected' && previous === 'accepted') {
      removeAnalyticsCookies();
      // Reload to stop any analytics requests already running on this page.
      window.location.reload();
    }
  }

  function showBanner() {
    let banner = document.getElementById('twd-cookie-banner');
    if (!banner) {
      banner = document.createElement('section');
      banner.id = 'twd-cookie-banner';
      banner.className = 'twd-cookie-banner';
      banner.setAttribute('aria-label', 'Analytics cookie choices');
      banner.innerHTML = '<div class="twd-cookie-inner"><div><strong>Help us improve this website</strong><p>With your permission, we use Google Analytics to understand website visits. Optional analytics cookies are off unless you accept. <a href="privacy.html">Read our privacy notice</a>.</p></div><div class="twd-cookie-actions"><button type="button" class="twd-cookie-reject">Reject optional cookies</button><button type="button" class="twd-cookie-accept">Accept analytics</button></div></div>';
      document.body.appendChild(banner);
      banner.querySelector('.twd-cookie-reject').addEventListener('click', () => saveConsent('rejected'));
      banner.querySelector('.twd-cookie-accept').addEventListener('click', () => saveConsent('accepted'));
    }
    banner.hidden = false;
  }

  function init() {
    const footer = document.querySelector('.foot-bottom');
    if (footer && !document.getElementById('twd-cookie-settings')) {
      const button = document.createElement('button');
      button.id = 'twd-cookie-settings';
      button.type = 'button';
      button.className = 'twd-cookie-settings';
      button.textContent = 'Cookie settings';
      button.addEventListener('click', showBanner);
      footer.appendChild(button);
    }
    if (consent === 'accepted') startAnalytics();
    else if (consent !== 'rejected') showBanner();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
