import "reflect-metadata"
import { Body, HttpCode, JsonController, Post } from "routing-controllers"
import Container from "typedi"
import { AuthCredentialDto } from "../dto/auth-credentials.dto"
import { IFAuthSuccessResponse } from "../interfaces/auth-admin.interface"
import { AuthRegisterService } from "../services/auth-register.service"

@JsonController("auth/register")
export class AuthRegisterController {
	private authRegisterService = Container.get(AuthRegisterService)

	@Post("/admin")
	@HttpCode(201)
	async admin(@Body() user: AuthCredentialDto): Promise<IFAuthSuccessResponse> {
		return this.authRegisterService.admin(user)
	}
	@Post("/customer")
	@HttpCode(201)
	async customer(
		@Body() user: AuthCredentialDto
	): Promise<IFAuthSuccessResponse> {
		return this.authRegisterService.customer(user)
	}
}
