# Blog API

Uma API RESTful para gerenciamento de blog pessoal construída com Node.js, TypeScript, Express e MongoDB, seguindo os princípios SOLID e a arquitetura MVC.

## Tecnologias Utilizadas

-   Node.js
-   TypeScript
-   Express
-   MongoDB com Mongoose
-   Express Validator
-   CORS
-   Helmet
-   Dotenv

## Estrutura do Projeto

```
src/
├── controllers/    # Controladores da aplicação
├── models/        # Modelos do MongoDB
├── services/      # Camada de serviços
├── routes/        # Rotas da API
├── middlewares/   # Middlewares personalizados
├── types/         # Tipos customizados do TypeScript
└── server.ts      # Arquivo principal da aplicação
```

## Pré-requisitos

-   Node.js (versão 14 ou superior)
-   MongoDB (instalado e rodando localmente ou uma instância na nuvem)
-   npm ou yarn

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/blog-api.git
cd blog-api
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente:
   Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```
MONGODB_URI=sua_url_mongodb
PORT=3000
```

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

## Scripts Disponíveis

-   `npm run dev`: Inicia o servidor em modo de desenvolvimento com hot-reload
-   `npm run build`: Compila o projeto TypeScript
-   `npm start`: Inicia o servidor em modo de produção

## Endpoints da API

### Posts

#### GET /api/posts

Retorna todos os posts do blog.

**Resposta**

```json
[
    {
        "_id": "string",
        "title": "string",
        "content": "string",
        "author": "string",
        "tags": ["string"],
        "createdAt": "date",
        "updatedAt": "date"
    }
]
```

#### GET /api/posts/:id

Retorna um post específico por ID.

**Resposta**

```json
{
    "_id": "string",
    "title": "string",
    "content": "string",
    "author": "string",
    "tags": ["string"],
    "createdAt": "date",
    "updatedAt": "date"
}
```

#### POST /api/posts

Cria um novo post.

**Corpo da Requisição**

```json
{
    "title": "string",
    "content": "string",
    "author": "string",
    "tags": ["string"]
}
```

**Resposta**

```json
{
    "_id": "string",
    "title": "string",
    "content": "string",
    "author": "string",
    "tags": ["string"],
    "createdAt": "date",
    "updatedAt": "date"
}
```

#### PUT /api/posts/:id

Atualiza um post existente.

**Corpo da Requisição**

```json
{
    "title": "string",
    "content": "string",
    "author": "string",
    "tags": ["string"]
}
```

**Resposta**

```json
{
    "_id": "string",
    "title": "string",
    "content": "string",
    "author": "string",
    "tags": ["string"],
    "createdAt": "date",
    "updatedAt": "date"
}
```

#### DELETE /api/posts/:id

Remove um post.

**Resposta**

-   Status: 204 No Content

## Validações

Todos os endpoints POST e PUT incluem as seguintes validações:

-   title: Campo obrigatório
-   content: Campo obrigatório
-   author: Campo obrigatório
-   tags: Array opcional de strings

## Tratamento de Erros

A API inclui um middleware centralizado para tratamento de erros que:

-   Retorna erros de validação com status 400
-   Retorna erros de recursos não encontrados com status 404
-   Retorna erros internos do servidor com status 500
-   Em ambiente de desenvolvimento, inclui a mensagem de erro detalhada

## Segurança

A API implementa várias medidas de segurança:

-   CORS configurado para controle de acesso
-   Helmet para proteção contra vulnerabilidades comuns
-   Validação de entrada em todas as rotas que aceitam dados
-   Sanitização de dados antes da persistência

## Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE.md](LICENSE.md) para detalhes.

## Contato

Lucas Bezerra - lucasmbc@hotmail.com
Link do Projeto: https://github.com/lucasmbc/blog-api
