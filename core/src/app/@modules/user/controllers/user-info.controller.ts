import {
	Body,
	CurrentUser,
	Get,
	HttpCode,
	JsonController,
	NotFoundError,
	Put,
} from "routing-controllers"
import { Container } from "typedi"
import { UserInfoDto } from "../dto/user-info.dto"
import { UserInfoService } from "../services/user-info.service"
import { User } from "./../entities/user.entity"

@JsonController("userInfo")
export class UserInfoController {
	private userProfileService = Container.get(UserInfoService)

	@HttpCode(202)
	@Put("/current")
	updateCurrentUser(
		@CurrentUser() user: User,
		@Body() userProfileDto: UserInfoDto
	) {
		return this.userProfileService.updateCurrentUser({
			...userProfileDto,
			user: user.id,
		})
	}

	@HttpCode(202)
	@Get("/current")
	currentUserInfo(@CurrentUser() user: User) {
		try {
			return this.userProfileService.getCurrentUserInfo(user.id)
		} catch (error) {
			throw new NotFoundError("Not Found")
		}
	}
}
