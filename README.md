# The Edify Gatherings

A mobile-first static site for The Edify Gatherings, prepared for Netlify hosting and Netlify Forms.

## Local preview

From the project directory, run:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000`. Static form submissions are processed only after deployment to a Netlify site.

## Deploy to Netlify

1. Create a new Netlify site and connect this source folder or its Git repository.
2. Set the publish directory to `.` and leave the build command empty.
3. After the first successful deploy, replace `https://your-site.netlify.app` with the site's actual primary URL in the event page metadata, `robots.txt`, and `sitemap.xml`.
4. Confirm the four forms appear under **Forms** in the Netlify site dashboard. Enable Netlify form detection if prompted, then trigger a new deploy.
5. Add form-submission email notifications in Netlify for the ministry administrators. Netlify Forms submissions and CSV exports are available to authorized site administrators in the Netlify dashboard.
6. Fill in the contact placeholders in `index.html` before launch.

The site does not include credentials or a client-side data store. Form content is submitted to Netlify and is not rendered publicly.
