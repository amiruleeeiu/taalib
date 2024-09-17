import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Quiz } from 'src/entity/quiz.entity';
import { Repository } from 'typeorm';
import { GenericService } from './generic.service';

@Injectable()
export class QuizService extends GenericService<Quiz> {
  constructor(
    @InjectRepository(Quiz)
    private readonly quizRepository: Repository<Quiz>,
  ) {
    super(quizRepository);
  }
}
