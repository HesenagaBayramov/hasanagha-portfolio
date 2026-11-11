# Project agent instructions — Hasanagha's cybersecurity portfolio

For a **new thread or substantial task**, first read `PROJECT_STATE.md` for a fast handoff. Read relevant parts of `PORTFOLIO_BRIEF.md` (confirmed facts/requirements) and `DECISIONS.md` (approved choices) as needed. These docs guide but do not replace inspection of actual code when implementing changes.

## Current stage
Implementation underway. The user explicitly approved the implementation phase on 2026-11-11 after approving the Figma design and AZ copy. Build in separate milestones, then verify the rendered site and contact delivery before deployment. Do not claim that unverified interactions or inbox delivery work.

## Operating rules
- Use an installed brainstorming skill if available. If missing, use an equivalent structured, collaborative brainstorming workflow; do not claim a missing skill ran.
- Use Figma tools/skills only if actually connected and supported in this environment. Create editable Figma designs and iterate with user approval before treating them as implementation specs.
- Never assume a fresh Codex session sees older ChatGPT chats or memories. Rely on project files and current conversation.
- Do not re-ask facts already in `PORTFOLIO_BRIEF.md`; clarify open decisions only.
- Maintain factual integrity: do not invent experience, certificates, projects, skills, CV, contacts, or links. Verify repository details before publishing them.
- Primary identity: aspiring Offensive Security / penetration-testing professional; creative interests secondary.
- Default language English; provide natural Azerbaijani localization. Ensure mobile usability and accessibility.
- Avoid Matrix/hacker stereotypes, neon-green text, generic AI-design tropes, loud animations or autoplay audio.
- Terminal is a **discreet button opening a centered modal** with simulated typing, sound muted by default, and Skip/Replay/Close.
- Prefer concise per-phase plans and user approval at major design/engineering gates. Document confirmed decisions in `DECISIONS.md` rather than burying them in chat.
- Keep code maintainable, componentized, well documented, tested, and production-ready once coding is approved.

## Efficient project-memory workflow
- **Do not repeatedly scan or read the entire repository for routine edits.** Start from `PROJECT_STATE.md` on a new thread, then inspect only relevant code, dependencies, tests and diffs. Broader discovery is appropriate after major refactors, uncertainty, or stale documentation.
- After each **material completed coding/design task**, update the affected sections of `PROJECT_STATE.md` to reflect the *current* architecture, important files, status, verification, blockers and next action. Keep it concise (target <150 lines); remove obsolete details rather than piling up history.
- Append one short, accurate `WORK_LOG.md` entry recording what actually changed, touched modules, tests/checks **actually run**, and what remains. Combine trivial micro-edits into one logical task entry; do not log every message or discussion.
- After a **user-approved design/content/architecture decision**, also record it in `DECISIONS.md` (with date, rationale and any superseded choice). Unapproved ideas go in neither decisions nor implementation claims.
- Before claiming a feature exists or works, verify against the real files and tests. **Code and observed results outrank memory notes** if they disagree. Correct stale notes promptly.
- Do not create extensive logs, duplicate requirements into every file, or load all docs on every tiny prompt. Ask for approval at the same design/implementation boundaries already stated above.
