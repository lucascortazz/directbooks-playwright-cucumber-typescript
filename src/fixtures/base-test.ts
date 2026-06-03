import { test as base } from "@playwright/test";
import { DirectBooksPage } from "../pages/directbooks.page";
import { CommunityPortalPage } from "../pages/community-portal.page";
import { WhyPage } from "../pages/why.page";
import { WhoPage } from "../pages/who.page";
import { HowPage } from "../pages/how.page";
import { WhatPage } from "../pages/what.page";
import { SeniorTeamPage } from "../pages/senior-team.page";
import { HistoryPage } from "../pages/history.page";
import { CareersPage } from "../pages/careers.page";
import { NewsroomPage } from "../pages/newsroom.page";
import { DemoRequestPage } from "../pages/demo-request.page";
import { LegalPage } from "../pages/legal.page";

type Fixtures = {
  directBooksPage: DirectBooksPage;
  communityPortalPage: CommunityPortalPage;
  whyPage: WhyPage;
  whoPage: WhoPage;
  howPage: HowPage;
  whatPage: WhatPage;
  seniorTeamPage: SeniorTeamPage;
  historyPage: HistoryPage;
  careersPage: CareersPage;
  newsroomPage: NewsroomPage;
  demoRequestPage: DemoRequestPage;
  legalPage: LegalPage;
};

export const test = base.extend<Fixtures>({
  directBooksPage: async ({ page }, use) => use(new DirectBooksPage(page)),
  communityPortalPage: async ({ page }, use) => use(new CommunityPortalPage(page)),
  whyPage: async ({ page }, use) => use(new WhyPage(page)),
  whoPage: async ({ page }, use) => use(new WhoPage(page)),
  howPage: async ({ page }, use) => use(new HowPage(page)),
  whatPage: async ({ page }, use) => use(new WhatPage(page)),
  seniorTeamPage: async ({ page }, use) => use(new SeniorTeamPage(page)),
  historyPage: async ({ page }, use) => use(new HistoryPage(page)),
  careersPage: async ({ page }, use) => use(new CareersPage(page)),
  newsroomPage: async ({ page }, use) => use(new NewsroomPage(page)),
  demoRequestPage: async ({ page }, use) => use(new DemoRequestPage(page)),
  legalPage: async ({ page }, use) => use(new LegalPage(page)),
});

export { expect } from "@playwright/test";
