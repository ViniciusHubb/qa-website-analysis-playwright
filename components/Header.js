const BasePage = require('../pages/BasePage');

class Header extends BasePage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        super(page);

        this.header = page.locator('#header');

        this.logo = this.header.locator('a[aria-label="avanade-logo-color"]');
        this.contactUsButton = this.header.locator('a.header-contact-us-button');
        this.languageSelectorButton = this.header.locator('button.site-selector__button');
        this.searchButton = this.header.locator('div.search-box button[title="Search"]');

        this.industries = this.header.locator('a[href$="/industry"]');
        this.services = this.header.locator('a[href$="/services"]');
        this.insights = this.header.locator('a[href$="/insights"]');
        this.careers = this.header.locator('a[href$="/career"]');
        this.about = this.header.locator('a[href$="/about"]');
    }

    async clickLanguageSelector() {
        await this.languageSelectorButton.click();
    }

    async selectLanguageByUrl(path) {
        await this.clickLanguageSelector();

        const languageOption = this.header.locator(`.site-selector a[href*="${path}"]`);
        await languageOption.click();
    }

    async clickIndustries() {
        await this.industries.click();
    }

    async clickServices() {
        await this.services.click();
    }

    async clickInsights() {
        await this.insights.click();
    }

    async clickCareers() {
        await this.careers.click();
    }

    async clickAbout() {
        await this.about.click();
    }

    async clickSearch() {
        await this.searchButton.click();
    }

    async clickContactUs() {
        await this.contactUsButton.click();
    }

}

module.exports = Header;