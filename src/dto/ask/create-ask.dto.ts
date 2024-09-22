import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateAskDto {
  @ApiProperty({ example: 'ask text', description: 'The text of the ask' })
  @IsNotEmpty({ message: 'The text field is required.' })
  text: string;
}
