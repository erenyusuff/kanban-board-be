import { Test, TestingModule } from '@nestjs/testing';
import { TaskListsService } from './task-lists.service';

describe('TaskListsService', () => {
  let service: TaskListsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskListsService],
    }).compile();

    service = module.get<TaskListsService>(TaskListsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
