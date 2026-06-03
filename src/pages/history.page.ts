import { expect, Page } from "@playwright/test";

export class HistoryPage {
  constructor(private readonly page: Page) {}

  async open() {
    await this.page.goto("https://www.directbooks.com/history", { waitUntil: "domcontentloaded" });
  }

  async expectHeadline() {
    await expect(this.page.getByText(/the directbooks journey/i)).toBeVisible();
  }

  async expectMilestonesContent() {
    await expect(this.page.getByText(/milestones/i)).toBeVisible();
  }
}
