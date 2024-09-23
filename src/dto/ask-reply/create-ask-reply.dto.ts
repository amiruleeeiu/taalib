import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { AskReaplyStatus } from 'src/entity/ask-reply.entity';
import { Ask } from 'src/entity/ask.entites';
import { User } from 'src/entity/user.entity';

export class CreateAskReplyDto {
  @ApiProperty({ example: 'title', description: 'The title of the task' })
  @IsNotEmpty({ message: 'The title field is required.' })
  reply: string;

  @ApiProperty({
    example: false,
    description: 'is right/wrong answer of the ask ?',
  })
  @IsNotEmpty({ message: 'The isAns field is required.' })
  isAns: boolean;

  @ApiProperty({
    example: 'active',
    description: 'The status of the ask reply',
  })
  @IsNotEmpty({ message: 'The start date field is required.' })
  status: AskReaplyStatus;

  @ApiProperty({
    example: 'e0ba7b39-b6e0-4f30-8bb5-aaf006d1f297',
    description: 'The ask of the ask reply',
  })
  @IsNotEmpty({ message: 'The ask field is required.' })
  ask: Ask;

  @ApiProperty({
    example: '196349ad-2376-4632-91f4-8529c595e5a9',
    description: 'The createdBy of this ask reply',
  })
  @IsNotEmpty({ message: 'The createdBy field is required.' })
  createdBy: User;
}
