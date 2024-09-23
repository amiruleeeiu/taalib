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
import { AskDto } from 'src/dto/ask/ask-dto';
import { CreateAskDto } from 'src/dto/ask/create-ask.dto';
import { Ask } from 'src/entity/ask.entites';
import { AskService } from 'src/services/ask.service';
import { MapToDto } from 'src/util/mat-to-dto.utils';

@ApiTags('asks')
@Controller('asks')
export class AskController {
  constructor(private readonly askService: AskService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new ask' })
  @ApiBody({ type: CreateAskDto })
  @ApiResponse({
    status: 201,
    description: 'Ask created successfully',
    type: Ask,
  })
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async createAsk(@Body() createAskdto: CreateAskDto) {
    const ask = new Ask();
    Object.assign(ask, createAskdto);

    const result = this.askService.create(ask);

    return MapToDto(AskDto, result) as AskDto;
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all asks' })
  @ApiResponse({
    status: 200,
    description: 'List of asks',
    type: [Ask],
  })
  async findAllAsks(): Promise<AskDto[]> {
    const asks = await this.askService.findAll(['askReplies', 'createdBy']);

    // return asks;
    return MapToDto(AskDto, asks) as AskDto[];
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a single ask by ID' })
  @ApiParam({ name: 'id', description: 'Ask ID' })
  @ApiResponse({ status: 200, description: 'Ask found', type: Ask })
  @ApiResponse({ status: 404, description: 'Ask not found' })
  async getAskById(@Param('id') id: string): Promise<AskDto> {
    const ask = this.askService.findOne(id, ['askReplies', 'createdBy']);
    return MapToDto(AskDto, ask) as AskDto;
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an existing ask' })
  @ApiParam({ name: 'id', description: 'Ask ID', type: String })
  @ApiBody({ type: AskDto }) // This specifies that the request body should conform to the taskDto
  @ApiResponse({
    status: 200,
    description: 'The ask has been successfully updated.',
    type: AskDto, // The response type will also be taskdto
  })
  @ApiResponse({ status: 404, description: 'Ask not found' })
  @ApiResponse({ status: 400, description: 'Invalid input data' })
  async updateAsk(@Param('id') id: string, @Body() ask: Ask): Promise<AskDto> {
    const taskResponse = this.askService.update(id, ask);
    return MapToDto(AskDto, taskResponse) as AskDto;
  }
}
