import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/entity/category.entity';
import { Repository } from 'typeorm';
import { GenericService } from './generic.service';

@Injectable()
export class CategoryService extends GenericService<Category> {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {
    super(categoryRepository);
  }

  async createCategory(
    title: string,
    description: string,
    parentId?: string,
  ): Promise<Category> {
    const category = new Category();
    category.title = title;
    category.description = description;

    if (parentId) {
      const parentCategory = await this.categoryRepository.findOne({
        where: { id: parentId },
      });
      category.parent = parentCategory;
    }

    return this.categoryRepository.save(category);
    // return plainToInstance(CategoryDto, result, {
    //   excludeExtraneousValues: true,
    // });
  }
}
