// dynamic-table.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class DynamicTable {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  table_name: string;

  @Column('jsonb')
  data: Record<string, any>;
}
