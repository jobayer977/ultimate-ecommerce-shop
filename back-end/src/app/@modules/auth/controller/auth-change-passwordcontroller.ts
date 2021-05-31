import "reflect-metadata"
import {
	Body,
	HttpCode,
	JsonController,
	OnUndefined,
	Post,
} from "routing-controllers"
import Container from "typedi"
import { AuthChangePasswordDto } from "./../dto/auth-change-password.dto"
import { AuthChangePasswordService } from "./../services/auth-change-password.service"

@JsonController("auth/changePassword")
export class AuthChangePasswordController {
	private authChangePasswordService = Container.get(AuthChangePasswordService)

	@HttpCode(201)
	@OnUndefined(404)
	@Post("/admin")
	async admin(@Body() data: AuthChangePasswordDto): Promise<any> {
		return this.authChangePasswordService.admin(data)
	}

	@HttpCode(201)
	@OnUndefined(404)
	@Post("/customer")
	async customer(@Body() data: AuthChangePasswordDto): Promise<any> {
		return this.authChangePasswordService.customer(data)
	}
}
