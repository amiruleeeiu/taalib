import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { AskReaplyStatus } from 'src/entity/ask-reply.entity';
import { User } from 'src/entity/user.entity';

export class CreateDiscussionDto {
  @ApiProperty({
    example: 'discussion text',
    description: 'The text of the discussion',
  })
  @IsNotEmpty({ message: 'The text field is required.' })
  text: string;

  @ApiProperty({
    example: 'active',
    description: 'The status of the discussion',
  })
  @IsNotEmpty({ message: 'The status field is required.' })
  status: AskReaplyStatus;

  @ApiProperty({
    example: '196349ad-2376-4632-91f4-8529c595e5a9',
    description: 'The creator of this discussion',
  })
  @IsNotEmpty({ message: 'The createdBy field is required.' })
  createdBy: User;
}
