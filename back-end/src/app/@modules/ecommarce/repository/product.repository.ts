import { EntityRepository, Repository } from "typeorm"
import { paginate, paginationOptions } from "../../../@utils/paginate.util"

import { BadRequestError } from "routing-controllers"
import { BaseFilterDto } from "../../../@base/dto/base-filter.dto"
import { ProductEntity } from "./../entities/product.entity"

@EntityRepository(ProductEntity)
export class ProductRepository extends Repository<ProductEntity> {
	async filter(baseFilterDto: BaseFilterDto) {
		const { searchTerm, page } = baseFilterDto
		const pOption: any = paginationOptions(baseFilterDto)
		const query = this.createQueryBuilder()
		try {
			if (searchTerm) {
				query.where(`name ILIKE :searchTerm`, {
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
			throw new BadRequestError(error.message)
		}
	}
}
