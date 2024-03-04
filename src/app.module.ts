import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardsController } from './boards/boards.controller';
import { BoardsService } from './boards/boards.service';
import { BoardsModule } from './boards/boards.module';
import { TaskListsController } from './task-lists/task-lists.controller';
import { TaskListsService } from './task-lists/task-lists.service';
import { TaskListsModule } from './task-lists/task-lists.module';
import { CardsController } from './cards/cards.controller';
import { CardsService } from './cards/cards.service';
import { CardsModule } from './cards/cards.module';

@Module({
  imports: [BoardsModule, TaskListsModule, CardsModule],
  controllers: [AppController, BoardsController, TaskListsController, CardsController],
  providers: [AppService, BoardsService, TaskListsService, CardsService],
})
export class AppModule {}
