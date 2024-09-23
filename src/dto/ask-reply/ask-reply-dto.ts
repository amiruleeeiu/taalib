import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { AskReaplyStatus } from 'src/entity/ask-reply.entity';
import { AskDto } from '../ask/ask-dto';
import { UserDto } from '../user/user-dto';

export class AskReplyDto {
  @Expose()
  id: number;

  @Expose()
  reply: string;

  @Expose()
  isAns: boolean;

  @Expose()
  status: AskReaplyStatus;

  @Expose()
  @ApiProperty({ type: AskDto })
  @Type(() => AskDto)
  ask: AskDto;

  @Expose()
  @ApiProperty({ type: UserDto })
  @Type(() => UserDto)
  createdBy: UserDto;
}
