import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany } from 'typeorm';
import { AbstractBaseEntity } from './abstract-base.entity';
import { Quiz } from './quiz.entity';

@Entity()
export class QuizParticipant extends AbstractBaseEntity {
  @Column()
  @ApiProperty({
    description: 'The selected option of the task',
    example: 'A/B',
  })
  optionSelected: string;

  // @Column({ default: false })
  // isRight: boolean;

  @OneToMany(() => Quiz, (quiz) => quiz.quizParticipant)
  @ApiProperty({
    description: 'Id of the quiz',
    example: 'fa4c85cb-5fbc-4c59-84e1-70dba6f4f25a',
  })
  quizs: Quiz[];
}
