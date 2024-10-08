import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { AskReply } from 'src/entity/ask-reply.entity';
import { AskStatus } from 'src/entity/ask.entites';
import { UserDto } from '../user/user-dto';

export class AskDto {
  @Expose()
  id: number;

  @Expose()
  text: string;

  @Expose()
  react1: number;

  @Expose()
  react2: number;

  @Expose()
  status: AskStatus;

  @Expose()
  @ApiProperty({ type: AskReply })
  @Type(() => AskReply)
  askReplies: AskReply[];

  @Expose()
  @ApiProperty({ type: UserDto })
  @Type(() => UserDto)
  createdBy: UserDto;
}
