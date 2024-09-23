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
import { CreateDiscussionDto } from 'src/dto/discussion/create-discussion.dto';
import { DiscussionDto } from 'src/dto/discussion/discussion-dto';
import { Discussion } from 'src/entity/discussion.entity';
import { DiscussionService } from 'src/services/discussion.service';
import { MapToDto } from 'src/util/mat-to-dto.utils';

@ApiTags('discussions')
@Controller('discussions')
export class DiscussionController {
  constructor(private readonly discussionService: DiscussionService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new discussion' })
  @ApiBody({ type: CreateDiscussionDto })
  @ApiResponse({
    status: 201,
    description: 'Discussion created successfully',
    type: CreateDiscussionDto,
  })
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async createAsk(@Body() createDiscussiondto: CreateDiscussionDto) {
    const discussion = new Discussion();
    Object.assign(discussion, createDiscussiondto);

    const result = this.discussionService.create(discussion);

    return MapToDto(DiscussionDto, result) as DiscussionDto;
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all discussions' })
  @ApiResponse({
    status: 200,
    description: 'List of discussions',
    type: [DiscussionDto],
  })
  async findAllAsks(): Promise<DiscussionDto[]> {
    const asks = await this.discussionService.findAll(['createdBy']);

    // return asks;
    return MapToDto(DiscussionDto, asks) as DiscussionDto[];
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a single discussion by ID' })
  @ApiParam({ name: 'id', description: 'Discussion ID' })
  @ApiResponse({
    status: 200,
    description: 'Discussion found',
    type: Discussion,
  })
  @ApiResponse({ status: 404, description: 'Discussion not found' })
  async getAskById(@Param('id') id: string): Promise<DiscussionDto> {
    const discussion = this.discussionService.findOne(id, ['createdBy']);
    return MapToDto(DiscussionDto, discussion) as DiscussionDto;
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an existing discussion' })
  @ApiParam({ name: 'id', description: 'Discussion ID', type: String })
  @ApiBody({ type: DiscussionDto }) // This specifies that the request body should conform to the taskDto
  @ApiResponse({
    status: 200,
    description: 'The discussion has been successfully updated.',
    type: DiscussionDto, // The response type will also be taskdto
  })
  @ApiResponse({ status: 404, description: 'Discussion not found' })
  @ApiResponse({ status: 400, description: 'Invalid input data' })
  async updateAsk(
    @Param('id') id: string,
    @Body() discussion: Discussion,
  ): Promise<DiscussionDto> {
    const taskResponse = this.discussionService.update(id, discussion);
    return MapToDto(DiscussionDto, taskResponse) as DiscussionDto;
  }
}
