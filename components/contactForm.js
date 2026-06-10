const BasePage = require('../pages/BasePage');

class ContactForm extends BasePage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        super(page);
        this.formPopover = this.page.locator('#contact-us-popover');
        this.closeButton = this.formPopover.locator('button.close-button');
        
        // Input fields
        this.firstNameInput = this.page.getByLabel('Nome', { exact: true });
        this.lastNameInput = this.page.getByLabel('Sobrenome');
        this.businessEmailInput = this.page.getByLabel('Endereço de e-mail corporativo');
        this.companyInput = this.page.getByLabel('Nome da empresa');
        this.jobTitleInput = this.page.getByLabel('Nome do cargo');
        this.phoneInput = this.page.getByLabel('Telefone:');
        this.questionTextarea = this.page.getByLabel('Sua pergunta');

        // Select fields
        this.countrySelect = this.page.getByLabel('País');
        this.profileSelect = this.page.getByLabel('Perfil');

        // Checkbox
        this.optInCheckbox = this.page.locator('input[name="avanadeOptin"]');

        // Submit button
        this.submitButton = this.page.getByRole('button', { name: 'Enviar' });
    }

    async fillFirstName(firstName) {
        await this.firstNameInput.fill(firstName);
    }

    async fillLastName(lastName) {
        await this.lastNameInput.fill(lastName);
    }

    async fillBusinessEmail(email) {
        await this.businessEmailInput.fill(email);
    }

    async fillCompany(companyName) {
        await this.companyInput.fill(companyName);
    }

    async fillJobTitle(jobTitle) {
        await this.jobTitleInput.fill(jobTitle);
    }

    async selectCountry(country) {
        await this.countrySelect.selectOption({ label: country });
    }

    async selectProfile(profile) {
        await this.profileSelect.selectOption({ label: profile });
    }

    async fillPhone(phone) {
        await this.phoneInput.fill(phone);
    }

    async fillQuestion(question) {
        await this.questionTextarea.fill(question);
    }

    async checkOptIn() {
        await this.optInCheckbox.check();
    }

    async submit() {
        await this.submitButton.click();
    }

    async close() {
        await this.closeButton.click();
    }
}

module.exports = ContactForm;
