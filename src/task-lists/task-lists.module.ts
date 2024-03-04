import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { TaskList } from "./models/task-list.model";
import { TaskListsService } from "./task-lists.service";
import { TaskListsController } from "./task-lists.controller";


@Module({
  imports: [SequelizeModule.forFeature([TaskList])],
  providers: [TaskListsService],
  controllers: [TaskListsController]
})
export class TaskListsModule {
}
