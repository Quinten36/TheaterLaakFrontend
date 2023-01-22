/// <reference types="Cypress" />



describe('Visit ShoppingCart and Press \'Verder Winkelen\'', () => { 
  beforeEach(() => {
    cy.visit(Cypress.env('url') +'/winkelwagen');
  });
  
  

  it('Visit ShoppingCart and Press \'Verder Winkelen\'', () => {
    
    cy.contains('Verder Winkelen').click();
    
    cy.url().should('include', '/programmering')
  });

  it('Empty ShoppingCart Elements', () => {
    cy.contains("Mijn Winkelwagentje");
    cy.contains("Er zijn geen items toegevoegd aan het winkelwagentje");
    cy.contains("Verder Winkelen");
    cy.contains("Bestellen").should('be.disabled');
    cy.contains("Totaal:").should('be.hidden')
  });
})

