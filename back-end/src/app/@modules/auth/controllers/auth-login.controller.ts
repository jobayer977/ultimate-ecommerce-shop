import "reflect-metadata"
import { Body, HttpCode, JsonController, Post } from "routing-controllers"
import Container from "typedi"
import { AuthCredentialDto } from "../dto/auth-credentials.dto"
import { AuthLoginService } from "../services/auth-login.service"

@JsonController("auth/login")
export class AuthLoginController {
	private authLoginService = Container.get(AuthLoginService)

	@HttpCode(201)
	@Post("/admin")
	async admin(@Body() user: AuthCredentialDto) {
		try {
			return await this.authLoginService.admin(user)
		} catch (error) {
			throw new Error(error)
		}
	}
	@HttpCode(201)
	@Post("/customer")
	async customer(@Body() user: AuthCredentialDto) {
		return await this.authLoginService.customer(user)
	}
}
