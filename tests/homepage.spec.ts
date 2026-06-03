import { test } from "../src/fixtures/base-test";

test.describe("Homepage", () => {
  test.beforeEach(async ({ directBooksPage }) => {
    await directBooksPage.openHomePage();
  });

  test("hero section", async ({ directBooksPage }) => {
    await directBooksPage.expectHeroHeadline();
    await directBooksPage.expectTrustedCommunityBanner();
    await directBooksPage.expectReachingInvestorsMessage();
  });

  test("platform messaging", async ({ directBooksPage }) => {
    await directBooksPage.expectMainMessaging();
    await directBooksPage.expectJoinPlatformCallToAction();
  });

  test("product and community sections", async ({ directBooksPage }) => {
    await directBooksPage.expectProductSection();
    await directBooksPage.expectCommunitySection();
  });

  test("news section", async ({ directBooksPage }) => {
    await directBooksPage.expectInTheNewsSection();
  });

  test("navigation and footer", async ({ directBooksPage }) => {
    await directBooksPage.expectNavigationMenu();
    await directBooksPage.expectFooterCopyright();
    await directBooksPage.expectFooterInfoEmail();
  });
});
