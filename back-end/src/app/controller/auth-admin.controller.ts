import "reflect-metadata"
import { Body, JsonController, Post } from "routing-controllers"
import { getCustomRepository } from "typeorm"
import { AuthCredentialDto } from "../dto/auth-credentials.dto"
import { UserRepository } from "../repository/user.repository"

@JsonController("auth/admin")
export class AuthController {
	private userRepository = getCustomRepository(UserRepository)

	@Post("/signUp")
	signUp(@Body() user: AuthCredentialDto) {
		return this.userRepository.createUser(user)
	}
}
