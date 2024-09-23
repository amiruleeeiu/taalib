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
import { AskReplyDto } from 'src/dto/ask-reply/ask-reply-dto';
import { CreateAskReplyDto } from 'src/dto/ask-reply/create-ask-reply.dto';
import { AskReply } from 'src/entity/ask-reply.entity';
import { AskReplyService } from 'src/services/asked-reply.service';
import { MapToDto } from 'src/util/mat-to-dto.utils';

@ApiTags('asks-reply')
@Controller('ask-reply')
export class AskedReplyController {
  constructor(private readonly askedReplyService: AskReplyService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new ask reply' })
  @ApiBody({ type: CreateAskReplyDto })
  @ApiResponse({
    status: 201,
    description: 'Ask reply created successfully',
    type: AskReply,
  })
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async createAsked(@Body() createAskReplydto: AskReplyDto) {
    const askReply = new AskReply();
    Object.assign(askReply, createAskReplydto);

    const result = this.askedReplyService.create(askReply);

    return MapToDto(AskReplyDto, result) as AskReplyDto;
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all ask reply' })
  @ApiResponse({
    status: 200,
    description: 'List of ask reply',
    type: [AskReply],
  })
  @Get()
  async getAllCategories(): Promise<AskReplyDto[]> {
    const askReplyReplies = this.askedReplyService.findAll([
      'ask',
      'createdBy',
    ]);

    return MapToDto(AskReplyDto, askReplyReplies) as AskReplyDto[];
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a single ask reply by ID' })
  @ApiParam({ name: 'id', description: 'Ask reply ID' })
  @ApiResponse({ status: 200, description: 'Ask reply found', type: AskReply })
  @ApiResponse({ status: 404, description: 'Ask reply not found' })
  @Get(':id')
  async getCategoryById(@Param('id') id: string) {
    const askReplyResponse = this.askedReplyService.findOne(id, [
      'ask',
      'createdBy',
    ]);

    return MapToDto(AskReplyDto, askReplyResponse) as AskReplyDto;
  }

  @ApiOperation({ summary: 'Update an existing ask reply' })
  @ApiParam({ name: 'id', description: 'Ask reply ID', type: String })
  @ApiBody({ type: AskReply }) // This specifies that the request body should conform to the taskDto
  @ApiResponse({
    status: 200,
    description: 'The ask reply has been successfully updated.',
    type: AskReplyDto, // The response type will also be taskdto
  })
  @ApiResponse({ status: 404, description: 'Ask reply not found' })
  @ApiResponse({ status: 400, description: 'Invalid input data' })
  @Put(':id')
  async updateCategory(
    @Param('id') id: string,
    @Body() body: AskReply,
  ): Promise<AskReplyDto> {
    const askReplyResponse = this.askedReplyService.update(id, body);

    return MapToDto(AskReplyDto, askReplyResponse) as AskReplyDto;
  }
}
