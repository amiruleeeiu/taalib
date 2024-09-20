import { Expose } from 'class-transformer';
import { CategoryDto } from '../category.dto';
import { ApiProperty } from '@nestjs/swagger';

export class TaskDto {
  @Expose()
  id: number;

  @Expose()
  title: string;

  @Expose()
  description?: string;

  @Expose()
  startDate?: Date;

  @Expose()
  reference?: string;

  @Expose()
  endDate?: Date;

  @Expose()
  status?: string;

  @ApiProperty({ type: CategoryDto })
  topic: CategoryDto;
}
