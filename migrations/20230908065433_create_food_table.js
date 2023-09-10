/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('food', (table) => {
        table.bigIncrements('id')
        table.string('nama')
        table.integer('harga')
        table.integer('stok')
        table.string('tipe')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('food')
};
