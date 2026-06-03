import { test } from "../src/fixtures/base-test";

test.describe("Newsroom page", () => {
  test.beforeEach(async ({ newsroomPage }) => {
    await newsroomPage.open();
  });

  test("press releases heading", async ({ newsroomPage }) => {
    await newsroomPage.expectPressReleasesHeading();
  });

  test("most recent press release", async ({ newsroomPage }) => {
    await newsroomPage.expectRecentPressRelease();
  });

  test("multiple press releases", async ({ newsroomPage }) => {
    await newsroomPage.expectMultiplePressReleases();
  });
});

test.describe("Demo Request page", () => {
  test.beforeEach(async ({ demoRequestPage }) => {
    await demoRequestPage.open();
  });

  test("investor form", async ({ demoRequestPage }) => {
    await demoRequestPage.expectDemoRequestForm();
  });
});
