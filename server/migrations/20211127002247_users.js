exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.increments("id");
    table.string("name").notNullable();
    table.string("user_avatar");
    table.string("email");
    table.integer("exp");
    table.boolean("ast");
    table.string("bio");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
