describe('process explorer tests', () => {
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

    it('Verify the process explorer screen', () => {
        cy.contains('ServiceNow Ticketing').click()
        cy.percySnapshot('ServiceNow process screen');
        cy.get('.ce-tile__wrapper').click()
        cy.url().should('contain', 'process-mining/analysis/')
        cy.contains('Activities')
        cy.contains('Connections')
        cy.wait(3000)
        cy.percySnapshot('process explorer screen');
    });

})