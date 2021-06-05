import { NotFoundError } from "routing-controllers"
import { Service } from "typedi"
import { InjectRepository } from "typeorm-typedi-extensions"
import {
	getSingleDataPlaceholder,
	updateDataPlaceholder,
} from "../../../@utils/responsePlaceholder.util"
import { CustomerDto } from "../dto/customer.dto"
import { CustomerRepository } from "./../repository/customer.repository"

@Service()
export class CustomerService {
	constructor(
		@InjectRepository()
		private customerRepository: CustomerRepository
	) {}

	//!Get One
	async findById(id: string) {
		try {
			const customer = await this.customerRepository.findOne({ id })
			delete customer.password
			if (!customer) {
				throw new NotFoundError(`Not Found`)
			}
			return getSingleDataPlaceholder(customer)
		} catch (error) {
			throw new NotFoundError("Not Found")
		}
	}

	async updateCustomer(id: string, customerDto: CustomerDto) {
		const customer = await this.customerRepository.findOne({ id })
		const updated = await this.customerRepository.save({
			...customer,
			...customerDto,
		})
		return updateDataPlaceholder(updated)
	}
}
