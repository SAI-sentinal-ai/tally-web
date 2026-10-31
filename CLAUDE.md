# Tally web build

The built iPhone/web version of Tally, Harry's notepad calculator (sums on lines, named values, history, sync). This repo holds only the built PWA files; the source is the `tally` repo.
Business: personal. Background: the general-context skill, and the `tally` repo's CLAUDE.md and STATUS.md.

Start by reading STATUS.md (where things stand) and DECISIONS.md (why things are the way they are).

## Stack
Static files only: built JavaScript and CSS in `assets/`, `index.html`, `manifest.webmanifest`, service worker `sw.js`, `icons/`. No source, no build step. Public repo.

## Run it
`python -m http.server` in this folder, then open http://localhost:8000. Don't edit the built files by hand.

## Deploy
- GitHub Pages serves `main` (root folder) at https://sai-sentinal-ai.github.io/tally-web/, so any push to `main` goes live within a minute.
- Releases come from the `tally` repo: `npm run deploy:web` there force-pushes a fresh build here (history is replaced each time). Ask Harry first.

## Secrets and config
None here, and none must ever be added: the repo is public. The sync keys inside the build are the publishable kind, public by design.

## Layout
`index.html`, `assets/index-*.js` and `.css` (hashed names), `sw.js`, `manifest.webmanifest`, `icons/`, `docs/screenshot.png`, `.nojekyll`, `.claude/settings.json` (turns off claude.ai connectors).

## Watch out for
- Changes to this repo are overwritten by the next `deploy:web`, including README, CLAUDE.md, STATUS.md and DECISIONS.md. Fix things in `tally`, then redeploy.
- Public: no source, personal or business details, server names or keys. That goes for these docs too.

## Related
- `tally`: the source, its `CLAUDE.md` and `scripts/deploy-web.sh`.
