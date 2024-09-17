import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Ask } from 'src/entity/ask.entites';
import { AskService } from 'src/services/ask.service';

@Controller('ask')
export class AskController {
  constructor(private readonly askService: AskService) {}

  @Post()
  async createAsked(@Body() ask: Ask) {
    return this.askService.create(ask);
  }

  @Get()
  async getAllCategories() {
    return this.askService.findAll();
  }

  @Get(':id')
  async getCategoryById(@Param('id') id: string) {
    return this.askService.findOne(id);
  }

  @Put(':id')
  async updateCategory(@Param('id') id: string, @Body() ask: Ask) {
    return this.askService.update(id, ask);
  }
}
