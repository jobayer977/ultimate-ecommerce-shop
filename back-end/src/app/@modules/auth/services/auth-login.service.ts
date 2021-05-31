import * as _ from "lodash"
import { NotFoundError } from "routing-controllers"
import { Service } from "typedi"
import { InjectRepository } from "typeorm-typedi-extensions"
import { CustomerRepository } from "../../customer/repository/customer.repository"
import { User } from "../../user/entities/user.entity"
import { UserRepository } from "../../user/repository/user.repository"
import { AuthCredentialDto } from "../dto/auth-credentials.dto"
import { BcryptService } from "./byript.service"
import { JWTService } from "./jwt.service"
@Service()
export class AuthLoginService {
	constructor(
		@InjectRepository()
		private userRepository: UserRepository,
		@InjectRepository()
		private customerRepository: CustomerRepository,
		private jwtService: JWTService,
		private bcryptService: BcryptService
	) {}

	//! Admin
	async admin(credential: AuthCredentialDto) {
		const { password, phoneNumber } = credential

		//* Get User From DB
		const user: User = await this.userRepository.findOne({ phoneNumber })

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

	//! Customer
	async customer(credential: AuthCredentialDto) {
		const { password, phoneNumber } = credential
		console.log(credential)
		//* Get User From DB
		const customer = await this.customerRepository.findOne({ phoneNumber })
		console.log(
			customer,
			9999999999999999999999999999999999999999999999999999999999
		)
		//* Verify User
		if (_.isEmpty(customer)) {
			throw new NotFoundError(`User Not Found with ${phoneNumber} number`)
		}

		//*Verify Password
		const isPasswordValid = await this.bcryptService.compareHash(
			password,
			customer.password
		)
		if (isPasswordValid === false) {
			throw new NotFoundError(`Password Not matched`)
		}

		//* Generated Access Token
		const token = await this.jwtService.makeAccessToken({ id: customer.id })
		return {
			auth: true,
			token,
		}
	}
}
