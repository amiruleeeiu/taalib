import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { QuestionService } from 'src/services/question.service';
import { Question } from '../entity/question.entity';

@Controller('questions')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get()
  async findAllQuestions(): Promise<Question[]> {
    return this.questionService.findAll();
  }

  @Post()
  async createQuestion(@Body() question: Question): Promise<Question> {
    return this.questionService.create(question);
  }

  @Get(':id')
  async getCategoryById(@Param('id') id: string) {
    return this.questionService.findOne(id);
  }

  @Put(':id')
  async updateCategory(@Param('id') id: string, @Body() question: Question) {
    return this.questionService.update(id, question);
  }
}
