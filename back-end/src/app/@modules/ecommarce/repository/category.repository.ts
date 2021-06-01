import { EntityRepository, Repository } from "typeorm"
import { paginate, paginationOptions } from "../../../@utils/paginate.util"

import { BadRequestError } from "routing-controllers"
import { BaseFilterDto } from "../../../@base/base-filter.dto"
import { CategoryEntity } from "../entities/category.entity"

@EntityRepository(CategoryEntity)
export class CategoryRepository extends Repository<CategoryEntity> {
	async filter(baseFilterDto: BaseFilterDto) {
		const { searchTerm, page } = baseFilterDto
		const pOption: any = paginationOptions(baseFilterDto)
		const query = this.createQueryBuilder()
		try {
			if (searchTerm) {
				query.where(`name ILIKE :searchTerm OR slug ILIKE :searchTerm`, {
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
