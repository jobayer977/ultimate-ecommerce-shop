import { EntityRepository, Repository } from "typeorm"
import { paginate, paginationOptions } from "../../../@utils/paginate.util"

import { BadRequestError } from "routing-controllers"
import { Order } from "./../entities/order.entity"
import { OrderFilterDto } from "../dtos/orderFilter.dto"

@EntityRepository(Order)
export class OrderRepository extends Repository<Order> {
	async filter(orderFilterDto: OrderFilterDto) {
		const { searchTerm, page, user } = orderFilterDto
		const pOption: any = paginationOptions(orderFilterDto)
		const query = this.createQueryBuilder("orders")
			.leftJoinAndSelect("orders.products", "products")
			.leftJoinAndSelect("orders.user", "user")
		if (user) {
			query.where("orders.user = :userId", { userId: user })
		}
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
