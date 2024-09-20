import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './category.entity';
import { Exam } from './exam.entity';

@Entity()
export class Question {
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

  @Column()
  reports: string;

  @Column()
  collectedForm: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({
    type: 'enum',
    enum: ['PENDING', 'ACCEPTED', 'REJECTED'],
    default: 'PENDING',
  })
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED';

  @Column()
  description: string;

  @Column()
  reference: string;

  @Column()
  hints: string;

  @ManyToOne(() => Category, (category) => category.questions)
  topic: Category;

  // @ManyToOne(() => User, (user) => user.questions)
  // addedBy: User;

  @ManyToOne(() => Exam, (exam) => exam.questions)
  exams: Exam[];
}
