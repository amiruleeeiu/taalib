import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { User } from 'src/entity/user.entity';

export class CreateAskDto {
  @ApiProperty({ example: 'ask text', description: 'The text of the ask' })
  @IsNotEmpty({ message: 'The text field is required.' })
  text: string;

  @ApiProperty({
    example: '196349ad-2376-4632-91f4-8529c595e5a9',
    description: 'The creator of this ask',
  })
  @IsNotEmpty({ message: 'The createdBy field is required.' })
  createdBy: User;
}
