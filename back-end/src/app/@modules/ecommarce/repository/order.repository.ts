import { EntityRepository, Repository } from "typeorm"
import { paginate, paginationOptions } from "../../../@utils/paginate.util"

import { BadRequestError } from "routing-controllers"
import { BaseFilterDto } from "./../../../@base/dto/base-filter.dto"
import { Order } from "./../entities/order.entity"

@EntityRepository(Order)
export class OrderRepository extends Repository<Order> {
	async filter(baseFilterDto: BaseFilterDto) {
		const { searchTerm, page } = baseFilterDto
		console.log(searchTerm)
		const pOption: any = paginationOptions(baseFilterDto)
		const query = this.createQueryBuilder("orders").leftJoinAndSelect(
			"orders.products",
			"products"
		)
		try {
			if (searchTerm) {
				query.where(`orders.code ILIKE :searchTerm `, {
					searchTerm: `%${searchTerm}%`,
				})
			}
			const result = await query
				.take(pOption.take)
				.skip(pOption.skip)
				.getManyAndCount()
			pOption.page = page

			return paginate(pOption, result)
		} catch (error) {
			throw new BadRequestError(error)
		}
	}
}
