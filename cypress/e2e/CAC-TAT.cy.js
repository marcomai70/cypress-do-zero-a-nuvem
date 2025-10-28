
describe('Acesso direto ao index.html local', () => {
  beforeEach(() => {
    cy.visit('cypress-do-zero-a-nuvem/src/index.html'); // executa antes de cada teste, se necessário
  });
  it('Deve abrir o arquivo local e verificar o título', () => {
    cy.title().should('not.be.empty'); // verifica se a página carregou
  });

  it('Preenche os campos do obrigatórios e envia o formulário', () => {
    const textoLongo = `
      Gostaria de deixar um elogio especial para toda a equipe!
      O atendimento foi excelente e o suporte rápido e eficiente.
      Continuem com esse ótimo trabalho e dedicação!
      Obrigado por manterem um padrão de qualidade tão alto.
    `;

    cy.get('#firstName').type('Marcos');
    cy.get('#lastName').type('Maia');
    cy.get('#email').type('marcos@example.com');
   // cy.get('#open-text-area').type('Teste de preenchimento de formulário.');
    cy.get('#open-text-area').type(textoLongo, { delay: 0 }); // Digita o texto longo sem atraso entre os caracteres
    cy.get('button[type="submit"]').click();

    cy.get('.success').should('be.visible'); // Verifica se a mensagem de sucesso está visível
    // Verifica se o texto foi digitado corretamente
   // cy.get('#open-text-area').should('have.value', textoLongo.trim())
  //})
});

  it('Exibe mensagem de erro ao submeter o formulário com um email inválido', () => {
    // Preenche os campos obrigatórios com email incorreto
    cy.get('#firstName').type('Marcos')
    cy.get('#lastName').type('Maia')
    cy.get('#email').type('marcos@exemplocom') // email inválido
    cy.get('#open-text-area').type('Mensagem de teste com email inválido')
    cy.get('button[type="submit"]').click(); // Clica em Enviar
    // Verifica se a mensagem de erro é exibida
    cy.get('.error').should('be.visible')
  })
 
  it('Mantém o campo telefone vazio ao digitar valor não numérico', () => {
    // Digita texto não numérico
    cy.get('#phone')
      .type('abcde!@#')
      .should('have.value', '') // valor deve permanecer vazio
  })

it('Exibe mensagem de erro quando o telefone é obrigatório, mas não é preenchido', () => {
    // Preenche os campos obrigatórios, mas não o telefone
    cy.get('#firstName').type('Marcos')
    cy.get('#lastName').type('Maia')
    cy.get('#email').type('marcos@example.com')
    cy.get('#open-text-area').type('Teste de validação de telefone obrigatório')
    // Aqui você pode simular que o telefone é obrigatório, por exemplo marcando uma checkbox ou selecionando uma opção
    // (se o formulário tivesse essa lógica condicional). Para este exemplo, apenas não preencheremos o campo.
    cy.get('button[type="submit"]').click(); // Clica em Enviar
    
    cy.get('.error').should('be.visible'); // Verifica se a mensagem de erro está visível
})

  it.only('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    // Simula que o telefone é obrigatório
    cy.get('#firstName').type('Marcos')
    cy.get('#lastName').type('Maia')
    cy.get('#email').type('marcos@example.com')
    cy.get('#open-text-area').type('Teste de validação de telefone obrigatório')
    cy.get('#phone-checkbox').check() // Marca a checkbox de telefone obrigatório
    cy.get('button[type="submit"]').click(); // Clica em Enviar

    cy.get('.error').should('be.visible'); // Verifica se a mensagem de erro está visível
  })

});
