const { Model } = require('sutando');

class User extends Model {
    /**
     * Define o nome da tabela associada ao modelo
     */
    static table = 'users';

    /**
     * Define os atributos que podem ser preenchidos em massa
     */
    static fillable = [
        'name',
        'email',
        'password',
    ];

    protected hidden = ['password'];

    /**
     * Define os atributos que devem ser convertidos para tipos específicos
     */
    static casts = {
        created_at: 'datetime',
        updated_at: 'datetime'
    };
}

export default User;