const BasePage = require('../pages/BasePage');
const { expect } = require('@playwright/test');

class ContactForm extends BasePage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        super(page);
        this.formPopover = this.page.locator('#contact-us-popover');
        this.closeButton = this.formPopover.locator('button.close-button');

        // Input fields

        this.firstNameInput = this.page.locator('input[name="FirstName"]');
        this.lastNameInput = this.page.locator('input[name="LastName"]');
        this.businessEmailInput = this.page.locator('input[name="Email"]');
        this.companyInput = this.page.locator('input[name="Company"]');
        this.jobTitleInput = this.page.locator('input[name="Title"]');
        this.phoneInput = this.page.locator('input[name="Phone"]');
        this.questionTextarea = this.page.locator('textarea[name="Avanade_Website_ContactUs_Request"]');

        // Select fields
        this.countrySelect = this.page.getByLabel('País');
        this.profileSelect = this.page.getByLabel('Perfil');

        // Checkbox
        this.optInCheckbox = this.page.locator('input[name="avanadeOptin"]');

        // Submit button
        this.submitButton = this.page.getByRole('button', { name: 'Enviar' });
    }

    async validateFormVisible() {
        await expect(this.formPopover).toBeVisible();

        await expect(this.firstNameInput).toBeVisible();
        await expect(this.lastNameInput).toBeVisible();
        await expect(this.businessEmailInput).toBeVisible();
        await expect(this.companyInput).toBeVisible();
        await expect(this.jobTitleInput).toBeVisible();
        await expect(this.phoneInput).toBeVisible();
        await expect(this.questionTextarea).toBeVisible();

        await expect(this.submitButton).toBeVisible();
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
        await this.countrySelect.selectOption(country);
    }

    async selectProfile(profile) {
        await this.profileSelect.selectOption(profile);
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
