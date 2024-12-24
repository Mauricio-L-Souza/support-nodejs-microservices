module.exports = {
  client: 'pg',
  connection: {
    host : 'communication-db',
    port : 5432,
    user : 'default',
    password : 'secret',
    database : 'communication'
  },
  migrations: {
    table: 'migrations',
    path: './database/migrations',
  },
  models: {
    path: './core/models'
  }
};
