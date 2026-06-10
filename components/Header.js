const BasePage = require('../pages/BasePage');

class Header extends BasePage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        super(page);
        this.headerContainer = this.page.locator('#header');
        this.logo = this.page.getByRole('link', { name: 'avanade-logo-color' });
        this.contactUsButton = this.page.getByRole('link', { name: 'Entre em contato conosco' });
        this.languageSelectorButton = this.page.getByRole('button', { name: 'Language & region' });
        this.searchButton = this.page.locator('div.search-box button[title="Search"]');
    }

    /**
     * Clicks on a main navigation menu item by its name.
     * @param {string} menuName - The name of the menu item to click (e.g., 'Indústrias', 'Serviços').
     */
    async clickMenuItem(menuName) {
        await this.page.getByRole('link', { name: menuName, exact: true }).click();
    }

    async clickSearch() {
        await this.searchButton.click();
    }

    async clickContactUs() {
        await this.contactUsButton.click();
    }
}

module.exports = Header;
