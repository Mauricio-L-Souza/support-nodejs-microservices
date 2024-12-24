module.exports = {
  client: 'pg',
  connection: {
    host : 'tickets-db',
    port : 5432,
    user : 'default',
    password : 'secret',
    database : 'tickets'
  },
  migrations: {
    table: 'migrations',
    path: './database/migrations',
  },
  models: {
    path: './core/models'
  }
};
