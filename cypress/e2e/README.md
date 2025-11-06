Cypress, do Zero à nuvem
Projeto de exemplo para demonstrar o comando personalizado do Cypress cy.dataTest.
Pré-requisitos
É necessário ter o Node.js e o npm instalados para executar este projeto.
Utilizei as versões v18.15.0 do Node.js e 9.5.0 do npm, respetivamente. Recomendo que utilize as mesmas ou versões superiores.
Instalação
Execute npm install (ou npm i, na versão abreviada) para instalar as dependências de desenvolvimento.
Testes
Atenção: Antes de executar os testes, faça uma cópia do ficheiro cypress.env.example.json como cypress.env.json, que, num cenário real, deve ser atualizado com credenciais válidas.
O ficheiro cypress.env.json está incluído no .gitignore, garantindo que informações confidenciais não serão versionadas.
Execute npm test (ou npm t para a versão curta) para correr os testes em modo headless.
Ou, execute npm run cy:open para abrir o Cypress em modo interativo.
Apoie este projeto
Se quiser apoiar este projeto, deixe uma ⭐.
Este projeto foi criado com 💚 por Marcos Maia.

