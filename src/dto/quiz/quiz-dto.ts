import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { AskReply } from 'src/entity/ask-reply.entity';
import { UserDto } from '../user/user-dto';

export class QuizDto {
  @Expose()
  id: number;

  @Expose()
  question: string;

  @Expose()
  optionA: string;

  @Expose()
  optionB: string;

  @Expose()
  rightOption: string;

  @Expose()
  @ApiProperty({ type: AskReply })
  @Type(() => AskReply)
  askReplies: AskReply[];

  @Expose()
  @ApiProperty({ type: UserDto })
  @Type(() => UserDto)
  createdBy: UserDto;

  @Expose()
  @ApiProperty({ type: UserDto })
  @Type(() => UserDto)
  quizParticipant: UserDto;
}
