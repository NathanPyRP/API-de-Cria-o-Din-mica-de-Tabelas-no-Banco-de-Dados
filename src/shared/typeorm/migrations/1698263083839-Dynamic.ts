// dynamic.ts
import { MigrationInterface, QueryRunner } from "typeorm";

export class Dynamic1698263083839 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE dynamic_table (
        id SERIAL PRIMARY KEY,
        table_name VARCHAR,
        data jsonb
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE dynamic_table`);
  }
}
