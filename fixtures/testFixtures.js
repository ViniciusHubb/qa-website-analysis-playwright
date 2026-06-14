const base = require('@playwright/test');
const HomePage = require('../pages/HomePage');
const Header = require('../components/Header');
const ContactForm = require('../components/contactForm');
const Footer = require('../components/Footer');

const test = base.test.extend({
    homePage: async ({ page }, use) => {
        const home = new HomePage(page);
        await use(home);
    },

    header: async ({ page }, use) => {
        const header = new Header(page);
        await use(header);
    },

    contactForm: async ({ page }, use) => {
        const form = new ContactForm(page);
        await use(form);
    },

    footer: async ({ page }, use) => {
        const footer = new Footer(page);
        await use(footer);
    }

});

const expect = base.expect;

module.exports = { test, expect };