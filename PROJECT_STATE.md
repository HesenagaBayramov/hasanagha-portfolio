# PROJECT_STATE.md — Fast project handoff

**Updated:** 2026-11-11
**Stage:** Implementation underway. Design/content/architecture and the implementation phase are approved.
**Status:** Static Astro + TypeScript portfolio is deployed at https://hasanaghabayramov.vercel.app/ and pushed to GitHub `main`. The Web3Forms key is configured locally and in Vercel Production; the live EN/AZ Send buttons are enabled. Full section review and real inbox delivery remain open.

## Product
- Bilingual English-default `/` and Azerbaijani `/az` portfolio for Hasanagha Bayramov, centered on aspiring Offensive Security / penetration testing work.
- Approved Figma baseline: https://www.figma.com/design/J2P7uinespHs0uYjLNng70. Dark opening theme, optional light theme, centered 1120 px desktop content, mobile menu, section order About → Projects → Education → Certification → Skills → Contact.
- Only verified featured project is CampusSecure; two HackerRank Problem Solving certificates. The page includes two explicit future-project placeholders.
- The Terminal is a discreet header/menu button opening a centered simulated modal; typing targets about 11 seconds, sound starts muted, and Skip/Replay/Close are implemented.
- Confirmed facts and requirements: `PORTFOLIO_BRIEF.md`; accepted choices: `DECISIONS.md`; AZ wording: `AZ_COPY_DRAFT.md`.

## Current code map
| Path | Responsibility |
| --- | --- |
| `src/pages/index.astro`, `src/pages/az/index.astro` | English and Azerbaijani routes. |
| `src/layouts/SiteLayout.astro` | HTML shell, language, metadata, initial theme. |
| `src/components/PortfolioPage.astro` | Shared section composition and availability checks for CV/form. |
| `src/components/sections/` | Hero, About, Projects, Education, Certification, Skills, Contact. |
| `src/components/ui/` | Header/navigation/theme switch, section heading, Terminal modal. |
| `src/data/en.ts`, `src/data/az.ts`, `src/data/types.ts` | Typed localized copy. |
| `src/data/projects.ts`, `src/data/certificates.ts` | Verified item facts and outgoing links. |
| `src/lib/web3forms.ts` | Client form submission, timeout, response handling. |
| `tests/web3forms.test.mjs` | Mocked provider success, rejection, network/timeout, and honeypot checks. |
| `src/styles/tokens.css`, `src/styles/global.css` | Dark/light tokens and responsive layouts. |
| `public/icons/` | Local SVGs downloaded from the approved Figma frames. |
| `public/cv/` | Reserved for the real, current CV PDF. |
| `README.md`, `.env.example` | Local build and missing-input setup. |

## Behavior and boundaries
- Header provides desktop links, mobile menu, route-based language switch, and saved theme choice. Terminal uses static commands only, supports Escape and reduced motion, and does not invoke a shell.
- Contact form is visually present. Its Send button is enabled when `PUBLIC_WEB3FORMS_ACCESS_KEY` is set at build time, as it now is for local builds through ignored `.env` and Vercel Production builds. The form validates required fields, prevents duplicate submission, announces localized success/failure, clears only on success, preserves fields on failure, and has a honeypot and timeout. The public email link always remains available.
- CV action has no link until `public/cv/hasanagha-bayramov.pdf` exists. No PDF has been invented or published.
- Self-hosted Bricolage Grotesque, Geist, and Geist Mono variable font packages include Latin-ext subsets for Azerbaijani characters. Build output is static for Vercel.

## Verification actually run
- `npm run check`: 0 errors, 0 warnings, 0 hints (2026-11-11).
- `npm run build`: generated both `/` and `/az` (2026-11-11).
- `npm test`: 3 provider-adapter behavior tests passed (2026-11-11).
- `npm install` after upgrading to Astro 7.4.10: audit reported 0 vulnerabilities.
- Read generated HTML: seven sections in both routes, correct EN/AZ names, CampusSecure link; no missing CV href, Send disabled without key.
- Temporary placeholder-key build: Send was enabled; then rebuilt with the key removed and confirmed the dummy value is absent.
- Checked every referenced local SVG is nonempty. Checked root dimensions and callsites for the design icons.
- Initial GitHub commit `7c1e2e6` was pushed and confirmed on `HesenagaBayramov/hasanagha-portfolio` `main`.
- With the supplied key in ignored `.env`, `npm run check` passed with 0 diagnostics, `npm test` passed 3 tests, and `npm run build` generated both routes with Send enabled (2026-11-11). No live request or inbox delivery was tested. Astro telemetry needed disabling in the sandbox because its default user config directory was not writable.
- The user deployed the site to Vercel. Its initial production build had no environment key and showed a disabled Send button and a `wait` cursor. Added `PUBLIC_WEB3FORMS_ACCESS_KEY` to the Vercel Production environment and redeployed; Vercel reported Ready and a fresh browser visit showed enabled Send buttons on EN and AZ routes. The actual form submission/inbox is still untested. Changed the fallback disabled cursor to `not-allowed` in source.
- The sandboxed terminal could not reach localhost, while an allowed local request returned HTTP 200 and the in-app browser loaded the site. This was an execution-environment network boundary, not an Astro startup failure.
- Browser QA checked hero at Figma 1440 × 900 and 1920 × 1080 sizes, EN/AZ mobile hero, light theme, mobile menu, and Terminal. Widths 320, 390, 768, 1440 and 1920 px had no horizontal overflow. Fixed desktop hero position, mobile menu scroll locking/spacing, narrow-mobile spacing, and Terminal transcript geometry. Skip revealed all text, Replay restarted, Close returned focus, and sound began muted.
- Full visual comparison of every section, keyboard navigation, reduced-motion behavior, configured form states, and live inbox delivery remain unverified.

## Next actions
1. Complete the remaining section-by-section dark/light and EN/AZ browser comparison with Figma; verify keyboard navigation, reduced motion, Terminal timing, and form states. Fix mismatches.
2. Add the user-supplied current CV PDF when available. Verify Web3Forms account settings and send a controlled live test from the deployed domain, checking the owner inbox; confirm short retention and allowed host.
3. Finish deployment QA on the existing Vercel site: final links, metadata, downloads, and both localized routes.

Code and observed build results outrank this file if they disagree. Keep this handoff concise and update after the next material milestone.
