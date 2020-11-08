# vue-finances

Este projeto foi gerado com [Cypress.js](https://www.cypress.io/) versão 5.5.0

TESTE E2E criado para ser utlizado em conjunto com uma API GraphQL e o Front-end em Vue.js, ferramenas utilizadas:

* NodeJS
* Cypress Xpath
* Pg

### Porque usar o Cypress.js
Cypress é uma ferramenta de teste de front-end de próxima geração desenvolvida para a web moderna. Abordando os principais pontos problemáticos que os desenvolvedores e engenheiros de controle de qualidade enfrentam ao testar aplicativos modernos. Na minha visão como desenvolvedor [Full-Stack](https://www.youtube.com/watch?v=GJqW8J_Eg54) e [QA tester](https://www.youtube.com/watch?v=PNU1yF2qMu8) o [Cypress.js](https://www.cypress.io/) automatiza grande parte das configurações do meu ambiente de testes, o desenvolviemnto de testes com [Cypress.js](https://www.cypress.io/) já traz [Intellisense](https://docs.microsoft.com/pt-br/visualstudio/ide/using-intellisense?view=vs-2019#:~:text=O%20IntelliSense%20%C3%A9%20uma%20ajuda,Informa%C3%A7%C3%B5es%20R%C3%A1pidas%20e%20Completar%20Palavra.&text=Para%20obter%20mais%20informa%C3%A7%C3%B5es%20sobre,listados%20na%20se%C3%A7%C3%A3o%20Consulte%20tamb%C3%A9m.) isso facilita muito a criação de scripts de teste, o [Cypress.js](https://www.cypress.io/) tambem traz um exelente suporte de depuração de scripts usando [screenshots](https://www.significados.com.br/screenshot/#:~:text=Screenshot%20%C3%A9%20uma%20palavra%20da,tradu%C3%A7%C3%A3o%20para%20a%20l%C3%ADngua%20portuguesa.) e gravação em tempo real na execução de testes, facil imcorporação de comandos globais para serem utilizados em qualquer ponto durante a execução de um teste, uma das coisas que eu vi que o [Cypress.js](https://www.cypress.io/) tem que o difere nas demais Frameworks de [Teste E2E](https://blog.cedrotech.com/teste-end-to-end/) e que o [Cypress.js](https://www.cypress.io/) não so testa as telas sem si mais tambem pode fazer [Testes de Intergração](https://medium.com/@mateus1198/teste-de-unidade-e-teste-de-integra%C3%A7%C3%A3o-o-que-s%C3%A3o-de58d7a3d3d2) e [Testes de Unidade](https://medium.com/@mateus1198/teste-de-unidade-e-teste-de-integra%C3%A7%C3%A3o-o-que-s%C3%A3o-de58d7a3d3d2).

## Screenshots

app view:

<img src="https://raw.githubusercontent.com/ismaelalvesgit/cypress-vue-finances/master/app.png" width="800">

## Development

### Setup

#### 1) Instalação de dependencias
1º download das dependeicas do projeto
``` sh
npm install
```

#### 2) Iniciar o ambiente backend
O ambiente backend está em outro projeto que está localizado [AQUI](https://github.com/ismaelalvesgit/grapql-finaces)

#### 3) Iniciar o ambiente frontend
O ambiente frontend está em outro projeto que está localizado [AQUI](https://github.com/ismaelalvesgit/vue-finances)
#### 4) Iniciar o servidor de testes
``` sh
npm test

# Você tambem pode abri o painel de execução de testes em seu SO
npm run cypress:open
```

### IMPORTANTE
Caso ocorra algum problema na execução dos testes eu recomento você instalar o [Cypress.js](https://www.cypress.io/) GLOBALMENTE
``` sh
# Utilize este comando
npm install cypress -g
```

## Contato

Desenvolvido por: [Ismael Alves](https://github.com/ismaelalvesgit)

* Email: [cearaismael1997@gmail.com](mailto:cearaismael1997@gmail.com) 
* Github: [github.com/ismaelalvesgit](https://github.com/ismaelalvesgit)
* Linkedin: [linkedin.com/in/ismael-alves-6945531a0/](https://www.linkedin.com/in/ismael-alves-6945531a0/)

### Customização de Configurações do projeto
Verifique [Configurações e Referencias](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell).