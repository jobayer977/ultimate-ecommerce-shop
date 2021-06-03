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
import { Container } from "typeorm-typedi-extensions"
import { BaseFilterDto } from "../../../@base/dto/base-filter.dto"
import { BrandDto } from "../dtos/brand.dto"
import { BrandService } from "../services/brand.service"

@JsonController("brands")
export class BrandController {
	private departmentService = Container.get(BrandService)

	// @Authorized([UserType.ADMIN])
	@Post("")
	async create(@Body() brandDto: BrandDto) {
		return this.departmentService.create(brandDto)
	}

	@Get("/filter")
	async filter(@QueryParams() baseFilterDto: BaseFilterDto) {
		return this.departmentService.filter(baseFilterDto)
	}

	@Get("/:id")
	async findById(@Param("id") id: string) {
		return this.departmentService.findById(id)
	}

	// @Authorized([UserType.ADMIN])
	@Put("/:id")
	async update(@Param("id") id: string, @Body() brandDto: BrandDto) {
		return this.departmentService.update(id, brandDto)
	}

	// @Authorized([UserType.ADMIN])
	@Delete("/:id")
	async delete(@Param("id") id: string) {
		return this.departmentService.delete(id)
	}
}
