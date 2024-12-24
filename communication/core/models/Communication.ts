const { Model } = require('sutando');

class Communication extends Model {
    /**
     * Define o nome da tabela associada ao modelo
     */
    static table = 'communications';

    /**
     * Define os atributos que podem ser preenchidos em massa
     */
    static fillable = [
        'ticket_identifier',
        'user_identifier',
        'message'
    ];

    /**
     * Define os atributos que devem ser convertidos para tipos específicos
     */
    static casts = {
        created_at: 'datetime',
        updated_at: 'datetime'
    };
}

export default Communication;