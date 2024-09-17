import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AskReply } from 'src/entity/ask-reply.entity';
import { AskReplyService } from 'src/services/asked-reply.service';

@Controller('ask-reply')
export class AskedReplyController {
  constructor(private readonly askedReplyService: AskReplyService) {}

  @Post()
  async createAsked(@Body() body: AskReply) {
    return this.askedReplyService.create(body);
  }

  @Get()
  async getAllCategories() {
    return this.askedReplyService.findAll();
  }
  @Get(':id')
  async getCategoryById(@Param('id') id: string) {
    return this.askedReplyService.findOne(id);
  }

  @Put(':id')
  async updateCategory(@Param('id') id: string, @Body() body: AskReply) {
    return this.askedReplyService.update(id, body);
  }
}
