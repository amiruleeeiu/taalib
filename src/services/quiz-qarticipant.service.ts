import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuizParticipant } from 'src/entity/quiz-participants.entity';
import { Repository } from 'typeorm';
import { GenericService } from './generic.service';

@Injectable()
export class QuizParticipantService extends GenericService<QuizParticipant> {
  constructor(
    @InjectRepository(QuizParticipant)
    private readonly quizParticipantRepository: Repository<QuizParticipant>,
  ) {
    super(quizParticipantRepository);
  }
}
