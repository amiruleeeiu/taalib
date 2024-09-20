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
import { CreateTaskDto } from 'src/dto/task/create-task.dto';
import { TaskDto } from 'src/dto/task/task-dto';
import { Category } from 'src/entity/category.entity';
import { Task } from 'src/entity/task.entity';
import { TaskService } from 'src/services/task.service';
import { MapToDto } from 'src/util/mat-to-dto.utils';
import { CreateCategoryDto } from './../dto/create-category.dto';

@ApiTags('tasks')
@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new category' })
  @ApiBody({ type: CreateCategoryDto })
  @ApiResponse({
    status: 201,
    description: 'Category created successfully',
    type: Category,
  })
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async createTask(@Body() createTaskDto: CreateTaskDto) {
    const { title, description, reference, startDate, endDate } = createTaskDto;
    const task = new Task();

    task.title = title;
    task.description = description;
    task.reference = reference;
    task.startDate = startDate;
    task.endDate = endDate;

    const result = this.taskService.create(task);

    return MapToDto(TaskDto, result) as TaskDto;
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all tasks' })
  @ApiResponse({
    status: 200,
    description: 'List of tasks',
    type: [Task],
  })
  async findAllTasks(): Promise<TaskDto[]> {
    const tasks = await this.taskService.findAll(['topic']);

    // return tasks;
    return MapToDto(TaskDto, tasks) as TaskDto[];
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a single category by ID' })
  @ApiParam({ name: 'id', description: 'Category ID' })
  @ApiResponse({ status: 200, description: 'Category found', type: Task })
  @ApiResponse({ status: 404, description: 'Category not found' })
  async getTaskById(@Param('id') id: string): Promise<TaskDto> {
    const task = this.taskService.findOne(id);
    return MapToDto(TaskDto, task) as TaskDto;
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an existing category' })
  @ApiParam({ name: 'id', description: 'Category ID', type: String })
  @ApiBody({ type: TaskDto }) // This specifies that the request body should conform to the CategoryDto
  @ApiResponse({
    status: 200,
    description: 'The category has been successfully updated.',
    type: TaskDto, // The response type will also be CategoryDto
  })
  @ApiResponse({ status: 404, description: 'Category not found' })
  @ApiResponse({ status: 400, description: 'Invalid input data' })
  async updateCategory(
    @Param('id') id: string,
    @Body() task: Task,
  ): Promise<TaskDto> {
    const categoryResponse = this.taskService.update(id, task);
    return MapToDto(TaskDto, categoryResponse) as TaskDto;
  }
}
