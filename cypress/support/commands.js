// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('UsuarioCadastro', (value)=>{
    cy.get('button:eq(0)').click()
    cy.fixture('users.json').as('users')
    cy.get('@users').then(users => {
        // Verificando se o botão está desabilidado
        cy.get('button:eq(1)').should('be.disabled')
        const user = users[0]
        cy.get('input[name="name"]').type(user.name)
        cy.get('input[name="email"]').type(user.email)
        cy.get('input[name="password"]').type(user.password)
        // Verificando se o botão está não desabilidado
        cy.get('button:eq(1)').should('not.be.disabled')
        // submit form
        cy.get('button:eq(1)').click()
        // Verificando nova url
        cy.url().should('include', 'http://localhost:8000/dashboard')
        // Sair
        cy.xpath("//i[text()='exit_to_app']").click()
        cy.get('.v-card__actions > button:eq(1)').click()
    })
})

Cypress.Commands.add('UsuarioCadastroDashBoard', (value)=>{
    cy.visit('http://localhost:8000')
    cy.get('button:eq(0)').click()
    cy.fixture('users.json').as('users')
    cy.get('@users').then(users => {
        // Verificando se o botão está desabilidado
        cy.get('button:eq(1)').should('be.disabled')
        const user = users[0]
        cy.get('input[name="name"]').type(user.name)
        cy.get('input[name="email"]').type(user.email)
        cy.get('input[name="password"]').type(user.password)
        // Verificando se o botão está não desabilidado
        cy.get('button:eq(1)').should('not.be.disabled')
        // submit form
        cy.get('button:eq(1)').click()
        // Verificando nova url
        cy.url().should('include', 'http://localhost:8000/dashboard')
    })
})