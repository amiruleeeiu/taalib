import { Column, Entity, ManyToOne } from 'typeorm';
import { AbstractBaseEntity } from './abstract-base.entity';
import { Quiz } from './quiz.entity';
import { User } from './user.entity';

@Entity()
export class QuizParticipant extends AbstractBaseEntity {
  @Column()
  optionSelected: string;

  @ManyToOne(() => User, (user) => user.QuizParticipants)
  user: User;

  @ManyToOne(() => Quiz, (quiz) => quiz.quizParticipant)
  quiz: Quiz;
}
