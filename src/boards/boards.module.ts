import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Board } from './models/board.model';
import { BoardsService } from './boards.service';
import { BoardsController } from './boards.controller';
import { TaskList } from '../task-lists/models/task-list.model';

@Module({
  imports: [SequelizeModule.forFeature([Board])],
  providers: [
    BoardsService,
    {
      provide: 'TaskListRepository',
      useValue: TaskList,
    },
  ],
  controllers: [BoardsController],
})
export class BoardsModule {}
