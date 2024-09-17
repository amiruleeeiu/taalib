import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Task } from 'src/entity/task.entity';
import { TaskService } from 'src/services/task.service';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async createAsked(@Body() body: Task) {
    return this.taskService.create(body);
  }

  @Get()
  async getAllCategories() {
    return this.taskService.findAll();
  }

  @Get(':id')
  async getCategoryById(@Param('id') id: string) {
    return this.taskService.findOne(id);
  }

  @Put(':id')
  async updateCategory(@Param('id') id: string, @Body() task: Task) {
    return this.taskService.update(id, task);
  }
}
