export type Locale = 'en' | 'az';

export interface Copy {
  name: string; role: string; description: string; availability: string; eyebrow: string; location: string; scroll: string;
  nav: string[]; menuTitle: string; themeLight: string; themeDark: string; terminal: string;
  cv: string; cvOpenNewTab: string; cvUnavailable: string; viewProjects: string; getInTouch: string;
  about: { label: string; title: [string, string]; facts: [string, string, string]; studying: string[]; focus: string[]; stack: string[]; paragraphs: string[]; beyondLabel: string; beyond: string };
  projects: { label: string; title: string; intro: string; featured: string; portal: string; portalSub: string; checks: string; checksSub: string; secure: string; secureSub: string; vulnerable: string; vulnerableSub: string; scenarios: string; description: string; detail: string; repository: string; explore: string; allProjects: string; future: string; futureMark: string; coming: string; futureDetail: string; access: string };
  education: { label: string; title: string; intro: string; current: string; thirdYear: string; university: string; universityProgram: string; universityDescription: string; universityFooter: string; training: string; trainingProgram: string; trainingDescription: string; trainingFooter: string; kinds: [string, string]; year: string; start: string; externalLink: string };
  certification: { label: string; title: string; intro: string; id: string; basicDescription: string; intermediateDescription: string; tags: [string[], string[]]; view: string; date: string };
  skills: { label: string; title: string; intro: string; cards: { kicker: string; title: string; text: string; tags: string[] }[] };
  contact: { label: string; title: string; intro: string; name: string; email: string; message: string; placeholder: string; send: string; sending: string; success: string; errorTitle: string; error: string; unavailable: string; footer: string };
  terminalCopy: { title: string; soundOff: string; soundOn: string; duration: string; skip: string; replay: string; close: string; transcript: string };
}
