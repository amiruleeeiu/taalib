import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Quiz } from 'src/entity/quiz.entity';
import { User } from 'src/entity/user.entity';

export class CreateQuizParticipantDto {
  @ApiProperty({
    example: 'B',
    description: 'The selected option of the quiz',
  })
  @IsNotEmpty({ message: 'The selectedOption field is required.' })
  optionSelected: string;

  @ApiProperty({
    example: 'fa4c85cb-5fbc-4c59-84e1-70dba6f4f25a',
    description: 'The quiz that the participant attend',
  })
  @IsNotEmpty({ message: 'The quiz field is required.' })
  quiz: Quiz;

  @ApiProperty({
    example: '6e17dd5d-a42e-4621-bf84-704d7712a06b',
    description: 'The participant of the quiz',
  })
  @IsNotEmpty({ message: 'The createdBy field is required.' })
  createdBy: User;
}
