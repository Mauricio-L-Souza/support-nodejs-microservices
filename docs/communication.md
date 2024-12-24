# Rotas de Comunicação

| Rota | Método | Payload/Params | Descrição |
|------|--------|---------------|------------|
| /communications/:ticketId/query | GET | { page?: number, perPage?: number } | Lista comunicações de um ticket |
| /communications | POST | { ticket_identifier: string, user_identifier: string, message: string } | Cria nova comunicação |

## Detalhes dos Payloads

### Criar Comunicação

```json
{
  "ticket_identifier": "string",  // Máximo: 255 caracteres
  "user_identifier": "string",    // Máximo: 255 caracteres
  "message": "string"            // Mínimo: 5 caracteres, Máximo: 255 caracteres
}
```

### Paginação de Comunicações

```json
{
  "page?": "number",     // Padrão: 1
  "perPage?": "number"  // Padrão: 15, Máximo: 100
}
```

### Parâmetros de Rota

```json
{
  "ticketId": "string"  // ID do ticket para listar comunicações
}
```

## Observações

- Validações implementadas usando Zod
- Todas as respostas são em formato JSON
- Todas as rotas requerem autenticação
- Token de autenticação é necessário para criar comunicações
- Paginação disponível para listagem de comunicações
- As comunicações são sempre associadas a um ticket específico 