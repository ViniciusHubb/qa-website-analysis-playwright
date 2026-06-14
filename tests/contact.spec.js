const { test, expect } = require('../fixtures/testFixtures');
const { faker } = require('@faker-js/faker');

test('Deve abrir e preencher formulário de contato', async ({ homePage, header, contactForm }) => {

    await homePage.navigate();
    await homePage.validatePageLoaded();

    await header.clickContactUs();
    
    await contactForm.validateVisible();

    const formData = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        company: faker.company.name(),
        jobTitle: 'QA Engineer',
        country: 'Brazil',
        profile: 'Other',
        phone: faker.phone.number('###########'),
        question: 'Teste automatizado'
    };

    await contactForm.fillForm(formData);
});