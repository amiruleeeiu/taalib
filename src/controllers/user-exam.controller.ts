import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserExam } from 'src/entity/user-exam.entity';
import { UserExamService } from 'src/services/user-exam.service';

@Controller('user-exam')
export class UserExamController {
  constructor(private readonly userExamService: UserExamService) {}

  @Post()
  async createAsked(@Body() body: UserExam) {
    return this.userExamService.create(body);
  }

  @Get()
  async getAllCategories() {
    return this.userExamService.findAll();
  }

  @Get(':id')
  async getCategoryById(@Param('id') id: string) {
    return this.userExamService.findOne(id);
  }

  @Put(':id')
  async updateCategory(@Param('id') id: string, @Body() userExam: UserExam) {
    return this.userExamService.update(id, userExam);
  }
}
