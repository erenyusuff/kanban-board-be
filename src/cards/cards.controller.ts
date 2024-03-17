import { Body, Controller, Patch, Post } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CardModel } from './models/card.model';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';

@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Post()
  create(@Body() createCardDto: CreateCardDto): Promise<CardModel> {
    return this.cardsService.create(createCardDto);
  }
  @Patch('update')
  update(@Body() updateCardDto: UpdateCardDto) {
    return this.cardsService.update(updateCardDto);
  }
}
