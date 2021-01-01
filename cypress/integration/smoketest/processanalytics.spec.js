describe('process analytics scenarios', () => {
    before(function() {
        cy.visit('/')
        cy.register()
        cy.wait(4000)
        cy.login() 
        cy.wait(4000)     
    })

    after(function() {
        cy.logout()     
    })

    it('Verify the process analytics screen', () => {       
        cy.title().should('contain', 'Workspaces | Process Analytics')
        cy.get('.ce-item-group__label').should('have.length', 4)
        cy.get('.ce-tile__wrapper').should('have.length', 4)
        cy.contains('Workspaces').should('be.visible')
        cy.contains('Analyses').should('be.visible')
        cy.contains('Tags').should('be.visible')
        cy.contains('SAP ECC - Order to Cash').should('be.visible')
        cy.contains('SAP ECC - Purchase to Pay').should('be.visible')
        cy.contains('ServiceNow Ticketing')
        cy.percySnapshot('process analytics screen')
    })
});