const tableName = 'tobaccos'

exports.up = async function(knex) {
  await knex.schema.createTable(tableName, async (table) => {
    table.increments('id').primary()
    table.string('name', 30).notNullable()
    table.string('brand', 30).notNullable()
    table.string('category', 30).notNullable()
    table.string('sub_category', 30)
    table.string('taste', 20)
    table.string('flavours', 100)
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTable(tableName)
};
