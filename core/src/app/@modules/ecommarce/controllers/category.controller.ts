import {
	Body,
	Delete,
	Get,
	JsonController,
	Param,
	Post,
	Put,
	QueryParams,
} from "routing-controllers"
import Container from "typedi"
import { BaseAttributeFilterDto } from "../../../@base/dto/base-filter.dto"
import { CategoryService } from "../services/category.service"
import { CategoryDto } from "./../dtos/category.dto"

@JsonController("category")
export class CategoryController {
	private categoryService = Container.get(CategoryService)

	@Get("/filter")
	async filter(@QueryParams() baseFilterDto: BaseAttributeFilterDto) {
		return this.categoryService.filter(baseFilterDto)
	}

	@Get("/:id")
	async findById(@Param("id") id: string) {
		return this.categoryService.findById(id)
	}

	// @Authorized([UserType.ADMIN])
	@Post("")
	async create(@Body() categoryDto: CategoryDto) {
		return this.categoryService.create(categoryDto)
	}

	// @Authorized([UserType.ADMIN])
	@Put("/:id")
	async update(@Param("id") id: string, @Body() categoryDto: CategoryDto) {
		return this.categoryService.update(id, categoryDto)
	}

	// @Authorized([UserType.ADMIN])
	@Delete("/:id")
	async delete(@Param("id") id: string) {
		return this.categoryService.delete(id)
	}
}
