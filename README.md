# DirectBooks Playwright + TypeScript

End-to-end tests for the DirectBooks public website using Playwright and TypeScript, running nightly across multiple browsers via GitHub Actions.

## How It Works

Playwright Test is both the **test runner and browser automation library**. Tests are written as `.spec.ts` files organised by page, using the Page Object Model to keep selectors separate from test logic.

```
src/
├── fixtures/       # Custom base-test extending Playwright with all page objects
└── pages/          # Page Object Model — selectors and actions per page
tests/              # Spec files, one per site section
playwright.config.ts
```

A custom base fixture (`src/fixtures/base-test.ts`) extends Playwright's `test` with every page object pre-instantiated. Spec files import from it instead of `@playwright/test`, so there's no manual `new Page(page)` wiring in tests.

Tests run in parallel across three browser engines — Chromium, Firefox, and WebKit — using Playwright's native project support.

## Install

```bash
npm install
npx playwright install --with-deps
```

## Run Locally

Typecheck:

```bash
npm run typecheck
```

Run all tests across all browsers:

```bash
npm test
```

Run on a single browser:

```bash
npm run test:chromium
npm run test:firefox
npm run test:webkit
```

Run in headed mode (watch the browser):

```bash
npm run test:headed
```

Open the HTML report after a run:

```bash
npm run test:report
```

## Project Structure

```
src/
├── fixtures/
│   └── base-test.ts              # Custom fixture — injects all page objects into tests
└── pages/
    ├── directbooks.page.ts       # Homepage, FAQ, Contact
    ├── community-portal.page.ts
    ├── why.page.ts
    ├── who.page.ts
    ├── how.page.ts
    ├── what.page.ts
    ├── senior-team.page.ts
    ├── history.page.ts
    ├── careers.page.ts
    ├── newsroom.page.ts
    ├── demo-request.page.ts
    └── legal.page.ts             # Terms of Use, Privacy Policy, Cookie Policy
tests/
├── homepage.spec.ts              # Hero, messaging, sections, footer
├── faq.spec.ts                   # FAQ content
├── contact.spec.ts               # Contact info, phone numbers, emails
├── solution.spec.ts              # Why, Who, How, What pages
├── about.spec.ts                 # Senior Team, History, Careers pages
├── newsroom.spec.ts              # Newsroom and Demo Request pages
├── legal.spec.ts                 # Terms of Use, Privacy Policy, Cookie Policy
└── community-portal.spec.ts      # Community Portal login page
```

## GitHub Actions

**CI** — triggers on every push to `main` and every PR. Runs typecheck only, no E2E.

**Nightly E2E** — runs the full suite nightly at 02:00 America/Sao_Paulo across Chromium, Firefox, and WebKit in parallel. Each browser uploads its own Playwright report artifact. Can also be triggered manually.

To run manually in GitHub:

1. Open the repository in GitHub
2. Go to **Actions**
3. Select **Nightly E2E**
4. Click **Run workflow**
