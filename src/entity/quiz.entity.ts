import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne } from 'typeorm';
import { AbstractBaseEntity } from './abstract-base.entity';
import { QuizParticipant } from './quiz-participants.entity';

@Entity()
export class Quiz extends AbstractBaseEntity {
  @Column()
  @ApiProperty({
    description: 'The question of the quiz',
    example: 'How many times is a Muslim required to pray every day ?',
  })
  question: string;

  @Column()
  @ApiProperty({
    description: 'The option A of the quiz',
    example: '5',
  })
  optionA: string;

  @Column()
  @ApiProperty({
    description: 'The option B of the quiz',
    example: '7',
  })
  optionB: string;

  @Column()
  @ApiProperty({
    description: 'The right option of the quiz',
    example: '7',
  })
  rightOption: string;

  @ManyToOne(() => QuizParticipant, (quizParticipant) => quizParticipant.quizs)
  quizParticipant: QuizParticipant;
}
