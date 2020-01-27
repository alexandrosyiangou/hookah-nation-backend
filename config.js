module.exports = {
  knex: {
    development: {
      client: 'pg',
      connection: {
        ssl: true,
        port: 5432,
        host: 'ec2-54-247-181-239.eu-west-1.compute.amazonaws.com',
        database: 'dd8agshkubefp',
        user: 'owldvzqyetrvnp',
        password: '2c55f77a9c62e01cb178ff05aca24d9a1187fd0905d41105fcd3ddeee7e6d2f0',
      },
      migrations: {
        directory: './migrations',
        tableName: 'knex_migrations'
      }
    },
    production: {
      client: 'pg',
      connection: {
        ssl: true,
        port: 5432,
        host: 'ec2-54-247-181-239.eu-west-1.compute.amazonaws.com',
        database: 'd52j0uai1vrspu',
        user: 'ajeljylbuuzlqk',
        password: 'f92ad2590f112aa317d332876afc58846a78d011735d82dec3ba630105f17ba6',
      },
      migrations: {
        directory: './migrations',
        tableName: 'knex_migrations'
      }
    }
  }
}
