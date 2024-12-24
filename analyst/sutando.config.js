module.exports = {
  client: 'pg',
  connection: {
    host : 'analyst-db',
    port : 5432,
    user : 'default',
    password : 'secret',
    database : 'analyst'
  },
  migrations: {
    table: 'migrations',
    path: './database/migrations',
  },
  models: {
    path: './core/models'
  }
};
