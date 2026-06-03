# DirectBooks Playwright + Cucumber

End-to-end tests for the DirectBooks public website using Playwright, Cucumber, and TypeScript.

## How Playwright and Cucumber Work Together

Cucumber is the **test runner**. It reads `.feature` files written in Gherkin syntax (`Given/When/Then`) and matches each step to TypeScript step definitions in `src/`. Playwright is used inside those step definitions to control the browser — navigating pages, clicking elements, and asserting UI state.

1. Gherkin describes what to do in plain English.
2. Cucumber finds the matching step definition for each line.
3. The step definition calls Playwright to actually do the automated steps.

The `test:e2e` script wires it all up:

```bash
cucumber-js --require-module ts-node/register --require "src/**/*.ts" features/**/*.feature
```

- `ts-node/register` — lets Cucumber load TypeScript step files directly
- `--require "src/**/*.ts"` — loads all step definitions and support code (hooks, world, page objects)
- `features/**/*.feature` — the Gherkin scenarios to run

`@playwright/test` is **not** the runner here — Cucumber owns that role. Playwright is used purely as a browser automation library inside the steps.

## Install

```bash
npm install
npx playwright install --with-deps chromium
```

## Run Locally

Typecheck:

```bash
npm run typecheck
```

Run all E2E tests:

```bash
npm run test:e2e
```

Run a single scenario:

```bash
npm run test:e2e:one -- "Validate homepage content"
npm run test:e2e:one -- "Validate FAQ page content"
npm run test:e2e:one -- "Validate Contact page content"
npm run test:e2e:one -- "Validate Community Portal login page"
```

## GitHub Actions

**CI** — triggers on every push to `main` and every PR. Runs typecheck only, no E2E.

**Nightly Regression** — runs the full suite (typecheck + E2E tests) nightly at 02:00 America/Sao_Paulo, or manually from GitHub Actions.

To run regression tests manually in GitHub:

1. Open the repository in GitHub
2. Go to **Actions**
3. Select **Nightly Regression**
4. Click **Run workflow**
