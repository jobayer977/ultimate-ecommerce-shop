import { Service } from "typedi"
import { InjectRepository } from "typeorm-typedi-extensions"
import { updateDataPlaceholder } from "../../../@utils/responsePlaceholder.util"
import { userInfoRepository } from "../repository/user-profile.repository"
import { UserRepository } from "./../repository/user.repository"

@Service()
export class UserInfoService {
	constructor(
		@InjectRepository()
		private userInfoRepository: userInfoRepository,
		@InjectRepository()
		private userRepository: UserRepository
	) {}

	async updateUserInfo(userProfileDto: any) {
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
			throw new Error(error)
		}
	}
}
