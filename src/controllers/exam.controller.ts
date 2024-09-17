import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Exam } from 'src/entity/exam.entity';
import { ExamService } from 'src/services/exam.service';

@Controller('exam')
export class ExamController {
  constructor(private readonly examService: ExamService) {}

  @Post()
  async createAsked(@Body() body: Exam) {
    return this.examService.create(body);
  }

  @Get()
  async getAllCategories() {
    return this.examService.findAll();
  }
  @Get(':id')
  async getCategoryById(@Param('id') id: string) {
    return this.examService.findOne(id);
  }

  @Put(':id')
  async updateCategory(@Param('id') id: string, @Body() exam: Exam) {
    return this.examService.update(id, exam);
  }
}
