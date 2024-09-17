import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { AbstractBaseEntity } from './abstract-base.entity';
import { Exam } from './exam.entity';
import { Question } from './question.entity';
import { Task } from './task.entity';

@Entity()
export class Category extends AbstractBaseEntity {
  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @OneToMany(() => Question, (question) => question.topic)
  questions: Question[];

  @OneToMany(() => Exam, (exam) => exam.topic)
  exams: Exam[];

  @OneToMany(() => Task, (task) => task.topic)
  topics: Task[];

  @ManyToOne(() => Category, (category) => category.children, {
    nullable: true,
  })
  parent: Category;

  @OneToMany(() => Category, (category) => category.parent)
  children: Category[];
}
