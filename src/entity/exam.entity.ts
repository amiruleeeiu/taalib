import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { AbstractBaseEntity } from './abstract-base.entity'; // Fixed the file naming convention
import { Category } from './category.entity';
import { Question } from './question.entity';
import { UserExam } from './user-exam.entity';
import { User } from './user.entity';

@Entity()
export class Exam extends AbstractBaseEntity {
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

  @ManyToOne(() => User, (user) => user.exams)
  setBy: User; // Changed to camelCase

  @OneToMany(() => UserExam, (userExam) => userExam.user)
  userExams: UserExam[]; // Changed to camelCase

  @ManyToOne(() => Category, (category) => category.exams)
  topic: Category;

  @ManyToMany(() => Question, (question) => question.exams)
  @JoinTable()
  questions: Question[];
}
