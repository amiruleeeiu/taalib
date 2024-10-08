import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserExam {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ default: 0 })
  score: number;

  @Column()
  startTime: Date;

  @Column()
  endTime: Date;

  @Column()
  participatedDate: Date;

  @Column({ type: 'enum', enum: ['CALCELED', 'SUBMITTED', 'PUBLISHED'] })
  status: 'CALCELED' | 'SUBMITTED' | 'PUBLISHED';

  // @ManyToOne(() => User, (user) => user.userExams)
  // user: User;

  // @ManyToOne(() => Exam, (exam) => exam.userExams)
  // exam: Exam;
}
