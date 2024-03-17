import { Injectable } from '@nestjs/common';
import { CardModel } from './models/card.model';
import { CreateCardDto } from './dto/create-card.dto';
import { InjectModel } from '@nestjs/sequelize';
import { UpdateCardDto } from './dto/update-card.dto';

@Injectable()
export class CardsService {
  constructor(
    @InjectModel(CardModel)
    private readonly cardModel: typeof CardModel,
  ) {}

  create(createCardDto: CreateCardDto): Promise<CardModel> {
    return this.cardModel.create({
      title: createCardDto.title,
      description: createCardDto.description,
      tag: createCardDto.tag,
      listId: createCardDto.listId,
    });
  }

  update(updateCardDto: UpdateCardDto) {
    return this.cardModel.update(
      {
        listId: updateCardDto.listId,
      },
      { where: { id: updateCardDto.id } },
    );
  }
}
