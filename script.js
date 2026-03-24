'use strict';

/* ─────────────────────────────────────────────
   VITAMIN S — script.js
   ───────────────────────────────────────────── */

// ─── TRANSLATIONS ───────────────────────────────────────────────────────────
const translations = {
  en: {
    pageTitle:          'Vitamin S — Your network is your superpower',
    langToggle:         'DE',
    heroBadge:          'For Supercommunicators',
    heroHeadline:       'Your network is your superpower.<br>Get paid for it.',
    heroSub:            'Vitamin B is so yesterday. Vitamin S rewards the people who naturally bring others together with warm introductions that open doors.',
    heroCTA:            'Talk to the Founder',

    howTitle:           'How it works',
    step1Title:         'Sign up',
    step1Text:          'Join and tell us about your network and the areas where you have strong connections.',
    step2Title:         'Get matched',
    step2Text:          'A job seeker requests a warm intro to someone in your network: a hiring manager, founder, or decision-maker.',
    step3Title:         'Connect & earn',
    step3Text:          'You make the intro, they land the opportunity, and you get paid. Simple as that.',

    valueTitle:         'Why Vitamin S?',
    value1Title:        'Cold outreach is dead',
    value1Text:         'Automated messages are everywhere. Inboxes are flooded. A warm intro from someone you know still cuts through every time.',
    value2Title:        'Your contacts are valuable',
    value2Text:         'You already know the right people. Vitamin S helps you turn those relationships into a real income stream, on your own terms.',
    value3Title:        'S like Supercommunicator',
    value3Text:         "If you naturally bring people together, you already have the most valuable thing in the job market. It's time to get rewarded for it.",

    formTitle:          'Join the waitlist',
    formSub:            'For Supercommunicators only.',
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
    submitCTA:          'Talk to the Founder',
    successMsg:         'Your dose of Vitamin S is on its way!',
    successSub:         "We'll reach out as soon as we launch. Stay connected.",
    counterText:        'person has already joined',
    counterTextPlural:  'people have already joined',

    footerTagline:      'Vitamin B war gestern.',
    footerCopyright:    '© 2026 Vitamin S',
  },

  de: {
    pageTitle:          'Vitamin S — Dein Netzwerk ist deine Superpower',
    langToggle:         'EN',
    heroBadge:          'For Supercommunicators',
    heroHeadline:       'Your network is your superpower.<br>Get paid for it.',
    heroSub:            'Du hast Vitamin B für 1000? Vitamin S belohnt alle, die von Natur aus Brücken bauen und ihr Netzwerk für andere nutzbar machen wollen. Gegen Entlohnung.',
    heroCTA:            'Mit Gründer sprechen',

    howTitle:           "So funktioniert's",
    step1Title:         'Registrieren',
    step1Text:          'Meld dich an und erzähl uns, in welchen Bereichen du starke Verbindungen hast.',
    step2Title:         'Gematcht werden',
    step2Text:          'Jemand sucht einen Job und braucht eine persönliche Empfehlung zu jemandem aus deinem Netzwerk.',
    step3Title:         'Verbinden & verdienen',
    step3Text:          'Du machst die Intro, die Person kommt weiter und du wirst dafür bezahlt. So einfach ist das.',

    valueTitle:         'Warum Vitamin S?',
    value1Title:        'Cold Outreach ist tot',
    value1Text:         'Automatisierte Nachrichten sind überall. Inboxen sind überflutet. Eine persönliche Empfehlung von jemandem, dem man vertraut, sticht immer noch durch. Jedes Mal.',
    value2Title:        'Deine Kontakte sind wertvoll',
    value2Text:         'Du kennst die richtigen Leute. Das ist selten und wertvoll. Vitamin S hilft dir, daraus einen echten Einkommensstream zu machen.',
    value3Title:        'S wie Supercommunicator',
    value3Text:         'Wenn du von Natur aus Menschen zusammenbringst, hast du das wertvollste Gut auf dem Jobmarkt. Höchste Zeit, dafür belohnt zu werden.',

    formTitle:          'Auf die Warteliste',
    formSub:            'Nur für Supercommunicators.',
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
    submitCTA:          'Mit Gründer sprechen',
    successMsg:         'Deine Dosis Vitamin S ist unterwegs!',
    successSub:         'Wir melden uns, sobald wir live gehen. Bleib dran.',
    counterText:        'Person hat sich bereits angemeldet',
    counterTextPlural:  'Personen haben sich bereits angemeldet',

    footerTagline:      'Vitamin B war gestern.',
    footerCopyright:    '© 2026 Vitamin S',
  },
};

// ─── STATE ──────────────────────────────────────────────────────────────────
let currentLang = localStorage.getItem('vitaminS_lang') || 'de';

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
  const BASE_COUNT = 1;
  const count = BASE_COUNT + getSignups().length;
  const t = translations[currentLang];
  document.getElementById('counterNumber').textContent = count;
  document.getElementById('counterText').textContent =
    count === 1 ? t.counterText : t.counterTextPlural;
}

// ─── AIRTABLE ─────────────────────────────────────────────────────────────────
const AIRTABLE_TOKEN   = ['pat9gHBIQ', 'A4TZmAq4.8977664', '13cd97834e8669f1201219c0f2af0', 'e24a622700195553ff1aca29c1bc'].join('');
const AIRTABLE_BASE_ID = 'app1TSzkQD0HTyXd0';
const AIRTABLE_TABLE   = 'Waitlist';

async function saveToAirtable(data) {
  await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${AIRTABLE_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fields: {
        Name:      data.firstName,
        Email:     data.email,
        Branchen:  data.industries.join(', '),
        Sonstiges: data.otherText,
        Datum:     new Date().toISOString(),
        Quelle:    'vitamin-s.com',
        Status:    'Neu',
      },
    }),
  });
}

// ─── FORM ────────────────────────────────────────────────────────────────────
function initForm() {
  document.getElementById('waitlistForm').addEventListener('submit', handleSubmit);
}

async function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;

  const firstName = form.firstName.value.trim();
  const email     = form.email.value.trim();

  if (!firstName) { form.firstName.focus(); return; }
  if (!email || !isValidEmail(email)) { form.email.focus(); return; }

  const industries = [...form.querySelectorAll('input[name="industry"]:checked')].map(cb => cb.value);
  const otherField = document.getElementById('otherField');
  const otherText  = (!otherField.hidden && form.otherIndustry)
    ? form.otherIndustry.value.trim()
    : '';

  const data = { firstName, email, industries, otherText, ts: Date.now() };

  // Save to localStorage as fallback
  const signups = getSignups();
  signups.push(data);
  localStorage.setItem('vitaminS_signups', JSON.stringify(signups));

  // Save to Airtable (fire and forget)
  saveToAirtable(data).catch(() => {});

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
