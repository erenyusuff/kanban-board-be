import {
  BelongsToMany,
  Column,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { TaskListModel } from '../../task-lists/models/task-list.model';
import { CardModel } from '../../cards/models/card.model';

@Table
export class BoardModel extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @Column({ defaultValue: true })
  isActive: boolean;

  @HasMany(() => TaskListModel, {
    sourceKey: 'id',
    foreignKey: 'boardId',
  })
  taskLists: TaskListModel[];

  // @BelongsToMany(() => Card, {
  //   through: () => TaskList,
  //   foreignKey: 'boardId',
  //   otherKey: 'listId',
  // })
  // cards: Card[];
}
