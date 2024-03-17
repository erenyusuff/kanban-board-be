import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class CardModel extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @Column
  title: string;
  @Column
  description: string;
  @Column
  tag: string;
  @Column
  listId: number;
}
