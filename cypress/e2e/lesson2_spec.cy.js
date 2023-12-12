describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.get('h1').should('have text','Kitchen Sink')
    cy.get('button.primary').click(Querying)
    cy.get('input[email="emailaddress"]').type('jamwilson1993@gmail.com')
    cy.get('.traversal-breadcrumb')
          .children('.active')
          .should('contain', 'Data')

  
  })
})

