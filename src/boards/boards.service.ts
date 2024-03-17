import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BoardModel } from './models/board.model';
import { CreateBoardDto } from './dto/create-board.dto';
import { TaskListModel } from '../task-lists/models/task-list.model';

@Injectable()
export class BoardsService {
  constructor(
    @InjectModel(BoardModel)
    private readonly boardModel: typeof BoardModel,
    @InjectModel(TaskListModel)
    private readonly listModel: typeof TaskListModel,
  ) {}

  async createBoard() {
    const createCartDto = {
      cards: [
        {
          name: 'Backlog',
        },
        {
          name: 'To Do',
        },
        {
          name: 'In progress',
        },
        {
          name: 'Designed',
        },
      ],
    };
    return this.create(createCartDto);
  }

  async create(model: CreateBoardDto): Promise<any> {
    const board = await this.boardModel.create();

    const relations = model.cards.map((item) => {
      return {
        boardId: board.id,
        name: item.name,
      };
    });
    await this.listModel.bulkCreate(relations);
  }

  async findOne(id: number) {
    return this.boardModel.findOne({
      where: { id: id },
      include: [{association: 'taskLists', include: ['cards']}]
    });
  }

  async remove(id: number): Promise<void> {
    const board = await this.findOne(id);
    await board.destroy();
  }
}
