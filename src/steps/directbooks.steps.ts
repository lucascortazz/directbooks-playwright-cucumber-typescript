import { Given, Then, Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, Browser, Page, expect } from "@playwright/test";

let browser: Browser;
let page: Page;

setDefaultTimeout(30 * 1000);

Before(async () => {
  browser = await chromium.launch({ headless: true });
  page = await browser.newPage();
});

After(async () => {
  await browser.close();
});

Given("I open the DirectBooks homepage", async () => {
  await page.goto("https://www.directbooks.com/", { waitUntil: "domcontentloaded" });
});

Given("I open the DirectBooks FAQ page", async () => {
  await page.goto("https://www.directbooks.com/faq", { waitUntil: "domcontentloaded" });
});

Given("I open the DirectBooks Contact page", async () => {
  await page.goto("https://www.directbooks.com/contact", { waitUntil: "domcontentloaded" });
});

Given("I open the DirectBooks Community Portal", async () => {
  await page.goto("https://community.directbooks.com/", { waitUntil: "domcontentloaded" });
});

Then("I should see the main DirectBooks messaging", async () => {
  await expect(page.getByText(/streamlining primary issuance/i)).toBeVisible();
});

Then("I should see the Join the Platform call to action", async () => {
  await expect(page.getByText(/join the platform/i).first()).toBeVisible();
});

Then("I should see frequently asked questions", async () => {
  await expect(page.getByText(/frequently asked questions/i)).toBeVisible();
});

Then("I should see information about who can use DirectBooks", async () => {
  await expect(
    page.getByText(/institutional investors and underwriters involved in the primary issuance/i),
  ).toBeVisible();
});

Then("I should see contact information", async () => {
  await expect(page.getByText(/contact us/i)).toBeVisible();
});

Then("I should see client services information", async () => {
  await expect(page.getByText(/clientservices@directbooks.com/i)).toBeVisible();
});

Then("I should see the login form", async () => {
  await expect(page.getByText(/log in/i)).toBeVisible();
});

Then("I should see the forgot password option", async () => {
  await expect(page.getByText(/forgot your password/i)).toBeVisible();
});
