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
import { Container } from "typedi"
import { BaseFilterDto } from "../../../@base/dto/base-filter.dto"
import { ProductDto } from "./../dtos/product.dto"
import { ProductService } from "./../services/product.service"

@JsonController("products")
export class ProductController {
	private productService = Container.get(ProductService)

	@Post("")
	async create(@Body() productDto: ProductDto) {
		return this.productService.create(productDto)
	}

	@Get("/filter")
	async filter(@QueryParams() baseFilterDto: BaseFilterDto) {
		return this.productService.filter(baseFilterDto)
	}

	@Get("/:id")
	async findById(@Param("id") id: string) {
		return this.productService.findById(id)
	}

	// @Authorized([UserType.ADMIN])
	@Put("/:id")
	async update(@Param("id") id: string, @Body() productDto: ProductDto) {
		return this.productService.update(id, productDto)
	}

	// @Authorized([UserType.ADMIN])
	@Delete("/:id")
	async delete(@Param("id") id: string) {
		return this.productService.delete(id)
	}
}
