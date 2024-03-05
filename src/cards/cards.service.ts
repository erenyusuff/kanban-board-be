import { Injectable } from '@nestjs/common';
import { Card } from "./models/card.model";
import { CreateCardDto } from "./dto/create-card.dto";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class CardsService {
  constructor(
    @InjectModel(Card)
    private readonly cardModel: typeof Card) {
  }
  create(createCardDto: CreateCardDto): Promise<Card> {
    return this.cardModel.create({
      title: createCardDto.title,
      description: createCardDto.description,
      tag: createCardDto.tag,
      listId: createCardDto.listId,
    });
  }
}
