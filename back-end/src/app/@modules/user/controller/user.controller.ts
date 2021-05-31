import {
	Body,
	Get,
	HttpCode,
	JsonController,
	Param,
	Put,
} from "routing-controllers"
import { Container } from "typedi"
import { UserDto } from "../dto/user.dto"
import { UserService } from "./../services/user.service"

@JsonController("user")
export class UserController {
	private userService = Container.get(UserService)

	@HttpCode(201)
	@Get("/:id")
	getOne(@Param("id") id: string) {
		return this.userService.getOne(id)
	}

	@HttpCode(201)
	@Put("/:id")
	updateOne(@Body() userDto: UserDto, @Param("id") id: string) {
		return this.userService.updateOne(id, userDto)
	}
}
