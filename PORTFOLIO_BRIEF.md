# Hasanagha Bayramov — Personal Portfolio Project Brief

**Status:** Figma visual direction, Azerbaijani copy, and implementation phase approved on 2026-11-11. See `PROJECT_STATE.md` for current code status.
**Last compiled:** 2026-11-11
**Purpose:** Transfer decisions from an extensive ChatGPT brainstorming conversation into Codex / ChatGPT Work / Figma without re-explaining them.

Earlier “draft” wording and open design questions below record the exploration history. The user's later approval of the current Figma frames and `AZ_COPY_DRAFT.md` supersedes those provisional labels. The user explicitly authorized implementation on 2026-11-11.

## 1. Vision and audience

Create a highly polished, distinctive, personal cybersecurity portfolio for **Hasanagha Bayramov (Həsənağa Bayramov)**. Its goals are (1) job and internship opportunities in cybersecurity, particularly Offensive Security / Red Team / penetration testing, and (2) long-term personal branding.

The site should make the visitor understand who he is, what he studies, what he has built, and how to contact him within the first screen. The overall impression must be **professional + approachable + creative**, with a personal, human tone. Avoid generic AI-generated layouts, repetitive gradient cards, stereotypical hacker visuals, and excessive animations.

**Content hierarchy:** cybersecurity first (~80% emphasis); programming and other technical/creative interests as a quieter secondary layer (~20%, primarily About Me).

**Languages:** English (default) + Azerbaijani (AZ/EN toggle). All user-facing content and relevant metadata should have natural, not literal, translations. No missing translation strings.
On desktop and mobile, use the same compact two-position sliding EN/AZ control, with EN selected by default. Its corners should have the same restrained rounding as the other buttons, not a pronounced pill shape.

## 2. Personal and professional facts — confirmed

- English name: **Hasanagha Bayramov**; Azerbaijani visible name: **Həsənağa Bayramov**, confirmed by the user on 2026-11-11.
- Public contact details supplied for the portfolio: location **Baku, Azerbaijan** in the English hero (**Bakı, Azərbaycan** in Azerbaijani localization; plain text), and **hsnagabayramov4@gmail.com** (clickable `mailto:` address). The GitHub profile URL `https://github.com/HesenagaBayramov` is confirmed as the owner profile of the supplied CampusSecure repository. The user supplied LinkedIn URL: `https://www.linkedin.com/in/hasanagha-bayramov-a4324134a/`.
- Current direction: **Cybersecurity learner**, focused on **Offensive Security, Red Team, and penetration testing**.
- Approved hero hierarchy: show **Hasanagha Bayramov** as the large heading with **Aspiring Penetration Tester** directly below. Approved English supporting sentence: “I’m building practical penetration-testing skills, currently focused on web application security.” Keep the hero direct; do not repeat student status there. Do not claim an established professional title or employment status.
- Approved hero alignment: center the name, role, supporting sentence, and actions in the spirit of the admired reference. Use this portfolio's own navy/teal styling and spacing.
- Studying Linux, networking, Linux privilege escalation, server pentesting; currently learning **web application security / web pentesting**. These are training/lab experiences, not production engagements.
- Programming experience began around **2020**. Familiar with **Python** (self-described around intermediate), **C++** (comfortable with algorithmic exercises), and exposure to **C, Java, HTML, CSS, JavaScript**, algorithms and problem solving. Do not claim mastery or fabricate skills; validate precise skill levels when presenting.
- The user also named **Docker** and **C** for the About Stack list and wants **C, C++, and Java** represented in Skills. Exact Docker and language proficiency is not established; do not imply mastery or describe C as a scripting language.
- Other interests relevant to personal voice: video editing, color grading, image/visual creativity. These are secondary and should not overshadow security work.
- The user describes using AI-assisted or "vibe coding" tools for programming; include this as a modest Beyond Security note rather than a cybersecurity credential.
- Motivation: curiosity and analytical investigation; enjoyment of understanding system behavior and finding overlooked problems. Cybersecurity appeals because it combines networking, Linux, programming, web technologies, and databases.

## 3. Education — confirmed

1. **Azerbaijan State Oil and Industry University (ASOIU)**
   - B.Sc. in Computer Engineering
   - **2024 — Present**; third-year student in **2026**.
2. **MilliSec**
   - Cybersecurity training with **Red Team / Penetration Testing** focus.
   - **May 2026 — Present**; currently ongoing. The user clarified May 2026 on 2026-11-11, superseding the earlier September note.

Education design direction requested on 2026-11-11: use the supplied reference's clear date / institution / program card structure, adapted to this portfolio's navy/teal styling. Show ASOIU (2024–present, third year in 2026) and ongoing MilliSec training (May 2026–present) as two desktop cards and stacked mobile cards. Exact card prose remains a draft.

**Certification:** Two HackerRank certificates have been supplied and shown in the user's screenshots, both earned **04 May 2026**:
- [Problem Solving (Basic)](https://www.hackerrank.com/certificates/74103c440c9d)
- [Problem Solving (Intermediate)](https://www.hackerrank.com/certificates/404592ca1a79)

The editable Figma draft presents them as two cards in one desktop row and stacked cards on mobile. Each card shows its certificate ID beneath the title. The concise Basic description covers arrays, strings, sorting, and searching; Intermediate covers hash maps, stacks, queues, and optimal algorithmic solutions, matching the supplied HackerRank descriptions. Do not treat these certificates as evidence of professional security experience or invent further credentials.

## 4. About Me — narrative direction (draft, not final copy)

The user wants a natural first-person story: started programming around 2020; became more interested in investigating systems and how they work than just writing code; turned to Offensive Security because of its multidisciplinary combination of programming, networking, operating systems, web applications and databases; now learning and developing practical penetration-testing skills.

Approved About layout direction (2026-11-11): a small `# ABOUT` label, a compact Studying / Focus / Stack fact list, and a first-person story starting with ASOIU and current MilliSec training. The exact year he began cybersecurity is not established; ask before adding one. On mobile, place the fact list before the narrative.

**Approved About headline:** “From code to security. Driven by curiosity.” Put the sentences on two deliberate lines. The user accepted this clearer wording on 2026-11-11 and requested smaller typography: 36 px desktop, 32 px mobile in the current Figma exploration. Preserve the centered desktop two-column block and comfortable right text width.

Later About refinement: Focus includes **Offensive Security, Red Team, and Web Application Security**; the compact Stack list is **Linux, Python, C, Docker, and Burp Suite**. Present each Focus and Stack item in a subtle outlined tag, following the user's reference image while matching the portfolio's navy/teal styling. The desktop narrative uses a narrower 600 px column and breaks the first sentence after “currently study”; center the resulting two-column block with equal outer margins. Mobile wraps naturally. The narrative should stress learning through controlled labs and applying what is studied. C++ and Java belong in the later Skills section with careful proficiency wording; C can also appear there with accurate context. Exact English and Azerbaijani prose remains under review.

**Working English draft (for later editing):**

> I'm a Computer Engineering student at ASOIU, and I currently study Red Team and Penetration Testing at MilliSec.
>
> My interest in technology began with programming around 2020. Over time, I became more interested in how systems work, the assumptions behind them, and what careful investigation can reveal. That curiosity led me toward Offensive Security.
>
> Now I'm building practical penetration-testing skills through controlled labs, with a focus on Linux, networking, and web application security. I learn best by applying what I study and understanding why a system behaves as it does.

**Approved Azerbaijani copy baseline:** See [AZ_COPY_DRAFT.md](AZ_COPY_DRAFT.md) for the current full-page wording and Figma text.

A small `Beyond Security` paragraph in the current Figma draft reads: “Outside security, I enjoy programming with AI-assisted tools, video editing, and color grading.” Avoid an unrelated full creative portfolio.

## 5. Projects — confirmed

### Featured Project 01 — CampusSecure

- Repository: https://github.com/HesenagaBayramov/CampusSecure
- A self-built **intentionally vulnerable university/student portal**, created for a university Information Security class.
- Implemented with **Python Flask + SQLite** for an isolated university web security lab. The repository documents a planned manual **Burp Suite (Proxy / Repeater)** comparison using Kali Linux and Ubuntu Server; its project specification says genuine manual Burp/VM evidence is still pending. Do not present that manual exercise as completed.
- Demonstrates three related Broken Access Control cases:
  1. **IDOR / BOLA:** access to another student's request/resource without proper object-level authorization.
  2. **BFLA:** a student-level user invoking an admin-only announcement function.
  3. **Mass Assignment / Improper Property-Level Authorization (BOPLA):** a protected role attribute can be changed without appropriate authorization.
- The repository README and project specification confirm `LAB_MODE=secure` (default) and `LAB_MODE=vulnerable` for three controlled API authorization scenarios; the modes share routes and schema. Treat this as a synthetic, local-only lab.
- The user also mentioned building an **AI assistant**, but its role in CampusSecure is **NOT established**. Ask to clarify before attributing any AI-assistant features to this project.
- Present CampusSecure as the **only currently established major portfolio project**. Do **not** invent additional projects, write-ups, repository contents or achievements.
- Structure the Projects UI to gracefully scale as more scripts, mini-tools, labs, and security write-ups are created.

The user requested a Projects design inspired by the reference portfolio's “Selected works” section, with CampusSecure as the only populated real project now and room for future projects on desktop and mobile. After reviewing wide and centered two-column drafts, the current desktop exploration uses three 360 px card slots in a wrapping grid with 20 px gaps: CampusSecure at left and two explicitly labeled “Coming soon” placeholders at center and right. Mobile keeps the CampusSecure card and shows two compact stacked placeholder tiles. The editable authorization-flow visual remains. Replace placeholders only with real future work; do not fabricate achievements, technologies, or demos. No live demo is available in the verified repository.

Suggested presentation: featured project card + optional detail page containing challenge, architecture, threat model, demonstrated issues, tools, safeguards, learning outcomes, screenshots and GitHub link. All details should be verified against actual repo before publication.

## 6. Reference website — inspiration only

Reference: https://khayaliszade.vercel.app

What the user likes:
- Clear, well-composed **hero** introducing the person and their specialty.
- Short, informative introductory copy.
- Immediately visible actions such as **View Projects**, **Get in Touch**, **Download CV**.
- Contact/location/social details below the intro.
- Clean modern typography; the user specifically wants the reference's text font pairing.
- Clearly presented **About**, **Education**, **Certifications**, and other portfolio sections.

Do **not** clone the design, CSS, layout or proprietary assets. Use the information architecture as inspiration, not as a template. The reference's public source uses **Bricolage Grotesque** for headings, **Geist Sans** for body text, and **Geist Mono** for small technical labels. This pairing was requested by the user on 2026-11-11. Confirm Azerbaijani glyph rendering and font licensing during design review.

## 7. Visual direction — strongly preferred, not yet final Figma design

**Concept:** `Editorial Minimalism × Technical Identity`.

- Dark mode biased toward **deep navy / petrol / dark teal-green**, not pure black, brown, neon green, Matrix rain, or cliché hacker motifs.
- Initial exploratory palette (NOT finalized): background `#0B1520`; deep navy `#12232D`; dark teal `#1B383B`; subdued accent `#85B5B6`; primary text `#E8EFF0`.
- Theme direction (requested 2026-11-11): open in **dark mode and English**; provide a quiet light mode using pale neutral surfaces, deep navy text, and restrained teal accents. The Figma light frames are editable drafts, not a final palette approval.
- Use the approved reference font pairing: **Bricolage Grotesque** headings, **Geist Sans** body, and subtle **Geist Mono** for technical accents, terminal, and metadata. Exact scale and weights remain to be designed.
- Thoughtful editorial spacing, restrained grid lines, subtle hover states and microinteractions. No noisy glow or generic AI gradients.
- Responsive, accessible on mobile, performance conscious.
- Hero actions are approved in this order: **Download CV** (outlined), **View Projects** (filled teal), **Get in Touch** (outlined). They appear left to right on desktop and top to bottom on mobile. The actual CV file/link and contact destinations remain to be supplied; do not invent them.

**Contact and footer direction (requested 2026-11-11):** Use a centered, concise invitation and a form with visibly labeled **Your name**, **Your email**, and **Your message** fields, plus a Send message action. On desktop, name and email share a row; on mobile, all fields stack. Show the supplied email as a clickable line beneath the form. GitHub and LinkedIn logo buttons in contact/footer link to their respective profiles in Figma. Web3Forms is the approved delivery route; explicit success/error states are drafted and live delivery still needs testing. Add a restrained back-to-top arrow near the lower-right edge that appears after the visitor scrolls down and returns to the page top when activated. The current Figma frames illustrate the scrolled state; they do not implement interaction. The English heading “Let's connect.” and its supporting sentence are draft copy for review.

**Hero contact line:** Beneath the three actions, show **Baku, Azerbaijan** (non-interactive), the supplied email (clickable `mailto:`), **GitHub** and **LinkedIn** (clickable profile links). Use thin upright divider lines between items, more space between the actions and detail row, and modestly wider gaps between the items. Desktop and wide desktop use one centered row; mobile stacks location, email, then a GitHub/divider/LinkedIn row. Increase the gap between the hero name and “Aspiring Penetration Tester” slightly. The top technical label now reads **OFFENSIVE SECURITY / WEB APPLICATION SECURITY / RED TEAM**; mobile keeps `/ RED TEAM` together on the second line.

**Header controls (latest direction):** Keep the desktop section links followed by the language switch, theme switch, and Terminal. The closed mobile header shows language and the hamburger trigger only; the opened menu contains section links, theme switch, and Terminal. Do not duplicate CV or social profile actions in the navbar. Earlier mobile-header Terminal placement is superseded.

## 8. Special interaction — chosen design decision

**Interactive Identity Terminal:** a discreet `Terminal` button (not an always-visible terminal panel) opens a **centered modal overlay**, with a dimmed background. This is an optional discovery/easter-egg, not required to read the site.

- Modal styled like a polished Linux terminal in the same navy/teal design language.
- On opening, a sequence of predefined commands appears with an animated typing cursor, one after another, followed by their outputs. Authentic-ish example:
  - `whoami` -> `hasanagha`
  - `cat profile.txt` -> name, focus, current path
  - `cat learning.txt` -> web app security and practical background
- No real arbitrary shell execution. Data is static site content.
- **Typing sound effect is optional and muted by default**; explicit sound toggle. Never autoplay sound without user choice.
- Provide **Skip**, **Replay**, and **Close** controls. Support `Esc` to close, focus management, mobile layout, reduced-motion settings, and keyboard navigation.
- Sequence stops after finishing; information remains readable. The user requested about 10–12 seconds of animated typing, with an 11-second target.
- Optional links at the end to Explore Projects / About Me, if they fit the approved design.
- **Center Modal is FINAL chosen form**, not side panel or fullscreen.

## 9. Information architecture — approved section order, details still open

1. Hero / Home (landing section; not a mobile menu row)
2. About Me (personal story, subdued creative interests)
3. Projects / Project Details (CampusSecure first; future write-ups/labs can live here)
4. Education
5. Certification (the two verified HackerRank problem-solving certificates)
6. Skills (security and programming knowledge, with honest levels)
7. Contact / Footer
8. Terminal Center Modal (cross-site interaction)

This section order and the navigation label `Certification` were explicitly chosen by the user on 2026-11-11. Desktop and mobile navigation should follow it. Skills is a separate section after Certification, intended to include programming knowledge without overstating proficiency. Present only the supplied certificates and link each to its verification page.

On large desktop screens, keep the navbar and main sections within a centered 1120 px maximum-width content container. Leave generous side margins and avoid stretching navigation or text to the viewport edges. The user accepted the desktop and wide-monitor Figma treatment on 2026-11-11. Keep decorative numbering out of the hero and mobile menu.

## 10. Decisions still OPEN

- Final approval of the drafted Azerbaijani translation and actions; actual CV file/link.
- Type scale, palette and contrast treatment.
- Remaining layout details and responsive breakpoints.
- Future project-detail routes only if later projects require them; CampusSecure links directly to GitHub for now.
- Final content for technical skills and relative proficiency.
- CV link/file and profile photograph availability; Web3Forms is selected for contact delivery, with live delivery still to be tested.
- Final Certification card wording and visual approval; the two certificate names, dates, and verification links above are supplied.
- Screenshot availability from CampusSecure, AI-assistant scope, precise lab functionality.
- Preferred motion behavior, keyboard sound asset choice and styling.
- Analytics/SEO/hosting considerations.

## 11. Collaboration requirements

- **Do not start implementation or scaffold the app during the first discovery step.** Begin with user-led brainstorming, then design work in Figma, and only then code after explicit approval.
- Do not repeatedly ask for the facts listed here; ask only about genuinely unresolved decisions.
- Make a small number of high-impact decisions per interaction, explain trade-offs, and present options.
- Do not fabricate credentials, certifications, professional experience, vulnerabilities beyond confirmed repo facts, extra projects, or contact info.
- Prefer a bespoke, polished layout rather than a generic portfolio template.
- Maintain an updated `DECISIONS.md` (if created) after user-approved design and content decisions.
