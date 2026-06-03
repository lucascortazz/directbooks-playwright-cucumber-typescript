import { test } from "../src/fixtures/base-test";

test.describe("Senior Team page", () => {
  test.beforeEach(async ({ seniorTeamPage }) => {
    await seniorTeamPage.open();
  });

  test("headline", async ({ seniorTeamPage }) => {
    await seniorTeamPage.expectHeadline();
  });

  test("leadership profiles", async ({ seniorTeamPage }) => {
    await seniorTeamPage.expectCEO();
    await seniorTeamPage.expectCOO();
  });
});

test.describe("History page", () => {
  test.beforeEach(async ({ historyPage }) => {
    await historyPage.open();
  });

  test("headline and milestones", async ({ historyPage }) => {
    await historyPage.expectHeadline();
    await historyPage.expectMilestonesContent();
  });
});

test.describe("Careers page", () => {
  test.beforeEach(async ({ careersPage }) => {
    await careersPage.open();
  });

  test("heading and talent email", async ({ careersPage }) => {
    await careersPage.expectHeadline();
    await careersPage.expectTalentEmail();
  });
});
