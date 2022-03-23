exports.up = (knex) => {
  return knex.schema.createTable("questionnaires", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("(UUID())"));
    table.uuid("user_id").notNullable();
    table.string("name").notNullable();
    table.string("question_text").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("questionnaires");
};
