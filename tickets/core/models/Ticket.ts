const { Model } = require('sutando');

class Ticket extends Model {
    /**
     * Define o nome da tabela associada ao modelo
     */
    static table = 'tickets';

    /**
     * Define os atributos que podem ser preenchidos em massa
     */
    static fillable = [
        'title',
        'description',
        'status'
    ];

    /**
     * Define os atributos que devem ser convertidos para tipos específicos
     */
    static casts = {
        created_at: 'datetime',
        updated_at: 'datetime'
    };
}

export default Ticket;