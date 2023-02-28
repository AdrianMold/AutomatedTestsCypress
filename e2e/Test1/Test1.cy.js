describe('Exemplu unde', () => {

        //Test verificare segment din URL
    //    it('verific daca un URL contine ceva', () => {
    //        cy.visit('https://www.digi24.ro/stiri/externe/schimb-de-prozonieri-intre-rusia-si-ucraina-fiecare-tara-a-eliberat-cate-50-de-militari-2208529');

    //        cy.url().should('include','/stiri/') // verifica un segment
    // })


     // Testul cu delay
//    it('asteapta 10 secunde', () => {
//        cy.visit('https://www.google.com');

//        cy.get('#L2AGLb').click();

//        cy.wait(10000); // 10 secunde   1000 = 1 secunda

//        cy.get('.gLFyf').type('Au trecut 10 secunde')
//     })


    //Testul cu selector de timp atribut
 //     it('selectez folosind un atribut', () => {
 //           cy.visit('https://www.google.com');

 //           cy.get('#L2AGLb').click();

 //           cy.get('[alt="Google"]').should('be.visible'); //Selector atribut alt + assertion cu visible


 //     })

//Testul screenshot pagina
//     it('fac un screenshot la pagina', () => {
//        cy.visit('https://www.google.com');

//        cy.get('#L2AGLb').click();

//        cy.screenshot(); // Face screenshot intr-un folder default
//     })


// Testul constanta si verificare continut input
//  it('verific o valoare din input', () => {

//    cy.visit('https://www.google.com');

//    cy.get('#L2AGLb').click();
//    const googleSearch = cy.get('.gLFyf');  //constanta

//    googleSearch.type('123');
//    googleSearch.should('have.value', '123'); // Assertion contine textul

//      })


// Testul verifica existenta unei clase pe un element selectat
    it('verific o valoare din input', () => {

        cy.visit('https://www.libris.ro/');

        cy.get('#autoCompleteButton').should('have.class', 'onSearchClick'); //Exista clasa pe buton?

    })

})