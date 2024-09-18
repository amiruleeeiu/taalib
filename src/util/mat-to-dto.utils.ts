import { ClassConstructor, plainToInstance } from 'class-transformer';

export function MapToDto<T>(
  dtoClass: ClassConstructor<T>,
  data: object | object[],
): T | T[] {
  if (Array.isArray(data)) {
    return plainToInstance(dtoClass, data, {
      excludeExtraneousValues: true,
    });
  }

  return plainToInstance(dtoClass, [data], {
    excludeExtraneousValues: true,
  })[0];
}
