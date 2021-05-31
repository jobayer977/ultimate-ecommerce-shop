import "reflect-metadata"
import { Body, JsonController, Post } from "routing-controllers"
import Container from "typedi"
import { ForgetPasswordCheckDto } from "../dto/forgetPassword.dto"
import { AuthForgotPasswordService } from "./../services/auth-forgot-password.service"

@JsonController("auth/forgotPassword")
export class AuthForgotPasswordController {
	private authForgotPasswordService = Container.get(AuthForgotPasswordService)

	@Post("/sendOtp")
	async sendOtp(@Body() data: ForgetPasswordCheckDto) {
		return this.authForgotPasswordService.sendOtp(data)
	}
}
