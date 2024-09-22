import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { CategoryDto } from '../category.dto';

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

  @Expose()
  @ApiProperty({ type: CategoryDto })
  @Type(() => CategoryDto)
  topic: CategoryDto;
}
