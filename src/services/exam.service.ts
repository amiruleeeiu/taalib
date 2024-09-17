import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Exam } from 'src/entity/exam.entity';
import { Repository } from 'typeorm';
import { GenericService } from './generic.service';

@Injectable()
export class ExamService extends GenericService<Exam> {
  constructor(
    @InjectRepository(Exam)
    private readonly examRepository: Repository<Exam>,
  ) {
    super(examRepository);
  }
}
