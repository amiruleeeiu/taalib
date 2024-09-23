import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  @ApiProperty({
    description: 'The reply of the ask reply',
    example: 'Ask realy',
  })
  name: string;

  @Column({ length: 100, unique: true })
  @ApiProperty({
    description: 'The reply of the ask reply',
    example: 'Ask realy',
  })
  phone: string;

  @Column({ length: 100, unique: true })
  @ApiProperty({
    description: 'The reply of the ask reply',
    example: 'Ask realy',
  })
  email: string;

  @Column({ length: 100, nullable: true })
  @ApiProperty({
    description: 'The reply of the ask reply',
    example: 'Ask realy',
  })
  occupation: string;

  @Column({ length: 100, nullable: true })
  @ApiProperty({
    description: 'The reply of the ask reply',
    example: 'Ask realy',
  })
  location: string;

  @Column({ length: 100, nullable: true })
  @ApiProperty({
    description: 'The reply of the ask reply',
    example: 'Ask realy',
  })
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
  @ApiProperty({
    description: 'The reply of the ask reply',
    example: 'Ask realy',
  })
  gender: 'male' | 'female';

  @Column({ type: 'boolean', default: true })
  @ApiProperty({
    description: 'The reply of the ask reply',
    example: 'Ask realy',
  })
  isActive: boolean;
}
