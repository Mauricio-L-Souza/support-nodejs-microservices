module.exports = {
  client: 'pg',
  connection: {
    host : 'triage-db',
    port : 5432,
    user : 'default',
    password : 'secret',
    database : 'triage'
  },
  migrations: {
    table: 'migrations',
    path: './database/migrations',
  },
  models: {
    path: './core/models'
  }
};
