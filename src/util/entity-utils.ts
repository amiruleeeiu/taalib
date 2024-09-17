import { NotFoundException } from '@nestjs/common';
import { FindOptionsWhere, Repository } from 'typeorm';

type EntityWithId = { id: number | string };

export async function findById<T extends EntityWithId>(
  id: string | number,
  repository: Repository<T>,
  entityName: string,
  relations: string[] = [],
): Promise<T> {
  const entityId = typeof id === 'string' ? parseInt(id, 10) : id;

  if (isNaN(Number(entityId))) {
    throw new NotFoundException(`${entityName} with invalid id ${id}`);
  }

  const whereClause: FindOptionsWhere<T> = {
    id: entityId,
  } as FindOptionsWhere<T>;

  const entity = await repository.findOne({
    where: whereClause,
    relations,
  });

  if (!entity) {
    throw new NotFoundException(`${entityName} with id ${id} not found`);
  }

  return entity;
}
