import { Column, Entity } from 'typeorm';
import { AbstractBaseEntity } from './abstract-base.entity';

@Entity()
export class Discussion extends AbstractBaseEntity {
  @Column()
  text: string;

  @Column({ default: true })
  status: boolean;
}
