exports.up = (knex) => {
  return knex.schema.createTable("responses", (table) => {
    table.increments("id");
    table.uuid("questionnaire_id").notNullable();
    table.integer("score").notNullable();
    table.string("comment").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("responses");
};
