import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Discussion } from 'src/entity/discussion.entity';
import { Repository } from 'typeorm';
import { GenericService } from './generic.service';

@Injectable()
export class DiscussionService extends GenericService<Discussion> {
  constructor(
    @InjectRepository(Discussion)
    private readonly discussionRepository: Repository<Discussion>,
  ) {
    super(discussionRepository);
  }
}
