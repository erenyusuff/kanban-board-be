import { Column, HasMany, HasOne, Model, Table } from "sequelize-typescript";
import { Card } from "../../cards/models/card.model";

@Table
export class TaskList extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true
  })
  id: number;
  @Column
  boardId: number;
  @Column
  name: string;

  @HasMany(() => Card, {
    sourceKey: 'id',
    foreignKey: 'listId',
  })
  cards: Card[];
}
