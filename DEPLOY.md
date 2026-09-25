# Sir Ammar Samana — deploy

Static site. No build step, no backend. Upload the folder as it is.

## Folder layout (keep exactly this)
```
index.html  subjects.html  papers.html  classes.html  about.html
vercel.json  robots.txt
assets/data/config.js    ← every editable detail lives here
assets/data/papers.js    ← syllabus + past-paper engine
assets/img/og.jpg        ← link preview image
assets/img/ammar.jpg     ← ADD: his portrait (~1200×1500). Monogram shows until then.
```

## Host on Vercel
Push the folder to a GitHub repo → vercel.com → Add New → Project → import it →
Framework preset **Other**, no build command, output directory `./` → Deploy.

## Switch things on in `assets/data/config.js`
Everything below stays hidden until filled — nothing fake ever shows.
- `pdfBase` — folder URL of the paper PDFs (Cambridge names, e.g. `9706_s23_qp_22.pdf`)
- `intakeDate` — e.g. `"2026-10-11T19:30:00+05:00"` → live countdown on Home + Classes
- `introVideo` — YouTube link → "Watch the introduction" button on the hero
- `youtube` / `lectures` — turns on the Lectures section
- `results` / `reviews` — real figures and real reviews only
- `timings` — only the current standing timetable
- `email`, `mapUrl`, `linkedin`
