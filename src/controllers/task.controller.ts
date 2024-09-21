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
import { Task } from 'src/entity/task.entity';
import { TaskService } from 'src/services/task.service';
import { MapToDto } from 'src/util/mat-to-dto.utils';

@ApiTags('tasks')
@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new task' })
  @ApiBody({ type: CreateTaskDto })
  @ApiResponse({
    status: 201,
    description: 'Task created successfully',
    type: Task,
  })
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async createTask(@Body() createTaskDto: CreateTaskDto) {
    const task = new Task();
    Object.assign(task, createTaskDto);

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
  @ApiBody({ type: TaskDto })
  @ApiOperation({ summary: 'Retrieve a single task by ID' })
  @ApiParam({ name: 'id', description: 'Task ID' })
  @ApiResponse({ status: 200, description: 'Task found', type: Task })
  @ApiResponse({ status: 404, description: 'Task not found' })
  async getTaskById(@Param('id') id: string): Promise<TaskDto> {
    const task = this.taskService.findOne(id, ['topic']);
    return MapToDto(TaskDto, task) as TaskDto;
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an existing task' })
  @ApiParam({ name: 'id', description: 'Task ID', type: String })
  @ApiBody({ type: TaskDto }) // This specifies that the request body should conform to the taskDto
  @ApiResponse({
    status: 200,
    description: 'The task has been successfully updated.',
    type: TaskDto, // The response type will also be taskdto
  })
  @ApiResponse({ status: 404, description: 'Task not found' })
  @ApiResponse({ status: 400, description: 'Invalid input data' })
  async updateTask(
    @Param('id') id: string,
    @Body() task: Task,
  ): Promise<TaskDto> {
    const taskResponse = this.taskService.update(id, task);
    return MapToDto(TaskDto, taskResponse) as TaskDto;
  }
}
