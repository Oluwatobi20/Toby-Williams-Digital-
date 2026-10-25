# Calendly booking integration — 25 October 2026

## Purpose
Allow prospective Toby Williams Digital customers to book a free introductory digital marketing consultation from the website.

## Booking configuration
- Event name: **Free Digital Marketing Consultation**
- Duration: **20 minutes**
- Host display name: **Toby Williams**
- Location: **Google Meet** (meeting details provided on confirmation)
- Availability: **Monday–Friday, 09:00–17:00, UK time**; weekends unavailable
- Scheduling window observed: **60 calendar days**
- Minimum notice observed: **4 hours**
- Booking URL: https://calendly.com/hello-tobywilliamsdigital/free-digital-marketing-consultation
- Booking slug: `free-digital-marketing-consultation`
- After-event buffer shown during configuration: **10 minutes** (verify it was saved)
- Calendly Notetaker: **disabled** during setup

## Invitee form
Required:
1. Name
2. Email
3. Business name and what the business does
4. Service interest: Website Design; Facebook & Instagram Advertising; Both

Optional:
5. Biggest marketing challenge or goal

The service choices were displayed as checkboxes in the booking form. Check whether selecting "Both" should be mutually exclusive with the other two options; if so, switch to single-choice options where supported.

## Google Calendar connection
Calendly was connected to Google Calendar for `oluwatobi.oyero20@gmail.com`, and that account was selected both for conflict checking and adding booked events. **A permissions warning was seen during setup:** "Google hasn't granted Calendly enough access ... Reconnect your Google Calendar ... approve requested permissions." Later settings showed one connected Google Calendar and "Checking 1 calendar". Do **not** assume the permissions warning was fully resolved without a test booking.

**Verify:** existing busy events block availability; a test booking appears in the Google Calendar; the invitee receives confirmation and Google Meet details; host receives notification. Reconnect Google Calendar in Calendly and approve requested permissions if any step fails.

## Website integration
A Netlify deployment ZIP was downloaded, modified and repackaged as `toby-williams-digital-calendly-ready.zip`. The ZIP contained the static HTML website pages, one WebP image, robots.txt and sitemap.xml. The Calendly URL was added to **index.html**, **services.html**, and **contact.html**, while retaining the contact enquiry form.

- Homepage CTA: **Book a Free Consultation**
- Website: https://tobywilliamsdigital.co.uk
- The user shared a live mobile screenshot on 25 October 2026 showing the teal **Book a Free Consultation** button on the homepage, above **Send a Project Enquiry** and **See a live website demo**.
- This screenshot verifies the button's **appearance**, not that the end-to-end booking flow and Google Calendar conflict handling have passed.

## Deployment procedure (manual Netlify)
1. Open the Netlify dashboard and select the existing Toby Williams Digital site.
2. Open **Deploys**.
3. Use the site's manual deploy workflow to upload the modified site files (extract ZIP first if Netlify expects a folder).
4. Wait for a published deployment and visit the production domain.
5. Verify homepage, Services, Contact, enquiry form and Calendly CTA on mobile and desktop.
6. Perform a test Calendly booking and confirm calendar, email and Google Meet behaviour.
7. Retain the previous deployment for rollback if anything breaks.

**Important:** Do not assume this GitHub repository automatically deploys to Netlify. Check Netlify's build/deploy configuration before connecting GitHub to production.

## Outstanding work
- [ ] Confirm Google Calendar permissions and conflict checking via end-to-end test.
- [ ] Confirm the 10-minute after-event buffer is saved.
- [ ] Confirm confirmation/reminder email preferences (screenshot showed email reminders and follow-up **off**).
- [ ] Add a versioned copy of the actual deployed website source to this repository; this document alone is not a code backup.
- [ ] Establish a reviewed GitHub → Netlify deployment pipeline after identifying the current deployment source.
- [ ] Check that business enquiries and meeting notifications reach the intended inbox.

## Security
Never commit SMTP passwords, Namecheap credentials, Google tokens, customer enquiry submissions or Calendly private tokens. The business email `hello@tobywilliamsdigital.co.uk` is hosted by Namecheap Private Email, not a Google Workspace mailbox. A Gmail "send mail as" alias does not itself change the Google Calendar identity.
