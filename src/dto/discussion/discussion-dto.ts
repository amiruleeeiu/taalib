import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { AskReaplyStatus } from 'src/entity/ask-reply.entity';
import { UserDto } from '../user/user-dto';

export class DiscussionDto {
  @Expose()
  id: number;

  @Expose()
  text: string;

  @Expose()
  status: AskReaplyStatus;

  @Expose()
  createdAt: Date;

  @Expose()
  @ApiProperty({ type: UserDto })
  @Type(() => UserDto)
  createdBy: UserDto;
}
