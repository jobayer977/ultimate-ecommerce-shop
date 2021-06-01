import { Body, JsonController, Post } from "routing-controllers"
import Container from "typedi"
import { CategoryService } from "../services/category.service"
import { CategoryDto } from "./../dtos/category.dto"

@JsonController("category")
export class CategoryController {
	private categoryService = Container.get(CategoryService)
	@Post("")
	async create(@Body() categoryDto: CategoryDto) {
		return this.categoryService.create(categoryDto)
	}
}
