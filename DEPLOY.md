# Sir Ammar Samana — deploy

Static site. No build step, no backend. Upload the folder as it is.

## Layout — everything flat, next to index.html
```
index.html  subjects.html  papers.html  classes.html  about.html
config.js   papers.js      og.jpg       vercel.json   robots.txt
ammar.jpg   ← ADD: his portrait (~1200×1500). A monogram shows until then.
```
No sub-folders. Upload every file to the repo root.

## Host on Vercel
Push the folder to a GitHub repo → vercel.com → Add New → Project → import it →
Framework preset **Other**, no build command, output directory `./` → Deploy.

## Sound
The background score is generated live in the browser — there are no audio
files to upload. Visitors choose "Enter with sound" on the title card, or use
the equaliser button in the header. The choice is remembered.

## Switch things on in `config.js`
Everything below stays hidden until filled — nothing fake ever shows.
- `pdfBase` — folder URL of the paper PDFs (Cambridge names, e.g. `9706_s23_qp_22.pdf`)
- `intakeDate` — e.g. `"2026-10-11T19:30:00+05:00"` → live countdown on Home + Classes
- `introVideo` — YouTube link → "Watch the introduction" button on the hero
- `youtube` / `lectures` — turns on the Lectures section
- `results` / `reviews` — real figures and real reviews only
- `timings` — only the current standing timetable
- `email`, `mapUrl`, `linkedin`
