import {
  BelongsToMany,
  Column,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { TaskList } from '../../task-lists/models/task-list.model';
import { Card } from '../../cards/models/card.model';

@Table
export class Board extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @Column({ defaultValue: true })
  isActive: boolean;

  // @BelongsToMany(() => Card, {
  //   through: () => TaskList,
  //   foreignKey: 'boardId',
  //   otherKey: 'listId',
  // })
  // cards: Card[];

  @HasMany(() => TaskList, {
    sourceKey: 'id',
    foreignKey: 'boardId',
  })
  taskLists: TaskList[];
}
