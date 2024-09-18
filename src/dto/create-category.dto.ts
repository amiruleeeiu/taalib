import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({ example: 'Hajj', description: 'The name of the user' })
  @IsNotEmpty({ message: 'The title field is required.' })
  title: string;

  @ApiProperty({
    example: 'Hajj description',
    description: 'The description of the category',
  })
  @IsNotEmpty({ message: 'The description field is required.' })
  description: string;

  @ApiProperty({
    example: '5648380a-24e6-41a9-922f-2e35d6282d7a',
    description: 'The category of this topic',
  })
  parentId: string;
}
