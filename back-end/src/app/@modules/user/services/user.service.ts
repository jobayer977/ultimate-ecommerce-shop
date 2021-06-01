import { NotFoundError } from "routing-controllers"
import { Service } from "typedi"
import { InjectRepository } from "typeorm-typedi-extensions"
import { updateDataPlaceholder } from "../../../@utils/responsePlaceholder.util"
import { UserDto } from "./../dto/user.dto"
import { UserRepository } from "./../repository/user.repository"

@Service()
export class UserService {
	constructor(
		@InjectRepository()
		private userRepository: UserRepository
	) {}

	//!Get One
	async getOne(id: string) {
		try {
			const user = await this.userRepository.findOne({ id })
			delete user.password
			if (!user) {
				throw new NotFoundError(`User Not Exist`)
			}
			return user
		} catch (error) {
			throw new NotFoundError(`User Not Exist`)
		}
	}

	//!Details
	async updateOne(id: string, userDto: UserDto) {
		const user = await this.getOne(id)
		const res = await this.userRepository.save({ ...user, ...userDto })
		return updateDataPlaceholder(res)
	}
}
