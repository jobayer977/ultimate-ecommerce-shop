import {
	IsIn,
	IsNotEmpty,
	IsOptional,
	IsString,
	Matches,
} from "class-validator"

import { BD_PHONE_NUMBER_PATTERN } from "../../../@utils/regex"
import { UserTypes } from "./../enums/userType.enum"

export class UserDto {
	@IsNotEmpty()
	@Matches(BD_PHONE_NUMBER_PATTERN, {
		message: "Phone Number Must be Bangladeshi",
	})
	phoneNumber?: string

	@IsString()
	@IsOptional()
	password?: string

	@IsIn([UserTypes.ADMIN, UserTypes.CUSTOMER, UserTypes.VENDOR])
	type?: UserTypes
}
