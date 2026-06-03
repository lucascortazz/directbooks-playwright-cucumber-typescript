import { test } from "../src/fixtures/base-test";

test.describe("Terms of Use page", () => {
  test.beforeEach(async ({ legalPage }) => {
    await legalPage.openTermsOfUse();
  });

  test("heading", async ({ legalPage }) => {
    await legalPage.expectTermsOfUseHeading();
  });

  test("legal contact and governing law", async ({ legalPage }) => {
    await legalPage.expectTermsLegalEmail();
    await legalPage.expectTermsGoverningLaw();
  });
});

test.describe("Privacy Policy page", () => {
  test.beforeEach(async ({ legalPage }) => {
    await legalPage.openPrivacyPolicy();
  });

  test("heading", async ({ legalPage }) => {
    await legalPage.expectPrivacyPolicyHeading();
  });

  test("contact information", async ({ legalPage }) => {
    await legalPage.expectPrivacyContactEmail();
    await legalPage.expectPrivacyNewYorkAddress();
  });
});

test.describe("Cookie Policy page", () => {
  test.beforeEach(async ({ legalPage }) => {
    await legalPage.openCookiePolicy();
  });

  test("heading", async ({ legalPage }) => {
    await legalPage.expectCookiePolicyHeading();
  });

  test("cookie types and contact", async ({ legalPage }) => {
    await legalPage.expectCookieTypesDescription();
    await legalPage.expectCookieContactEmail();
  });
});
