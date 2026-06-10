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

        // Hero section elements
        this.heroTitle = page.getByRole('heading').first();
        this.talkToAvanadeButton = page.getByRole('link', { name: 'Fale com a Avanade' });

        // Animated Carousel Section
        this.animatedCarousel = page.locator('.animated-carousel');
        this.carouselBigCardTitle = this.animatedCarousel.locator('.animated-carousel__big-card-title');
        this.carouselNextButton = this.animatedCarousel.getByTestId('next');
        this.carouselPrevButton = this.animatedCarousel.getByTestId('previous');

        // Clients Section
        this.clientsSectionTitle = page.getByRole('heading', { name: 'Como ajudamos nossos clientes através da tecnologia Microsoft' });
        this.clientCards = page.locator('.cards--without-title__single-card-container');

        // Services Section
        this.servicesSectionTitle = page.getByRole('heading', { name: 'Nossos serviços' });
        this.servicesLink = page.getByRole('link', { name: 'Conheça os nossos serviços' });

        // Market Experience Section
        this.marketExperienceSectionTitle = page.getByRole('heading', { name: 'Nossa experiência de mercado' });
        this.marketExperienceLink = page.getByRole('link', { name: 'Explore nossa experiência por setor' });

        // Vision Section
        this.visionSectionTitle = page.getByRole('heading', { name: 'A nossa visão' });
        this.visionLink = page.getByRole('link', { name: 'Saiba mais sobre nós' });

        // Metrics Section
        this.metricsSection = page.locator('.metric-blocks');
        this.metricItems = this.metricsSection.locator('.metric-blocks__metric');
    }

async validatePageLoaded() {
    await expect(this.header.logo).toBeVisible();
    await expect(this.heroTitle).toBeVisible();
}

    async navigate() {
    await this.page.goto('https://www.avanade.com/pt-br');
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
