import * as _ from "lodash"
import { NotFoundError } from "routing-controllers"
import { Service } from "typedi"
import { InjectRepository } from "typeorm-typedi-extensions"
import { User } from "../../user/entities/user.entity"
import { UserTypes } from "../../user/enums/userType.enum"
import { UserRepository } from "../../user/repository/user.repository"
import { AuthCredentialDto } from "../dto/auth-credentials.dto"
import { BcryptService } from "./byript.service"
import { JWTService } from "./jwt.service"
@Service()
export class AuthLoginService {
	constructor(
		@InjectRepository()
		private userRepository: UserRepository,
		private jwtService: JWTService,
		private bcryptService: BcryptService
	) {}

	//! Admin
	async admin(credential: AuthCredentialDto) {
		const { password, phoneNumber } = credential
		try {
			//* Get User From DB
			const user: any = await this.userRepository.findOne({
				phoneNumber,
				type: UserTypes.ADMIN,
			})
			//* Verify User
			if (_.isEmpty(user)) {
				throw new NotFoundError(`User Not Found with ${phoneNumber} number`)
			}

			//*Verify Password
			const isPasswordValid = await this.bcryptService.compareHash(
				password,
				user.password
			)
			if (isPasswordValid === false) {
				throw new NotFoundError(`Password Not matched`)
			}

			//* Generated Access Token
			const token = await this.jwtService.makeAccessToken({ id: user.id })
			return {
				auth: true,
				token,
			}
		} catch (error) {
			throw new Error(error)
		}
	}

	//! Customer
	async customer(credential: AuthCredentialDto) {
		const { password, phoneNumber } = credential

		//* Get User From DB
		const user: User = await this.userRepository.findOne({
			phoneNumber,
			type: UserTypes.CUSTOMER,
		})

		//* Verify User
		if (_.isEmpty(user)) {
			throw new NotFoundError(`User Not Found with ${phoneNumber} number`)
		}

		//*Verify Password
		const isPasswordValid = await this.bcryptService.compareHash(
			password,
			user.password
		)
		if (isPasswordValid === false) {
			throw new NotFoundError(`Password Not matched`)
		}

		//* Generated Access Token
		const token = await this.jwtService.makeAccessToken({ id: user.id })
		return {
			auth: true,
			token,
		}
	}
}
