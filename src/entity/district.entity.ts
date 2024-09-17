import { Column, Entity } from 'typeorm';
import { AbstractBaseEntity } from './abstract-base.entity';

@Entity()
export class District extends AbstractBaseEntity {
  @Column()
  name: string;
}
