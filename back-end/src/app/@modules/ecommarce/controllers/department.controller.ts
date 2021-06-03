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
import { DepartmentDto } from "./../dtos/department.dto"
import { DepartmentService } from "./../services/department.service"

@JsonController("department")
export class DepartmentController {
	private relations: string[] = ["categories"]
	private departmentService = Container.get(DepartmentService)

	// @Authorized([UserType.ADMIN])
	@Post("")
	async create(@Body() departmentDto: DepartmentDto) {
		return this.departmentService.create(departmentDto)
	}

	@Get("/filter")
	async filter(@QueryParams() baseFilterDto: BaseFilterDto) {
		return this.departmentService.filter(baseFilterDto, this.relations)
	}

	@Get("/:id")
	async findById(@Param("id") id: string) {
		return this.departmentService.findById(id, this.relations)
	}

	// @Authorized([UserType.ADMIN])
	@Put("/:id")
	async update(@Param("id") id: string, @Body() departmentDto: DepartmentDto) {
		return this.departmentService.update(id, departmentDto, this.relations)
	}

	// @Authorized([UserType.ADMIN])
	@Delete("/:id")
	async delete(@Param("id") id: string) {
		return this.departmentService.delete(id, this.relations)
	}
}
