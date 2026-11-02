# Admin guide

## Receiving registrations and requests

1. Sign in to the Netlify account that owns the site. Grant dashboard access only to trusted ministry administrators.
2. Open the site and select **Forms**. Choose **registration**, **scripture-question**, **prayer-request**, or **contact** to view submissions.
3. Use the form's export option to download submissions as CSV. Registration fields include the gathering, contact details, ministry title and optional note.
4. Configure form-submission notifications from Netlify's form settings so the designated administrators are alerted when a submission arrives.
5. Keep prayer requests and personal contact details within the authorized Netlify account. Do not copy private submissions into public site content.

## Updating the gathering

This version uses static event content rather than an in-site event editor. To change the event, update the details in `index.html`, `gatherings/edify-2026-12-05/index.html`, and `app.js`, replace `assets/edify-flyer.png`, then redeploy. Update the event page's social preview URL and the sitemap after the Netlify site URL is known.

The calendar action currently uses a one-hour duration because no event end time was supplied. Change the calendar duration in `app.js` and add an `endDate` to the event structured data only after the end time is confirmed.

## Before launch

- Replace `[Phone to be provided]`, `[Email to be provided]`, `[WhatsApp contact to be provided]`, and add Pastor Nana Kojo's portrait.
- Set the actual Netlify domain in `gatherings/edify-2026-12-05/index.html`, `robots.txt`, and `sitemap.xml`.
- Submit a test to each form and confirm it appears in the Netlify Forms dashboard.
