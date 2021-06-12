import { EntityRepository, Repository } from "typeorm"
import { paginate, paginationOptions } from "../../../@utils/paginate.util"

import { BadRequestError } from "routing-controllers"
import { BaseAttributeFilterDto } from "../../../@base/dto/base-filter.dto"
import { CategoryEntity } from "../entities/category.entity"

@EntityRepository(CategoryEntity)
export class CategoryRepository extends Repository<CategoryEntity> {
	async filter(baseFilterDto: BaseAttributeFilterDto) {
		const { searchTerm, page } = baseFilterDto
		const pOption: any = paginationOptions(baseFilterDto)
		const query = this.createQueryBuilder("category").leftJoinAndSelect(
			"category.department",
			"department"
		)
		try {
			if (searchTerm) {
				query.where(
					`category.name ILIKE :searchTerm OR category.slug ILIKE :searchTerm`,
					{
						searchTerm: `%${searchTerm}%`,
					}
				)
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
