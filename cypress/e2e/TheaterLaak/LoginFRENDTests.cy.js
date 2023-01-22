
describe('Login Account Succes', () => {
    it('Gebruiker moet een account aan kunnen maken en in kunnen loggen', () => {
  
  
    cy.visit(Cypress.env('url') + '/Registreer')
    const id = Cypress._.random(0, 1e6)
    const username = 'TestGebruiker' + id
    const email = 'testEmail' + id + '@yahoo.com'
      cy.get(':nth-child(3) > .InputRegistratie').type(username)
      cy.get(':nth-child(4) > .InputRegistratie').type("Aeack4df!")
      cy.get(':nth-child(5) > .InputRegistratie').type(email)
      
      cy.get('label > input').click();
      cy.get('.RegistratieCompleetButton').click()
      cy.visit(Cypress.env('url') + '/Login')
    
      cy.get('[placeholder="Gebruikersnaam"]').type(email)
      cy.get('[placeholder="Password"]').type("Aeack4df!")
    
      cy.get('.btn-primary').click()
    })
  })