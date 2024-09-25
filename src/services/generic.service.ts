import { Injectable } from '@nestjs/common';
import {
  DeleteResult,
  FindOptionsWhere,
  Repository,
  UpdateResult,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

interface BaseEntity {
  id: number | string;
}

@Injectable()
export class GenericService<T extends BaseEntity> {
  constructor(private readonly repository: Repository<T>) {}

  async create(entity: T): Promise<T> {
    return this.repository.save(entity);
  }

  // async findAll(relations?: string[]): Promise<T[]> {
  //   const results = this.repository.find({ relations });

  //   return plainToClass(T, results);
  // }

  async findAll(relations?: string[]): Promise<T[]> {
    const results = await this.repository.find({ relations });
    return results;
  }

  async findOne(id: string, relations?: string[]): Promise<T | null> {
    return this.repository.findOne({
      where: {
        id,
      } as FindOptionsWhere<T>,
      relations,
    });
  }

  async update(id: string, entity: T): Promise<T> {
    await this.repository.update(id, entity as QueryDeepPartialEntity<T>);
    return this.findOne(id);
  }

  async delete(id: string): Promise<DeleteResult> {
    return this.repository.delete(id);
  }

  async softDelete(id: number): Promise<DeleteResult> {
    return await this.repository.softDelete(id);
  }

  async restore(id: number): Promise<UpdateResult> {
    return await this.repository.restore(id);
  }
}
