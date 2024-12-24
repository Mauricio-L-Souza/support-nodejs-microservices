Rotas de Autenticação e Usuários

Usuários

| Rota | Método | Payload/Params | Descrição |
|------|--------|---------------|------------|
| /query | GET | { page?: number, perPage?: number } | Lista usuários paginados |
| /users | POST | { name: string, email: string, password: string } | Cria novo usuário |
| /users/:userId | GET | { userId: string } | Visualiza um usuário |
| /users/:userId/check-permission | GET | { userId: string, permission: string } | Verifica permissão |

Autenticação
| Rota | Método | Payload | Descrição |
|------|--------|---------|------------|
| /auth/login | POST | { email: string, password: string } | Login de usuário |
| /auth/logout | POST | { token: string } | Logout de usuário |
| /auth/me | GET | - | Informações do usuário atual |
| /auth/refresh | GET | { refreshToken: string } | Atualiza token |
| /auth/check-auth | POST | { token: string } | Verifica autenticação |

Detalhes dos Payloads
Criar Usuário

```json
{
  "name": "string",      // Mínimo: 3 caracteres
  "email": "string",     // Formato de email válido
  "password": "string"  // Mínimo: 8 caracteres
}
```

Paginação de Usuários

```json
{
  "page?": "number",     // Padrão: 1
  "perPage?": "number"  // Padrão: 15, Máximo: 100
}
```

Login

```json
{
  "email": "string",    // Formato de email válido
  "password": "string"
}
```

Logout/Check Auth

```json
{
  "token": "string"
}
```

Refresh Token

```json
{
  "refreshToken": "string"
}
```

Observações

- Validações feitas com Zod
- Respostas em formato JSON
- Rotas `/auth/login` são públicas
- Demais rotas requerem autenticação
- Rota de refresh possui router específico