/* App identity. */
window.APP_META = {
  name: 'Stahl Study Companion',
  short: 'Stahl',
  tagline: 'Essential Psychopharmacology companion',
  version: '30.0.0',
  repo: 'Stahl',
  attribution: 'App created by Isabella Navarro, MD. Latest version November 2026. isaymotion@gmail.com'
};

/* Other isaymotion apps, listed as the last group ("Other apps") in the menu. External links only:
   they are not added to the home tiles, search or the tab bar. The entry whose URL ends in this
   app's own repo slug (APP_META.repo) is skipped automatically, so the same list can be copied to every app. */
/* Show the "Other apps" group in the menu? Off for now: the apps are not interlinked yet.
   Set to true when ready; the list below is already in place. */
window.SHOW_OTHER_APPS = false;

window.APP_LINKS = [
  { name: 'MSE Trainer', href: 'https://isaymotion.github.io/MSEtrainer/' },
  { name: 'Usap Tayo (Tagalog)', href: 'https://isaymotion.github.io/Tagalog/' },
  { name: 'DSM-5-TR Study Companion', href: 'https://isaymotion.github.io/DSMVapp/' },
  { name: 'Stahl Study Companion', href: 'https://isaymotion.github.io/Stahl/' },
  { name: 'Kaplan Study', href: 'https://isaymotion.github.io/KaplanStudy/' },
  { name: 'Shea Trainer', href: 'https://isaymotion.github.io/sheatrainer/' }
];

/* Key migration is NOT used here. Stahl keeps its storage prefix "sp:v1:" and every key under it exactly as
   before (srs, mistakes, bookmarks, examHistory, prefs, theme, textSize, navCollapsed...). The only key whose
   shape changed is "seenNews" (an integer changelog id before, a version string now); js/app.js reads an old
   integer as "seen up to that release". Leave window.MIGRATE_KEYS undefined. */
