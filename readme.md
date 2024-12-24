# API de Suporte

Projeto de API de Suporte criado com o intuito de ensinar a arquitetura de microsserviços aos liderados na Semana DEV III da Gofusion.

## Documentação

- [Autenticação](docs/auth.md)
- [Tickets](docs/tickets.md)
- [Triagem](docs/triage.md)
- [Comunicação](docs/communication.md)

## Rotas

- [Rotas de Autenticação](docs/auth.md)
- [Rotas de Tickets](docs/tickets.md)
- [Rotas de Triagem](docs/triage.md)
- [Rotas de Comunicação](docs/communication.md)

## URLs

- [Tickets](http://localhost:8080)
- [Analyst](http://localhost:8081)
- [Triage](http://localhost:8082)
- [Auth](http://localhost:8083)
- [Communication](http://localhost:8084)

## Observações

- Este projeto é uma simulação de uma API de Suporte e não deve ser usado em produção.
- Documentação criada com ajuda de inteligência artificial generativa.
- Projeto criado para fins didáticos.
- Boas práticas de arquitetura de microsserviços não foram completamente seguidas.
- Aplicação não possui testes.
- Todos os serviços estão rodando em Docker.
- Aplicação possui um Dockerfile para para todos os serviços.
- Aplicação possui um docker-compose.yml para rodar todos os serviços.

## Estrutura do Projeto

- `auth`: Serviço de autenticação.
- `tickets`: Serviço de tickets.
- `triage`: Serviço de triagem.
- `communication`: Serviço de comunicação.

## Como rodar o projeto

1. Clonar o repositório
2. Em cada serviço, rodar o comando `cp .env.example .env` para criar o arquivo .env.
3. Rodar o comando `docker compose up -d` para rodar todos os serviços.

- Os serviços instalam as dependências e rodam automaticamente.

## Tecnologias

- Node.js
- TypeScript
- ExpressJS
- Nodemon
- Docker
- PostgreSQL
- Sutando ORM
- Zod
- JWT
- Bcrypt
