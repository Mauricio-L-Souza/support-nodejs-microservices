const { Model } = require('sutando');

class Category extends Model {
    /**
     * Define o nome da tabela associada ao modelo
     */
    static table = 'categories';

    /**
     * Define os atributos que podem ser preenchidos em massa
     */
    static fillable = [
        'name'
    ];

    /**
     * Define os atributos que devem ser convertidos para tipos específicos
     */
    static casts = {
        created_at: 'datetime',
        updated_at: 'datetime'
    };
}

export default Category;