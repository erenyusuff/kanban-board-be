import { IsNotEmpty } from 'class-validator';

export class CreateCardDto {
  @IsNotEmpty()
  title: string;
  description: string;
  tag: string;
  @IsNotEmpty()
  listId: number;
}
