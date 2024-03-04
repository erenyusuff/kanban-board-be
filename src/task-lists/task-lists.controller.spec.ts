import { Test, TestingModule } from '@nestjs/testing';
import { TaskListsController } from './task-lists.controller';

describe('TaskListsController', () => {
  let controller: TaskListsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskListsController],
    }).compile();

    controller = module.get<TaskListsController>(TaskListsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
