import {
	Body,
	CurrentUser,
	HttpCode,
	JsonController,
	Post,
} from "routing-controllers"
import { Container } from "typedi"
import { UserInfoDto } from "../dto/user-info.dto"
import { UserInfoService } from "../services/user-info.service"
import { User } from "./../entities/user.entity"

@JsonController("userInfo")
export class UserInfoController {
	private userProfileService = Container.get(UserInfoService)

	@HttpCode(202)
	@Post("")
	create(@CurrentUser() user: User, @Body() userProfileDto: UserInfoDto) {
		return this.userProfileService.updateUserInfo({
			...userProfileDto,
			user: user.id,
		})
	}
}
