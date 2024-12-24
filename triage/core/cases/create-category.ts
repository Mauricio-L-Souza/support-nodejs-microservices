import Category from '../models/Category';
import { AppError } from '../errors/app.error';
import { CreateCategoryDTO } from '../dtos/create-category.dto';

export class CreateCategoryCase {
    async execute(data: CreateCategoryDTO) {
        const categoryExists = await Category.query()
            .where('name', data.name)
            .first();

        if (categoryExists) {
            throw new AppError('Categoria já existe');
        }

        const category = await Category.query().create({
            name: data.name
        });

        return category;
    }
} 