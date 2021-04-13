import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createOrphanages1602684680831 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'orphanages',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },
        {
          name: 'name',
          type: 'text',
        },
        {
          name: 'latitude',
          type: 'decimal',
          scale: 18,
          precision: 2
        },
        {
          name: 'longitude',
          type: 'decimal',
          scale: 18,
          precision: 2
        },
        {
          name: 'about',
          type: 'text',
        },
        {
          name: 'instructions',
          type: 'text',
        },
        {
          name: 'opening_hours',
          type: 'varchar',
        },
        {
          name: 'open_on_weekends',
          type: 'booblean',
          default: false
        },
      ],
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('orphanages');
  }

}
