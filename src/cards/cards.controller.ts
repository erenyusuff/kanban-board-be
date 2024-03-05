import { Body, Controller, Post } from '@nestjs/common';
import { CardsService } from './cards.service';
import { Card } from './models/card.model';
import { CreateCardDto } from './dto/create-card.dto';

@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Post()
  create(@Body() createCardDto: CreateCardDto): Promise<Card> {
    return this.cardsService.create(createCardDto);
  }
}
