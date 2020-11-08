/// <reference types="cypress" />

beforeEach(() => {
    cy.task('query.deleteAll', 'User')
    cy.reload()
    cy.clearLocalStorage()
    cy.visit('http://localhost:8000')
})

describe('Fluxo normal', ()=>{ 

    it('Efetuar Cadastro', ()=>{
        cy.get('button:eq(0)').click()
        cy.fixture('users.json').as('users')
        cy.get('@users').then(users => {
            const user = users[0]
            // Verificando se o botão está desabilidado
            cy.get('button:eq(1)').should('be.disabled')
            // Inputs
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

    it('Efetuar login', ()=>{
        cy.fixture('users.json').as('users')
        cy.get('@users').then(users => {
            cy.UsuarioCadastro(users[0])
        })
        cy.fixture('profile.json').as('profile')
        cy.get('@profile').then(profile => {
            // Verificando se o botão está desabilidado
            cy.get('button:eq(1)').should('be.disabled')
            // inputs
            cy.get('input[name="email"]').type(profile.email)
            cy.get('input[name="password"]').type(profile.password)
            // Verificando se o botão está não desabilidado
            cy.get('button:eq(1)').should('not.be.disabled')
            // submit form
            cy.get('button:eq(1)').click()
            // Verificando nova url
            cy.url().should('include', 'http://localhost:8000/dashboard')
        })
    })

})

describe('Fluxo de tratamento de erros', () => {
    
    it('Efetuar Cadastro sem os dados requeridos', ()=>{
        cy.get('button:eq(0)').click()
        cy.fixture('users.json').as('users')
        cy.get('@users').then(users => {
            const user = users[0]
            // Verificando se o botão está desabilidado
            cy.get('button:eq(1)').should('be.disabled')

            // Verificação Input NOME 
            // (requerido)
            cy.get('input[name="name"]').type(user.name).clear()
            cy.get('.v-messages__message:eq(0)').should('contain.text', "Nome é obrigatório!")
            // (minimo 3 caracteres)
            cy.get('input[name="name"]').type("ab")
            cy.get('.v-messages__message:eq(0)').should('contain.text', "Insira pelo menos 3 caracteres!")
            
            // Verificação Input EMAIL
            // (requerido)
            cy.get('input[name="email"]').type(user.email).clear()
            cy.get('.v-messages__message:eq(1)').should('contain.text', "Email é obrigatório!")
            // (email)
            cy.get('input[name="email"]').type("ismael")
            cy.get('.v-messages__message:eq(1)').should('contain.text', "Insira um email válido!")
            
            // Verificação Input SENHA
            // (requerido)
            cy.get('input[name="password"]').type(user.password).clear()
            cy.get('.v-messages__message:eq(2)').should('contain.text', "Senha é obrigatória!")
            // (minimo 6 caracteres)
            cy.get('input[name="password"]').type("12345")
            cy.get('.v-messages__message:eq(2)').should('contain.text', "Insira pelo menos 6 caracteres!")
           
            // Verificando se o botão está desabilidado
            cy.get('button:eq(1)').should('be.disabled')
        })
    })

    it('Efetuar login sem os dados requeridos', ()=>{
        cy.fixture('profile.json').as('profile')
        cy.get('@profile').then(profile => {
            // Verificando se o botão está desabilidado
            cy.get('button:eq(1)').should('be.disabled')
            // inputs
            // Verificação Input EMAIL
            // (requerido)
            cy.get('input[name="email"]').type(profile.email).clear()
            cy.get('.v-messages__message:eq(0)').should('contain.text', "Email é obrigatório!")
            // (email)
            cy.get('input[name="email"]').type("ismael")
            cy.get('.v-messages__message:eq(0)').should('contain.text', "Insira um email válido!")
            
            // Verificação Input SENHA
            // (requerido)
            cy.get('input[name="password"]').type(profile.password).clear()
            cy.get('.v-messages__message:eq(1)').should('contain.text', "Senha é obrigatória!")
            // (minimo 6 caracteres)
            cy.get('input[name="password"]').type("12345")
            cy.get('.v-messages__message:eq(1)').should('contain.text', "Insira pelo menos 6 caracteres!")

            // Verificando se o botão está desabilidado
            cy.get('button:eq(1)').should('be.disabled')
        })
    })
})