# Site structure — design draft

**Status:** Current full-page Figma visual direction and AZ copy approved on 2026-11-11. Implementation is not yet approved.
**Updated:** 2026-11-11

## Page flow

The approved section order is **About → Projects → Education → Certification → Skills → Contact**. Home is the hero above these sections. The discreet Terminal button opens a centered modal from the page header.

| Section | Purpose | Content boundary |
| --- | --- | --- |
| Hero / Home | Introduce Hasanagha and provide immediate actions. | Approved name, role, English sentence, and Download CV / View Projects / Get in Touch order. The top label includes Red Team. Beneath the actions, Figma shows plain-text Baku, Azerbaijan plus linked email, GitHub, and LinkedIn, separated by thin vertical dividers. Desktop uses one row; mobile uses three compact lines. CV destination is pending. |
| About | Tell the first-person story behind the move from programming to Offensive Security. | Lead with ASOIU and MilliSec, then the path from programming around 2020 toward security and hands-on lab learning. Keep Studying as text; show Focus and Stack terms as compact outlined tags, including Red Team, Docker, and C beside Python. Keep desktop prose in a narrower column; mobile wraps naturally. Add a brief AI-assisted programming / creative-interest note. Exact copy and cybersecurity start year need review. |
| Projects | Show practical security work, led by CampusSecure. | CampusSecure is the only established featured project. The repository confirms a fictional Flask/SQLite portal with secure/vulnerable modes and three controlled API authorization scenarios; manual Burp/VM evidence is pending. Current Figma draft has a “Selected works” heading, one real compact CampusSecure card, and two explicitly labeled “Coming soon” slots. The desktop grid has three cards per row; the mobile placeholders are shorter stacked tiles. CampusSecure links directly to its GitHub repository; no detail route is needed for now. Replace placeholders with verified future projects; show no invented achievements or live-demo link. |
| Education | Present the two confirmed study paths clearly. | Figma explores two cards on desktop and stacked cards on mobile. ASOIU Computer Engineering, 2024–present, third year in 2026; MilliSec Red Team / Penetration Testing, May 2026–present (confirmed by the user). |
| Certification | Show verified problem-solving credentials. | Two HackerRank certificates: Problem Solving (Basic) and (Intermediate), both earned 04 May 2026, with certificate IDs and supplied verification links. Figma shows two cards side by side on desktop and stacked on mobile; concise descriptions follow the supplied skill-test topics. No other credentials are established. |
| Skills | Group security learning and programming knowledge after Certification. | Include Python, C++, C, and Java with careful wording about varying experience; consider Docker in the tools group. Avoid unsupported proficiency bars or claims of mastery. |
| Contact / Footer | Give visitors a direct way to reach Hasanagha. | Figma desktop/mobile drafts show a centered invitation, a three-field name/email/message form, a Send message action, a linked email line, and linked GitHub/LinkedIn logo buttons. Desktop fields share a name/email row; mobile fields stack. Web3Forms should email submissions to `hsnagabayramov4@gmail.com`. Explicit success and failure states are drafted; retain entered values on failure. The replaceable CV asset is pending. |

## Navigation and responsive behavior

- Desktop and mobile navigation use the approved section order. The HB mark can return to the hero; the mobile menu displays the six section links.
- Navbar and main sections sit inside the accepted 1120 px maximum-width container on desktop. The section links are centered in the space between the HB monogram and right-side controls, with balanced gaps. Wide screens gain side margins instead of stretched content; the 1440 px and 1920 px Figma treatments were reviewed by the user.
- Mobile sections follow a single-column reading order. Desktop header controls are the EN/AZ switch, theme switch, and Terminal after the section links. The closed mobile header contains only the EN/AZ switch and menu trigger; the opened menu contains the six section links, theme switch, and Terminal. CV, GitHub, and LinkedIn stay in the hero/contact areas rather than the navbar.
- All visible copy and metadata need natural English and Azerbaijani versions. The site opens in English and dark mode; visitors can switch to light mode. Editable Figma drafts now cover both themes for the existing desktop and mobile sections.
- The Terminal remains optional to explore and never blocks access to the main page content. It has static simulated commands, muted-by-default sound, Skip / Replay / Close, keyboard access, and reduced-motion support.
- A back-to-top arrow appears near the lower-right corner after sufficient scrolling; activation returns to the page top. It needs a clear accessible name, keyboard access, and reduced-motion behavior in the eventual site. The Figma frames depict only the visible scrolled state.

## Design questions still open

1. Obtain explicit approval to start the implementation phase.
2. Add the actual CV asset and any genuine CampusSecure visuals when supplied.
3. Verify intermediate responsive widths, accessibility, and interactions while coding the approved design.

The technology stack and deployment plan follow approval of the complete design. No website code is authorized yet.
