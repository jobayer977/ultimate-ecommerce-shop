import { IsNotEmpty, Matches } from "class-validator"

import { BD_PHONE_NUMBER_PATTERN } from "../../../@utils/regex"

export class UserChangePhoneNumberDto {
	@IsNotEmpty()
	@Matches(BD_PHONE_NUMBER_PATTERN, {
		message: "Phone Number Must be Bangladeshi",
	})
	oldPhoneNumber: string
	@IsNotEmpty()
	@Matches(BD_PHONE_NUMBER_PATTERN, {
		message: "Phone Number Must be Bangladeshi",
	})
	newPhoneNumber: string
}
