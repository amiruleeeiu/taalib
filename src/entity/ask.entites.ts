import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AskReply } from './ask-reply.entity';

@Entity()
export class Ask {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  text: string;

  @Column({ default: 0 })
  react1: number;

  @Column({ default: 0 })
  react2: number;

  // @ManyToOne(() => User, (user) => user.asks)
  // user: User;

  @OneToMany(() => AskReply, (askedReply) => askedReply.ask)
  askReplies: AskReply[];
}
