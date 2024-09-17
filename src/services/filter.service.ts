import { Injectable } from '@nestjs/common';
import { FilterDto } from 'src/dto/filter/filter.dto';
import { FindManyOptions, FindOptionsOrder, Repository } from 'typeorm';

@Injectable()
export class FilterService {
  // Generic method to generate filtering options for any entity
  createFilterOptions<T>(
    repository: Repository<T>,
    filterDto: FilterDto,
    customWhere?: any, // Custom where conditions
  ): FindManyOptions<T> {
    const { page, limit, orderBy, order } = filterDto;

    const options: FindManyOptions<T> = {
      take: limit,
      skip: (page - 1) * limit,
      // Cast orderBy to keyof T to ensure it's a valid property of the entity
      order: { [orderBy]: order } as FindOptionsOrder<T>,
    };

    if (customWhere) {
      options.where = customWhere;
    }

    return options;
  }
}
