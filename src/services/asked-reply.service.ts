import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AskReply } from 'src/entity/ask-reply.entity';
import { Repository } from 'typeorm';
import { GenericService } from './generic.service';

@Injectable()
export class AskReplyService extends GenericService<AskReply> {
  constructor(
    @InjectRepository(AskReply)
    private readonly askReplyRepository: Repository<AskReply>,
  ) {
    super(askReplyRepository);
  }
}
