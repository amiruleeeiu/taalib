import { Column, Entity, ManyToOne } from 'typeorm';
import { AbstractBaseEntity } from './abstract-base.entity';
import { QuizParticipant } from './quiz-participants.entity';
import { User } from './user.entity';

@Entity()
export class Quiz extends AbstractBaseEntity {
  @Column()
  question: string;

  @Column()
  optionA: string;

  @Column()
  optionB: string;

  @Column()
  rightOption: string;

  @ManyToOne(() => User, (user) => user.quizs)
  user: User;

  @ManyToOne(() => QuizParticipant, (quizParticipant) => quizParticipant.quiz)
  quizParticipant: QuizParticipant;
}
