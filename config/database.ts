module.exports = {
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'prisma-workshop-main',
  },
  migrations: {
    tableName: 'knex_migrations',
  },
};