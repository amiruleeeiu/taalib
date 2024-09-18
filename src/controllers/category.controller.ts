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
import { CategoryDto } from 'src/dto/category.dto';
import { Category } from 'src/entity/category.entity';
import { CategoryService } from 'src/services/category.service';
import { MapToDto } from 'src/util/mat-to-dto.utils';
import { CreateCategoryDto } from './../dto/create-category.dto';

@ApiTags('categories')
@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

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
  async createCategory(@Body() categoryDto: CreateCategoryDto) {
    const { title, description, parentId } = categoryDto;
    return this.categoryService.createCategory(title, description, parentId);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all categories' })
  @ApiResponse({
    status: 200,
    description: 'List of categories',
    type: [Category],
  })
  async findAllCategories(): Promise<CategoryDto[]> {
    const categories = await this.categoryService.findAll([
      'parent',
      'children',
    ]);

    return MapToDto(CategoryDto, categories) as CategoryDto[];
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a single category by ID' })
  @ApiParam({ name: 'id', description: 'Category ID' })
  @ApiResponse({ status: 200, description: 'Category found', type: Category })
  @ApiResponse({ status: 404, description: 'Category not found' })
  async getCategoryById(@Param('id') id: string): Promise<CategoryDto> {
    const category = this.categoryService.findOne(id, ['parent', 'children']);
    return MapToDto(CategoryDto, category) as CategoryDto;
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an existing category' })
  @ApiParam({ name: 'id', description: 'Category ID', type: String })
  @ApiBody({ type: CategoryDto }) // This specifies that the request body should conform to the CategoryDto
  @ApiResponse({
    status: 200,
    description: 'The category has been successfully updated.',
    type: CategoryDto, // The response type will also be CategoryDto
  })
  @ApiResponse({ status: 404, description: 'Category not found' })
  @ApiResponse({ status: 400, description: 'Invalid input data' })
  async updateCategory(
    @Param('id') id: string,
    @Body() category: Category,
  ): Promise<CategoryDto> {
    const categoryResponse = this.categoryService.update(id, category);
    return MapToDto(CategoryDto, categoryResponse) as CategoryDto;
  }
}
