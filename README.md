# Memoria Ancestral API

Estrutura inicial de uma API REST com JavaScript e Express, incluindo autenticação JWT, conexão com MongoDB e documentação Swagger.

## Stack

- Node.js
- Express
- MongoDB com Mongoose
- JWT para autenticação
- Swagger para documentação

## Estrutura de pastas

```text
src/
  config/
  controllers/
  docs/
  middleware/
  models/
  routes/
  services/
  app.js
  server.js
```

## Requisitos

- Node.js 20+ (recomendado)
- MongoDB local ou remoto

## Configuração

1. Instale as dependências:

```bash
npm install
```

2. Crie o arquivo `.env` com base no `.env.example`.

Exemplo:

```env
PORT=3000
BASE_URL=http://localhost:3000
MONGODB_URI=mongodb://127.0.0.1:27017/memoria-ancestral
JWT_SECRET=troque-esta-chave
JWT_EXPIRES_IN=1d
```

## Scripts

- `npm start`: inicia a API em modo estático
- `npm run dev`: inicia com `nodemon` para reiniciar automaticamente

## Endpoints iniciais

- `GET /` status da API
- `GET /api/health` healthcheck
- `POST /api/auth/register` registro de usuário
- `POST /api/auth/login` login com retorno JWT
- `GET /api/auth/me` rota protegida para usuário autenticado

## Swagger

A documentação está disponível em:

- `http://localhost:3000/api-docs`

## Proximos passos

- Configurar pipeline de CI com GitHub Actions
- Definir estrategia de deploy na Vercel
