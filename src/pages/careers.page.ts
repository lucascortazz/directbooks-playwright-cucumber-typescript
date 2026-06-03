import { expect, Page } from "@playwright/test";

export class CareersPage {
  constructor(private readonly page: Page) {}

  async open() {
    await this.page.goto("https://www.directbooks.com/careers", { waitUntil: "domcontentloaded" });
  }

  async expectHeadline() {
    await expect(this.page.getByText("CAREERS", { exact: true })).toBeVisible();
  }

  async expectTalentEmail() {
    await expect(this.page.getByText(/talent@directbooks\.com/i)).toBeVisible();
  }
}
