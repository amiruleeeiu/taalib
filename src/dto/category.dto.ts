import { Expose, Type } from 'class-transformer';

export class CategoryDto {
  @Expose()
  id: number;

  @Expose()
  title: string;

  @Expose()
  description?: string;

  // Optionally expose relations
  // @Expose()
  // @Type(() => QuestionDto) // Transform related questions into QuestionDto
  // questions: QuestionDto[];

  // @Expose()
  // @Type(() => ExamDto) // Transform related exams into ExamDto
  // exams: ExamDto[];

  // @Expose()
  // @Type(() => TaskDto) // Transform related tasks into TaskDto
  // topics: TaskDto[];

  // Handling recursive parent-child relations
  @Expose()
  @Type(() => CategoryDto) // Self-referencing to allow nested categories
  parent?: CategoryDto;

  @Expose()
  @Type(() => CategoryDto) // Self-referencing to allow nested categories
  children: CategoryDto[];
}
