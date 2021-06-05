import { EntityRepository, Repository } from "typeorm"
import { paginate, paginationOptions } from "../../../@utils/paginate.util"

import { BadRequestError } from "routing-controllers"
import { BaseFilterDto } from "../../../@base/dto/base-filter.dto"
import { DepartmentEntity } from "./../entities/department.entity"

@EntityRepository(DepartmentEntity)
export class DepartmentRepository extends Repository<DepartmentEntity> {
	async filter(baseFilterDto: BaseFilterDto, relations: string[]) {
		const { searchTerm, page } = baseFilterDto
		const pOption: any = paginationOptions(baseFilterDto)
		const query = this.createQueryBuilder("department").leftJoinAndSelect(
			"department.categories",
			"category"
		)
		try {
			if (searchTerm) {
				query.where(
					`department.name ILIKE :searchTerm OR department.slug ILIKE :searchTerm`,
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
			throw new BadRequestError(error.message)
		}
	}
}
