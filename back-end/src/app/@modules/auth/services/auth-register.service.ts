import * as _ from "lodash"
import { NotFoundError } from "routing-controllers"
import { Service } from "typedi"
import { InjectRepository } from "typeorm-typedi-extensions"
import { UserDto } from "../../user/dto/user.dto"
import { User } from "../../user/entities/user.entity"
import { UserTypes } from "../../user/enums/userType.enum"
import { userInfoRepository } from "../../user/repository/user-info.repository"
import { UserRepository } from "../../user/repository/user.repository"
import { IFAuthSuccessResponse } from "../interfaces/auth-admin.interface"
import { BcryptService } from "./byript.service"
import { JWTService } from "./jwt.service"

@Service()
export class AuthRegisterService {
	constructor(
		@InjectRepository()
		private userRepository: UserRepository,
		@InjectRepository()
		private userProfileRepository: userInfoRepository,
		private jwtService: JWTService,
		private bcryptService: BcryptService
	) {}

	//! Admin
	async admin(user: UserDto): Promise<IFAuthSuccessResponse> {
		const { password, phoneNumber } = user

		try {
			//*Get User From DB
			const user = await this.userRepository.findOne({
				phoneNumber,
				type: UserTypes.ADMIN,
			})
			console.log(user)
			//* Verify User
			if (_.isEmpty(user) === false) {
				throw new NotFoundError(`User Already Exist with ${phoneNumber} number`)
			}

			//* Hash Password
			const hashPassword = await this.bcryptService.hashString(password)
			const userInfo = await this.userProfileRepository.save({ phoneNumber })
			const newUser = new User()
			newUser.phoneNumber = phoneNumber
			newUser.password = hashPassword
			newUser.userInfo = userInfo
			newUser.type = UserTypes.ADMIN
			await this.userRepository.save(newUser)
			const token = await this.jwtService.makeAccessToken({
				id: newUser?.id,
			})
			return {
				auth: true,
				token,
			}
		} catch (error) {
			throw new NotFoundError(error.message)
		}
	}

	//! Customer
	async customer(user: UserDto): Promise<IFAuthSuccessResponse> {
		const { password, phoneNumber } = user

		try {
			//*Get User From DB
			const user = await this.userRepository.findOne({ phoneNumber })
			console.log(user)
			//* Verify User
			if (_.isEmpty(user) === false) {
				throw new NotFoundError(`User Already Exist with ${phoneNumber} number`)
			}

			//* Hash Password
			const hashPassword = await this.bcryptService.hashString(password)
			const userInfo = await this.userProfileRepository.save({ phoneNumber })
			const newUser = new User()
			newUser.phoneNumber = phoneNumber
			newUser.password = hashPassword
			newUser.userInfo = userInfo
			newUser.type = UserTypes.CUSTOMER
			await this.userRepository.save(newUser)
			const token = await this.jwtService.makeAccessToken({
				id: newUser?.id,
			})
			return {
				auth: true,
				token,
			}
		} catch (error) {
			throw new NotFoundError(error)
		}
	}
}
