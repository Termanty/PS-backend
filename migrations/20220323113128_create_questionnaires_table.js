exports.up = (knex) => {
  return knex.schema.createTable("surveys", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("(UUID())"));
    table.uuid("user_id").notNullable();
    table.foreign("user_id").references("users.id");
    table.string("name").notNullable();
    table.string("question_text").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("surveys");
};
