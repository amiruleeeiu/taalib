import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from './category.entity';
import { Question } from './question.entity';

@Entity()
export class Exam {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  examDate: Date; // Changed to camelCase

  @Column()
  examTimeHr: number;

  @Column()
  examTimeMin: number; // Changed to camelCase

  @Column({ type: 'enum', enum: ['AM', 'PM'] })
  timeFormat: 'AM' | 'PM'; // Changed to camelCase

  @Column()
  numberOfQuestions: number; // Changed to camelCase and more descriptive

  @Column({ default: false })
  isPublished: boolean; // Changed to camelCase

  @Column({ default: false })
  isModified: boolean; // Changed to camelCase

  // @ManyToOne(() => User, (user) => user.exams)
  // setBy: User;

  // @OneToMany(() => UserExam, (userExam) => userExam.user)
  // userExams: UserExam[];

  @ManyToOne(() => Category, (category) => category.exams)
  topic: Category;

  @ManyToMany(() => Question, (question) => question.exams)
  @JoinTable()
  questions: Question[];
}
