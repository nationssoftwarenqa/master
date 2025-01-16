import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
const xpath = require('cypress-xpath');

Given("I visit bible app online", () => {
    cy.visit('https://www.bible.com');
})

When('I search for {string} keyword', (keyword) => {
    cy.xpath('//*[@id="__next"]/div[2]/header/div/div[2]/div/input').type(keyword + "\n");
})

Then('click on the text bible', () => {
    cy.wait(5000);
    cy.xpath('//*[@id="__next"]/div[2]/header/div/div[1]/a[1]', {timeout: 5000}).first().should('be.visible').click();
})

Then('the {string} page is opened', (url) => {
    cy.wait(5000);
    cy.url((currentUrl) => {
        expect(currentUrl).to.equal(url);
    })
})