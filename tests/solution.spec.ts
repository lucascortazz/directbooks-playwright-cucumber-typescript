import { test } from "../src/fixtures/base-test";

test.describe("Why page", () => {
  test.beforeEach(async ({ whyPage }) => {
    await whyPage.open();
  });

  test("headline and value proposition", async ({ whyPage }) => {
    await whyPage.expectHeadline();
  });

  test("before and after comparison", async ({ whyPage }) => {
    await whyPage.expectInThePastSection();
    await whyPage.expectTodaySection();
  });

  test("call to action", async ({ whyPage }) => {
    await whyPage.expectJoinPlatformCallToAction();
  });
});

test.describe("Who page", () => {
  test.beforeEach(async ({ whoPage }) => {
    await whoPage.open();
  });

  test("headline", async ({ whoPage }) => {
    await whoPage.expectHeadline();
  });

  test("investor profile and onboarding steps", async ({ whoPage }) => {
    await whoPage.expectInvestorProfile();
    await whoPage.expectOnboardingSteps();
  });

  test("call to action", async ({ whoPage }) => {
    await whoPage.expectJoinPlatformCallToAction();
  });
});

test.describe("How page", () => {
  test.beforeEach(async ({ howPage }) => {
    await howPage.open();
  });

  test("capabilities sections", async ({ howPage }) => {
    await howPage.expectUnderwritersSection();
    await howPage.expectInvestorsSection();
  });

  test("security certifications", async ({ howPage }) => {
    await howPage.expectISOCertification();
    await howPage.expectFIXProtocol();
    await howPage.expectSOC2Compliance();
  });
});

test.describe("What page", () => {
  test.beforeEach(async ({ whatPage }) => {
    await whatPage.open();
  });

  test("headline", async ({ whatPage }) => {
    await whatPage.expectHeadline();
  });

  test("call to action", async ({ whatPage }) => {
    await whatPage.expectJoinPlatformCallToAction();
  });
});
