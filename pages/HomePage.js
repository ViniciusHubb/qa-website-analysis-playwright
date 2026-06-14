const BasePage = require('./BasePage');
const Header = require('../components/Header');
const Footer = require('../components/Footer');
const { expect } = require('@playwright/test');

class HomePage extends BasePage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        super(page);

        this.header = new Header(page);
        this.footer = new Footer(page);

        this.heroSection = page.locator('.homepage-hero-video');
        this.heroTitle = this.heroSection.locator('h1');
        this.talkToAvanadeButton = this.heroSection.locator('a[href*="/contact"]');

        this.animatedCarousel = page.locator('.animated-carousel');
        this.carouselBigCardTitle = this.animatedCarousel.locator('.animated-carousel__big-card-title');
        this.carouselNextButton = this.animatedCarousel.locator('[data-testid="next"]');
        this.carouselPrevButton = this.animatedCarousel.locator('[data-testid="previous"]');

        this.clientCards = page.locator('.cards--without-title__single-card-container');

        this.servicesSection = page.locator('.text-image-left');
        this.servicesLink = this.servicesSection.locator('a[href*="/services"]');

        this.marketExperienceSection = page.locator('.text-image-right');
        this.marketExperienceLink = this.marketExperienceSection.locator('a[href*="/industry"]');

        this.visionSection = page.locator('.title-banner');
        this.visionLink = this.visionSection.locator('a[href*="/about"]');

        this.metricsSection = page.locator('.metric-blocks');
        this.metricItems = this.metricsSection.locator('.metric-blocks__metric');
    }

    async navigate() {
        await super.navigate('/');
    }

    async validatePageLoaded() {
        await expect(this.header.logo).toBeVisible();
        await expect(this.heroTitle).toBeVisible();
    }

    async clickTalkToAvanade() {
        await this.talkToAvanadeButton.click();
    }

    async clickNextCarousel() {
        await this.carouselNextButton.click();
    }

    async clickPrevCarousel() {
        await this.carouselPrevButton.click();
    }

    async getClientCardsCount() {
        return this.clientCards.count();
    }

    async getMetricItemsCount() {
        return this.metricItems.count();
    }
}

module.exports = HomePage;