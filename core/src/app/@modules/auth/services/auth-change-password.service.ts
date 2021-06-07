import * as _ from "lodash"
import { NotFoundError } from "routing-controllers"
import { Service } from "typedi"
import { InjectRepository } from "typeorm-typedi-extensions"
import { successPlaceholder } from "../../../../app/@utils/responsePlaceholder.util"
import { UserTypes } from "../../user/enums/userType.enum"
import { UserRepository } from "./../../user/repository/user.repository"
import { AuthChangePasswordDto } from "./../dto/auth-change-password.dto"
import { BcryptService } from "./byript.service"

@Service()
export class AuthChangePasswordService {
	constructor(
		@InjectRepository()
		private userRepository: UserRepository,
		private bcryptService: BcryptService
	) {}

	//! Admin
	async admin(data: AuthChangePasswordDto): Promise<any> {
		const { newPassword, id, oldPassword } = data
		//*Get User From DB
		const user = await this.userRepository.findOne({
			id,
			type: UserTypes.ADMIN,
		})

		//* Verify
		if (_.isEmpty(user)) {
			throw new NotFoundError(`User Not Found `)
		}
		const isPasswordValid = await this.bcryptService.compareHash(
			oldPassword,
			user.password
		)
		if (isPasswordValid === false) {
			throw new NotFoundError(`Password Not matched`)
		}

		//* Hash New Password
		const newHashPassword = await this.bcryptService.hashString(newPassword)

		//* Update new Password
		await this.userRepository.update(id, {
			password: newHashPassword,
		})
		return successPlaceholder("Password Change Success")
	}

	//! Customer
	async customer(data: AuthChangePasswordDto): Promise<any> {
		const { newPassword, id, oldPassword } = data
		//*Get Customer From DB
		const customer = await this.userRepository.findOne({
			id,
			type: UserTypes.CUSTOMER,
		})

		//* Verify
		if (_.isEmpty(customer)) {
			throw new NotFoundError(`User Not Found `)
		}
		const isPasswordValid = await this.bcryptService.compareHash(
			oldPassword,
			customer.password
		)
		if (isPasswordValid === false) {
			throw new NotFoundError(`Password Not matched`)
		}

		//* Hash New Password
		const newHashPassword = await this.bcryptService.hashString(newPassword)

		//* Update new Password
		await this.userRepository.update(id, {
			password: newHashPassword,
		})
		return successPlaceholder("Password Change Success")
	}
}
