# Rotas de Analistas

| Rota | Método | Payload/Params | Descrição |
|------|--------|---------------|------------|
| /query | GET | { page?: number, perPage?: number } | Lista analistas paginados |
| /analysts | POST | { role?: 'analista' \| 'supervisor' } | Cria novo analista |
| /analysts/:analystId/check-permission | GET | { analystId: string } | Verifica permissão do analista |

## Detalhes dos Payloads

### Criar Analista

```json
{
  "role": "string"  // Valores permitidos: 'analista' ou 'supervisor'
                    // Padrão: 'analista'
}
```

### Paginação de Analistas

```json
{
  "page?": "number",     // Padrão: 1
  "perPage?": "number"  // Padrão: 15, Máximo: 100
}
```

### Verificar Permissão

```json
{
  "analystId": "string"  // ID do analista a ser verificado
}
```

## Observações

- Validações implementadas usando Zod
- Todas as respostas são em formato JSON
- Todas as rotas requerem autenticação
- Paginação disponível para listagem de analistas
- Roles são restritas a 'analista' ou 'supervisor' 