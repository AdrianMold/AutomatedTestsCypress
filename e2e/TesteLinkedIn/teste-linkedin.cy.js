describe('On LinkedIn', () => {

    it('I can login' , () => {
        cy.visit('https://linkedin.com');

        cy.get('.nav__button-secondary').click();
        cy.get('#username').type('moldovan.adi389@gmail.com');
        cy.get('#password').type('guess3');
        cy.get('.btn__primary--large').click();

        cy.get('#ember17').should('exist');
    })




})