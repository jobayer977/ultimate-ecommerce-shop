import { EntityRepository, ILike, Repository } from "typeorm"
import { paginate, paginationOptions } from "../../../@utils/paginate.util"

import { BaseFilterDto } from "../../../@base/dto/base-filter.dto"
import { ProductEntity } from "./../entities/product.entity"

@EntityRepository(ProductEntity)
export class ProductRepository extends Repository<ProductEntity> {
	async filter(baseFilterDto: BaseFilterDto, relations: string[]) {
		const { searchTerm, isFeatured, isActive, isHot, isNew, isPopular } =
			baseFilterDto
		const pOption: any = paginationOptions(baseFilterDto)
		const whereQuery: any = {}
		if (isFeatured !== undefined) {
			whereQuery.isFeatured = isFeatured
		}
		if (isActive !== undefined) {
			whereQuery.isActive = isActive
		}
		if (isHot !== undefined) {
			whereQuery.isHot = isHot
		}
		if (isNew !== undefined) {
			whereQuery.isNew = isNew
		}
		if (isPopular !== undefined) {
			whereQuery.isPopular = isPopular
		}
		if (String(searchTerm).length > 0) {
			const payload = await this.findAndCount({
				// relations,
				order: {
					updatedAt: "DESC",
				},
				take: pOption.take,
				skip: pOption.skip,
				where: { name: ILike(`%${searchTerm}%`), ...whereQuery },
			})
			return paginate(baseFilterDto, payload)
		} else {
			const payload = await this.findAndCount({
				// relations,
				order: {
					updatedAt: "DESC",
				},
				take: pOption.take,
				skip: pOption.skip,
				where: whereQuery,
			})
			return paginate(baseFilterDto, payload)
		}
	}
}
