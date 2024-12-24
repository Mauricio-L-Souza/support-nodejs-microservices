# Rotas de Tickets

| Rota | Método | Payload/Params | Descrição |
|------|--------|---------------|------------|
| /query | GET | { page?: number, perPage?: number } | Lista tickets paginados |
| /tickets | POST | { title: string, description: string, status?: string } | Cria novo ticket |
| /tickets/:id | GET | { id: string } | Visualiza um ticket específico |

## Detalhes dos Payloads

### Criar Ticket

```json
{
  "title": "string",       // Mínimo: 3 caracteres, Máximo: 255 caracteres
  "description": "string", // Mínimo: 5 caracteres
  "status": "string"      // Valores permitidos: 'aberto', 'em_andamento', 'fechado'
                         // Padrão: 'aberto'
}
```

### Paginação de Tickets

```json
{
  "page?": "number",     // Padrão: 1
  "perPage?": "number"  // Padrão: 15, Máximo: 100
}
```

### Parâmetros de Rota

```json
{
  "id": "string"  // ID do ticket para visualização
}
```

## Observações

- Validações implementadas usando Zod
- Todas as respostas são em formato JSON
- Todas as rotas requerem autenticação
- Paginação disponível para listagem de tickets
- Status do ticket possui três estados possíveis: 'aberto', 'em_andamento', 'fechado'
- Ao criar um ticket, se não for especificado um status, será definido como 'aberto' 