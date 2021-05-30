import { Body, JsonController, Post } from "routing-controllers"
import { getCustomRepository } from "typeorm"
import { CreateUserDto } from "../dto/create-user.dto"
import { UserRepository } from "../repository/user.repository"

@JsonController("user")
export class UserController {
	private userRepository = getCustomRepository(UserRepository)

	@Post("/")
	async create(@Body() user: CreateUserDto) {
		return await this.userRepository.createUser(user)
	}
}
