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
import { BaseAttributeFilterDto } from "../../../@base/dto/base-filter.dto"
import { ProductDto } from "./../dtos/product.dto"
import { ProductService } from "./../services/product.service"

@JsonController("products")
export class ProductController {
	private relations = ["brand", "category", "department"]
	private productService = Container.get(ProductService)

	@Post("")
	async create(@Body() productDto: ProductDto) {
		return this.productService.create(productDto, this.relations)
	}

	@Get("/filter")
	async filter(@QueryParams() baseFilterDto: BaseAttributeFilterDto) {
		return this.productService.filter(baseFilterDto, this.relations)
	}

	@Get("/:id")
	async findById(@Param("id") id: string) {
		return this.productService.findById(id, this.relations)
	}

	// @Authorized([UserType.ADMIN])
	@Put("/:id")
	async update(@Param("id") id: string, @Body() productDto: ProductDto) {
		return this.productService.update(id, productDto, this.relations)
	}

	// @Authorized([UserType.ADMIN])
	@Delete("/:id")
	async delete(@Param("id") id: string) {
		return this.productService.delete(id, this.relations)
	}
}
