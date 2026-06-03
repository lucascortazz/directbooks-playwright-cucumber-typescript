import { expect, Page } from "@playwright/test";

export class WhyPage {
  constructor(private readonly page: Page) {}

  async open() {
    await this.page.goto("https://www.directbooks.com/why", { waitUntil: "domcontentloaded" });
  }

  async expectHeadline() {
    await expect(this.page.getByText(/streamlining the new issue process/i)).toBeVisible();
  }

  async expectInThePastSection() {
    await expect(this.page.getByText(/in the past/i)).toBeVisible();
  }

  async expectTodaySection() {
    await expect(this.page.getByText(/today/i).first()).toBeVisible();
  }

  async expectJoinPlatformCallToAction() {
    await expect(this.page.getByText(/join the platform/i)).toBeVisible();
  }
}
