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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import '@percy/cypress';

// -- This is a custom Team registration command --
Cypress.Commands.add("register", () => { 
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.fixture('user').then((user) => {
        const teamname = user.teamname
        cy.get('.ce-login-layout__title').should('have.text', 'Sign in to your team')
        cy.get('.ce-login-layout__panel').should('be.visible')
        //cy.percySnapshot('team registration screen')
        cy.get('#ce-input-0').type(teamname)
        cy.get('.btn-text').should('have.text', 'Continue').click()
    })
        cy.url().should('include','login')   
})


// -- This is a custom login command --
Cypress.Commands.add("login", () => { 
    cy.fixture("user").then((user) => {
        const username = user.email
        const password = user.password
        cy.get('.ce-login-layout__title').should('have.text','Sign in')
        cy.get('#ce-input-0').type(username)
        cy.get('#ce-input-1').type(password)
        //cy.percySnapshot('user login screen');
        cy.get('.btn-text').click()
        cy.url().should('include', 'process-mining/ui')
    })
});

// -- This is a custom login command --
Cypress.Commands.add("invalid-login", (username, password) => { 
        cy.get('.ce-login-layout__title').should('have.text','Sign in')
        cy.get('#ce-input-0').type(username)
        cy.get('#ce-input-1').type(password)
        cy.contains('Sign In').click()
        cy.get('ce-validation__hint').should('have.text', 'Email or password are incorrect.')
        //cy.percySnapshot('invalid user login screen');
    })

// -- This is a custom logout command --
Cypress.Commands.add("logout", () => { 
    cy.get('div[class*="avatar"]').should('be.visible').first().click()
    cy.contains('logout', { matchCase: false }).click()
});
