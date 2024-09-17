import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { QuizParticipant } from 'src/entity/quiz-participants.entity';
import { QuizParticipantService } from 'src/services/quiz-qarticipant.service';

@Controller('quiz-participant')
export class QuizParticipantController {
  constructor(
    private readonly quizParticipantService: QuizParticipantService,
  ) {}

  @Post()
  async createAsked(@Body() body: QuizParticipant) {
    return this.quizParticipantService.create(body);
  }

  @Get()
  async getAllCategories() {
    return this.quizParticipantService.findAll();
  }

  @Get(':id')
  async getCategoryById(@Param('id') id: string) {
    return this.quizParticipantService.findOne(id);
  }

  @Put(':id')
  async updateCategory(
    @Param('id') id: string,
    @Body() quizParticipant: QuizParticipant,
  ) {
    return this.quizParticipantService.update(id, quizParticipant);
  }
}
