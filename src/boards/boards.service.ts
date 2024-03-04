import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Board } from './models/board.model';

@Injectable()
export class BoardsService {
  constructor(
    @InjectModel(Board)
    private readonly boardModel: typeof Board,
  ) {}
  async createBoard() {
    return this.boardModel.create();
  }

  async findOne(id: number) {
    return this.boardModel.findOne({
      where: { id: id },
    });
  }

  async remove(id: number): Promise<void> {
    const board = await this.findOne(id);
    await board.destroy();
  }
}
