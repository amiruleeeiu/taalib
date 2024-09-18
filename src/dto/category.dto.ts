import { Expose, Type } from 'class-transformer';

export class CategoryDto {
  @Expose()
  id: number;

  @Expose()
  title: string;

  @Expose()
  description?: string;

  @Expose()
  @Type(() => CategoryDto)
  parent?: CategoryDto;

  @Expose()
  @Type(() => CategoryDto)
  children: CategoryDto[];
}
