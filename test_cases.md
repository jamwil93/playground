Test cases

test case 1
Make sure that there is a valid login
Step 1: Go to website saucedemo.com
Step 2: Type in the standard_user login
Step 3: Type in the password "secret sauce"
Step 4: Click the login button
This should work

test case 2
Make sure the login is invalid
Step 1: Go to website saucedemo.com
Step 2: Type in invalid login info
Step: 3 Click the login button
This should work

test case 3 
Navigate through the pages
Step 1: Go to website saucedemo.com
Step 2: Enter valid login information
Step 3: Click on items to make sure there are no errors
There should be errors

test case 4
Adding items to the cart
Step 1: Go to website saucedemo.com
Step 2: Enter valid login information
Step 3: Click on "add to cart" on any of the items
It should work

test case 5
Checking out
Step 1: Go to website saucedemo.com
Step 2: Enter valid login information
Step 3: Add items to cart
Step 4: Click on cart
Step 5: Click on checkout
It should work 

Automaated Tests

launchApplication(https://www.saucedemo.com)
function login(username, password) {
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('button').click()
}
verifyLoginSuccess()

launchApplication(https://www.saucedemo.com)
function login(invalidusername, invalidpassword) {
    cy.get('#invalidusername').type(invalidusername);
    cy.get('#invalidpassword').type(invalidpassword);
    cy.get('button').click()
}

launchApplication(https://www.saucedemo.com)
function login(username, password) {
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('button').click()
}

function login(username, password) {
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('button').click()
}

function login(username, password) {
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('button').click()
}



