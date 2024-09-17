import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from 'src/entity/question.entity';
import { Repository } from 'typeorm';
import { GenericService } from './generic.service';

@Injectable()
export class QuestionService extends GenericService<Question> {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
  ) {
    super(questionRepository);
  }
}
