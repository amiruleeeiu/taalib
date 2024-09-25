import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { QuizDto } from '../quiz/quiz-dto';
import { UserDto } from '../user/user-dto';

export class QuizParticipantDto {
  @Expose()
  id: number;

  @Expose()
  optionSelected: string;

  @Expose()
  @ApiProperty({ type: UserDto })
  @Type(() => UserDto)
  createdBy: UserDto;

  @Expose()
  @ApiProperty({ type: QuizDto })
  @Type(() => QuizDto)
  quiz: QuizDto;
}
