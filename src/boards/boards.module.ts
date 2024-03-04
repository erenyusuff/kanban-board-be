import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Board } from './models/board.model';
import { BoardsService } from './boards.service';
import { BoardsController } from './boards.controller';

@Module({
  imports: [SequelizeModule.forFeature([Board])],
  providers: [BoardsService],
  controllers: [BoardsController],
})
export class BoardsModule {}
