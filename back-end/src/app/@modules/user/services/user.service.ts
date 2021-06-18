import { NotFoundError } from "routing-controllers"
import { Service } from "typedi"
import { InjectRepository } from "typeorm-typedi-extensions"
import {
	deleteDataPlaceholder,
	getSingleDataPlaceholder,
	updateDataPlaceholder,
} from "../../../@utils/responsePlaceholder.util"
import { UserFilterDto } from "../dto/user-filter.dto"
import { UserChangePhoneNumberDto } from "../dto/userChangePhoneNumber.dto"
import { userInfoRepository } from "./../repository/user-info.repository"
import { UserRepository } from "./../repository/user.repository"

@Service()
export class UserService {
	constructor(
		@InjectRepository()
		private userRepository: UserRepository,
		@InjectRepository()
		private userInfoRepository: userInfoRepository
	) {}

	//! Filter
	async filter(userFilterDto: UserFilterDto, relations: string[]) {
		return this.userRepository.filter(userFilterDto, relations)
	}

	//!Get One
	async findById(id: string) {
		try {
			const user = await this.userRepository.findOne({ id })
			delete user.password
			if (!user) {
				throw new NotFoundError(`User Not Exist`)
			}
			return getSingleDataPlaceholder(user)
		} catch (error) {
			throw new NotFoundError(`User Not Exist`)
		}
	}

	//!Update Phone Number
	async changePhoneNumber(
		id: string,
		userChangePhoneNumberDto: UserChangePhoneNumberDto
	) {
		const { newPhoneNumber, oldPhoneNumber } = userChangePhoneNumberDto
		try {
			const userForId = await this.userRepository.findOne(
				{
					id,
					phoneNumber: oldPhoneNumber,
				},
				{ relations: ["userInfo"] }
			)
			if (!userForId) throw new NotFoundError("Not Found")
			//* Update in user table
			await this.userRepository.update(id, {
				phoneNumber: newPhoneNumber,
			})
			//* Update in userInfo table
			await this.userInfoRepository.update(userForId.userInfo.id, {
				phoneNumber: newPhoneNumber,
			})

			//* Find for payload
			const payload = await this.userRepository.findOne({
				id,
				phoneNumber: newPhoneNumber,
			})
			delete payload.password
			return updateDataPlaceholder(payload)
		} catch (error) {
			throw new Error(error.message)
		}
	}

	//! Delete User
	async deleteUser(id: string) {
		console.log(id)
		try {
			const user = await this.userRepository.findOne(
				{ id },
				{ relations: ["userInfo"] }
			)
			console.log(user)
			await this.userRepository.delete(user?.id)
			await this.userInfoRepository.delete(user?.userInfo.id)
			delete user.password
			delete user.userInfo
			return deleteDataPlaceholder(user)
		} catch (error) {
			throw new NotFoundError(`Not Found`)
		}
	}
}
