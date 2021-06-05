import * as _ from "lodash"
import { NotFoundError } from "routing-controllers"
import { Service } from "typedi"
import { InjectRepository } from "typeorm-typedi-extensions"
import { CustomerRepository } from "../../customer/repository/customer.repository"
import { UserDto } from "../../user/dto/user.dto"
import { User } from "../../user/entities/user.entity"
import { UserRepository } from "../../user/repository/user.repository"
import { IFAuthSuccessResponse } from "../interfaces/auth-admin.interface"
import { Customer } from "./../../customer/entities/customer.entity"
import { BcryptService } from "./byript.service"
import { JWTService } from "./jwt.service"

@Service()
export class AuthRegisterService {
	constructor(
		@InjectRepository()
		private userRepository: UserRepository,
		@InjectRepository()
		private customerRepository: CustomerRepository,
		private jwtService: JWTService,
		private bcryptService: BcryptService
	) {}

	//! Admin
	async admin(user: UserDto): Promise<IFAuthSuccessResponse> {
		const { password, phoneNumber } = user

		try {
			//*Get User From DB
			const user = await this.userRepository.findOne({ phoneNumber })

			//* Verify User
			if (_.isEmpty(user) === false) {
				throw new NotFoundError(`User Already Exist with ${phoneNumber} number`)
			}

			//* Hash Password
			const hashPassword = await this.bcryptService.hashString(password)

			const newUser = new User()
			newUser.phoneNumber = phoneNumber
			newUser.password = hashPassword
			await this.userRepository.save(newUser)
			const token = await this.jwtService.makeAccessToken({
				id: newUser?.id,
			})
			return {
				auth: true,
				token,
			}
		} catch (error) {
			throw new NotFoundError(`User Already Exist`)
		}
	}

	//! Customer
	async customer(user: UserDto): Promise<IFAuthSuccessResponse> {
		const { password, phoneNumber } = user

		try {
			//*Get User From DB
			const user = await this.customerRepository.findOne({ phoneNumber })

			//* Verify User
			if (_.isEmpty(user) === false) {
				throw new NotFoundError(`User Already Exist with ${phoneNumber} number`)
			}

			//* Hash Password
			const hashPassword = await this.bcryptService.hashString(password)

			const newCustomer = new Customer()
			newCustomer.phoneNumber = phoneNumber
			newCustomer.password = hashPassword
			await this.customerRepository.save(newCustomer)
			const token = await this.jwtService.makeAccessToken({
				id: newCustomer?.id,
			})
			return {
				auth: true,
				token,
			}
		} catch (error) {
			throw new NotFoundError(`User Already Exist`)
		}
	}
}
