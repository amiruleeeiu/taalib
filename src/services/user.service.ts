import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { FindAllUsersDto } from 'src/dto/find-all-users.dto';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
import { GenericService } from './generic.service';

@Injectable()
export class UserService extends GenericService<User> {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {
    super(userRepository);
  }

  async findAllUser(query: FindAllUsersDto): Promise<{
    data: User[];
    total: number;
    totalPages: number;
    currentPage: number;
  }> {
    const {
      phone,
      gender,
      page = 1, // default to page 1 if not provided
      limit = 10, // default limit of 10 if not provided
      orderBy = 'id',
      order = 'ASC',
      isActive,
    } = query;

    const whereCondition: any = {};

    if (phone) {
      whereCondition.phone = phone;
    }
    if (gender) {
      whereCondition.gender = gender;
    }
    if (typeof isActive !== 'undefined') {
      whereCondition.isActive = isActive;
    }

    const validOrderByFields = ['id', 'name', 'gender', 'phone', 'isActive'];
    if (!validOrderByFields.includes(orderBy)) {
      throw new BadRequestException(`Invalid orderBy field: ${orderBy}`);
    }

    try {
      // Get total count for pagination
      const [users, total] = await this.userRepository.findAndCount({
        where: whereCondition,
        take: limit,
        skip: (page - 1) * limit,
        order: { [orderBy]: order },
        select: ['id', 'name', 'gender', 'phone', 'isActive'],
        relations: [
          'userExams',
          'exams',
          'noTos',
          'noFroms',
          'QuizParticipants',
          'quizs',
          'questions',
          'discussions',
          'asks',
        ],
      });

      const totalPages = Math.ceil(total / limit);

      return {
        data: users,
        total,
        totalPages,
        currentPage: page,
      };
    } catch (error) {
      throw new InternalServerErrorException(
        'Failed to fetch users',
        error.message,
      );
    }
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    try {
      const user = this.userRepository.create(createUserDto);
      return await this.userRepository.save(user);
    } catch (error) {
      if (error.code === '23505') {
        // 23505 is the error code for unique violation in PostgreSQL
        throw new ConflictException('This phone no already exists');
      }
      throw error;
    }
  }
}
