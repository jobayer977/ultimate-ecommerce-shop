import {
	Authorized,
	Body,
	CurrentUser,
	Delete,
	Get,
	HttpCode,
	JsonController,
	Param,
	Put,
	QueryParams,
} from "routing-controllers"
import { OpenAPI } from "routing-controllers-openapi"
import { Container } from "typedi"
import { UserTypes } from "../enums/userType.enum"
import { UserService } from "../services/user.service"
import { UserFilterDto } from "./../dto/user-filter.dto"
import { UserChangePhoneNumberDto } from "./../dto/userChangePhoneNumber.dto"
import { User } from "./../entities/user.entity"

@JsonController("user")
export class UserController {
	private userService = Container.get(UserService)
	private readonly relations = ["userInfo"]
	@Get("/filter")
	filter(@QueryParams() userFilterDto: UserFilterDto) {
		return this.userService.filter(userFilterDto, this.relations)
	}

	@HttpCode(201)
	@Get("/:id")
	findById(@Param("id") id: string) {
		return this.userService.findById(id)
	}

	@HttpCode(201)
	@Put("/changePhoneNumber")
	changePhoneNumber(
		@CurrentUser() user: User,
		@Body() userChangePhoneNumberDto: UserChangePhoneNumberDto
	) {
		return this.userService.changePhoneNumber(user.id, userChangePhoneNumberDto)
	}

	@Authorized([UserTypes.ADMIN])
	@OpenAPI({ description: "Protected By Admin User only" })
	@Delete("/:id")
	deleteUser(@Param("id") id: string) {
		try {
			return this.userService.deleteUser(id)
		} catch (error) {}
	}
}
