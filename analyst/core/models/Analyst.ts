const { Model } = require('sutando');

class Analyst extends Model {
    /**
     * Define o nome da tabela associada ao modelo
     */
    static table = 'analysts';

    /**
     * Define os atributos que podem ser preenchidos em massa
     */
    static fillable = [
        'role'
    ];

    /**
     * Define os atributos que devem ser convertidos para tipos específicos
     */
    static casts = {
        created_at: 'datetime',
        updated_at: 'datetime'
    };
}

export default Analyst;