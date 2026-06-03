import { expect, Page } from "@playwright/test";

export class DemoRequestPage {
  constructor(private readonly page: Page) {}

  async open() {
    await this.page.goto("https://www.directbooks.com/demo-request", { waitUntil: "domcontentloaded" });
  }

  async expectDemoRequestForm() {
    await expect(this.page.getByText(/interested investors/i)).toBeVisible();
  }
}
