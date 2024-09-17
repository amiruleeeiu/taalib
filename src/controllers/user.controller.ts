import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { FindAllUsersDto } from 'src/dto/find-all-users.dto';
import { User } from 'src/entity/user.entity';
import { UserService } from 'src/services/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAllUsers(@Query() query: FindAllUsersDto): Promise<{
    data: User[];
    total: number;
    totalPages: number;
    currentPage: number;
  }> {
    return this.userService.findAllUser(query);
  }

  @Get(':id')
  async findUserById(@Param('id') id: string): Promise<User> {
    return this.userService.findOne(id, [
      'userExams',
      'exams',
      'noTos',
      'noFroms',
      'QuizParticipants',
      'quizs',
      'questions',
      'discussions',
      'asks',
    ]);
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    // convert to user dto || map to user dto
    return this.userService.createUser(createUserDto);
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() user: User): Promise<User> {
    return await this.userService.update(id, user);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<{ message: string }> {
    await this.userService.delete(id);

    return { message: 'Successfully Deleted' };
  }
}
