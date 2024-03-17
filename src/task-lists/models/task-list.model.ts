import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { CardModel } from '../../cards/models/card.model';

@Table
export class TaskListModel extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @Column
  boardId: number;
  @Column
  name: string;

  @HasMany(() => CardModel, {
    sourceKey: 'id',
    foreignKey: 'listId',
  })
  cards: CardModel[];
}
