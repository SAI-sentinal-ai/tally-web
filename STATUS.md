# Status
**Updated:** 2026-10-31
**State:** active
**Summary:** The built web version of Tally, served by GitHub Pages at https://sai-sentinal-ai.github.io/tally-web/. The live build was deployed on 2026-10-21, a minute after the Claude helper was removed in the source, so it is the 0.5.0 code (inferred).
**Next:** Nothing needed here. The next change comes from a fresh `npm run deploy:web` in the `tally` repo.

## Done recently
- 2026-10-31: claude.ai connectors turned off for this project (`.claude/settings.json`, on GitHub).
- 2026-10-31: CLAUDE.md added (local commit, not pushed yet).
- 2026-10-30: README and screenshot added.
- 2026-10-21: current build deployed ("Deploy 2026-10-20T22:48Z", UTC).

## In progress and open questions
- Local `main` is one commit ahead (CLAUDE.md) and one behind (`.claude/settings.json`) GitHub, so a push needs a pull first.
- The next `deploy:web` force-pushes a fresh history, which removes everything added here by hand: README, screenshot, CLAUDE.md, STATUS.md, DECISIONS.md and `.claude/`. Whether to copy them into the build, or accept losing them, is Not recorded.
- The README still says the host is not confirmed. GitHub reports Pages as built from `main`, root folder.

## Plan
- Not recorded.

## Where it runs
- GitHub Pages, from `main`, at https://sai-sentinal-ai.github.io/tally-web/. Any push to `main` goes live within a minute or so.
- Installed on iPhone as a home-screen web app; `sw.js` caches it for offline use.
- Repo: https://github.com/SAI-sentinal-ai/tally-web (public). The source is in the private `tally` repo.
