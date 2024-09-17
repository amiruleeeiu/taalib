import { Column, Entity } from 'typeorm';
import { AbstractBaseEntity } from './abstract-base.entity';

@Entity()
export class Thana extends AbstractBaseEntity {
  @Column()
  name: string;

  // @OneToMany(() => User, (user) => user.district)
  // users: User[];
}
