# Curtain's Up Drama School

Static site built with [Eleventy](https://www.11ty.dev/) and deployed to GitHub Pages by `.github/workflows/pages.yml` on every push to `main`.

```
npm install
npm start      # local dev server
npm run build  # output to _site/
```

## Where to edit

| Change | File |
| --- | --- |
| Phone, email, social links, booking URL, home-page banner, footer keywords | `src/_data/site.js` |
| Class days, times, venues, addresses, map positions | `src/_data/venues.json` |
| Term dates / calendar | `src/_data/calendar.json` |
| Menu structure | `src/_data/navigation.json` |
| Gallery photos | add to `src/assets/images/<gallery>/` and list in `src/_data/galleries.json` |
| Home slideshow | `src/_data/slideshow.json` |
| Page text | the matching file in `src/` |
| Layout, header, footer | `src/_includes/` |
| Styling | `src/assets/css/style.css` |

The footer year updates automatically at build time.

## Deployment

1. In the GitHub repo, set **Settings > Pages > Source** to **GitHub Actions**.
2. `src/CNAME` sets the custom domain to `curtainsup.ie`; GitHub redirects `www.curtainsup.ie` to it. In DNS, add four A records for the apex (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`) and a CNAME `www` pointing to `shmoigal.github.io`.
3. The workflow builds with `PATH_PREFIX: /curtainsup/` so the site also works at `https://shmoigal.github.io/curtainsup/`. Once the custom domain is serving the site, change it to `/`. Locally, `npm start` uses `/` by default.

## Not migrated

- **Enquiries form** (Ninja Forms): replaced with phone, email and WhatsApp links. A static site has no form handler; a third-party service (e.g. Formspree) could be added later.
- **Free Trial Class Request page and form**: omitted. It was hidden from the home page, still referred to January 2025, and relied on the same form plugin.
- **MapPress maps**: replaced with OpenStreetMap embeds plus the existing "Open in Maps" links. The Tallaght map also had a stray Cork marker, which was dropped.
- **WordPress features** (RSS feed, comments, StatCounter tracking, emoji script): not carried over.
