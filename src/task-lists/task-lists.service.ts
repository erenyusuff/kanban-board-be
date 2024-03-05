import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { TaskList } from "./models/task-list.model";

@Injectable()
export class TaskListsService {
  constructor(
    @InjectModel(TaskList)
    private readonly listModel: typeof TaskList,
  ) {}
  async findOne(id: number) {
    return this.listModel.findOne({
      where: { id: id },
    });
  }
}
