# Ayushman Bharat Information Portal

## Current State
Full-featured PM-JAY information portal with Navigation, Layout, Home, About, Blog, FAQ, Hospital Locator, EligibilityChecker, Contact, Team, AyushmanCard, HowToApply, AskADoubt pages. No language toggle exists.

## Requested Changes (Diff)

### Add
- LanguageContext (React Context + Provider) with `lang` state ('en' | 'hi') and `toggleLang` function
- translations.ts file with Hindi and English strings for all major UI text across all pages and components
- Hindi/English toggle button in Navigation (both desktop and mobile menus) showing "हिंदी" when in English mode and "English" when in Hindi mode
- Wrap App with LanguageProvider in main.tsx or Layout

### Modify
- Navigation: add toggle button, use translated nav link labels
- HeroSection, StatsBar, HowItWorks, BenefitsSection, SchemeComponents, DiseasesCovered, CustomerReviews, WhyChooseUs, AskADoubt, StateCoverage, NewsUpdates, HealthTips, EmergencyContacts, Footer: consume language context for translated text
- Home, About, FAQ, Contact, HospitalLocator, Blog, AyushmanCard, HowToApply, EligibilityChecker, Team pages: use translated headings and key content

### Remove
- Nothing removed

## Implementation Plan
1. Create src/frontend/src/context/LanguageContext.tsx with Context, Provider, useLanguage hook
2. Create src/frontend/src/translations.ts with en/hi translation objects covering all major text
3. Update Navigation.tsx to include toggle button and translated nav labels
4. Update Layout.tsx to wrap with LanguageProvider
5. Update all major components and pages to use useLanguage hook for translated text
6. Validate build
