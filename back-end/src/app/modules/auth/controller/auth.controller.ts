import "reflect-metadata"
import { Body, JsonController, Post } from "routing-controllers"

@JsonController("auth/admin")
export class AuthController {
	@Post("/")
	signUp(@Body() user: any) {
		console.log(user)
		return "Saving user..."
	}
}
