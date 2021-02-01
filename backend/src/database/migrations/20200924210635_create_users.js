
exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('lastname').notNullable();
        table.decimal('age', 2).notNullable();
        table.string('contact').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
