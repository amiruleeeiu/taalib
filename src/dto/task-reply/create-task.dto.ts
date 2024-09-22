import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Category } from 'src/entity/category.entity';

export class CreateTaskDto {
  @ApiProperty({ example: 'title', description: 'The title of the task' })
  @IsNotEmpty({ message: 'The title field is required.' })
  title: string;

  @ApiProperty({
    example: ' description',
    description: 'The description of the task',
  })
  @IsNotEmpty({ message: 'The description field is required.' })
  description: string;

  @ApiProperty({
    example: '2024-05-20',
    description: 'The start date of the task',
  })
  @IsNotEmpty({ message: 'The start date field is required.' })
  startDate: Date;

  @ApiProperty({
    example: '2024-02-15',
    description: 'The end date of the task',
  })
  @IsNotEmpty({ message: 'The end date field is required.' })
  endDate: Date;

  @ApiProperty({
    example:
      "{bookId:'',chapterFrom:10,chapterTo:20,pageNoFrom:5,pageNoTo:7,startFrom:1,startTo:2}",
    description: 'The reference of the task',
  })
  @IsNotEmpty({ message: 'The title field is required.' })
  reference: string;

  @ApiProperty({
    example: '30594c39-a180-4c28-bc46-90d15f682f1b',
    description: 'The topic of the task',
  })
  @IsNotEmpty({ message: 'The topic field is required.' })
  topic: Category;
}
