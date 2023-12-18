describe('test cases', () => {
  it('login successfully', () => {
    cy.visit('https://www.saucelabs.com')
    cy.get('#username').type('standard_user')
    cy.get(#password).type('password')
    cy.get('button').click()
  })
  
  it('invalid username', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#invalidusername').type('standard_bser')
    cy.get('#password').type('password')
    cy.get('button').click()
  }
  it('invalid password'), () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#username').type('standard_user')
    cy.get('#invalidpassword').type(invalidpassword)
    cy.get('button').click()
  }
  it('clickitems'), () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#username').type('standard_user')
    cy.get('#password').type('password')
    cy.get('button').click(items)
    c
    
  it('checkout'), () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#username').type('standard_user')
    cy.get('#password').type('password')
    cy.get('button').click(item)
    cy.get('bbutton').click(checkout)
    

  



})