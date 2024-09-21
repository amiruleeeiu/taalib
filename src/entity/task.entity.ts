import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne } from 'typeorm';
import { AbstractBaseEntity } from './abstract-base.entity';
import { Category } from './category.entity'; // Use DTO in the final implementation

@Entity()
export class Task extends AbstractBaseEntity {
  @Column()
  @ApiProperty({
    description: 'The title of the task',
    example: 'Complete Chapter 5',
  })
  title: string;

  @Column()
  @ApiProperty({
    description: 'The description of the task',
    example: 'Finish the last chapter of the book.',
  })
  description: string;

  @Column()
  @ApiProperty({
    description: 'The start date of the task',
    example: '2024-01-01T00:00:00.000Z',
  })
  startDate: Date;

  @Column()
  @ApiProperty({
    description: 'The end date of the task',
    example: '2024-01-07T00:00:00.000Z',
  })
  endDate: Date;

  @Column()
  @ApiProperty({
    description: 'The reference of the task (as JSON)',
    example:
      '{"bookId":"1", "chapterFrom":1, "chapterTo":5, "pageNoFrom":10, "pageNoTo":20}',
  })
  reference: string; // reference JSON, use a separate DTO if needed

  @Column({
    type: 'enum',
    enum: ['to_do', 'in_progress', 'done'],
    default: 'to_do',
  })
  @ApiProperty({
    description: 'The current status of the task',
    enum: ['to_do', 'in_progress', 'done'],
    default: 'to_do',
  })
  status: string;

  @ManyToOne(() => Category, (category) => category.topics)
  @ApiProperty({
    description: 'The category related to the task',
    type: () => Category,
  }) // Use CategoryDto instead
  topic: Category; // Use CategoryDto in the DTO
}
