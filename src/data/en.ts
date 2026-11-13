import type { Copy } from './types';

export const en: Copy = {
  name: 'Hasanagha Bayramov', role: 'Aspiring Penetration Tester',
  description: 'I’m building practical penetration-testing skills, currently focused on web application security.',
  availability: 'Open to Cybersecurity Roles & Projects',
  eyebrow: 'OFFENSIVE SECURITY  /  WEB APPLICATION SECURITY  /  RED TEAM', location: 'Baku, Azerbaijan', scroll: 'SCROLL TO EXPLORE  ↓',
  nav: ['About', 'Projects', 'Education', 'Certification', 'Skills', 'Contact'], menuTitle: 'EXPLORE THE PORTFOLIO', themeLight: 'Light mode', themeDark: 'Dark mode', terminal: 'Terminal',
  cv: 'Download CV', cvUnavailable: 'CV coming soon', viewProjects: 'View Projects', getInTouch: 'Get in Touch',
  about: {
    label: 'ABOUT', title: ['From code to security.', 'Driven by curiosity.'], facts: ['STUDYING', 'FOCUS', 'STACK'],
    studying: ['ASOIU · Computer Engineering', 'MilliSec · Red Team / Pentesting'],
    focus: ['Offensive Security', 'Red Team', 'Web Application Security'], stack: ['Linux', 'Python', 'C', 'Docker', 'Burp Suite'],
    paragraphs: [
      'I’m a Computer Engineering student at ASOIU, and I currently study Red Team and Penetration Testing at MilliSec.',
      'My interest in technology began with programming around 2020. Over time, I became more interested in how systems work, the assumptions behind them, and what careful investigation can reveal. That curiosity led me toward Offensive Security.',
      'Now I’m building practical penetration-testing skills through controlled labs, with a focus on Linux, networking, and web application security. I learn best by applying what I study and understanding why a system behaves as it does.'
    ], beyondLabel: 'BEYOND SECURITY', beyond: 'Outside security, I enjoy programming with AI-assisted tools, video editing, and color grading.'
  },
  projects: {
    label: 'PROJECTS', title: 'Selected works.', intro: 'Hands-on projects exploring web application security.',
    featured: 'FEATURED PROJECT  /  UNIVERSITY LAB', portal: 'STUDENT PORTAL', portalSub: 'Fictional university application', checks: 'AUTHORIZATION CHECKS', checksSub: 'Object · function · property', secure: 'SECURE MODE', secureSub: 'Checks enforced', vulnerable: 'VULNERABLE MODE', vulnerableSub: 'Checks relaxed', scenarios: 'THREE CONTROLLED API SCENARIOS',
    description: 'A fictional university portal built to compare access-control behavior in secure and intentionally vulnerable modes.',
    detail: 'Three controlled API scenarios examine object access, admin-only actions, and protected role updates.', repository: 'View repository ↗', future: 'FUTURE PROJECT', futureMark: 'THE NEXT BUILD GOES HERE', coming: 'Coming soon', futureDetail: 'A future project will take this place.', access: 'Access control'
  },
  education: {
    label: 'EDUCATION', title: 'Education', intro: 'Formal study and focused security training.', current: 'ONGOING', thirdYear: 'THIRD YEAR', university: 'Azerbaijan State Oil and Industry University (ASOIU)', universityProgram: 'B.Sc. · Computer Engineering', universityDescription: 'My Computer Engineering studies support my work in programming, systems, and application security.', universityFooter: 'UNDERGRADUATE STUDIES', training: 'MilliSec', trainingProgram: 'Red Team & Penetration Testing', trainingDescription: 'Alongside university, I’m developing practical skills in Linux, networking, and web application security.', trainingFooter: 'PRACTICAL TRAINING', kinds: ['UNIVERSITY', 'SECURITY TRAINING'], year: '2024 — PRESENT', start: 'MAY 2026 — PRESENT'
  },
  certification: {
    label: 'CERTIFICATION', title: 'Certifications', intro: 'Assessed problem-solving skills, from basic to intermediate.', id: 'CERTIFICATE ID', date: '04 MAY 2026',
    basicDescription: 'Covers arrays and strings, plus sorting and searching algorithms.', intermediateDescription: 'Covers hash maps, stacks and queues, and optimal algorithmic solutions.',
    tags: [['Arrays & strings', 'Sorting', 'Searching'], ['Hash maps', 'Stacks & queues', 'Optimal solutions']], view: 'View certificate ↗'
  },
  skills: {
    label: 'SKILLS', title: 'Skills', intro: 'A working toolkit shaped by study, labs and hands-on practice.', cards: [
      { kicker: '01 / FOCUS', title: 'Security practice', text: 'Currently building practical web application and penetration-testing skills.', tags: ['Web app security', 'Penetration testing', 'Red Team fundamentals'] },
      { kicker: '02 / LANGUAGES', title: 'Programming', text: 'Programming foundations used in coursework, exercises and small tools.', tags: ['Python', 'C', 'C++', 'Java', 'HTML / CSS', 'JavaScript'] },
      { kicker: '03 / WORKSPACE', title: 'Tools & environment', text: 'Tools I use while learning, exploring systems and working in labs.', tags: ['Linux', 'Docker', 'Burp Suite'] }
    ]
  },
  contact: {
    label: 'CONTACT', title: 'Let’s connect.', intro: 'Have an opportunity, a project, or a question about my work? I’d be glad to hear from you.',
    name: 'Your name', email: 'Your email', message: 'Your message', placeholder: 'Write your message...', send: 'Send message', sending: 'Sending…', success: 'Message sent successfully.', errorTitle: 'Message could not be sent.', error: 'An error occurred. Please try again. Your entries are still in the form.', unavailable: 'Email me directly while the contact form is being set up.', footer: '© 2026 Hasanagha Bayramov · Aspiring Penetration Tester'
  },
  terminalCopy: { title: 'terminal / preview', soundOff: 'SOUND OFF', soundOn: 'SOUND ON', duration: '~7 SEC / KEYBOARD AUDIO', skip: 'Skip', replay: 'Replay', close: 'Close', transcript: '$ whoami\nhasanagha\n\n$ cat focus.txt\noffensive security / web application security / red team\n\n$ ls projects/\nCampusSecure/' }
};
