import { Service } from "typedi"
import { InjectRepository } from "typeorm-typedi-extensions"
import { CategoryDto } from "../dtos/category.dto"
import { CategoryRepository } from "../repository/category.repository"

@Service()
export class CategoryService {
	constructor(
		@InjectRepository()
		private categoryRepository: CategoryRepository
	) {}

	async create(categoryDto: CategoryDto) {
		return categoryDto
	}
}
