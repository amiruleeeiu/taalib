import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({ example: 'John Doe', description: 'The name of the user' })
  @IsNotEmpty({ message: 'The title field is required.' })
  title: string;

  @ApiProperty({
    example: 'Description',
    description: 'The description of the category',
  })
  @IsNotEmpty({ message: 'The description field is required.' })
  description: string;

  @ApiProperty({
    example: 'parent',
    description: 'The category of this topic',
  })
  parentId: string;
}
