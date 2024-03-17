import { IsNotEmpty } from 'class-validator';

export class UpdateCardDto {
  @IsNotEmpty()
  listId: number;
  @IsNotEmpty()
  id: number;
}
