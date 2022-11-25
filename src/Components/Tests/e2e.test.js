import puppeteer from "puppeteer";

describe("Pizzas.js", () => {
    let browser;
    let page;
  
    beforeAll(async () => {
      browser = await puppeteer.launch();
      page = await browser.newPage();
      
    });

    it("navigates to the add page", async () => {
      await page.goto("http://localhost:3000/Pizzas");
      await page.waitForSelector(".Test");
      await page.click("#add-page-link");
      await page.waitForSelector(".Test2");
      const text = await page.$eval(".Test2", (e) => e.textContent);
      expect(text).toContain("Add new pizza");
    });
    afterAll(() => browser.close());
  });