import { test } from "../src/fixtures/base-test";

test.describe("Community Portal", () => {
  test.beforeEach(async ({ communityPortalPage }) => {
    await communityPortalPage.open();
  });

  test("login page", async ({ communityPortalPage }) => {
    await communityPortalPage.expectLoginForm();
    await communityPortalPage.expectForgotPasswordOption();
  });
});
