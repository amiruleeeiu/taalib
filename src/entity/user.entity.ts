import { Column, Entity, OneToMany } from 'typeorm';
import { AbstractBaseEntity } from './abstract-base.entity';
import { AskReply } from './ask-reply.entity';
import { Ask } from './ask.entites';
import { Discussion } from './discussion.entity';
import { Exam } from './exam.entity';
import { Question } from './question.entity';
import { QuizParticipant } from './quiz-participants.entity';
import { Quiz } from './quiz.entity';
import { Task } from './task.entity';
import { UserExam } from './user-exam.entity';

@Entity()
export class User extends AbstractBaseEntity {
  @Column({ length: 100 })
  name: string;

  @Column({ length: 100, unique: true })
  phone: string;

  @OneToMany(() => Ask, (ask) => ask.user)
  asks: Ask[];

  @OneToMany(() => Discussion, (discussion) => discussion.user)
  discussions: Discussion[];

  @OneToMany(() => Question, (question) => question.addedBy)
  questions: Question[];

  @OneToMany(() => Quiz, (quiz) => quiz.user)
  quizs: Quiz[];

  @OneToMany(() => QuizParticipant, (quizParticipant) => quizParticipant.user)
  QuizParticipants: QuizParticipant[];

  @OneToMany(() => Task, (task) => task.noFrom)
  noFroms: Task[];

  @OneToMany(() => Task, (task) => task.noTo)
  noTos: Task[];

  @OneToMany(() => AskReply, (askedReply) => askedReply.reply)
  askedReplies: AskReply[];

  @OneToMany(() => Exam, (exam) => exam.setBy)
  exams: Exam[];

  @OneToMany(() => UserExam, (userExam) => userExam.user)
  userExams: UserExam[];

  @Column({ type: 'enum', enum: ['male', 'female'], default: 'male' })
  gender: 'male' | 'female';

  @Column({ type: 'boolean', default: true })
  isActive: boolean;
}
