# Tally web build

The built iPhone/web version of Tally, Harry's notepad calculator (sums on lines, named values, history, sync). This repo holds only the built PWA files; the source is the `tally` repo.
Business: personal (also used for Pots of Joy pay sums). Background: the general-context skill; the hub's systems notes for this project are POJ/systems.md, "Payroll and timesheets" (tally).

## Stack
Static files only: built JavaScript and CSS in `assets/`, `index.html`, `manifest.webmanifest`, service worker `sw.js`, `icons/`. No source, no build step. Public repo.

## Run it
`python -m http.server` in this folder, then open http://localhost:8000. Don't edit the built files by hand.

## Deploy
- GitHub Pages serves `main` at https://sai-sentinal-ai.github.io/tally-web/, so any push to `main` goes live within a minute.
- Releases come from the `tally` repo: `npm run deploy:web` there force-pushes a fresh build here (history is replaced each time). Ask Harry first.

## Secrets and config
None here, and none must ever be added: the repo is public. Supabase sync keys are the public anon kind inside the build.

## Layout
`index.html`, `assets/index-*.js` and `.css` (hashed names), `sw.js`, `manifest.webmanifest`, `icons/`, `docs/screenshot.png`, `.nojekyll`.

## Watch out for
- Changes to this repo are overwritten by the next `deploy:web`. Fix things in `tally`, then redeploy.
- Public: no source, personal data or keys.

## Related
- `tally` (source: `C:\Users\POJ\Documents\POJ\Code\tally`, its `CLAUDE.md` and `scripts/deploy-web.sh`).
