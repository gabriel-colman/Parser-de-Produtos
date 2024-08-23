# Open Food Facts API

## Descrição
Este projeto é uma REST API desenvolvida para gerenciar dados do Open Food Facts, facilitando o acesso a informações nutricionais. A API foi construída para oferecer suporte à equipe de nutricionistas da empresa Fitness Foods LC, permitindo que revisem rapidamente as informações nutricionais dos alimentos que os usuários publicam por meio de uma aplicação móvel.

## Tecnologias Utilizadas
- **Node.js**: Plataforma de desenvolvimento do lado do servidor.
- **Express.js**: Framework para construção da REST API.
- **MongoDB (Mongoose)**: Banco de dados NoSQL, utilizando Mongoose como ODM.
- **TypeScript**: Superset do JavaScript para adicionar tipagem estática e outras funcionalidades.
- **Jest**: Framework de testes para JavaScript/TypeScript.
- **Cron**: Agendamento de tarefas, usado para sincronização diária dos dados.
- **Docker**: Containerização da aplicação.
- **OpenAPI 3.0**: Utilizado para documentação da API (Diferencial 4).
- **Elastic Search**: Configurado para busca avançada (Diferencial 1).
- **API Key**: Implementado para segurança dos endpoints (Diferencial 6).

## Arquitetura do Projeto

```bash
├── src
│   ├── config
│   │   └── database.ts       # Configurações do banco de dados (MongoDB)
│   │   └── cron.ts           # Configuração do CRON job para importação diária
│   ├── controllers
│   │   └── ProductController.ts   # Controlador para as rotas de produtos
│   │   └── HealthCheckController.ts # Controlador para a rota de verificação de saúde da API
│   ├── models
│   │   └── Product.ts         # Modelo do produto para o MongoDB
│   │   └── ImportHistory.ts   # Modelo para armazenar histórico de importações
│   ├── routes
│   │   └── productRoutes.ts   # Definição das rotas relacionadas aos produtos
│   │   └── healthRoutes.ts    # Definição das rotas de verificação de saúde
│   ├── services
│   │   └── ProductService.ts  # Lógica de negócios para produtos (CRUD e importação)
│   │   └── SyncService.ts     # Serviço responsável pelo sincronismo e importação de dados
│   ├── tests
│   │   └── product.test.ts    # Testes unitários para ProductController
│   │   └── health.test.ts     # Testes unitários para HealthCheckController
│   ├── middlewares
│   │   └── ApiKeyMiddleware.ts # Middleware para segurança usando API KEY
│   ├── utils
│   │   └── logger.ts          # Utilitário para logging
│   ├── app.ts                 # Arquivo principal da aplicação
│   └── server.ts              # Inicialização do servidor express
├── .gitignore                 # Arquivos a serem ignorados pelo git
├── Dockerfile                 # Dockerfile para a aplicação
├── docker-compose.yml         # Configuração do Docker Compose
├── package.json               # Dependências e scripts da aplicação
├── README.md                  # Documentação do projeto
└── tsconfig.json              # Configurações do TypeScript
```bash
```

## Endpoints da API
## Endpoints

### `1. GET /`
**Descrição:** Verifica o status de saúde da API.  
**Retorno:**
```json
{
  "status": "OK",
  "uptime": "X minutes",
  "memoryUsage": "X MB",
  "database": "connected"
}
```

2. GET /products

**Descrição:** Lista todos os produtos da base de dados, com paginação.

**Parâmetros:**
- page (opcional): Número da página.

**Retorno:**
```json
[
    {
        "code": "123456",
        "product_name": "Nome do Produto",
        "imported_t": "2024-08-23T18:25:43.511Z",
        "status": "draft"
    }
]
```


### `3. GET /products/`

**Descrição:** Obtém informações de um único produto por código.

**Parâmetros:**
- code: Código do produto.

**Retorno:**
```json
{
    "code": "123456",
    "product_name": "Nome do Produto",
    "imported_t": "2024-08-23T18:25:43.511Z",
    "status": "draft"
}
```


4. PUT /products/

**Descrição:** Atualiza as informações de um produto existente.

**Parâmetros:**
- code: Código do produto.

**Corpo:**
```json
{
    "product_name": "Novo Nome do Produto",
    "status": "published"
}
```

5. DELETE /products/

**Descrição:** Move um produto para o status trash.

**Parâmetros:**
- code: Código do produto.

**Retorno:**
```json
{
    "message": "Product moved to trash"
}
```

## Como Instalar e Executar o Projeto

1. Clone o repositório:

```bash
git clone https://github.com/gabriel-colman/Parser-de-Produtos.git
cd Parser-de-Produtos
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente:
Crie um arquivo .env na raiz do projeto com as seguintes variáveis:

```bash
MONGO_URI=mongodb://localhost:27017/foodfacts
PORT=3000
API_KEY=yourapikey
```

4. Execute a aplicação:

```bash
npm start
```

Executando os Testes
Para rodar os testes unitários, execute:

```bash
npm test
```

Executando com Docker
1. Build da imagem e subir os containers:

```bash
docker-compose up --build
```

2. Acessar a API:
A API estará acessível em http://localhost:3000.

Diferenciais Implementados
Diferencial 1: Configuração de um endpoint de busca com Elastic Search.
Diferencial 2: Configuração do Docker para o projeto.
Diferencial 3: Implementação de sistema de alerta em caso de falha durante a sincronização de produtos.
Diferencial 4: Documentação da API utilizando Open API 3.0.
Diferencial 5: Escrita de testes unitários para os endpoints GET e PUT do CRUD.
Diferencial 6: Implementação de esquema de segurança utilizando API KEY nos endpoints.

Licença
MIT License

This is a challenge by Coodesh.

