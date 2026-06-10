const { expect } = require('@playwright/test');

class Footer {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;

        // Main footer container
        this.footerContainer = page.locator('#footer');

        // Logo and slogan
        this.footerLogo = this.footerContainer.getByRole('link', { name: 'avanade-logo-color' });
        this.slogan = this.footerContainer.getByRole('heading', { name: 'Do what matters' });

        // Main navigation links
        this.industriesLink = this.footerContainer.getByRole('link', { name: 'Indústrias' });
        this.servicesLink = this.footerContainer.getByRole('link', { name: 'Serviços' });
        this.insightsLink = this.footerContainer.getByRole('link', { name: 'Insights' });
        this.careersLink = this.footerContainer.getByRole('link', { name: 'Carreiras' });
        this.aboutLink = this.footerContainer.getByRole('link', { name: 'Sobre' });

        // Secondary links
        this.newsroomLink = this.footerContainer.getByRole('link', { name: 'Sala de imprensa' });
        this.trustCenterLink = this.footerContainer.getByRole('link', { name: 'Avanade Trust Center' });
        this.locationsLink = this.footerContainer.getByRole('link', { name: 'Localização' });

        // Social media links
        this.linkedinLink = this.footerContainer.getByRole('link', { name: 'linkedin' });
        this.youtubeLink = this.footerContainer.getByRole('link', { name: 'youtube' });
        this.instagramLink = this.footerContainer.getByRole('link', { name: 'instagram' });

        // Utility links
        this.privacyStatementLink = this.footerContainer.getByRole('link', { name: 'Declaração de privacidade' });
        this.cookiePolicyLink = this.footerContainer.getByRole('link', { name: 'Política de Cookies' });
        this.termsOfUseLink = this.footerContainer.getByRole('link', { name: 'Termos de uso' });
        this.accessibilityStatementLink = this.footerContainer.getByRole('link', { name: 'Declaração de acessibilidade' });
        this.codeOfEthicsLink = this.footerContainer.getByRole('link', { name: 'Código de Ética Empresarial' });
        this.sitemapLink = this.footerContainer.getByRole('link', { name: 'Mapa do site' });

        // Copyright
        this.copyrightText = this.footerContainer.getByText('© 2026 Avanade Inc. Todos os direitos reservados.');
    }

    async validateFooterLinks() {
        await expect(this.industriesLink).toBeVisible();
        await expect(this.servicesLink).toBeVisible();
        await expect(this.insightsLink).toBeVisible();
        await expect(this.careersLink).toBeVisible();
        await expect(this.aboutLink).toBeVisible();
    }

    async validateSocialMediaLinks() {
        await expect(this.linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/company/avanade');
        await expect(this.youtubeLink).toHaveAttribute('href', 'https://www.youtube.com/avanade');
        await expect(this.instagramLink).toHaveAttribute('href', 'https://www.instagram.com/avanadeinc/');
    }
}

module.exports = Footer;
