import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { QuizParticipant } from './quiz-participants.entity';

@Entity()
export class Quiz {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  question: string;

  @Column()
  optionA: string;

  @Column()
  optionB: string;

  @Column()
  rightOption: string;

  // @ManyToOne(() => User, (user) => user.quizs)
  // user: User;

  @ManyToOne(() => QuizParticipant, (quizParticipant) => quizParticipant.quiz)
  quizParticipant: QuizParticipant;
}
