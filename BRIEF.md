# Claude Code Prompt — Vitamin S Landing Page

Copy and paste everything below the line into Claude Code as your initial prompt:

---

## Prompt

I'm building a waitlist landing page for my startup called **Vitamin S**.

### The Concept

"Vitamin B" (Beziehungen/connections) has always been the secret ingredient for career success in the German-speaking world. But in an age where automated outreach — cold emails, LinkedIn bots, mass applications — is becoming accessible to everyone, it's losing its value. What remains truly valuable is a warm, personal introduction from someone who knows the right people.

**Vitamin S** is the upgrade. The "S" stands for **Super Communicator** — people with exceptional networks who are naturally great at connecting others. Vitamin S is a platform that lets these super communicators earn money by making warm introductions for job seekers.

The tagline is: **"Vitamin B war gestern. Willkommen bei Vitamin S."** (Vitamin B is so yesterday. Welcome to Vitamin S.)

This platform connects two audiences:
- **Super communicators**: People with strong networks who get paid for making warm, qualified introductions to hiring managers, founders, or decision-makers.
- **Job seekers**: People looking for their next role who want meaningful, personal intros instead of sending cold applications into the void.

The revenue model is **pay-per-intro**: job seekers pay when a super communicator makes a qualified introduction on their behalf.

### What I Need You to Build

A **waitlist landing page** to validate the idea and start collecting sign-ups from super communicators. Built with **plain HTML, CSS, and JavaScript** — no frameworks, no build tools. Just clean, production-ready static files.

The brand name is **Vitamin S** and the target domain is **vitamin-s.com**.

### Page Structure

1. **Navigation bar**
   - Vitamin S logo/wordmark on the left
   - Language toggle (EN / DE) on the right
   - Keep it minimal and sticky on scroll

2. **Hero section**
   - A compelling headline that plays on the Vitamin B → Vitamin S narrative. Examples:
     - EN: "Your network is your superpower. Get paid for it."
     - DE: "Vitamin B war gestern. Dein Netzwerk ist Vitamin S."
   - A subheadline explaining the concept in one sentence
   - A clear call-to-action button that scrolls to the waitlist sign-up form
   - Consider using a pill/vitamin visual motif (subtle, not cheesy) or a warm illustration of people connecting

3. **How it works** (3-step visual explanation)
   - Step 1: Sign up as a Super Communicator
   - Step 2: A job seeker requests a warm intro to someone in your network
   - Step 3: You make the intro, they land the opportunity, you get paid
   - Use icons or simple illustrations for each step

4. **Value proposition section**
   - Why Vitamin S? 2-3 short blocks explaining:
     - "Cold outreach is dead" — automated messages are everywhere, warm intros stand out
     - "Your contacts are valuable" — you already know the right people, now get rewarded
     - "S like Super Communicator" — this is for the top connectors, not random referrals

5. **Waitlist sign-up form**
   - Fields:
     - First name
     - Email address
     - A multi-select checkbox group for **industries/areas where they have strong contacts**: Tech, Finance, Healthcare, Marketing & Sales, Legal, Design/Creative, Consulting, Startups, HR/Recruiting, Other (with a free-text input field that appears when "Other" is selected)
   - A clear CTA button: "Jetzt Platz sichern" / "Claim Your Spot"
   - The form should store submissions in localStorage for now (no backend). Show a success message after submission with a fun touch, e.g. "Deine Dosis Vitamin S ist unterwegs!" / "Your dose of Vitamin S is on its way!"
   - Add a small counter below the form showing how many people have joined (pull from localStorage, start at 0)

6. **Footer**
   - Vitamin S wordmark
   - Placeholder links for social media (LinkedIn, X/Twitter, Instagram)
   - Contact email: hello@vitamin-s.com
   - Copyright notice: © 2026 Vitamin S

### Design & Style

- **Vibe**: Warm, personal, approachable — this is about human connection, not corporate tech. But with a subtle playful vitamin/health metaphor woven in.
- **Color palette**: Warm earthy tones as the base — beige (#F5F0EB or similar), off-white backgrounds, dark brown or charcoal (#2D2A26) for text. Accent color: a warm terracotta/burnt orange (#C4652E or similar) for CTAs and highlights. Secondary accent: soft sage green (#7A8B6F) for supporting elements. Maybe a subtle pill-shape motif in the design (e.g. rounded pill-shaped CTA buttons).
- **Typography**: Use Google Fonts. A friendly but professional sans-serif — something like "DM Sans" or "Plus Jakarta Sans" for body text. For headings, use something slightly more expressive like "Cabinet Grotesk", "Outfit", or "Space Grotesk". The "S" in "Vitamin S" could be visually emphasized (different color, bold, or slightly larger).
- **Layout**: Clean, spacious, lots of whitespace. Rounded corners on cards and buttons. Subtle, warm hover effects. Pill-shaped buttons where it makes sense.
- **Imagery**: Use simple SVG icons or illustrations. No stock photos. Consider a subtle vitamin pill or capsule motif in the hero or as a decorative element. Keep it classy, not gimmicky.
- **Responsive**: Must look great on mobile, tablet, and desktop. Mobile-first approach.

### Language

- Build the page in **English** as the default.
- Add a **language toggle** (EN / DE) in the navigation bar that switches ALL text content to **German**. Implement this with JavaScript — store all text strings in a translations object and swap them on toggle. No page reload.
- The German translations should feel natural and native, not like they were machine-translated. Use the informal "Du" form, not "Sie".
- The tagline "Vitamin B war gestern" should appear in both versions (it works in both languages since "Vitamin B" is universal).

### Technical Details

- Separate files: `index.html`, `style.css`, and `script.js` in the same folder.
- Use semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- Smooth scroll behavior for anchor links.
- Add a subtle fade-in animation on scroll for each section (use Intersection Observer API).
- Mobile-first responsive design using CSS media queries.
- The language toggle should persist using localStorage (remember the user's choice).
- After building, start a local server so I can preview it in my browser.
