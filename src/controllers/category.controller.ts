import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
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
import { CreateCategoryDto } from './../dto/create-category.dto';

@ApiTags('categories')
@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new category' })
  @ApiResponse({
    status: 201,
    description: 'The category has been successfully created.',
    type: Category,
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async createCategory(@Body() categoryDto: CreateCategoryDto) {
    const { title, description, parentId } = categoryDto;
    return this.categoryService.createCategory(title, description, parentId);
  }

  @Get()
  @ApiOperation({ summary: 'Get all categories' })
  @ApiResponse({
    status: 200,
    description: 'list of categories',
    type: [Category],
  })
  async findAllCategories(): Promise<CategoryDto[]> {
    return this.categoryService.findAll(CategoryDto, ['parent', 'children']);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a category by ID' })
  @ApiResponse({
    status: 200,
    description: 'The category has been successfully retrieved.',
    type: CategoryDto, // Use CategoryDto instead of [Category] for a single item
  })
  @ApiResponse({ status: 404, description: 'Category not found' })
  async getCategoryById(@Param('id') id: string) {
    return this.categoryService.findOne(CategoryDto, id, [
      'parent',
      'children',
    ]);
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
  async updateCategory(@Param('id') id: string, @Body() category: Category) {
    return this.categoryService.update(CategoryDto, id, category);
  }
}
