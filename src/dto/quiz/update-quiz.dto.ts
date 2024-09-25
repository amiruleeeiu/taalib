import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UpdateQuizDto {
  @ApiProperty({
    example: 'fa4c85cb-5fbc-4c59-84e1-70dba6f4f25a',
    description: 'The id of the quiz',
  })
  id: string;

  @ApiProperty({
    example: 'How many times is a Muslim required to pray every day?',
    description: 'The question of the quiz',
  })
  @IsNotEmpty({ message: 'The quiz field is required.' })
  question: string;

  @ApiProperty({ example: '5', description: 'Option A of the quiz' })
  @IsNotEmpty({ message: 'The optionA field is required.' })
  optionA: string;

  @ApiProperty({ example: '7', description: 'Option B of the quiz' })
  @IsNotEmpty({ message: 'The optionB field is required.' })
  optionB: string;

  @ApiProperty({ example: '7', description: 'The right option of the quiz' })
  @IsNotEmpty({ message: 'The rightOption field is required.' })
  rightOption: string;
}
