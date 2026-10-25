# Toby Williams Digital

Official technical documentation and (once recovered) website source for **Toby Williams Digital**, a UK digital marketing and website services business.

**Website:** https://tobywilliamsdigital.co.uk  
**Business contact:** hello@tobywilliamsdigital.co.uk

## Current setup

- **Website hosting:** Netlify
- **Domain/DNS management:** Namecheap (verify exact DNS records against the live account before changing them)
- **Business email:** Namecheap Private Email
- **Email client:** Gmail app / Gmail web configured to send as the business address
- **Website enquiries:** Netlify contact form notifications
- **Search visibility:** Google Search Console and Google Business Profile have been part of the launch setup

This repository currently contains **documentation, not a verified backup of the deployed website source code**. The live site remains hosted on Netlify. Do not assume changes here will deploy automatically.

## Documentation

- [Website and hosting setup](docs/WEBSITE-SETUP.md)
- [Business email setup](docs/EMAIL-SETUP.md)
- [Contact form operations](docs/CONTACT-FORMS.md)
- [Launch and maintenance checklist](docs/LAUNCH-CHECKLIST.md)
- [Source recovery and deployment plan](docs/SOURCE-RECOVERY.md)

## Security

Never commit passwords, mailbox credentials, SMTP secrets, API tokens, customer form submissions, or private client records. Use the hosting platform's secure environment variable settings for any future secrets.

## Next milestone

Identify the Netlify site's deployment source and obtain the original source files or a verified export before connecting this GitHub repository to production deployments.
