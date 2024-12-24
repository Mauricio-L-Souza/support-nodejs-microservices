# Rotas de Triagem

| Rota | Método | Payload/Params | Descrição |
|------|--------|---------------|------------|
| /triages | POST | { ticketId: string, analystId: string, categoryId: string, priority?: string } | Cria nova triagem |
| /triages/:id | GET | { id: string } | Visualiza uma triagem específica |
| /categories | POST | { name: string, description?: string, priority?: string } | Cria nova categoria |

## Detalhes dos Payloads

### Criar Triagem

```json
{
  "ticketId": "string",    // ID do ticket a ser triado
  "analystId": "string",   // ID do analista responsável
  "categoryId": "string",  // ID da categoria
  "priority": "string"    // Valores permitidos: 'low', 'medium', 'high'
                         // Padrão: 'low'
}
```

### Criar Categoria

```json
{
  "name": "string",        // Mínimo: 3 caracteres, Máximo: 50 caracteres
  "description": "string", // Opcional, Mínimo: 10 caracteres, Máximo: 255 caracteres
  "priority": "string"    // Valores permitidos: 'low', 'medium', 'high'
                         // Padrão: 'low'
}
```

### Parâmetros de Rota

```json
{
  "id": "string"  // ID da triagem para visualização
}
```

## Observações

- Validações implementadas usando Zod
- Todas as respostas são em formato JSON
- Todas as rotas requerem autenticação
- Token de autenticação é necessário para criar triagens
- Prioridades disponíveis: 'low', 'medium', 'high'
- Cada triagem deve estar associada a um ticket, um analista e uma categoria
- Categorias podem ser criadas com descrição opcional 