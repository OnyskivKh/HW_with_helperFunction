export function findItem(productName) {
    cy.log('Find item');
    cy.get('body').then((body) => {
            if (body.find(`[title="${productName}"]`).length > 0) {
                cy.get(`[title="${productName}"]`).click();
                cy.get('.bgnone').should('have.text', productName);
            } else {
                cy.get('.pagination li a').contains('>').click();
                findItem(productName)
            }
        })
}

