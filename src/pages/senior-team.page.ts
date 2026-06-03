import { expect, Page } from "@playwright/test";

export class SeniorTeamPage {
  constructor(private readonly page: Page) {}

  async open() {
    await this.page.goto("https://www.directbooks.com/seniorteam", { waitUntil: "domcontentloaded" });
  }

  async expectHeadline() {
    await expect(this.page.getByText(/best-in-class team/i)).toBeVisible();
  }

  async expectCEO() {
    await expect(this.page.getByText(/richard kerschner/i)).toBeVisible();
    await expect(this.page.getByText(/ceo/i).first()).toBeVisible();
  }

  async expectCOO() {
    await expect(this.page.getByText(/yvonne wang/i)).toBeVisible();
    await expect(this.page.getByText("COO", { exact: true })).toBeVisible();
  }
}
