import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100, unique: true })
  phone: string;

  @Column({ length: 100, unique: true })
  email: string;

  @Column({ length: 100, nullable: true })
  occupation: string;

  @Column({ length: 100, nullable: true })
  location: string;

  @Column({ length: 100, nullable: true })
  password: string;

  // @OneToMany(() => Category, (ask) => ask.createdBy)
  // categories: Category[];

  // @OneToMany(() => Discussion, (discussion) => discussion.user)
  // discussions: Discussion[];

  // @OneToMany(() => Question, (question) => question.addedBy)
  // questions: Question[];

  // @OneToMany(() => Quiz, (quiz) => quiz.user)
  // quizs: Quiz[];

  // @OneToMany(() => QuizParticipant, (quizParticipant) => quizParticipant.user)
  // QuizParticipants: QuizParticipant[];

  // @OneToMany(() => Task, (task) => task.createdBy)
  // tasks: Task[];

  // @OneToMany(() => Task, (task) => task.noTo)
  // noTos: Task[];

  // @OneToMany(() => AskReply, (askedReply) => askedReply.reply)
  // askedReplies: AskReply[];

  // @OneToMany(() => Exam, (exam) => exam.setBy)
  // exams: Exam[];

  // @OneToMany(() => UserExam, (userExam) => userExam.user)
  // userExams: UserExam[];

  @Column({ type: 'enum', enum: ['male', 'female'], default: 'male' })
  gender: 'male' | 'female';

  @Column({ type: 'boolean', default: true })
  isActive: boolean;
}
