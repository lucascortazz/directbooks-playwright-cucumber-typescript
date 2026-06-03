import { expect, Page } from "@playwright/test";

export class HowPage {
  constructor(private readonly page: Page) {}

  async open() {
    await this.page.goto("https://www.directbooks.com/how", { waitUntil: "domcontentloaded" });
  }

  async expectUnderwritersSection() {
    await expect(this.page.getByText(/underwriters can/i)).toBeVisible();
  }

  async expectInvestorsSection() {
    await expect(this.page.getByText("INVESTORS CAN:", { exact: true })).toBeVisible();
  }

  async expectISOCertification() {
    await expect(this.page.getByText(/iso 27001/i)).toBeVisible();
  }

  async expectFIXProtocol() {
    await expect(this.page.getByText("FIX 5.0 SP2", { exact: true })).toBeVisible();
  }

  async expectSOC2Compliance() {
    await expect(this.page.getByText(/soc 2/i)).toBeVisible();
  }
}
