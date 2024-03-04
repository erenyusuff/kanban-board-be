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
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'Yusuf4757',
      database: 'kanban',
      autoLoadModels: true,
      synchronize: true,
    }),
    TaskListsModule,
    CardsModule,
    BoardsModule,
  ],
  controllers: [
    AppController,
    TaskListsController,
    CardsController,
  ],
  providers: [AppService, TaskListsService, CardsService],
})
export class AppModule {}
