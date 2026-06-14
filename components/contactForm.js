const BasePage = require('../pages/BasePage');
const { expect } = require('@playwright/test');

class ContactForm extends BasePage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        super(page);

        this.popover = page.locator('#contact-us-popover');
        this.form = this.popover.locator('form.mktoForm');

        this.closeButton = this.popover.locator('button.close-button');

        this.firstName = this.form.locator('input[name="FirstName"]');
        this.lastName = this.form.locator('input[name="LastName"]');
        this.email = this.form.locator('input[name="Email"]');
        this.company = this.form.locator('input[name="Company"]');
        this.jobTitle = this.form.locator('input[name="Title"]');
        this.phone = this.form.locator('input[name="Phone"]');

        this.question = this.form.locator(
            'textarea[name="Avanade_Website_ContactUs_Request"]'
        );

        this.country = this.form.locator('select[name="Country"]');
        this.profile = this.form.locator('select[name="Avanade_Relationship"]');

        this.optIn = this.form.locator('input[name="avanadeOptin"]');

        this.submitButton = this.form.locator('button[type="submit"]');
    }

    async validateVisible() {
        await expect(this.popover).toBeVisible();
        await expect(this.form).toBeVisible();

        await expect(this.firstName).toBeVisible();
        await expect(this.lastName).toBeVisible();
        await expect(this.email).toBeVisible();
        await expect(this.company).toBeVisible();
        await expect(this.jobTitle).toBeVisible();
        await expect(this.phone).toBeVisible();
        await expect(this.question).toBeVisible();

        await expect(this.submitButton).toBeVisible();
    }

    async fillFirstName(value) {
        await this.firstName.fill(value);
    }

    async fillLastName(value) {
        await this.lastName.fill(value);
    }

    async fillEmail(value) {
        await this.email.fill(value);
    }

    async fillCompany(value) {
        await this.company.fill(value);
    }

    async fillJobTitle(value) {
        await this.jobTitle.fill(value);
    }

    async fillPhone(value) {
        await this.phone.fill(value);
    }

    async fillQuestion(value) {
        await this.question.fill(value);
    }

    async selectCountry(value) {
        await this.country.selectOption(value);
    }

    async selectProfile(value) {
        await this.profile.selectOption(value);
    }

    async checkOptIn() {
        await this.optIn.check();
    }

    async fillForm(data) {
        await this.firstName.fill(data.firstName);
        await this.lastName.fill(data.lastName);
        await this.email.fill(data.email);
        await this.company.fill(data.company);
        await this.jobTitle.fill(data.jobTitle);
        await this.phone.fill(data.phone);
        await this.question.fill(data.question);

        await this.country.selectOption(data.country);
        await this.profile.selectOption(data.profile);

        await this.optIn.check();
    }

    async submit() {
        await this.submitButton.click();
    }

    async close() {
        await this.closeButton.click();
    }
}

module.exports = ContactForm;