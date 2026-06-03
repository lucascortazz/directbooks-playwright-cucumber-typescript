import { expect, Page } from "@playwright/test";

export class WhatPage {
  constructor(private readonly page: Page) {}

  async open() {
    await this.page.goto("https://www.directbooks.com/what", { waitUntil: "domcontentloaded" });
  }

  async expectHeadline() {
    await expect(
      this.page.getByText(/directbooks offers workflows for a broad array of global fixed income/i),
    ).toBeVisible();
  }

  async expectJoinPlatformCallToAction() {
    await expect(this.page.getByText(/join the platform/i)).toBeVisible();
  }
}
