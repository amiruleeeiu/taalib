import { IsEnum, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export enum OrderDirection {
  ASC = 'ASC',
  DESC = 'DESC',
}

export class FilterDto {
  @IsOptional()
  @IsNumber()
  @Min(1)
  page: number = 1;

  @IsOptional()
  @IsNumber()
  @Min(1)
  limit: number = 10;

  @IsOptional()
  @IsString()
  orderBy: string = 'id';

  @IsOptional()
  @IsEnum(OrderDirection)
  order: OrderDirection = OrderDirection.ASC;
}
