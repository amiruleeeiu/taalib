import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserExam } from 'src/entity/user-exam.entity';
import { Repository } from 'typeorm';
import { GenericService } from './generic.service';

@Injectable()
export class UserExamService extends GenericService<UserExam> {
  constructor(
    @InjectRepository(UserExam)
    private readonly userExamRepository: Repository<UserExam>,
  ) {
    super(userExamRepository);
  }
}
