
exports.up = function(knex) {
    return knex.schema.createTable('tarefas',table => {
        table.increments();
        table.string('title').notNullable();
        table.string('difficulty').notNullable();
        table.text('description').notNullable();
        table.integer('times_per_week', 2).notNullable();
        table.string('firstDate').notNullable();
        table.string('date').notNullable();
        table.string('user_id');
        table.foreign('user_id').references('id').inTable('users');

        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('tarefas')
};
