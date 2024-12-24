const { Migration, sutando } = require('sutando');

module.exports = class extends Migration {
  /**
    * Run the migrations.
    */
  async up(schema) {
    await schema.createTable('communications', (table) => {
      table.increments('id');
      table.string('ticket_identifier');
      table.string('user_identifier');
      table.string('message');
      table.timestamps();
    });
  }

  /**
    * Reverse the migrations.
    */
  async down(schema) {
    await schema.dropTableIfExists('communications');
  }
};