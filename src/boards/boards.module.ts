import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BoardModel } from './models/board.model';
import { BoardsService } from './boards.service';
import { BoardsController } from './boards.controller';
import { TaskListModel } from '../task-lists/models/task-list.model';

@Module({
  imports: [SequelizeModule.forFeature([BoardModel])],
  providers: [
    BoardsService,
    {
      provide: 'TaskListModelRepository',
      useValue: TaskListModel,
    },
  ],
  controllers: [BoardsController],
})
export class BoardsModule {}
