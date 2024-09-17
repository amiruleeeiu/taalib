import { Column, Entity, ManyToOne } from 'typeorm';
import { AbstractBaseEntity } from './abstract-base.entity';
import { Ask } from './ask.entites';
import { User } from './user.entity';

@Entity()
export class AskReply extends AbstractBaseEntity {
  @Column()
  reply: string;

  @Column({ default: false })
  is_ans: boolean;

  @Column({ default: true })
  status: boolean;

  @ManyToOne(() => User, (user) => user.askedReplies)
  replyBy: User;

  @ManyToOne(() => Ask, (asked) => asked.askReplies)
  ask: Ask;
}
