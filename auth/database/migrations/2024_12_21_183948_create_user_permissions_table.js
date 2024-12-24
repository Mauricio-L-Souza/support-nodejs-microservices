const { Migration, sutando } = require('sutando');

module.exports = class extends Migration {
  /**
    * Run the migrations.
    */
  async up(schema) {
    await schema.createTable('user_permissions', (table) => {
      table.increments('id');
      table.string('permission');
      table.integer('user_id').unsigned().notNullable().index();
      table.foreign('user_id').references('id').inTable('users');
      table.timestamps();
    });
  }

  /**
    * Reverse the migrations.
    */
  async down(schema) {
    await schema.dropTableIfExists('user_permissions');
  }
};