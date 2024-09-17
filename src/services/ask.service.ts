import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ask } from 'src/entity/ask.entites';
import { Repository } from 'typeorm';
import { GenericService } from './generic.service';

@Injectable()
export class AskService extends GenericService<Ask> {
  constructor(
    @InjectRepository(Ask)
    private readonly askRepository: Repository<Ask>,
  ) {
    super(askRepository);
  }
}
