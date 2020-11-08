/// <reference types="cypress" />

beforeEach(() => {
    cy.task('query.deleteAll', 'Account')
    cy.task('query.deleteAll', 'Category')
    cy.task('query.deleteAll', 'User')
    cy.reload()
    cy.clearLocalStorage()
    cy.fixture('users.json').as('users')
    cy.get('@users').then(users => {
        cy.UsuarioCadastroDashBoard(users[0])
    })
})

describe('Fluxo normal', ()=>{ 

    it('Cadastro de uma nova Receita', ()=>{
        // Navegação
        cy.get('.v-speed-dial > .v-btn').click()
        cy.get('[style="transition-delay: 0.1s;"] > .v-btn').click()
        // Verificando se o botão está desabilidado
        cy.get('.flex .v-btn--round:eq(4)').should('be.disabled')
        // Input Vencimento
        cy.get('input[name="date"]').click()
        cy.get('tbody > :nth-child(3) > :nth-child(2) > .v-btn').click()
        cy.get('.v-picker__actions > button:eq(1)').click()

        // Input Conta
        cy.get('input[readonly]:eq(1)').click({force: true})
        cy.xpath("//div[contains(@class, 'v-list-item__title') and text() = 'Conta']").click()
        // Verificando se o botão está desabilidado
        cy.get('.v-dialog--active > .v-card > .v-card__actions > button:eq(1)').should('be.disabled')
        cy.get('.v-dialog input[type="text"]').type("Salário")
        // Verificando se o botão está não desabilidado
        cy.get('.v-dialog--active > .v-card > .v-card__actions > button:eq(1)').should('not.be.disabled')
        cy.get('.v-dialog--active > .v-card > .v-card__actions > button:eq(1)').click()

        // Input Categoria
        cy.get('input[readonly]:eq(2)').click({force: true})
        cy.xpath("//div[contains(@class, 'v-list-item__title') and text() = 'Categoria']").click()
        // Verificando se o botão está desabilidado
        cy.get('.v-dialog--active > .v-card > .v-card__actions > button:eq(1)').should('be.disabled')
        cy.get('.v-dialog input[type="text"]:eq(0)').type('Emprego')
        // Verificando se o botão está não desabilidado
        cy.get('.v-dialog--active > .v-card > .v-card__actions > button:eq(1)').should('not.be.disabled')
        cy.get('.v-dialog--active > .v-card > .v-card__actions > button:eq(1)').click()

        // Input Descrição
        cy.get('input[name="description"]').type('Sálario do mês')

        // Add Label
        cy.xpath("//i[contains(@class, 'primary--text') and text()='label']").click()
        cy.get('input[name="tags"]').type('Sálario, mes')

        // Add Observação
        cy.xpath("//i[contains(@class, 'primary--text') and text()='note']").click()
        cy.get('input[name="note"]').type('Meu salariozinho do mês :)')

        // Digitando Sálario
        cy.get(':nth-child(9) > .headline').click()
        cy.get(':nth-child(10) > .headline').click().click().click().click().click()
        cy.get('.v-card .display-2').should('contain.text', "3.000,00")

        // Verificando se o botão está habilidado
        cy.get('.flex .v-btn--round:eq(4)').should('not.be.disabled')
        
        // Submit Form
        cy.get('.flex .v-btn--round:eq(4)').click()
        // Verificando nova url
        cy.url().should('include', 'http://localhost:8000/dashboard/records')
        // Realizando Válidações de Cadastro        
        cy.get(':nth-child(3) > .v-list > .v-list-item > .v-list-item__action').should('contain.text', "3.000,00")
        cy.get(':nth-child(3) > .v-list > .v-list-item > .v-list-item__content > .v-list-item__title').should('contain.text', "Sálario do mês")
        cy.get(':nth-child(3) > .v-list > .v-list-item > .v-list-item__content > .v-list-item__subtitle').should('contain.text', "Emprego | Salário")
        cy.get('.v-footer strong').should('contain.text', "3.000,00")
    })

    it('Cadastro de uma nova Despesa', ()=>{
        // Navegação
        cy.get('.v-speed-dial > .v-btn').click()
        cy.get('[style="transition-delay: 0.05s;"] > .v-btn').click()
        // Verificando se o botão está desabilidado
        cy.get('.flex .v-btn--round:eq(4)').should('be.disabled')
        // Input Vencimento
        cy.get('input[name="date"]').click()
        cy.get('tbody > :nth-child(3) > :nth-child(2) > .v-btn').click()
        cy.get('.v-picker__actions > button:eq(1)').click()

        // Input Conta
        cy.get('input[readonly]:eq(1)').click({force: true})
        cy.xpath("//div[contains(@class, 'v-list-item__title') and text() = 'Conta']").click()
        // Verificando se o botão está desabilidado
        cy.get('.v-dialog--active > .v-card > .v-card__actions > button:eq(1)').should('be.disabled')
        cy.get('.v-dialog input[type="text"]').type("Cartão")
        // Verificando se o botão está não desabilidado
        cy.get('.v-dialog--active > .v-card > .v-card__actions > button:eq(1)').should('not.be.disabled')
        cy.get('.v-dialog--active > .v-card > .v-card__actions > button:eq(1)').click()

        // Input Categoria
        cy.get('input[readonly]:eq(2)').click({force: true})
        cy.xpath("//div[contains(@class, 'v-list-item__title') and text() = 'Categoria']").click()
        // Verificando se o botão está desabilidado
        cy.get('.v-dialog--active > .v-card > .v-card__actions > button:eq(1)').should('be.disabled')
        cy.get('.v-dialog input[type="text"]:eq(0)').type('Compra')
        // Verificando se o botão está não desabilidado
        cy.get('.v-dialog--active > .v-card > .v-card__actions > button:eq(1)').should('not.be.disabled')
        cy.get('.v-dialog--active > .v-card > .v-card__actions > button:eq(1)').click()

        // Input Descrição
        cy.get('input[name="description"]').type('Compra de cursos da Udmey')

        // Add Label
        cy.xpath("//i[contains(@class, 'error--text') and text()='label']").click()
        cy.get('input[name="tags"]').type('Cartão, Compra')

        // Add Observação
        cy.xpath("//i[contains(@class, 'error--text') and text()='note']").click()
        cy.get('input[name="note"]').type('Meu cursozinho do mês :)')

        // Digitando Sálario
        cy.get(':nth-child(9) > .headline').click()
        cy.get(':nth-child(10) > .headline').click().click().click()
        cy.get('.v-card .display-2').should('contain.text', "30,00")

        // Verificando se o botão está habilidado
        cy.get('.flex .v-btn--round:eq(4)').should('not.be.disabled')
        
        // Submit Form
        cy.get('.flex .v-btn--round:eq(4)').click()
        // Verificando nova url
        cy.url().should('include', 'http://localhost:8000/dashboard/records')
        // Realizando Válidações de Cadastro        
        cy.get(':nth-child(3) > .v-list > .v-list-item > .v-list-item__action').should('contain.text', "30,00")
        cy.get(':nth-child(3) > .v-list > .v-list-item > .v-list-item__content > .v-list-item__title').should('contain.text', "Compra de cursos da Udmey")
        cy.get(':nth-child(3) > .v-list > .v-list-item > .v-list-item__content > .v-list-item__subtitle').should('contain.text', "Compra | Cartão")
        cy.get('.v-footer strong').should('contain.text', "30,00")
    })
})