import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateQuizDto } from 'src/dto/quiz/create-quiz.dto';
import { QuizDto } from 'src/dto/quiz/quiz-dto';
import { UpdateQuizDto } from 'src/dto/quiz/update-quiz.dto';
import { Quiz } from 'src/entity/quiz.entity';
import { QuizService } from 'src/services/quiz.service';
import { MapToDto } from 'src/util/mat-to-dto.utils';

@ApiTags('quizs')
@Controller('quizs')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new quiz' })
  @ApiBody({ type: CreateQuizDto })
  @ApiResponse({
    status: 201,
    description: 'Quiz created successfully',
    type: Quiz,
  })
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async createUser(@Body() createQuizDto: CreateQuizDto) {
    const quiz = new Quiz();
    Object.assign(quiz, createQuizDto);

    const result = this.quizService.create(quiz);

    return MapToDto(QuizDto, result) as QuizDto;
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all users' })
  @ApiResponse({
    status: 200,
    description: 'List of users',
    type: [Quiz],
  })
  async findAllQuizs(): Promise<QuizDto[]> {
    const users = await this.quizService.findAll();

    // return Quizs;
    return MapToDto(QuizDto, users) as QuizDto[];
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a single quiz by ID' })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Quiz ID',
    example: 'fa4c85cb-5fbc-4c59-84e1-70dba6f4f25a',
  })
  @ApiResponse({ status: 200, description: 'Quiz found', type: Quiz })
  @ApiResponse({ status: 404, description: 'Quiz not found' })
  async getQuizById(@Param('id') id: string): Promise<QuizDto> {
    const quiz = this.quizService.findOne(id);
    return MapToDto(QuizDto, quiz) as QuizDto;
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an existing quiz' })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'The quiz ID',
    example: 'fa4c85cb-5fbc-4c59-84e1-70dba6f4f25a',
  })
  @ApiBody({ type: UpdateQuizDto })
  @ApiResponse({
    status: 200,
    description: 'The quiz has been successfully updated.',
    type: Quiz,
  })
  @ApiResponse({ status: 404, description: 'Quiz not found' })
  @ApiResponse({ status: 400, description: 'Invalid input data' })
  async updateQuiz(
    @Param('id') id: string,
    @Body() quiz: Quiz,
  ): Promise<QuizDto> {
    const userResponse = this.quizService.update(id, quiz);
    return MapToDto(QuizDto, userResponse) as QuizDto;
  }
}
