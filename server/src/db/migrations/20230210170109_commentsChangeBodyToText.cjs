/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.alterTable("comments", (table) => {
    table.text("body").notNullable().alter();
  });
};

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.alterTable("comments", (table) => {
    table.string("body").notNullable().alter();
  });
};
