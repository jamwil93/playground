function launchApplication()
function login(username, password) {
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.get('Loginbutton').click();
}
function verifyLoginSuccess()
