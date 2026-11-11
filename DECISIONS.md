# DECISIONS.md — User-approved project decisions

Only record decisions the user actually approved. Do not turn brainstorming suggestions into decisions. For detailed context, see `PORTFOLIO_BRIEF.md`.

| Area | Approved choice | Notes |
| --- | --- | --- |
| Purpose | Cybersecurity job opportunities **and** personal branding | Offensive Security first; creative interests secondary. |
| Languages | English (default) and Azerbaijani | All visible content translated naturally. |
| Character | Professional, approachable, distinctive, creative | Avoid generic AI aesthetics and stereotypical hacker themes. |
| Color direction | Dark navy + subdued deep teal-green, plus a restrained light variant | Dark mode is the default. Exact tokens and the light design remain subject to full-page review. |
| Typography | Use the admired reference's font pairing: Bricolage Grotesque for headings, Geist Sans for body text, and Geist Mono for restrained technical labels | Approved by user on 2026-11-11 after requesting the reference's text fonts. Source CSS and layout identify the families; exact sizes, weights, and spacing await design review. |
| Hero hierarchy | Display **Hasanagha Bayramov** as the large primary heading, with **Aspiring Penetration Tester** directly below | Approved by user on 2026-11-11. Precise layout remains open. |
| Hero supporting copy (EN) | “I’m building practical penetration-testing skills, currently focused on web application security.” | Approved in substance by user on 2026-11-11 after asking to remove the Computer Engineering student introduction. Natural Azerbaijani version remains to be reviewed. |
| Hero alignment | Center the name, role, supporting sentence, and actions, following the admired reference's composition | Approved by user on 2026-11-11. Adapt styling and spacing to this portfolio's own navy/teal direction. |
| Hero actions | Desktop order: **Download CV** (outlined), **View Projects** (teal filled), **Get in Touch** (outlined). Preserve the order in the mobile stack. | Approved by user on 2026-11-11 after reviewing the Figma hero. CV file/link is still pending. |
| Language control | Show the EN/AZ choice as the same compact segmented button on desktop and mobile, with lightly rounded corners consistent with other buttons | Approved by user on 2026-11-11 after reviewing the mobile-only concept. Figma currently shows the EN-selected visual state; English is the default. Motion and actual interaction await implementation. |
| Mobile navigation (superseded) | Initial requirement: include About, Education, Projects, Certifications, and Contact | Superseded later on 2026-11-11 by the exact six-section order below, including singular “Certification” and Skills. |
| Section order | **About → Projects → Education → Certification → Skills → Contact** | Approved by user on 2026-11-11. Use “Certification” as the navigation label; show no invented credentials. Home is the hero, not a menu item. |
| Desktop content width | Keep the navbar and main content in a centered 1120 px maximum-width area with generous side margins on large monitors | The 1440 px and 1920 px Figma treatments were accepted by the user on 2026-11-11. |
| Hero concept review | Current hero typography, copy, actions, and overall visual direction are accepted | User said the main visible screen feels right on 2026-11-11. The 1120 px centered treatment was accepted later; the complete site design still requires review. |
| Decorative numbering | Omit “01 / HOME” from the hero and 01–06 indexes from the mobile menu | User approved the cleaner Figma variant on 2026-11-11. Keep the subtle centered scroll cue. |
| About structure | Prefix the About label with a small terminal-style `#`; show Studying, Focus, and Stack quick facts beside the first-person narrative on desktop and before it on mobile | Requested by user on 2026-11-11. Exact About prose is still a draft; do not invent a cybersecurity start year. |
| About content emphasis | Highlight practical learning; include Docker in the short Stack facts and a restrained reference to AI-assisted programming in Beyond Security | Requested by user on 2026-11-11. Exact prose remains a draft; C, C++, and Java can be presented with honest levels in Skills. |
| About quick-fact tags | Keep Red Team in Focus; show each Focus and Stack item in its own lightly outlined, compact tag | User confirmed Red Team and requested boxed labels after sharing a visual reference on 2026-11-11. |
| About copy width and C tag | Use a narrower desktop story column with an intentional break in the opening sentence after “currently study”; center the resulting two-column block with equal outer margins; add C beside Python in the Stack tags | Requested by user on 2026-11-11 and refined after a symmetry review. Keep mobile text responsive; present C as a language, without claiming C is a scripting language. |
| About headline | Use “From code to security. Driven by curiosity.” as two deliberate lines, with a restrained type size on desktop and mobile | User accepted the wording and requested the two-line, smaller treatment on 2026-11-11. |
| Terminal | Discreet button opens a **centered modal** | Typed simulated commands; optional muted-by-default sound, Skip / Replay / Close. |
| Education | ASOIU Computer Engineering (2024–present, third year in 2026); MilliSec Red Team/pentest (May 2026–present) | The user reconfirmed ASOIU details and requested reference-inspired cards on 2026-11-11, then confirmed MilliSec's May 2026 start, superseding an earlier September note. |
| Certification | Show the two supplied HackerRank Problem Solving certificates in a two-card desktop row and stacked mobile layout | User supplied both verification links and certificate screenshots on 2026-11-11. Both certificate faces show 04 May 2026. Exact card prose and visual details remain a draft for review. |
| Projects | Present CampusSecure as the only current project; use compact cards in a three-column desktop grid and a single mobile column, with two explicit “Coming soon” placeholders for future work | User requested a smaller left-aligned card, then asked to fill the two remaining desktop positions with clearly labeled placeholders on 2026-11-11. Do not invent more projects or certificates. |
| Contact / Footer | Use a labeled name/email/message form, GitHub and LinkedIn logo buttons, and a lower-right back-to-top control | Requested by user on 2026-11-11 using the reference screenshot. Both social links are now supplied/verified; form delivery remains pending. Exact heading copy and appearance are Figma drafts. |
| Hero and Contact details | Display Baku, Azerbaijan, the supplied email, GitHub, and LinkedIn beneath hero actions; show the email beneath the contact form | The initial Bakı label and three-item hero row were superseded by the user's later English-label and LinkedIn request on 2026-11-11. Location is plain text; email uses `mailto:`, GitHub links to the verified CampusSecure owner profile, and LinkedIn uses the user's supplied URL. |
| Process | Brainstorming → Figma design/review → approval → incremental coding | Do not implement before explicit approval. |

## Pending (not approved)
- Hero Azerbaijani copy and action translations; CV file/link; full-page type scale and final palette; detailed navigation behavior; stack/deployment.
- CV and photographs; any further certificates; verified project screenshots and any AI assistant feature.

## New decisions
Append items with **date, the actual choice, why, and impact**. If a decision changes, mark it superseded rather than silently contradicting earlier instructions.

### 2026-11-11 — Reference typography
- **Choice:** Use Bricolage Grotesque for headings, Geist Sans for body copy, and Geist Mono sparingly for technical labels.
- **Why:** The user explicitly likes the typography of the linked friend's portfolio. Its public source defines this pairing in `app/globals.css` and `app/layout.tsx`.
- **Impact:** Explore this font system in Figma for both English and Azerbaijani; determine sizes, weights, contrast, and licensing before implementation. The rest of the layout remains original.

### 2026-11-11 — Hero heading hierarchy
- **Choice:** Make the name the largest hero heading and place “Aspiring Penetration Tester” directly below.
- **Why:** The user confirmed this hierarchy after reviewing the admired reference's hero structure.
- **Impact:** Hero copy and Figma concepts should preserve this order; actions and alignment still need review.

### 2026-11-11 — Direct hero supporting sentence
- **Choice:** Use “I’m building practical penetration-testing skills, currently focused on web application security.” as the English supporting sentence.
- **Why:** The user wants the hero to speak directly about current security work without repeating student status.
- **Impact:** Review a natural Azerbaijani translation during the design phase; keep education details in their own section.

### 2026-11-11 — Centered hero composition
- **Choice:** Center the hero's name, role, short sentence, and action buttons on desktop and mobile.
- **Why:** The user explicitly prefers the admired reference's centered hero presentation.
- **Impact:** Use this structure as a Figma starting point while making the visual details original to the cybersecurity portfolio.

### 2026-11-11 — Three hero actions
- **Choice:** Place Download CV to the left of View Projects, with Get in Touch on the right; make View Projects the filled teal action and the other two outlined. Stack them in the same order on mobile.
- **Why:** The user explicitly requested this arrangement after viewing the initial Figma concept.
- **Impact:** Figma hero frames now show all three actions. The actual CV destination must be supplied before a functional website can link it.

### 2026-11-11 — Mobile language and navigation controls
- **Choice:** Use an EN/AZ segmented control with a sliding active indicator in the mobile header, alongside Terminal and a menu trigger. The menu must include About, Education, Projects, Certifications, and Contact.
- **Why:** The user requested an obvious language switch and access to the portfolio sections on mobile.
- **Impact:** The initial Figma menu included Home and Skills while the order was still open. The later section-order decision supersedes that provisional menu content; navigation behavior still needs review.

### 2026-11-11 — Consistent language control across viewports
- **Choice:** Use the same EN/AZ segmented button on desktop and mobile. Give its outer and inner corners the restrained rounding used by the other buttons, instead of a pill shape.
- **Why:** The user wants the control to belong visually to the same interface on every screen size.
- **Impact:** The Figma desktop hero and both mobile states now share one component. The active segment should slide when the language changes in the eventual site; Figma currently shows the EN state.

### 2026-11-11 — Section order and centered desktop content
- **Choice:** Order the sections About, Projects, Education, Certification, Skills, Contact. Keep the desktop navbar and content centered inside a maximum-width container, with breathing room at the sides on wide screens.
- **Why:** The user wants Skills to follow Certification for programming knowledge, and wants the layout to stay balanced on large monitors.
- **Impact:** The Figma desktop and mobile navigation labels were reordered. The centered maximum-width rule was applied in Figma after student-plan access resumed and accepted in a later review.

### 2026-11-11 — Hero concept accepted for continuation
- **Choice:** Keep the current hero visual character, wording, and button arrangement as the basis for the rest of the site.
- **Why:** The user confirmed that the main visible screen looks and reads as intended.
- **Impact:** Continue content architecture and the remaining sections in the same visual language. The maximum-width refinement was subsequently applied and accepted; this does not approve website coding.

### 2026-11-11 — Approve restrained navigation treatment
- **Choice:** Keep the 1120 px centered desktop content treatment and the numbering-free hero/menu presentation shown in Figma.
- **Why:** The user confirmed that the current menus, buttons, and overall visible screen match the intended look.
- **Impact:** Extend the same spacing and restrained labeling to the remaining sections. The full site design still needs separate review before coding.

### 2026-11-11 — About information layout
- **Choice:** Use a subtle `# ABOUT` label, a Studying / Focus / Stack fact list, and a personal narrative that begins with ASOIU and MilliSec before explaining the move from programming to security.
- **Why:** The user requested these elements after reviewing the first About concept.
- **Impact:** Desktop uses a compact two-column composition; mobile stacks the facts before the story. Exact copy and the year security study began still need confirmation.

### 2026-11-11 — About practical learning and secondary interests
- **Choice:** Emphasize building skills through hands-on study, add Docker to the compact Stack facts, and mention programming with AI-assisted tools in the small Beyond Security note.
- **Why:** The user requested these refinements after reading the About draft.
- **Impact:** Desktop and mobile Figma drafts now show this wording. C, C++, and Java are held for Skills, where their varying levels can be represented accurately. Final prose is still awaiting review.

### 2026-11-11 — Boxed About quick facts
- **Choice:** Keep Red Team alongside Offensive Security and Web Application Security in Focus, and present each Focus and Stack item as an individual, subtly outlined tag.
- **Why:** The user confirmed Red Team and provided a reference image showing small boxes around quick-fact terms.
- **Impact:** Desktop and mobile About drafts use editable tag layers with restrained navy and teal styling; Studying remains a plain text row.

### 2026-11-11 — Narrower desktop About copy and C in Stack
- **Choice:** Reduce the desktop About story width from 680 to 600 px, break the opening sentence after “currently study,” and add C beside Python in the Stack tags on both viewports.
- **Why:** The user wants shorter, more comfortable lines on desktop and wants C represented in the quick facts.
- **Impact:** Figma desktop copy now wraps more tightly while mobile keeps natural responsive wrapping. C is shown as a programming language; no scripting proficiency claim is added. After the user pointed out unequal side margins, the 1040 px two-column block was centered inside the 1120 px content area, giving 200 px margins on both sides of the 1440 px frame.

### 2026-11-11 — Two-line About headline
- **Choice:** Keep “From code to security. Driven by curiosity.” and present the two sentences on separate lines; use 36 px type on desktop and 32 px on mobile.
- **Why:** The user likes the clearer security-focused wording but wants it less dominant and wants the quick facts closer beneath it.
- **Impact:** Both Figma About frames now show exactly two title lines. The desktop two-column block stays centered, and the right story column retains its comfortable 600 px measure.

### 2026-11-11 — Projects content and growth
- **Choice:** Show only CampusSecure in Projects now and allow later projects to join the section on desktop and mobile. Use the reference portfolio's “Selected works” treatment as inspiration.
- **Why:** The user has one established project today and explicitly expects to add more.
- **Impact:** The first Figma concept used one substantial wide card. The later compact-grid decision supersedes that width; the exact visual details still need user review.

### 2026-11-11 — Compact desktop Projects grid
- **Choice:** Replace the oversized full-width desktop card with a 548 px card in a centered, wrapping two-column grid. Keep one project card per row on mobile.
- **Why:** The user wants faster visual scanning and a layout that stays manageable as more projects are added.
- **Impact:** This first compact draft was superseded after review by the smaller left-aligned three-column grid below. No empty or invented cards were displayed.

### 2026-11-11 — Smaller left-aligned Projects cards
- **Choice:** Use 360 px cards in a wrapping three-column desktop grid with 20 px gaps; show the sole CampusSecure card in the first column. Preserve the single-column mobile card.
- **Why:** The user found the 548 px centered card too large and preferred a scannable row resembling the reference's multi-card rhythm.
- **Impact:** Future real projects can replace the second and third desktop slots, then wrap. The later “Coming soon” decision fills those slots with transparent placeholders; there are no invented or duplicate project claims.

### 2026-11-11 — Explicit future-project placeholders
- **Choice:** Add two clearly labeled “Coming soon” cards beside CampusSecure on desktop, with compact stacked equivalents on mobile.
- **Why:** The user does not want empty desktop columns while only one real project is ready.
- **Impact:** The Figma grid has three equally sized cards. Placeholder text and plus marks communicate future slots without attributing work, tools, or results that do not exist.

### 2026-11-11 — Education card direction
- **Choice:** Present ASOIU and the ongoing MilliSec training as two clear education cards on desktop and stacked cards on mobile, inspired by the supplied reference image. Show ASOIU as 2024–present and third year in 2026.
- **Why:** The user requested this layout and reconfirmed the university details.
- **Impact:** Editable Figma drafts use the confirmed facts. The user may have corrected MilliSec's start month; the draft shows only 2026–present until that point is clarified. Card prose and visual details still need review.

### 2026-11-11 — Two verified certificates
- **Choice:** Show the supplied HackerRank Problem Solving (Basic) and Problem Solving (Intermediate) certificates as two cards in one desktop row and stacked on mobile, with direct verification links.
- **Why:** The user supplied both certificate URLs and requested the reference-inspired two-card arrangement. Their screenshots show 04 May 2026 on both certificate faces.
- **Impact:** The Figma drafts use these dates and describe only the assessed problem-solving topics. The content and appearance still await user review; no additional certificate is implied.

### 2026-11-11 — Certificate IDs and focused descriptions
- **Choice:** Show each HackerRank certificate ID beneath its card title and describe its assessed topics in one short sentence. Basic covers arrays, strings, sorting, and searching; Intermediate covers hash maps, stacks, queues, and optimal algorithmic solutions.
- **Why:** The user explicitly requested visible IDs and concise explanations aligned with the supplied HackerRank descriptions.
- **Impact:** Desktop and mobile Figma cards now include the IDs and revised copy. The Intermediate topic tag reads “Optimal solutions.” The exact visual treatment still needs review.

### 2026-11-11 — Contact, footer, and back-to-top direction
- **Choice:** Show a centered contact invitation and a form with labeled name, email, and message fields; use a two-field desktop row and one mobile column. Include GitHub and LinkedIn logo buttons in the contact area and footer. Show a back-to-top arrow at the lower-right after scrolling.
- **Why:** The user supplied a reference image, requested those form fields and social actions, and described the return-to-top interaction.
- **Impact:** Desktop/mobile Figma drafts illustrate the layout and scrolled-state arrow. The user will supply profile links later. Form delivery, validation/success/error states, exact copy, and the scroll threshold remain open for the design and engineering phases.

### 2026-11-11 — Supplied email and hero contact line
- **Choice (partly superseded):** Put Bakı, Azərbaycan, the supplied email, and GitHub beneath the hero actions; repeat the email below the contact form. Keep location as plain text and make the email and GitHub items clickable. The later refinement below supersedes the displayed location wording and adds LinkedIn.
- **Why:** The user supplied `hsnagabayramov4@gmail.com` and requested the reference-inspired detail row and direct contact links.
- **Impact:** Desktop, wide desktop, and mobile hero Figma frames now show the details. Email text uses `mailto:` hyperlinks; GitHub text and contact/footer buttons lead to `https://github.com/HesenagaBayramov`, verified as the owner profile of the supplied CampusSecure repository. LinkedIn remains unlinked pending its URL.

### 2026-11-11 — Hero spacing and metadata refinement
- **Choice:** Use “Baku, Azerbaijan” in the English hero, add LinkedIn after GitHub, and separate desktop metadata items with thin upright lines and more breathing room. Increase the name-to-role and actions-to-metadata gaps. Add `/ RED TEAM` to the top technical label; keep that phrase together on a second mobile line.
- **Why:** The user reviewed the prior hero and requested these exact wording and spacing changes.
- **Impact:** Desktop, wide desktop, and mobile Figma hero frames show the revised composition. Email and GitHub remain linked; LinkedIn remains a visible unlinked placeholder until the profile URL is supplied.

### 2026-11-11 — Supplied LinkedIn profile
- **Choice:** Use `https://www.linkedin.com/in/hasanagha-bayramov-a4324134a/` for the visible LinkedIn actions.
- **Why:** The user supplied this exact profile URL after reviewing the hero.
- **Impact:** LinkedIn text in desktop, wide desktop, and mobile hero frames has a Figma URL hyperlink. Contact and footer LinkedIn buttons on desktop and mobile have URL click reactions. The URL was supplied by the user; automated page fetching was unavailable.

### 2026-11-11 — Two themes and simpler navigation
- **Choice:** Open in English and dark mode, with an optional light mode. Keep desktop header controls to language, theme, and Terminal alongside the section links. Keep only language and the menu trigger in the closed mobile header; place theme and Terminal inside the opened menu. Do not put CV, GitHub, or LinkedIn in either header.
- **Why:** The user requested a light version, then rejected the crowded header and asked for a quieter minimalist arrangement. The earlier mobile-header Terminal choice is superseded here.
- **Impact:** Editable dark and light Figma frames show this arrangement. Hero CV and contact/social links remain visible. Theme and navigation interactions are design intent; no website code has been implemented.

### 2026-11-11 — Center desktop section links between header ends
- **Choice:** Position the About–Contact link group in the available space between the HB monogram and the language/theme/Terminal controls, with balanced gaps on each side.
- **Why:** The user noticed that the links were too close to the language control.
- **Impact:** Dark and light 1440 px and 1920 px Figma hero headers use three sibling groups: monogram, section navigation, and controls.

### 2026-11-11 — Architecture requirements confirmed
- **Choice:** Keep CampusSecure on the portfolio page with a direct link to its GitHub repository; no separate project page for now. Contact form submissions should arrive at `hsnagabayramov4@gmail.com`. Store the CV as an easily replaceable site asset once the user supplies the updated file.
- **Why:** The user confirmed these boundaries while starting architecture planning. CampusSecure is currently a lab, and the CV on hand is outdated.
- **Impact:** The stack, mail delivery provider, deployment platform, and exact asset path remain proposals for review. The user also accepted mobile performance, keyboard access, personal-portfolio scale, low data retention, and owner-maintained content as planning assumptions. No app code has been created.

### 2026-11-11 — Vercel hosting without a custom domain
- **Choice:** Deploy the portfolio on Vercel using its provided site address; do not depend on a personally owned domain.
- **Why:** The user explicitly chose Vercel and said they will not use a custom domain.
- **Impact:** Architecture options must support that hosting setup. Stack and contact-form provider remain under review; a mail service requiring a verified sending domain is not a suitable initial dependency.

### 2026-11-11 — Reject Formspree for contact delivery
- **Choice:** Do not use Formspree for the portfolio contact form.
- **Why:** The user reviewed the proposed service and explicitly disliked it.
- **Impact:** Compare other domain-free ways to email contact submissions on Vercel. The delivery provider and backend design remain open.

### 2026-11-11 — Use Web3Forms for contact submissions
- **Choice:** Use Web3Forms to send contact-form submissions to `hsnagabayramov4@gmail.com` from the Vercel-hosted portfolio.
- **Why:** The user prefers it to Formspree, has a friend using it, and approved continuing with this approach.
- **Impact:** Plan a browser-side form integration with no portfolio mail endpoint or message database. Configure short retention if available on the chosen plan, and verify delivery on the actual `vercel.app` address before launch. Framework and detailed file hierarchy are still under design review.

### 2026-11-11 — Astro and TypeScript file structure
- **Choice:** Build the single-page portfolio with Astro and TypeScript. Use `/` for English and `/az` for Azerbaijani, one shared portfolio composition, section and UI components, separate localized text and verified project/certificate data, a Web3Forms integration module, shared theme styles, and a replaceable CV asset under `public/cv`.
- **Why:** The user accepted the proposed lightweight architecture and file tree after reviewing how future projects, translations, and CV updates would work.
- **Impact:** The file structure is an approved design, not yet scaffolded. The final architecture document still needs data-flow, error-handling, testing, and remaining Figma design review before implementation.

### 2026-11-11 — Clear contact submission feedback
- **Choice:** After a successful Web3Forms response, show an explicit success message such as “Mesaj uğurla göndərildi.” If submission fails, show an explicit failure message such as “Göndərmə uğursuz oldu. Xəta baş verdi.” Provide natural English equivalents on the English page.
- **Why:** The user requested unmistakable success and error feedback from the contact form.
- **Impact:** Clear form fields only after success. Keep entered values on failure so the visitor can retry; design visible, accessible message states before implementation.

### 2026-11-11 — Validate architecture data flow and release checks
- **Choice:** Render `/` and `/az` from shared Astro components and separate localized data; default to dark and remember an explicit theme choice. Keep Terminal interactions local. Submit the contact form to Web3Forms with explicit localized result messages, retain entered values on failure, and verify real delivery from the Vercel address before launch. Check layout, links, keyboard access, reduced motion, build/type health, and contact success/failure paths.
- **Why:** The user reviewed and approved the proposed data flow and verification plan, with the requested success/failure wording.
- **Impact:** `ARCHITECTURE_PLAN.md` records the validated architecture and remaining design/implementation gates. This approves planning only; website coding still requires the separate implementation approval described in `AGENTS.md`.

### 2026-11-11 — Refine Terminal playback and sound
- **Choice:** Place the simulated command transcript inside a visibly bordered panel within the centered Terminal modal. Make Skip, Replay, and Close visually compact. Show an icon and text for the sound toggle, which starts muted. The typing sequence should take about 10–12 seconds (target around 11 seconds). When sound is enabled by the visitor, use a restrained futuristic digital keystroke effect with a cyberpunk feel; never play it automatically.
- **Why:** The user marked the transcript area in the desktop draft and requested a clearer frame, smaller controls, a sound icon, a 10–12-second typing sequence, and a cyber-themed writing sound.
- **Impact:** The dark/light desktop/mobile Figma drafts show the framed transcript, compact controls, and muted icon. During implementation, Skip reveals the complete transcript immediately, Replay restarts it, and Close stops playback; respect reduced-motion preferences and provide accessible button labels. The Figma drafts are visual states, not working animation or audio.

### 2026-11-11 — Confirm AZ display name and MilliSec month
- **Choice:** Show **Həsənağa Bayramov** in the Azerbaijani version and date the ongoing MilliSec training **May 2026–present**.
- **Why:** The user answered both open factual questions directly during the bilingual design review.
- **Impact:** Education Figma dates and the AZ copy draft use the confirmed details. The rest of the AZ wording remains a review draft, not an approved content decision.

### 2026-11-11 — Approve current Figma design and AZ copy
- **Choice:** Treat the current English dark/light desktop/mobile Figma views and the Azerbaijani copy in `AZ_COPY_DRAFT.md` with its AZ text-fit frames as the approved design and content baseline.
- **Why:** After the full design and localization review, the user replied that everything was in order.
- **Impact:** Future design adjustments can build on this baseline. This approves the visual and content direction only; `AGENTS.md` still requires an explicit implementation-phase approval before scaffolding or coding.

### 2026-11-11 — Start the implementation phase
- **Choice:** Begin the approved Astro + TypeScript implementation in milestones using the accepted Figma frames and Azerbaijani copy.
- **Why:** The user explicitly authorized coding after the design and architecture review.
- **Impact:** The earlier implementation hold is lifted. CV publication and Web3Forms delivery still depend on the real PDF, access key, provider setup, and end-to-end verification.
