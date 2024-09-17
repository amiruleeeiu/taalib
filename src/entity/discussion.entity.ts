import { Column, Entity, ManyToOne } from 'typeorm';
import { AbstractBaseEntity } from './abstract-base.entity';
import { User } from './user.entity';

@Entity()
export class Discussion extends AbstractBaseEntity {
  @Column()
  text: string;

  @ManyToOne(() => User, (user) => user.discussions)
  user: User;

  @Column({ default: true })
  status: boolean;
}
