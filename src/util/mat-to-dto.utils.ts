import { ClassConstructor, plainToInstance } from 'class-transformer';

export function MapToDto<T>(
  dtoClass: ClassConstructor<T>,
  data: object | object[],
): T | T[] {
  console.log(data);
  if (Array.isArray(data)) {
    return plainToInstance(dtoClass, data, {
      excludeExtraneousValues: true,
    }) as T[];
  }

  return plainToInstance(dtoClass, [data], {
    excludeExtraneousValues: true,
  })[0] as T;
}
