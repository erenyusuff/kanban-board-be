import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { TaskListModel } from "./models/task-list.model";
import { TaskListsService } from "./task-lists.service";
import { TaskListsController } from "./task-lists.controller";


@Module({
  imports: [SequelizeModule.forFeature([TaskListModel])],
  providers: [TaskListsService],
  controllers: [TaskListsController]
})
export class TaskListsModule {
}
