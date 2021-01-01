describe('data model scenarios', () => {
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

    it('Verify the data model screen', () => {
        cy.contains('SAP ECC - Order to Cash').click()
        cy.get('button[data-testing-uid=workspaceSectionActions-showDataModel-button]').click()
        cy.wait(4000)
        cy.get('.ce-modal-top-title').should('have.text','Data Model: b) Order to Cash - SAP ECC - EN [in use]')
        cy.get('#data-model').should('have.text','Data Model')
        cy.percySnapshot('data model mapping')
        cy.contains('Data Model Loads')
        cy.percySnapshot('data model load detail')
        cy.get('ce-icon[name=close]').should('be.visible')
        cy.go('back')
        cy.contains('SAP ECC - Order to Cash')
    });
})