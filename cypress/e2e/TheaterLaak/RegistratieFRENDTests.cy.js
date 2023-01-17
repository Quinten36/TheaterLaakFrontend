
const id= Cypress._.random(0, 1e6)
describe('Registreer_Account_Succes', () => {
  it('Gebruiker moet een account aan kunnen maken', () => {


    cy.visit('localhost:3000/Registreer')

    cy.get(':nth-child(3) > .InputRegistratie').type('TestGebruiker' + id )
    cy.get(':nth-child(4) > .InputRegistratie').type("Aeack4df!")
    cy.get(':nth-child(5) > .InputRegistratie').type('testEmail' + id + '@yahoo.com')

    cy.get('label > input').click();
    cy.get('.RegistratieCompleetButton').click()


    cy.url().should('eq', 'http://localhost:3000/Validate');
  })
})

describe('Registreer_Account_Flase', () => {
  it('Gebruiker krijgt een error als hij een account probeert aan te maken met dezelfde naam', () => {


    cy.visit('localhost:3000/Registreer')

    cy.get(':nth-child(3) > .InputRegistratie').type('TestGebruiker' + id )
    cy.get(':nth-child(4) > .InputRegistratie').type("Aeack4df!")
    cy.get(':nth-child(5) > .InputRegistratie').type('testEmail' + Cypress._.random(0, 1e6) + '@yahoo.com')

    cy.get('label > input').click();
    cy.get('.RegistratieCompleetButton').click()


    cy.contains("De gebruikersnaam bestaat al verandere deze naar een nieuwe.")
  })
})

describe('Registreer_Account_Flase2', () => {
  it('Gebruiker krijgt een error als hij een account probeert aan te maken met dezelfde emailadres', () => {


    cy.visit('localhost:3000/Registreer')

    cy.get(':nth-child(3) > .InputRegistratie').type('TestGebruiker' + Cypress._.random(0, 1e6)  )
    cy.get(':nth-child(4) > .InputRegistratie').type("Aeack4df!")
    cy.get(':nth-child(5) > .InputRegistratie').type('testEmail' + id  + '@yahoo.com')

    cy.get('label > input').click();
    cy.get('.RegistratieCompleetButton').click()


    cy.contains("Dit email adres bestaat al verandere deze naar een nieuwe.")
  })
})


describe('Registreer_Account_Password_Error', () => {
  it('Gebruiker moet een Error krijgen als het wachtwoord niet voldoet aan de eisen', () => {


    cy.visit('localhost:3000/Registreer')

    cy.get(':nth-child(3) > .InputRegistratie').type('TestGebruiker' + Cypress._.random(0, 1e6))
    cy.get(':nth-child(4) > .InputRegistratie').type("qwerty1234")
    cy.get(':nth-child(5) > .InputRegistratie').type('testEmail' + + Cypress._.random(0, 1e6) + '@yahoo.com')

    cy.get('label > input').click();
    cy.get('.RegistratieCompleetButton').click()


    cy.contains("Uw wachtwoord moet minimaal 7 karakters zijn minimaal 1 speciaalteken 1 cijfer en 1 hoofdletter bevatten")
  })
})

describe('Registreer_Account_Password_Error2', () => {
  it('Gebruiker moet een Error krijgen als het wachtwoord een patroon bevat ', () => {


    cy.visit('localhost:3000/Registreer')

    cy.get(':nth-child(3) > .InputRegistratie').type('TestGebruiker' + Cypress._.random(0, 1e6))
    cy.get(':nth-child(4) > .InputRegistratie').type("QWEQWE123123!")
    cy.get(':nth-child(5) > .InputRegistratie').type('testEmail' + + Cypress._.random(0, 1e6) + '@yahoo.com')

    cy.get('label > input').click();
    cy.get('.RegistratieCompleetButton').click()


    cy.contains("Het wachtwoord heeft een herhalend patroon verander dit naar een veiliger wachtwoord")
  })
})

describe('Registreer_Account_Password_Error2', () => {
  it('Gebruiker moet een Error krijgen als het wachtwoord een woord bevat ', () => {


    cy.visit('localhost:3000/Registreer')

    cy.get(':nth-child(3) > .InputRegistratie').type('TestGebruiker' + Cypress._.random(0, 1e6))
    cy.get(':nth-child(4) > .InputRegistratie').type("Boe$!k1#!@#234!")
    cy.get(':nth-child(5) > .InputRegistratie').type('testEmail' + + Cypress._.random(0, 1e6) + '@yahoo.com')

    cy.get('label > input').click();
    cy.get('.RegistratieCompleetButton').click()


    cy.contains("Het wachtwoord komt te vaak voor verander uw wachtwoord en gebruik geen bestaande woorden.")
  })
})

describe('Registreer_Account_Password_Error3', () => {
  it('Gebruiker moet een Error krijgen als het wachtwoord een woord die in de top10 meest bekende wachtwoorden voorkomt', () => {


    cy.visit('localhost:3000/Registreer')

    cy.get(':nth-child(3) > .InputRegistratie').type('TestGebruiker' + Cypress._.random(0, 1e6))
    cy.get(':nth-child(4) > .InputRegistratie').type("qwerty1234!")
    cy.get(':nth-child(5) > .InputRegistratie').type('testEmail' + + Cypress._.random(0, 1e6) + '@yahoo.com')

    cy.get('label > input').click();
    cy.get('.RegistratieCompleetButton').click()


    cy.contains("Het wachtwoord komt te vaak voor verander uw wachtwoord en gebruik geen bestaande woorden.")
  })
})

describe('Registreer_Account_Email_Error', () => {
  it('Gebruiker moet een Error krijgen als een email geen @ bevat', () => {


    cy.visit('localhost:3000/Registreer')

    cy.get(':nth-child(3) > .InputRegistratie').type('TestGebruiker' + Cypress._.random(0, 1e6))
    cy.get(':nth-child(4) > .InputRegistratie').type("qwerty1234!")
    cy.get(':nth-child(5) > .InputRegistratie').type('testEmail' + + Cypress._.random(0, 1e6))

    cy.get('label > input').click();
    cy.get('.RegistratieCompleetButton').click()


    cy.contains("Uw emailadres moet een @ bevatten")
  })
})

describe('Registreer_Account_Email_Error', () => {
  it('Gebruiker moet een Error krijgen als de akoord voorwaarden checkbox niet aangevinkt is', () => {


    cy.visit('localhost:3000/Registreer')

    cy.get(':nth-child(3) > .InputRegistratie').type('TestGebruiker' + Cypress._.random(0, 1e6))
    cy.get(':nth-child(4) > .InputRegistratie').type("qwerty1234!")
    cy.get(':nth-child(5) > .InputRegistratie').type('testEmail' + + Cypress._.random(0, 1e6) + '@yahoo.com')


    cy.get('.RegistratieCompleetButton').click()


    cy.contains("U moet eerst akkoord gaan met de privacy voorwaarden voordat u een account aan kan maken.")
  })
})