import { EntityRepository, Repository } from "typeorm"
import { paginate, paginationOptions } from "../../../@utils/paginate.util"

import { BadRequestError } from "routing-controllers"
import { BannerEntity } from "./../entities/banner.entity"
import { BannerFilterDto } from "../dtos/bannerFilter.dto"

@EntityRepository(BannerEntity)
export class BannersRepository extends Repository<BannerEntity> {
	async filter(bannerFilterDto: BannerFilterDto) {
		const {
			searchTerm,
			page,
			type,
			isFeatured,
			isActive,
			isPopular,
			isHot,
			isNew,
		} = bannerFilterDto
		console.log(bannerFilterDto)
		const pOption: any = paginationOptions(bannerFilterDto)
		const query = await this.createQueryBuilder()
		try {
			if (searchTerm) {
				query.where(`title ILIKE :searchTerm`, {
					searchTerm: `%${searchTerm}%`,
				})
			}
			if (type) {
				query.andWhere(`type = :type`, { type })
			}
			if (isFeatured) {
				query.andWhere(`isFeatured = :isFeatured`, {
					isFeatured: 0,
				})
			}
			if (isActive) {
				query.andWhere(`isActive = :isActive`, { isActive })
			}
			if (isPopular) {
				query.andWhere(`isPopular = :isPopular`, { isPopular })
			}
			if (isHot) {
				query.andWhere(`isHot = :isHot`, { isHot })
			}
			if (isNew) {
				query.andWhere(`isNew = :isNew`, { isNew })
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
