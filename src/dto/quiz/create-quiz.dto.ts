import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { User } from 'src/entity/user.entity';

export class CreateQuizDto {
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

  @ApiProperty({
    example: '6e17dd5d-a42e-4621-bf84-704d7712a06b',
    description: 'The creator of this quiz',
  })
  @IsNotEmpty({ message: 'The createdBy field is required.' })
  createdBy: User;
}
