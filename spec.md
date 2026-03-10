# Ayushman Bharat Information Portal

## Current State
The portal has a hero section, benefits section, quick links on the home page, plus pages for About, How to Apply, FAQ, Hospitals, Blog, Contact, and Team. The structure is functional but lacks key informational sections and deeper content on several pages.

## Requested Changes (Diff)

### Add
- **Stats/Impact bar on Home** — a horizontal strip showing key numbers (55 crore+ beneficiaries, 27,000+ hospitals, 1,949+ procedures, ₹5 lakh coverage) placed between hero and benefits sections
- **How It Works section on Home** — a simple 3-step visual flow (Check Eligibility → Get Card → Get Treatment) to guide first-time visitors
- **Schemes Covered section on Home** — brief cards for PM-JAY and AB-HWC (Health & Wellness Centres) components of Ayushman Bharat
- **Diseases & Procedures highlight section on Home** — a callout listing major disease categories covered (cancer, heart, kidney, ortho, etc.)
- **Expanded Footer** — 4 columns: About, Quick Links, Important Links (official portals), Contact & Helpline
- **Timeline section on About page** — key milestones of PM-JAY from 2018 launch to present
- **State-wise rollout note on About page** — mention that the scheme is active in 33+ states/UTs
- **Documents checklist section on HowToApply page** — clearly formatted required documents table

### Modify
- **BenefitsSection** — add two more benefit cards: "1,949+ Procedures Covered" and "33+ States Coverage"
- **Home page Quick Access section** — rename to "Explore Our Resources" and add About PM-JAY card
- **Footer** — restructure from 3 to 4 columns with richer content

### Remove
- Benefits illustration image from BenefitsSection bottom (clutters layout)

## Implementation Plan
1. Add Stats bar component with animated counters (static values, no JS animation needed)
2. Add HowItWorks component (3-step horizontal flow with icons)
3. Add SchemeComponents component (PM-JAY + AB-HWC cards)
4. Add DiseasesCovered callout section on home
5. Update BenefitsSection to include 2 additional benefit cards (6 total)
6. Update Home page to compose new sections in order: Hero → Stats → HowItWorks → Benefits → SchemeComponents → Diseases → QuickAccess
7. Update Footer with 4-column layout and richer links
8. Update About page with Timeline section and state rollout note
9. Update HowToApply with a dedicated documents checklist section
