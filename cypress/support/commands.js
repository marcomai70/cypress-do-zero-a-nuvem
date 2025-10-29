// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
//
// Import commands.js using ES2015 syntax:
// import './commands'
//
// Alternatively you can use CommonJS syntax:
// require('./commands')

//Cypress.Commands.add('fillMandatoryFieldsAndSubmit', data => {
 //cy.get('#firstName').type(data.firstName );
 //cy.get('#lastName').type(data.lastName );
 //cy.get('#email').type(data.email );
 //cy.get('#open-text-area').type(data.message );
 //cy.get('button[type="submit"]').click();
 //Assim, mesmo se você esquecer de passar data, o comando ainda funcionará.
 // cy.get('#firstName').type(data.firstName || 'Marcos');
 //cy.get('#lastName').type(data.lastName || 'Maia');
 //cy.get('#email').type(data.email || 'marcos@example.com');
 // cy.get('#open-text-area').type(data.message || 'Mensagem de teste 7');
 // cy.get('button[type="submit"]').click();
//});
//comando customizado data com valor padrao pode ser implementado assim:
 Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
    firstName: 'Marcos',
    lastName: 'Maia',
    email: 'marcos@example.com',
    message: 'Mensagem de teste 7'
 }) => {

   cy.get('#firstName').type(data.firstName );
   cy.get('#lastName').type(data.lastName );
   cy.get('#email').type(data.email );
   cy.get('#open-text-area').type(data.message );
   //cy.get('button[type="submit"]').click(); essa forma para clicar no botao enviar ou usar a abaixo:
   cy.contains('button', 'Enviar').click();
 });
