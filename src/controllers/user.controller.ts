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
import { CreateUserDto } from 'src/dto/user/create-user.dto';
import { UpdateUserDto } from 'src/dto/user/update-user.dto';
import { UserDto } from 'src/dto/user/user-dto';
import { User } from 'src/entity/user.entity';
import { UserService } from 'src/services/user.service';
import { MapToDto } from 'src/util/mat-to-dto.utils';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({
    status: 201,
    description: 'User created successfully',
    type: User,
  })
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async createUser(@Body() createUserDto: CreateUserDto) {
    const result = this.userService.create(
      MapToDto(User, createUserDto) as User,
    );

    return MapToDto(UserDto, result) as UserDto;
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all users' })
  @ApiResponse({
    status: 200,
    description: 'List of users',
    type: [User],
  })
  async findAllAsks(): Promise<UserDto[]> {
    const users = await this.userService.findAll();

    console.log('user service');

    // return asks;
    return MapToDto(UserDto, users) as UserDto[];
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a single user by ID' })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'User ID',
    example: 'f1ed3e49-78fb-4655-b326-f5ae49e9946c',
  })
  @ApiResponse({ status: 200, description: 'User found', type: User })
  @ApiResponse({ status: 404, description: 'User not found' })
  async getAskById(@Param('id') id: string): Promise<UserDto> {
    const user = this.userService.findOne(id);
    return MapToDto(UserDto, user) as UserDto;
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an existing user' })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'The user ID',
    example: 'f1ed3e49-78fb-4655-b326-f5ae49e9946c',
  })
  @ApiBody({ type: UpdateUserDto })
  @ApiResponse({
    status: 200,
    description: 'The user has been successfully updated.',
    type: User,
  })
  @ApiResponse({ status: 404, description: 'User not found' })
  @ApiResponse({ status: 400, description: 'Invalid input data' })
  async updateAsk(
    @Param('id') id: string,
    @Body() user: User,
  ): Promise<UserDto> {
    const userResponse = this.userService.update(id, user);
    return MapToDto(UserDto, userResponse) as UserDto;
  }
}
