import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { DeleteResult, FindOptionsWhere, Repository } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

// Define a base entity interface with an id property
interface BaseEntity {
  id: number | string;
}

@Injectable()
export class GenericServicev2<T extends BaseEntity> {
  constructor(private readonly repository: Repository<T>) {}

  // Create entity
  async create(entity: T): Promise<T> {
    return this.repository.save(entity);
  }

  // Find all entities and transform them to DTOs
  async findAll<D>(dtoClass: new () => D, relations?: string[]): Promise<D[]> {
    const results = await this.repository.find({ relations });

    // Transform entities to DTOs using the class constructor
    return plainToInstance(dtoClass, results, {
      excludeExtraneousValues: true, // This will ensure only @Expose properties are included
    });
  }

  // Find a single entity and return as an entity
  async findOne<D>(
    dtoClass: new () => D,
    id: string,
    relations?: string[],
  ): Promise<D> {
    const result = this.repository.findOne({
      where: {
        id,
      } as FindOptionsWhere<T>,
      relations,
    });

    return plainToInstance(dtoClass, result, {
      excludeExtraneousValues: true, // This will ensure only @Expose properties are included
    });
  }

  // Find one entity and transform it to DTO

  // Update entity
  async update<D>(dtoClass: new () => D, id: string, entity: T): Promise<D> {
    await this.repository.update(id, entity as QueryDeepPartialEntity<T>);
    return this.findOne(dtoClass, id);
  }

  // Delete entity
  async delete(id: number | string): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
