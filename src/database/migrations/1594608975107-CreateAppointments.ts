import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateAppointments1594608975107
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const appointmentsTable = new Table({
      name: 'appointments',
      columns: [
        {
          name: 'id',
          type: 'varchar',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()',
        },
        {
          name: 'provider',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'date',
          type: 'timestamp with time zone',
          isNullable: false,
        },
      ],
    });

    await queryRunner.createTable(appointmentsTable);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('appointments');
  }
}
