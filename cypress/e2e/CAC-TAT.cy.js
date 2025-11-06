
describe('Acesso direto ao index.html local', () => {
  beforeEach(() => {
    //cy.viewport('iphone-xr') // Set viewport to iphone XR
    //cy.viewport('macbook-15') // Set viewport to macbook 15
    //cy.viewport('ipad-2') // Set viewport to ipad 2 
    //cy.viewport('samsung-s10') // Set viewport to samsung S10
    //cy.viewport(410, 860)
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
    cy.contains('button', 'Enviar').click();

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
    cy.contains('button', 'Enviar').click(); // Clica em Enviar
    // Verifica se a mensagem de erro é exibida
    cy.get('.error').should('be.visible')
  })
 
  it('Mantém o campo telefone vazio ao digitar valor não numérico', () => {
    // Digita texto não numérico
    cy.get('#phone')
      .type('abcde!@#')
      .should('have.value', '') // valor deve permanecer vazio
  })

 //888888888888888888 TESTE INCORRETO @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
//it('Exibe mensagem de erro quando o telefone é obrigatório, mas não é preenchido', () => {
    // Preenche os campos obrigatórios, mas não o telefone
  //  cy.get('#firstName').type('Marcos')
  //cy.get('#lastName').type('Maia')
  //cy.get('#email').type('marcos@example.com')
  //  cy.get('#open-text-area').type('Teste de validação de telefone obrigatório')
  // Aqui você pode simular que o telefone é obrigatório, por exemplo marcando uma checkbox ou selecionando uma opção
  // (se o formulário tivesse essa lógica condicional). Para este exemplo, apenas não preencheremos o campo.
  //  cy.contains('button', 'Enviar').click(); // Clica em Enviar
    
  //  cy.get('.error').should('be.visible'); // Verifica se a mensagem de erro está visível
//})

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    // Simula que o telefone é obrigatório
    cy.get('#firstName').type('Marcos')
    cy.get('#lastName').type('Maia')
    cy.get('#email').type('marcos@example.com')
    cy.get('#open-text-area').type('Teste de validação de telefone obrigatório')
    cy.get('#phone-checkbox').check() // Marca a checkbox de telefone obrigatório
    cy.contains('button', 'Enviar').click(); // Clica em Enviar

    cy.get('.error').should('be.visible'); // Verifica se a mensagem de erro está visível
  })

    it('Preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    // Exemplo de Encadeamento de funções - Preenche Confere Limpaos campos
    cy.get('#firstName')
      .type('Marcos')
      .should('have.value', 'Marcos')
      .clear()
      .should('have.value', '')
    cy.get('#lastName')
      .type('Maia')
      .should('have.value', 'Maia')
      .clear()
      .should('have.value', '')
    cy.get('#email')
      .type('marcos@example.com')
      .should('have.value', 'marcos@example.com')
      .clear()
      .should('have.value', '')
    cy.get('#phone')
      .type('123456789')
      .should('have.value', '123456789')
      .clear()
      .should('have.value', '')
});

it('Exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
    // Clica em Enviar sem preencher nenhum campo
    cy.contains('button', 'Enviar').click();
    // Verifica se a mensagem de erro é exibida
    cy.get('.error').should('be.visible');
  })

it('Envia o formulário com sucesso usando um comando customizado', () => {
  cy.fillMandatoryFieldsAndSubmit(); // Usa o comando customizado para preencher e enviar o formulário
 
   cy.get('.success').should('be.visible'); // Verifica se a mensagem de sucesso está visível
  });

it('seleciona um produto (YouTube) por seu texto de uma lista suspensa', () => {
  cy.get('#product')
    .select('YouTube')
    .should('have.value', 'youtube');
});

it('seleciona um produto (Mentoria) por seu valor (value)', () => {
  cy.get('#product')
    .select('Mentoria')
    .should('have.value', 'mentoria');
});

it('seleciona um produto (Blog) por seu índice', () => {
  cy.get('#product')
    .select(1) // Seleciona o segundo item (índice começa em 0)
    .should('have.value', 'blog'); 
});
it('marca o tipo de atendimento "Feedback"', () => {
  cy.get('input[type="radio"][value="feedback"]')
    .check()
    .should('have.value', 'feedback');    
});

it('}); marca cada tipo de atendimento', () => {
  cy.get('input[type="radio"]')
    .should('have.length', 3)
    .each($radio => {
      cy.wrap($radio)
        .check()
        .should('be.checked');            
    });
});

it('marca ambos checkboxes, depois desmarca o último', () => {
  cy.get('input[type="checkbox"]') // Seleciona todos os checkboxes usando um seletor genérico
    .check()
    .should('be.checked')
    .last() // Seleciona o último checkbox
    .uncheck()
    .should('not.be.checked');  
});

it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    // Simula que o telefone é obrigatório
    cy.get('#firstName').type('Marcos')
    cy.get('#lastName').type('Maia')
    cy.get('#email').type('marcos@example.com')
    cy.get('#open-text-area').type('Teste de validação de telefone obrigatório')
    cy.get('#phone-checkbox').check() // Marca a checkbox de telefone obrigatório
    cy.contains('button', 'Enviar').click(); // Clica em Enviar

    cy.get('.error').should('be.visible'); // Verifica se a mensagem de erro está visível
  })  

it('seleciona um arquivo da pasta fixtures usando o comando selectFile', () => {
  cy.get('input[type="file"]#file-upload')// outra forma sria usar cy.get('#file-upload')
    .should('not.have.value') // Verifica que o campo está vazio
    .selectFile('cypress/fixtures/example.json') // Seleciona o arquivo
    .should($input => {
      expect($input[0].files[0].name).to.equal('example.json'); // Verifica o nome do arquivo selecionado
    });
});

it('seleciona um arquivo simulando um drag-and-drop', () => {
  cy.get('input[type="file"]#file-upload')
    .should('not.have.value') // Verifica que o campo está vazio
    .selectFile('cypress/fixtures/example.json', { action: 'drag-drop' }) // Simula drag-and-drop
    .should($input => {
      expect($input[0].files[0].name).to.equal('example.json'); // Verifica o nome do arquivo selecionado
    });   
});

it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {
  cy.get('input[type="file"]#file-upload'); 
  cy.fixture('example.json').as('sampleFile'); // Cria um alias para a fixture
  cy.get('input[type="file"]#file-upload')
    .selectFile('@sampleFile') // Usa o alias para selecionar o arquivo, o alias deve ser precedido por @
    .should($input => {
      expect($input[0].files[0].name).to.equal('example.json'); // Verifica o nome do arquivo selecionado
    });
})

it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
  cy.contains('#privacy a', 'Política de Privacidade')
    .should('have.attr', 'href', 'privacy.html') // Verifica se o link tem o atributo href com valor privacy.html
    .and('have.attr', 'target', '_blank') // Verifica se o link tem o atributo target com valor _blank
});     
  
it('acessa a página da política de privacidade removendo o target e então clicando no link', () => {
  cy.get('#privacy a')
    .invoke('removeAttr', 'target') // Remove o atributo target para abrir na mesma aba
    .click();
  cy.contains('Talking About Testing').should('be.visible'); // Verifica se o conteúdo da página de privacidade está visível      
});

it('testa a página da política de privacidade de forma independente', () => {
  cy.visit('cypress-do-zero-a-nuvem/src/privacy.html');
  cy.contains('Talking About Testing').should('be.visible');  
});



});

    











































































