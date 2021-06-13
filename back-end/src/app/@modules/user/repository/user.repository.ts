import { EntityRepository, ILike, Repository } from "typeorm"
import { paginate, paginationOptions } from "../../../@utils/paginate.util"

import { User } from "../entities/user.entity"
import { UserFilterDto } from "./../dto/user-filter.dto"

@EntityRepository(User)
export class UserRepository extends Repository<User> {
	async filter(userFilterDto: UserFilterDto, relations: string[]) {
		const { searchTerm, type } = userFilterDto
		const pOption: any = paginationOptions(userFilterDto)
		const whereQuery: any = {}
		if (type !== undefined) {
			whereQuery.type = type
		}

		if (String(searchTerm).length > 0) {
			const payload = await this.findAndCount({
				relations,
				order: {
					updatedAt: "DESC",
				},
				take: pOption.take,
				skip: pOption.skip,
				where: { phoneNumber: ILike(`%${searchTerm}%`), ...whereQuery },
			})
			return paginate(userFilterDto, payload)
		} else {
			const payload = await this.findAndCount({
				relations,
				order: {
					updatedAt: "DESC",
				},
				take: pOption.take,
				skip: pOption.skip,
				where: whereQuery,
			})
			return paginate(userFilterDto, payload)
		}
	}
}
