import { expect, Page } from "@playwright/test";

export class NewsroomPage {
  constructor(private readonly page: Page) {}

  async open() {
    await this.page.goto("https://www.directbooks.com/press-releases", { waitUntil: "domcontentloaded" });
  }

  async expectPressReleasesHeading() {
    await expect(this.page.getByText(/press releases/i)).toBeVisible();
  }

  async expectRecentPressRelease() {
    await expect(this.page.getByText(/phil armstrong/i)).toBeVisible();
  }

  async expectMultiplePressReleases() {
    await expect(this.page.getByText(/marketaxess/i)).toBeVisible();
    await expect(this.page.getByText(/rbc invests/i)).toBeVisible();
  }
}
