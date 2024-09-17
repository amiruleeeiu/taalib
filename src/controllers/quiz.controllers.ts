import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Quiz } from 'src/entity/quiz.entity';
import { QuizService } from 'src/services/quiz.service';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Post()
  async createAsked(@Body() quiz: Quiz) {
    return this.quizService.create(quiz);
  }

  @Get()
  async getAllCategories() {
    return this.quizService.findAll();
  }

  @Get(':id')
  async getCategoryById(@Param('id') id: string) {
    return this.quizService.findOne(id);
  }

  @Put(':id')
  async updateCategory(@Param('id') id: string, @Body() quiz: Quiz) {
    return this.quizService.update(id, quiz);
  }
}
