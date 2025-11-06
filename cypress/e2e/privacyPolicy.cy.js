

it("testa a pagina de politica de privacidade de forma independente", () => {
  cy.viewport('samsung-note9') // Set viewport to 375px x 667px  
  cy.visit("cypress-do-zero-a-nuvem/src/privacy.html");
  cy.contains("Talking About Testing").should("be.visible");
});
