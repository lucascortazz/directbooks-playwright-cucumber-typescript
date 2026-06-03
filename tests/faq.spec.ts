import { test } from "../src/fixtures/base-test";

test.describe("FAQ page", () => {
  test.beforeEach(async ({ directBooksPage }) => {
    await directBooksPage.openFaqPage();
  });

  test("page headings", async ({ directBooksPage }) => {
    await directBooksPage.expectFrequentlyAskedQuestions();
    await directBooksPage.expectWhoCanUseDirectBooksInformation();
  });

  test("participating underwriters", async ({ directBooksPage }) => {
    await directBooksPage.expectParticipatingUnderwriters();
  });

  test("platform access methods", async ({ directBooksPage }) => {
    await directBooksPage.expectAccessMethods();
  });

  test("DART analytics", async ({ directBooksPage }) => {
    await directBooksPage.expectDartAnalytics();
  });
});
