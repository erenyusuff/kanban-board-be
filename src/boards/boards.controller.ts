import { Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { BoardsService } from './boards.service';
import { Board } from './models/board.model';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardService: BoardsService) {}

  @Post()
  create(): Promise<Board> {
    return this.boardService.createBoard();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Board> {
    return this.boardService.findOne(id);
  }
  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.boardService.remove(id);
  }
}
