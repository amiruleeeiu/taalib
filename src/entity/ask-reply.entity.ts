import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Ask } from './ask.entites';

@Entity()
export class AskReply {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  reply: string;

  @Column({ default: false })
  isAns: boolean;

  @Column({ default: true })
  status: boolean;

  // @ManyToOne(() => User, (user) => user.askedReplies)
  // replyBy: User;

  @ManyToOne(() => Ask, (asked) => asked.askReplies)
  ask: Ask;
}
