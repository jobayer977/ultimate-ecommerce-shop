import * as bcrypt from "bcryptjs"
import * as jwt from "jsonwebtoken"

import { EntityManager, EntityRepository } from "typeorm"

import { CreateUserDto } from "../dto/create-user.dto"
import { Service } from "typedi"
import { User } from "../entities/user.entity"

@EntityRepository()
@Service()
export class UserRepository {
	constructor(private manager: EntityManager) {}
	async createUser(user: CreateUserDto) {
		const { password, phoneNumber } = user
		const salt = bcrypt.genSaltSync(10)
		const hashPassword = bcrypt.hashSync(password, salt)
		try {
			const newUser = new User()
			newUser.phoneNumber = phoneNumber
			newUser.password = hashPassword
			await this.manager.save(newUser)

			const token = jwt.sign({ id: newUser.id }, "secret25", {
				expiresIn: 86400,
			})

			return {
				auth: true,
				token,
			}
		} catch (error) {}
	}
}
