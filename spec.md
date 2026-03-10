# Ayushman Bharat Information Portal

## Current State
The Home page has: HeroSection, StatsBar, HowItWorks, BenefitsSection, SchemeComponents, DiseasesCovered, and an Explore Resources quick links grid. There is an existing FAQ page with search and accordion. No customer reviews or user doubt/question submission section exists.

## Requested Changes (Diff)

### Add
- **CustomerReviews component**: A section on the Home page showing 6 pre-written citizen testimonials (star ratings, name, location, short review text) in a responsive card grid.
- **AskADoubt component**: A section on the Home page (and/or a dedicated page) with a form where users can type their name, contact/email, and their question/doubt. On submission, show a success message. Also display a few "Common Doubts Answered" using accordion-style Q&A.
- **WhyChooseUs / Key Highlights section**: A visually appealing section highlighting why this portal is trustworthy and helpful (e.g., Free & Accurate Info, Government-backed, Easy Language, Mobile Friendly).
- Route `/ask-a-doubt` added to App.tsx for the full doubt page.

### Modify
- **Home.tsx**: Add CustomerReviews, AskADoubt (short version with CTA to full page), and WhyChooseUs sections between DiseasesCovered and Explore Resources.
- **Navigation.tsx**: Add "Ask a Doubt" nav link.

### Remove
- Nothing removed.

## Implementation Plan
1. Create `src/frontend/src/components/CustomerReviews.tsx` with 6 sample citizen reviews.
2. Create `src/frontend/src/components/AskADoubt.tsx` with a form (name, contact, question) + common doubts accordion.
3. Create `src/frontend/src/components/WhyChooseUs.tsx` with highlight cards.
4. Create `src/frontend/src/pages/AskADoubtPage.tsx` as a full page version.
5. Update `Home.tsx` to include the three new sections.
6. Update `App.tsx` to add the `/ask-a-doubt` route.
7. Update `Navigation.tsx` to add the Ask a Doubt nav link.
