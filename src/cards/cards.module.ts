import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { CardsService } from "./cards.service";
import { CardsController } from "./cards.controller";
import { Card } from "./models/card.model";


@Module({
  imports: [SequelizeModule.forFeature([Card])],
  providers: [CardsService],
  controllers: [CardsController]
})
export class CardsModule {
}
