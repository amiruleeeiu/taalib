import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Quiz } from './quiz.entity';

@Entity()
export class QuizParticipant {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  optionSelected: string;

  // @Column({ default: false })
  // isRight: boolean;

  // @ManyToOne(() => User, (user) => user.QuizParticipants)
  // user: User;

  @ManyToOne(() => Quiz, (quiz) => quiz.quizParticipant)
  quiz: Quiz;
}
