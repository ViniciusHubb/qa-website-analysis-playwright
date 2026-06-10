const { test, expect } = require('../fixtures/testFixtures');

test('Deve abrir e preencher formulário de contato', async ({ homePage, header, contactForm }) => {

    await homePage.navigate();
    await homePage.validatePageLoaded();

    await header.clickContactUs();
    
    await contactForm.validateFormVisible();

    await contactForm.fillFirstName('Teste');
    await contactForm.fillLastName('QA');
    await contactForm.fillBusinessEmail('teste@email.com');
    await contactForm.fillCompany('Empresa Teste');
    await contactForm.fillJobTitle('QA Engineer');
    await contactForm.selectCountry('Brazil');
    await contactForm.selectProfile('Other');
    await contactForm.fillPhone('81999999999');
    await contactForm.fillQuestion('Teste automatizado');

    await contactForm.checkOptIn();
});
