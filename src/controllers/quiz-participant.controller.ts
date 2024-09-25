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
import { CreateQuizParticipantDto } from 'src/dto/quiz-participant/create-quiz-participant.dto';
import { QuizParticipantDto } from 'src/dto/quiz-participant/quiz-participant-dto';
import { UpdateQuizParticipantDto } from 'src/dto/quiz-participant/update-quiz-participant.dto';
import { QuizParticipant } from 'src/entity/quiz-participants.entity';
import { QuizParticipantService } from 'src/services/quiz-qarticipant.service';
import { MapToDto } from 'src/util/mat-to-dto.utils';

@ApiTags('quiz-participants')
@Controller('quiz-participants')
export class QuizParticipantController {
  constructor(
    private readonly quizParticipantService: QuizParticipantService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create a new quizParticipant' })
  @ApiBody({ type: CreateQuizParticipantDto })
  @ApiResponse({
    status: 201,
    description: 'Quiz participant created successfully',
    type: QuizParticipant,
  })
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async createQuizParticipant(
    @Body() createQuizParticipantDto: CreateQuizParticipantDto,
  ) {
    const quizParticipant = new QuizParticipant();
    Object.assign(quizParticipant, createQuizParticipantDto);

    const result = this.quizParticipantService.create(quizParticipant);

    return MapToDto(QuizParticipantDto, result) as QuizParticipantDto;
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all Quiz Participants' })
  @ApiResponse({
    status: 200,
    description: 'List of Quiz Participants',
    type: [QuizParticipant],
  })
  async findAllQuizParticipants(): Promise<QuizParticipantDto[]> {
    const users = await this.quizParticipantService.findAll();

    // return Quizs;
    return MapToDto(QuizParticipantDto, users) as QuizParticipantDto[];
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a single quiz Participant by ID' })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Quiz Participant ID',
    example: 'fa4c85cb-5fbc-4c59-84e1-70dba6f4f25a',
  })
  @ApiResponse({
    status: 200,
    description: 'QuizParticipant found',
    type: QuizParticipant,
  })
  @ApiResponse({ status: 404, description: 'QuizParticipant not found' })
  async getQuizParticipantById(
    @Param('id') id: string,
  ): Promise<QuizParticipantDto> {
    const quizParticipant = this.quizParticipantService.findOne(id);
    return MapToDto(QuizParticipantDto, quizParticipant) as QuizParticipantDto;
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an existing quizParticipant' })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'The quizParticipant ID',
    example: 'fa4c85cb-5fbc-4c59-84e1-70dba6f4f25a',
  })
  @ApiBody({ type: UpdateQuizParticipantDto })
  @ApiResponse({
    status: 200,
    description: 'The quizParticipant has been successfully updated.',
    type: QuizParticipant,
  })
  @ApiResponse({ status: 404, description: 'QuizParticipant not found' })
  @ApiResponse({ status: 400, description: 'Invalid input data' })
  async updateQuizParticipant(
    @Param('id') id: string,
    @Body() quizParticipant: QuizParticipant,
  ): Promise<QuizParticipantDto> {
    const userResponse = this.quizParticipantService.update(
      id,
      quizParticipant,
    );
    return MapToDto(QuizParticipantDto, userResponse) as QuizParticipantDto;
  }
}
