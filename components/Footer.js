const { expect } = require('@playwright/test');

class Footer {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;

        this.footer = page.locator('#footer');

        this.logo = this.footer.locator('a[aria-label="avanade-logo-color"]');
        this.slogan = this.footer.locator('.position-right .rich-text h5');

        this.industriesLink = this.footer.locator('a[href$="/industry"]');
        this.servicesLink = this.footer.locator('a[href$="/services"]');
        this.insightsLink = this.footer.locator('a[href$="/insights"]');
        this.careersLink = this.footer.locator('a[href$="/career"]');
        this.aboutLink = this.footer.locator('a[href$="/about"]');

        this.newsroomLink = this.footer.locator('a[href$="/newsroom"]');
        this.trustCenterLink = this.footer.locator('a[href$="/about/trust-center"]');
        this.locationsLink = this.footer.locator('a[href$="/office-locations"]');

        this.linkedinLink = this.footer.locator('a[href*="linkedin.com/company/avanade"]');
        this.youtubeLink = this.footer.locator('a[href*="youtube.com/avanade"]');
        this.instagramLink = this.footer.locator('a[href*="instagram.com/avanadeinc"]');

        this.privacyStatementLink = this.footer.locator('a[href*="privacy-policy"]');
        this.cookiePolicyLink = this.footer.locator('a[href*="cookies"]');
        this.termsOfUseLink = this.footer.locator('a[href*="terms-of-use"]');
        this.accessibilityStatementLink = this.footer.locator('a[href*="accessibility-statement"]');
        this.codeOfEthicsLink = this.footer.locator('a[href*="code-of-business-ethics"]');
        this.sitemapLink = this.footer.locator('a[href*="sitemap"]');

        this.copyright = this.footer.locator('.rich-text strong').last();
    }

    async validateMainLinksVisible() {
        await expect(this.industriesLink).toBeVisible();
        await expect(this.servicesLink).toBeVisible();
        await expect(this.insightsLink).toBeVisible();
        await expect(this.careersLink).toBeVisible();
        await expect(this.aboutLink).toBeVisible();
    }

    async validateSecondaryLinksVisible() {
        await expect(this.newsroomLink).toBeVisible();
        await expect(this.trustCenterLink).toBeVisible();
        await expect(this.locationsLink).toBeVisible();
    }

    async validateSocialLinks() {
        await expect(this.linkedinLink).toHaveAttribute('href', /linkedin\.com\/company\/avanade/);
        await expect(this.youtubeLink).toHaveAttribute('href', /youtube\.com\/avanade/);
        await expect(this.instagramLink).toHaveAttribute('href', /instagram\.com\/avanadeinc/);
    }

    async validateUtilityLinksVisible() {
        await expect(this.privacyStatementLink).toBeVisible();
        await expect(this.cookiePolicyLink).toBeVisible();
        await expect(this.termsOfUseLink).toBeVisible();
        await expect(this.accessibilityStatementLink).toBeVisible();
        await expect(this.codeOfEthicsLink).toBeVisible();
        await expect(this.sitemapLink).toBeVisible();
    }

    async validateStructure() {
        await expect(this.logo).toBeVisible();
        await expect(this.slogan).toBeVisible();
        await expect(this.copyright).toBeVisible();
    }
}

module.exports = Footer;