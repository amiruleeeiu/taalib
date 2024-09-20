import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({ example: 'Hajj', description: 'The name of the user' })
  @IsNotEmpty({ message: 'The title field is required.' })
  title: string;

  @ApiProperty({
    example: 'Hajj description',
    description: 'The description of the category',
  })
  @IsNotEmpty({ message: 'The description field is required.' })
  description: string;

  @ApiProperty({ example: 'Hajj', description: 'The name of the user' })
  @IsNotEmpty({ message: 'The title field is required.' })
  startDate: Date;

  @ApiProperty({ example: 'Hajj', description: 'The name of the user' })
  @IsNotEmpty({ message: 'The title field is required.' })
  endDate: Date;

  @ApiProperty({ example: 'Hajj', description: 'The name of the user' })
  @IsNotEmpty({ message: 'The title field is required.' })
  reference: string;

  @ApiProperty({ example: 'Hajj', description: 'The name of the user' })
  @IsNotEmpty({ message: 'The title field is required.' })
  topic: string;
}
