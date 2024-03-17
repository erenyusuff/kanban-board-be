import { Controller, Get, Param } from '@nestjs/common';
import { TaskListsService } from './task-lists.service';
import { TaskListModel } from './models/task-list.model';

@Controller('task-lists')
export class TaskListsController {
  constructor(private readonly listService: TaskListsService) {}

  @Get(':id')
  findOne(@Param('id') id: number): Promise<TaskListModel> {
    return this.listService.findOne(id);
  }
}
