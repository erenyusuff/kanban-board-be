import { BelongsToMany, Column, HasMany, Model, Table } from "sequelize-typescript";
import { TaskList } from "../../task-lists/models/task-list.model";

@Table
export class Board extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @Column
  isActive: boolean;

  // @BelongsToMany(() => Product, {
  //   through: () => CartProducts,
  //   foreignKey: 'cartId',
  //   otherKey: 'productId',
  // })
  // products: Product[];

  @HasMany(() => TaskList, {
    sourceKey: 'id',
    foreignKey: 'boardId',
  })
  taskLists: TaskList[];
}
