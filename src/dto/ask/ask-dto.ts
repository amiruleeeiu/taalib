import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { AskReply } from 'src/entity/ask-reply.entity';
import { AskStatus } from 'src/entity/ask.entites';

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
}
