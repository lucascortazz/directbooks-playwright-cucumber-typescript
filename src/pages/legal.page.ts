import { expect, Page } from "@playwright/test";

export class LegalPage {
  constructor(private readonly page: Page) {}

  async openTermsOfUse() {
    await this.page.goto("https://www.directbooks.com/terms-of-use", { waitUntil: "domcontentloaded" });
  }

  async openPrivacyPolicy() {
    await this.page.goto("https://www.directbooks.com/privacy-policy", { waitUntil: "domcontentloaded" });
  }

  async openCookiePolicy() {
    await this.page.goto("https://www.directbooks.com/cookie-policy", { waitUntil: "domcontentloaded" });
  }

  // ── Terms of Use ──────────────────────────────────────────────────────────

  async expectTermsOfUseHeading() {
    await expect(this.page.getByText(/terms of use/i).first()).toBeVisible();
  }

  async expectTermsLegalEmail() {
    await expect(this.page.getByText(/legal@directbooks\.com/i).first()).toBeVisible();
  }

  async expectTermsGoverningLaw() {
    await expect(this.page.getByText(/governed by the laws of the state of new york/i)).toBeVisible();
  }

  // ── Privacy Policy ────────────────────────────────────────────────────────

  async expectPrivacyPolicyHeading() {
    await expect(this.page.getByText(/privacy policy/i).first()).toBeVisible();
  }

  async expectPrivacyContactEmail() {
    await expect(this.page.getByText(/legal@directbooks\.com/i).first()).toBeVisible();
  }

  async expectPrivacyNewYorkAddress() {
    await expect(this.page.getByText(/72 madison avenue/i)).toBeVisible();
  }

  // ── Cookie Policy ─────────────────────────────────────────────────────────

  async expectCookiePolicyHeading() {
    await expect(this.page.getByText(/cookie policy/i).first()).toBeVisible();
  }

  async expectCookieTypesDescription() {
    await expect(this.page.getByText(/essential cookies/i)).toBeVisible();
  }

  async expectCookieContactEmail() {
    await expect(this.page.getByText(/legal@directbooks\.com/i).first()).toBeVisible();
  }
}
