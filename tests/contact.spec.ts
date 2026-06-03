import { test } from "../src/fixtures/base-test";

test.describe("Contact page", () => {
  test.beforeEach(async ({ directBooksPage }) => {
    await directBooksPage.openContactPage();
  });

  test("page heading and client services", async ({ directBooksPage }) => {
    await directBooksPage.expectContactInformation();
    await directBooksPage.expectClientServicesInformation();
  });

  test("phone numbers", async ({ directBooksPage }) => {
    await directBooksPage.expectUSPhoneNumber();
    await directBooksPage.expectEuropePhoneNumber();
  });

  test("email addresses", async ({ directBooksPage }) => {
    await directBooksPage.expectInfoEmail();
    await directBooksPage.expectClientExperienceEmail();
  });
});
