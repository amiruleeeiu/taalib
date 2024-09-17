import { Column, Entity, ManyToOne } from 'typeorm';
import { AbstractBaseEntity } from './abstract-base.entity';
import { Exam } from './exam.entity';
import { User } from './user.entity';

@Entity()
export class UserExam extends AbstractBaseEntity {
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

  @ManyToOne(() => User, (user) => user.userExams)
  user: User;

  @ManyToOne(() => Exam, (exam) => exam.userExams)
  exam: Exam;
}
