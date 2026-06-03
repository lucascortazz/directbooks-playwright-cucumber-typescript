import { expect, Page } from "@playwright/test";

export class WhoPage {
  constructor(private readonly page: Page) {}

  async open() {
    await this.page.goto("https://www.directbooks.com/who", { waitUntil: "domcontentloaded" });
  }

  async expectHeadline() {
    await expect(
      this.page.getByText(/institutional investors and underwriters involved in the primary issuance/i),
    ).toBeVisible();
  }

  async expectInvestorProfile() {
    await expect(this.page.getByText(/investor profile/i)).toBeVisible();
  }

  async expectOnboardingSteps() {
    await expect(this.page.getByText(/onboarding steps/i)).toBeVisible();
  }

  async expectJoinPlatformCallToAction() {
    await expect(this.page.getByText(/join the platform/i)).toBeVisible();
  }
}
