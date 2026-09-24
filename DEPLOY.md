# Sir Ammar Samana — deploy

Static site. No build step, no backend.

## Folder layout (keep exactly this)
```
index.html  subjects.html  papers.html  classes.html  about.html
vercel.json  robots.txt
assets/data/config.js    ← contact details, campuses, timings, PDF folder
assets/data/papers.js    ← syllabus + past-paper engine
assets/img/og.jpg        ← link preview image
assets/img/ammar.jpg     ← ADD: his photo (portrait, ~1200×1500). Monogram shows until then.
```

## Host on Vercel
Push the folder to a GitHub repo → vercel.com → Add New Project → import the repo →
Framework preset **Other**, no build command, output directory `./` → Deploy.
Add the domain under Project → Settings → Domains.

## Before launch — fill in `assets/data/config.js`
- `email`, `mapUrl`, `linkedin`, `youtube` — blank fields are hidden automatically
- `timings` — only the current standing timetable
- `pdfBase` — folder URL of the paper PDFs (Cambridge filenames, e.g. `9706_s23_qp_22.pdf`).
  Empty = the portal shows "Request access" instead of broken links.
- `claims` — only figures he will stand behind publicly
