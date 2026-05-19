# PI Hotel Pagamento API

Módulo de pagamentos do Sistema de Hotelaria Acadêmico.

---

## Tecnologias

- Node.js 20
- Express
- Prisma ORM (MySQL)
- JWT Authentication
- Swagger / OpenAPI
- RabbitMQ
- Docker
- Jenkins

---

## Estrutura do Projeto

```
pi-hotel-pagamento/
├── prisma/
│   └── schema.prisma
├── generated/
│   └── prisma/          ← gerado automaticamente pelo Prisma
├── src/
│   ├── config/
│   │   ├── prismaClient.js
│   │   ├── rabbitmq.js
│   │   └── swagger.js
│   ├── consumers/
│   │   └── pagamentoConsumer.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── boletoController.js
│   │   ├── cartaoController.js
│   │   ├── depositoController.js
│   │   ├── pagamentoController.js
│   │   └── tipoPagamentoController.js
│   ├── docs/
│   ├── middlewares/
│   │   └── auth.js
│   ├── producers/
│   │   └── pagamentoProducer.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── boletoRoutes.js
│   │   ├── cartaoRoutes.js
│   │   ├── depositoRoutes.js
│   │   ├── pagamentoRoutes.js
│   │   └── tipoPagamentoRoutes.js
│   └── server.js
├── .env
├── .env.example
├── .gitignore
├── docker-compose.yml
├── Dockerfile
├── Jenkinsfile
├── package.json
└── README.md
```

---

## Instalação e execução local

```bash
# 1. Instalar dependências
npm install

# 2. Gerar Prisma Client
npx prisma generate

# 3. (Opcional) Inspecionar banco
npx prisma db pull

# 4. Rodar em modo desenvolvimento
npm run dev

# 5. Rodar em produção
npm start
```

---

## Docker

```bash
# Build e subir o container
docker compose up -d --build

# Ver logs
docker compose logs -f

# Parar
docker compose down
```

---

## Jenkins

A pipeline executa automaticamente:
1. `npm install`
2. `npx prisma generate`
3. `docker compose build`
4. `docker compose up -d`

---

## Swagger / Documentação

Após subir a aplicação, acesse:

```
http://localhost:9534/api-docs
```

Para testar endpoints protegidos:
1. Faça `POST /auth/login` com `{ "usuario": "admin", "senha": "admin123" }`
2. Copie o token retornado
3. Clique em **Authorize** no Swagger
4. Cole: `Bearer SEU_TOKEN_AQUI`

---

## Endpoints disponíveis

| Método | Rota                     | Descrição                         |
|--------|--------------------------|-----------------------------------|
| POST   | /auth/login              | Gera token JWT                    |
| GET    | /pagamentos              | Lista pagamentos                  |
| GET    | /pagamentos/:id          | Busca pagamento por ID            |
| POST   | /pagamentos              | Cria pagamento                    |
| PUT    | /pagamentos/:id          | Atualiza pagamento completo       |
| PATCH  | /pagamentos/:id          | Atualiza campos específicos       |
| DELETE | /pagamentos/:id          | Remove pagamento                  |
| GET    | /boletos                 | Lista boletos                     |
| GET    | /boletos/:id             | Busca boleto por ID               |
| POST   | /boletos                 | Cria boleto                       |
| PUT    | /boletos/:id             | Atualiza boleto completo          |
| PATCH  | /boletos/:id             | Atualiza campos específicos       |
| DELETE | /boletos/:id             | Remove boleto                     |
| GET    | /depositos               | Lista depósitos                   |
| GET    | /depositos/:id           | Busca depósito por ID             |
| POST   | /depositos               | Cria depósito                     |
| PUT    | /depositos/:id           | Atualiza depósito completo        |
| PATCH  | /depositos/:id           | Atualiza campos específicos       |
| DELETE | /depositos/:id           | Remove depósito                   |
| GET    | /cartoes                 | Lista cartões (sem CVV)           |
| GET    | /cartoes/:id             | Busca cartão por ID (sem CVV)     |
| POST   | /cartoes                 | Cadastra cartão                   |
| PUT    | /cartoes/:id             | Atualiza cartão completo          |
| PATCH  | /cartoes/:id             | Atualiza campos específicos       |
| DELETE | /cartoes/:id             | Remove cartão                     |
| GET    | /tipo-pagamento          | Lista tipos de pagamento          |
| GET    | /tipo-pagamento/:id      | Busca tipo por ID                 |
| POST   | /tipo-pagamento          | Cria tipo de pagamento            |
| PUT    | /tipo-pagamento/:id      | Atualiza tipo completo            |
| PATCH  | /tipo-pagamento/:id      | Atualiza campos específicos       |
| DELETE | /tipo-pagamento/:id      | Remove tipo de pagamento          |

---

## Segurança

- CVV nunca é retornado nas respostas da API
- Todas as rotas (exceto `/auth/login` e `/`) exigem Bearer Token JWT
- Secrets via variáveis de ambiente (nunca hardcoded)

---

## RabbitMQ — Eventos publicados

| Evento               | Rota de roteamento    |
|----------------------|-----------------------|
| Pagamento criado     | `pagamento.criado`    |
| Pagamento atualizado | `pagamento.atualizado`|
| Pagamento cancelado  | `pagamento.cancelado` |

Exchange: `pagamento_events` (tipo: `topic`)  
Fila: `pagamento_queue`

---

## Exemplos de Requests

### Login
```json
POST /auth/login
{
  "usuario": "admin",
  "senha": "admin123"
}
```

### Criar Pagamento
```json
POST /pagamentos
Authorization: Bearer <token>
{
  "pagamento_tipo": "cartao",
  "pagamento_status": 1,
  "pagamento_data": "2025-06-01T10:00:00",
  "pagamento_endereco": "Rua das Flores, 123"
}
```

### Patch Pagamento (atualiza só o status)
```json
PATCH /pagamentos/1
Authorization: Bearer <token>
{
  "pagamento_status": 2
}
```

### Criar Boleto
```json
POST /boletos
Authorization: Bearer <token>
{
  "boleto_id": 1,
  "boleto_numero": "34191.75009 01237.961236 61980.260008 1 10100000017000",
  "boleto_vencimento": "2025-07-01T00:00:00",
  "boleto_emissao": "2025-06-01T00:00:00",
  "boleto_status": 1
}
```

### Criar Depósito
```json
POST /depositos
Authorization: Bearer <token>
{
  "deposito_id": 1,
  "deposito_banco": "Banco do Brasil",
  "deposito_valor": 500.00,
  "deposito_agencia": "0001",
  "deposito_conta": "12345-6",
  "deposito_status": 1
}
```

### Criar Cartão
```json
POST /cartoes
Authorization: Bearer <token>
{
  "cartao_numero": "4111111111111111",
  "cartao_validade": "2027-12-01T00:00:00",
  "cartao_cvv": "123",
  "cartao_banco": "Nubank",
  "cartao_nome": "JOAO DA SILVA",
  "cartao_status": 1
}
```

### Criar Tipo Pagamento
```json
POST /tipo-pagamento
Authorization: Bearer <token>
{
  "tipo_pagamento_id": 1,
  "pagamento_id": 1,
  "boleto_id": 1,
  "deposito_id": 1,
  "cartao_id": 1,
  "tipo_pagamento_status": 1
}
```
