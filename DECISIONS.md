# Decisions

## 2026-10-31 Turn off claude.ai connectors here
Decision: `.claude/settings.json` sets `disableClaudeAiConnectors`.
Why: Not recorded (commit 359e6b5).

## 2026-10-21 Each deploy replaces the whole repo
Decision: `npm run deploy:web` in `tally` builds the site, makes a new one-commit git repo from `dist/` and force-pushes it here.
Why: Not recorded (inferred: the repo is only a copy of the build, so its history has no value). The cost is that anything added here by hand is lost on the next deploy.

## 2026-10-17 Publish only the built site, from a separate public repo
Decision: the source stays in the private `tally` repo. This public repo holds only the built files, with relative paths (`base: "./"`) and a `.nojekyll` file so GitHub Pages serves them as they are.
Why: the comment in `scripts/deploy-web.sh` says only the built site goes here, not the source. Inferred: Pages needs a public repo on the current plan.

## 2026-10-17 iPhone gets a home-screen web app, not a native one
Decision: the same web code as the desktop app, with a phone layout, a key row and an offline cache, installed from Safari.
Why: Not recorded (inferred: one code base, and no App Store step).
