const tableName = 'brands'

exports.up = async function(knex) {
  await knex.schema.createTable(tableName, async (table) => {
    table.increments('id').primary()
    table.string('name', 30).notNullable().unique()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTable(tableName)
};
