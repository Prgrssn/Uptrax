exports.up = function (knex) {
  return knex.schema.createTable("areas", function (table) {
    table.increments("id");
    table.string("name").notNullable();
    table.text("description");
    table.string("map_url");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("areas");
};
