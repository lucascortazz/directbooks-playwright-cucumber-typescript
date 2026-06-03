import { expect, Page } from "@playwright/test";

export class DirectBooksPage {
  constructor(private readonly page: Page) {}

  // ── Navigation ────────────────────────────────────────────────────────────

  async openHomePage() {
    await this.page.goto("https://www.directbooks.com/", { waitUntil: "domcontentloaded" });
  }

  async openFaqPage() {
    await this.page.goto("https://www.directbooks.com/faq", { waitUntil: "domcontentloaded" });
  }

  async openContactPage() {
    await this.page.goto("https://www.directbooks.com/contact", { waitUntil: "domcontentloaded" });
  }

  // ── Homepage ──────────────────────────────────────────────────────────────

  async expectHeroHeadline() {
    await expect(this.page.getByText(/optimizing global financing markets/i)).toBeVisible();
  }

  async expectTrustedCommunityBanner() {
    await expect(this.page.getByText(/trusted community of global underwriters/i)).toBeVisible();
  }

  async expectReachingInvestorsMessage() {
    await expect(this.page.getByText(/reaching 1,000\+ global investors/i)).toBeVisible();
  }

  async expectMainMessaging() {
    await expect(this.page.getByText(/streamlining primary issuance/i)).toBeVisible();
  }

  async expectProductSection() {
    await expect(
      this.page.getByText(/streamlined workflows, structured deal data, and real-time updates/i),
    ).toBeVisible();
  }

  async expectCommunitySection() {
    await expect(
      this.page.getByText(/participants access a single distribution point/i),
    ).toBeVisible();
  }

  async expectInTheNewsSection() {
    await expect(this.page.getByText(/in the news/i)).toBeVisible();
  }

  async expectJoinPlatformCallToAction() {
    await expect(this.page.getByText(/join the platform/i).first()).toBeVisible();
  }

  async expectNavigationMenu() {
    await expect(this.page.getByRole("navigation")).toBeVisible();
  }

  async expectFooterCopyright() {
    await expect(this.page.getByText(/copyright 2026 directbooks/i)).toBeVisible();
  }

  async expectFooterInfoEmail() {
    await expect(this.page.getByText(/info@directbooks\.com/i).first()).toBeVisible();
  }

  // ── FAQ ───────────────────────────────────────────────────────────────────

  async expectFrequentlyAskedQuestions() {
    await expect(this.page.getByText(/frequently asked questions/i)).toBeVisible();
  }

  async expectWhoCanUseDirectBooksInformation() {
    await expect(
      this.page.getByText(/institutional investors and underwriters involved in the primary issuance/i),
    ).toBeVisible();
  }

  async expectParticipatingUnderwriters() {
    await expect(this.page.getByText(/bank of america/i).first()).toBeVisible();
    await expect(this.page.getByText(/goldman sachs/i).first()).toBeVisible();
    await expect(this.page.getByText(/jp morgan/i).first()).toBeVisible();
  }

  async expectAccessMethods() {
    await expect(this.page.getByText(/web access/i)).toBeVisible();
    await expect(this.page.getByText(/api connection/i)).toBeVisible();
  }

  async expectDartAnalytics() {
    await expect(
      this.page.getByText(/data analytics reporting technology/i),
    ).toBeVisible();
  }

  // ── Contact ───────────────────────────────────────────────────────────────

  async expectContactInformation() {
    await expect(this.page.getByText(/contact us/i)).toBeVisible();
  }

  async expectClientServicesInformation() {
    await expect(this.page.getByText(/clientservices@directbooks\.com/i)).toBeVisible();
  }

  async expectUSPhoneNumber() {
    await expect(this.page.getByText(/\+1-347-321-7910/i)).toBeVisible();
  }

  async expectEuropePhoneNumber() {
    await expect(this.page.getByText(/\+44.*1525.*624704/i)).toBeVisible();
  }

  async expectInfoEmail() {
    await expect(this.page.getByText(/info@directbooks\.com/i).first()).toBeVisible();
  }

  async expectClientExperienceEmail() {
    await expect(this.page.getByText(/cx@directbooks\.com/i)).toBeVisible();
  }
}
