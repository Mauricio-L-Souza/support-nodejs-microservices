const { Migration, sutando } = require('sutando');

module.exports = class extends Migration {
  /**
    * Run the migrations.
    */
  async up(schema) {
    await schema.createTable('triages', (table) => {
      table.increments('id');

      table.string('ticket_identifier');
      table.string('priority');

      table.integer('category_id').unsigned().notNullable();
      table.foreign('category_id').references('id').inTable('categories');

      table.timestamps();
    });
  }

  /**
    * Reverse the migrations.
    */
  async down(schema) {
    await schema.dropTableIfExists('triages');
  }
};