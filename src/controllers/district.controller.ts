import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { District } from 'src/entity/district.entity';
import { Repository } from 'typeorm';

@Controller('districts')
export class DistrictController {
  constructor(
    @InjectRepository(District)
    private readonly DistrictRepository: Repository<District>,
  ) {}

  @Get()
  async findAllDistricts(): Promise<District[]> {
    return this.DistrictRepository.find();
  }

  @Post()
  async createDistrict(@Body() district: District): Promise<District> {
    return this.DistrictRepository.save(district);
  }
}
