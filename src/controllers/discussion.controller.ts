import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Discussion } from 'src/entity/discussion.entity';
import { DiscussionService } from 'src/services/discussion.service';

@Controller('discussions')
export class DiscussionController {
  constructor(private readonly discussionService: DiscussionService) {}

  @Post()
  async createDiscussion(@Body() body: Discussion) {
    return this.discussionService.create(body);
  }

  @Get()
  async getAllCategories() {
    return this.discussionService.findAll();
  }

  @Get(':id')
  async getCategoryById(@Param('id') id: string) {
    return this.discussionService.findOne(id);
  }

  @Put(':id')
  async updateCategory(
    @Param('id') id: string,
    @Body() discussion: Discussion,
  ) {
    return this.discussionService.update(id, discussion);
  }
}
