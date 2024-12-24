import { Model } from 'sutando';

class TokenBlacklist extends Model {
    /**
     * Define o nome da tabela associada ao modelo
     */
    static table = 'token_blacklists';

    /**
     * Define os atributos que podem ser preenchidos em massa
     */
    static fillable = [
        'token',
    ];

    /**
     * Define os atributos que devem ser convertidos para tipos específicos
     */
    static casts = {
        created_at: 'datetime',
        updated_at: 'datetime'
    };
}

export default TokenBlacklist;
