# API-de-Criacao-Dinamica-de-Tabelas-no-Banco-de-Dados

Uma API que cria e gerencia tabelas no banco de dados a partir de requisições POST, integrando-se perfeitamente a fluxos de geração de relatórios.

## Tecnologias Utilizadas

- Node.js
- TypeScript
- TypeORM

## Como Funciona

1. Faça uma requisição POST para a rota especificada, incluindo no corpo da requisição a estrutura da tabela que você deseja criar.

2. A API verificará se já existe uma tabela com o mesmo nome no banco de dados.

3. Se uma tabela com o mesmo nome existir, ela será excluída.

4. Em seguida, a API criará uma nova tabela com a estrutura especificada no corpo da requisição.

## Body da requisição

O Body da requisição devera ser algo parecido com essa estrutura onde "Table" define o nome da tabela, "Fields" define os campos e os detalhes de cada campo e "Conteudo" define os dados a preencher cada linha da tabela. 

{
  "Table": "minha_tabela_dinamica4",
  "Fields": [
    {
      "campo": "pessoa",
      "Tipo": "varchar",
      "Tamanho": 255,
      "Decimal": null
    },
    {
      "campo": "idade",
      "Tipo": "integer",
      "Tamanho": null,
      "Decimal": null
    },
    {
      "campo": "salario",
      "Tipo": "numeric",
      "Tamanho": 10,
      "Decimal": 2
    }
  ],
  "Conteudo": [
    {
      "pessoa": "Pedro",
      "idade": 18,
      "salario": 1000.00
    },
    {
      "pessoa": "Sthephamie",
      "idade": 22,
      "salario": 3750.00
    }
  ]
}


## Uso
-Lembre-se de configurar os parâmetros do seu banco de dados no arquivo orm.config

Certifique-se de seguir as etapas a seguir para usar esta API:

1. Clone este repositório:
git clone https://github.com/NathanPyRP/API-de-Criacao-Dinamica-de-Tabelas-no-Banco-de-Dados.git

    cd API-de-Criacao-Dinamica-de-Tabelas-no-Banco-de-Dados

2. Instale as dependências:

    yarn install

3. Execute a API:

    yarn dev

4. Execute uma requisição de POST na rota definida com o body especificado e o resto a API ira fazer no Banco de Dados.
 
