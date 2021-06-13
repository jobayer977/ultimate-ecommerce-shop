import { NotFoundError } from "routing-controllers"
import { Service } from "typedi"
import { InjectRepository } from "typeorm-typedi-extensions"
import {
	getSingleDataPlaceholder,
	updateDataPlaceholder,
} from "../../../@utils/responsePlaceholder.util"
import { userInfoRepository } from "../repository/user-info.repository"
import { UserRepository } from "./../repository/user.repository"

@Service()
export class UserInfoService {
	constructor(
		@InjectRepository()
		private userInfoRepository: userInfoRepository,
		@InjectRepository()
		private userRepository: UserRepository
	) {}

	//! Update current User info
	async updateCurrentUser(userProfileDto: any) {
		const { user } = userProfileDto
		delete userProfileDto?.user
		try {
			const userInfoForId = await this.userRepository.findOne(user, {
				relations: ["userInfo"],
			})
			await this.userInfoRepository.update(
				userInfoForId.userInfo.id,
				userProfileDto
			)
			const payload = await this.userInfoRepository.findOne({
				id: userInfoForId.userInfo.id,
			})
			return updateDataPlaceholder(payload)
		} catch (error) {
			throw new Error("Not Found")
		}
	}

	//! Get Current User info
	async getCurrentUserInfo(userId: string) {
		try {
			const user = await this.userRepository.findOne(userId, {
				relations: ["userInfo"],
			})
			return getSingleDataPlaceholder(user.userInfo)
		} catch (error) {
			throw new NotFoundError("Not Found")
		}
	}

	// //!Get One
	// async findById(id: string) {
	// 	try {
	// 		const customer = await this.userRepository.findOne({ id })
	// 		delete customer.password
	// 		if (!customer) {
	// 			throw new NotFoundError(`Not Found`)
	// 		}
	// 		return getSingleDataPlaceholder(customer)
	// 	} catch (error) {
	// 		throw new NotFoundError("Not Found")
	// 	}
	// }

	// async updateCustomer(id: string, customerDto: CustomerDto) {
	// 	const customer = await this.userRepository.findOne({ id })
	// 	const updated = await this.userRepository.save({
	// 		...customer,
	// 		...customerDto,
	// 	})
	// 	return updateDataPlaceholder(updated)
	// }
}
