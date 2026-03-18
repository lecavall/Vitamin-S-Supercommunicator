'use strict';

/* ─────────────────────────────────────────────
   VITAMIN S — script.js
   ───────────────────────────────────────────── */

// ─── TRANSLATIONS ───────────────────────────────────────────────────────────
const translations = {
  en: {
    pageTitle:          'Vitamin S — Your network is your superpower',
    langToggle:         'DE',
    heroBadge:          'Super Communicators only',
    heroHeadline:       'Your network is your superpower.<br>Get paid for it.',
    heroSub:            'Vitamin B is so yesterday. Vitamin S rewards the people who actually make things happen — warm introductions that open doors.',
    heroCTA:            'Claim Your Spot',

    howTitle:           'How it works',
    step1Title:         'Sign up',
    step1Text:          'Join as a Super Communicator and tell us about your network and areas of expertise.',
    step2Title:         'Get matched',
    step2Text:          'A job seeker requests a warm intro to someone in your network — a hiring manager, founder, or decision-maker.',
    step3Title:         'Connect & earn',
    step3Text:          'You make the intro, they land the opportunity, and you get paid. Simple as that.',

    valueTitle:         'Why Vitamin S?',
    value1Title:        'Cold outreach is dead',
    value1Text:         'Automated messages are everywhere. Inboxes are flooded. A warm intro from someone you know still cuts through every time.',
    value2Title:        'Your contacts are valuable',
    value2Text:         'You already know the right people. Vitamin S helps you turn those relationships into a real income stream — on your own terms.',
    value3Title:        'S like Super Communicator',
    value3Text:         "This isn't for random referrals. Vitamin S is for top connectors whose introductions are trusted, personal, and make things happen.",

    formTitle:          'Join the waitlist',
    formSub:            'Be among the first Super Communicators on Vitamin S.',
    labelFirstName:     'First name',
    labelEmail:         'Email address',
    labelIndustries:    'Where do you have strong contacts?',
    industryTech:       'Tech',
    industryFinance:    'Finance',
    industryHealthcare: 'Healthcare',
    industryMarketing:  'Marketing & Sales',
    industryLegal:      'Legal',
    industryDesign:     'Design / Creative',
    industryConsulting: 'Consulting',
    industryStartups:   'Startups',
    industryHR:         'HR / Recruiting',
    industryOther:      'Other',
    otherPlaceholder:   'Tell us more...',
    submitCTA:          'Claim Your Spot',
    successMsg:         'Your dose of Vitamin S is on its way!',
    successSub:         "We'll reach out as soon as we launch. Stay connected.",
    counterText:        'person has already joined',
    counterTextPlural:  'people have already joined',

    footerTagline:      'Vitamin B war gestern.',
    footerCopyright:    '© 2026 Vitamin S',
  },

  de: {
    pageTitle:          'Vitamin S — Dein Netzwerk ist dein Superpower',
    langToggle:         'EN',
    heroBadge:          'Nur für Super Communicators',
    heroHeadline:       'Vitamin B war gestern.<br>Dein Netzwerk ist Vitamin S.',
    heroSub:            'Persönliche Empfehlungen öffnen immer noch die besten Türen. Vitamin S macht dein Netzwerk zum Einkommensstream.',
    heroCTA:            'Jetzt Platz sichern',

    howTitle:           "So funktioniert's",
    step1Title:         'Registrieren',
    step1Text:          'Meld dich als Super Communicator an und erzähl uns, in welchen Bereichen du ein starkes Netzwerk hast.',
    step2Title:         'Gematcht werden',
    step2Text:          'Ein Job-Suchender bittet dich um eine Warm Introduction — zu einem Hiring Manager, Gründer oder Entscheider aus deinem Netzwerk.',
    step3Title:         'Verbinden & verdienen',
    step3Text:          'Du machst die Introduction, die Person landet die Chance — und du wirst dafür bezahlt. So einfach ist das.',

    valueTitle:         'Warum Vitamin S?',
    value1Title:        'Cold Outreach ist tot',
    value1Text:         'Automatisierte Nachrichten sind überall. Inboxen sind überflutet. Eine persönliche Empfehlung von jemandem, dem man vertraut, sticht immer noch durch.',
    value2Title:        'Deine Kontakte sind wertvoll',
    value2Text:         'Du kennst bereits die richtigen Leute. Vitamin S hilft dir, diese Beziehungen in einen echten Einkommensstream zu verwandeln — zu deinen Bedingungen.',
    value3Title:        'S wie Super Communicator',
    value3Text:         'Das ist nichts für zufällige Empfehlungen. Vitamin S ist für Top-Networker, deren Introductions vertrauenswürdig, persönlich und wirkungsvoll sind.',

    formTitle:          'Auf die Warteliste',
    formSub:            'Sei einer der ersten Super Communicators auf Vitamin S.',
    labelFirstName:     'Vorname',
    labelEmail:         'E-Mail-Adresse',
    labelIndustries:    'Wo hast du starke Kontakte?',
    industryTech:       'Tech',
    industryFinance:    'Finanzen',
    industryHealthcare: 'Gesundheit',
    industryMarketing:  'Marketing & Vertrieb',
    industryLegal:      'Recht',
    industryDesign:     'Design / Kreativ',
    industryConsulting: 'Beratung',
    industryStartups:   'Startups',
    industryHR:         'HR / Recruiting',
    industryOther:      'Sonstiges',
    otherPlaceholder:   'Erzähl uns mehr...',
    submitCTA:          'Jetzt Platz sichern',
    successMsg:         'Deine Dosis Vitamin S ist unterwegs!',
    successSub:         'Wir melden uns, sobald wir live gehen. Bleib dran.',
    counterText:        'Person hat sich bereits angemeldet',
    counterTextPlural:  'Personen haben sich bereits angemeldet',

    footerTagline:      'Vitamin B war gestern.',
    footerCopyright:    '© 2026 Vitamin S',
  },
};

// ─── STATE ──────────────────────────────────────────────────────────────────
let currentLang = localStorage.getItem('vitaminS_lang') || 'en';

// ─── INIT ────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  applyLanguage(currentLang);
  initLangToggle();
  initForm();
  initOtherField();
  initScrollAnimations();
  initStickyNav();
});

// ─── LANGUAGE ────────────────────────────────────────────────────────────────
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('vitaminS_lang', lang);
  document.documentElement.lang = lang;

  const t = translations[lang];

  document.title = t.pageTitle;

  // textContent elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // innerHTML elements (e.g. headline with <br>)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // placeholder attributes
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // keep counter text in sync
  updateCounter();
}

function initLangToggle() {
  document.getElementById('langToggle').addEventListener('click', () => {
    applyLanguage(currentLang === 'en' ? 'de' : 'en');
  });
}

// ─── COUNTER ─────────────────────────────────────────────────────────────────
function getSignups() {
  try {
    return JSON.parse(localStorage.getItem('vitaminS_signups') || '[]');
  } catch {
    return [];
  }
}

function updateCounter() {
  const count = getSignups().length;
  const t = translations[currentLang];
  document.getElementById('counterNumber').textContent = count;
  document.getElementById('counterText').textContent =
    count === 1 ? t.counterText : t.counterTextPlural;
}

// ─── FORM ────────────────────────────────────────────────────────────────────
function initForm() {
  document.getElementById('waitlistForm').addEventListener('submit', handleSubmit);
}

function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;

  const firstName = form.firstName.value.trim();
  const email     = form.email.value.trim();

  // Basic validation
  if (!firstName) {
    form.firstName.focus();
    return;
  }
  if (!email || !isValidEmail(email)) {
    form.email.focus();
    return;
  }

  const industries  = [...form.querySelectorAll('input[name="industry"]:checked')].map(cb => cb.value);
  const otherField  = document.getElementById('otherField');
  const otherText   = (!otherField.hidden && form.otherIndustry)
    ? form.otherIndustry.value.trim()
    : '';

  const signups = getSignups();
  signups.push({ firstName, email, industries, otherText, ts: Date.now() });
  localStorage.setItem('vitaminS_signups', JSON.stringify(signups));

  // Switch to success view
  form.hidden = true;
  document.getElementById('successState').hidden = false;
  updateCounter();
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ─── "OTHER" FIELD ───────────────────────────────────────────────────────────
function initOtherField() {
  const otherCheck = document.getElementById('otherCheck');
  const otherField = document.getElementById('otherField');

  otherCheck.addEventListener('change', () => {
    otherField.hidden = !otherCheck.checked;
    if (otherCheck.checked) {
      document.getElementById('otherIndustry').focus();
    }
  });
}

// ─── SCROLL ANIMATIONS ───────────────────────────────────────────────────────
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.fade-in-section').forEach(el => observer.observe(el));
}

// ─── STICKY NAV ──────────────────────────────────────────────────────────────
function initStickyNav() {
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('nav--scrolled', window.scrollY > 16);
  }, { passive: true });
}
