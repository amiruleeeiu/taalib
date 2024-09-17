import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { AbstractBaseEntity } from './abstract-base.entity';
import { AskReply } from './ask-reply.entity';
import { User } from './user.entity';

@Entity()
export class Ask extends AbstractBaseEntity {
  @Column()
  text: string;

  @Column({ default: 0 })
  react1: number;

  @Column({ default: 0 })
  react2: number;

  @ManyToOne(() => User, (user) => user.asks)
  user: User;

  @OneToMany(() => AskReply, (askedReply) => askedReply.ask)
  askReplies: AskReply[];
}
