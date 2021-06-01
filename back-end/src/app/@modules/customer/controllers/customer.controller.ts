import {
	Body,
	Get,
	HttpCode,
	JsonController,
	Param,
	Put,
} from "routing-controllers"
import { ResponseSchema } from "routing-controllers-openapi"
import { Container } from "typeorm-typedi-extensions"
import { CustomerDto } from "../dto/customer.dto"
import { CustomerService } from "../services/customer.service"

@JsonController("customer")
export class CustomerController {
	private customerService = Container.get(CustomerService)

	@HttpCode(201)
	@Get("/:id")
	async findById(@Param("id") id: string) {
		return this.customerService.findById(id)
	}

	@HttpCode(201)
	@Put("/:id")
	@ResponseSchema(CustomerDto)
	async updateCustomer(
		@Param("id") id: string,
		@Body() customerDto: CustomerDto
	) {
		return this.customerService.updateCustomer(id, customerDto)
	}
}
