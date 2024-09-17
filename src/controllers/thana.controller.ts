import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Thana } from 'src/entity/Thana.entites';
import { Repository } from 'typeorm';

@Controller('thanas')
export class ThanaController {
  constructor(
    @InjectRepository(Thana)
    private readonly ThanaRepository: Repository<Thana>,
  ) {}

  @Get()
  async findAllDistricts(): Promise<Thana[]> {
    return this.ThanaRepository.find();
  }

  @Post()
  async createDistrict(@Body() district: Thana): Promise<Thana> {
    return this.ThanaRepository.save(district);
  }
}
