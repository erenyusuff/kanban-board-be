import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { TaskListModel } from "./models/task-list.model";

@Injectable()
export class TaskListsService {
  constructor(
    @InjectModel(TaskListModel)
    private readonly listModel: typeof TaskListModel,
  ) {}
  async findOne(id: number) {
    return this.listModel.findOne({
      where: { id: id },
      include: {association: 'cards'}
    });
  }
}
