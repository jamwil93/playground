describe('test cases', () => {
  it('login successfully', () => {
    cy.visit('https://www.saucelabs.com')
    cy.get('#username').type('standard_user')
    cy.get('#password').type('password')
    cy.get('#login-button').click
  })
  
  it('invalid username', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#invalidusername').type('standard_bser')
    cy.get('#password').type('password')
    cy.get('#login-button').click
  } )
  it('invalid password', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#username').type('standard_user')
    cy.get('#invalidpassword').type('invalidpassword')
    cy.get('#login-button').click
  } )
  it('clickitems', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#username').type('standard_user')
    cy.get('#password').type('password')
    cy.get('#login-button').click
    cy.get('#add-to-cart-sauce-labs-backpack').click
    
  }
  it('checkout', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#username').type('standard_user')
    cy.get('#password').type('password')
    cy.get('#login-button').click
    cy.get('#add-to-cart-sauce-labs-backpack').click
    cy.get('#shpping-cart-link').click


  
  
  
  
  })
}