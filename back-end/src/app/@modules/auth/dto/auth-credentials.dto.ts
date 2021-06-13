import { IsNotEmpty, Matches } from "class-validator"

import { BD_PHONE_NUMBER_PATTERN } from "../../../@utils/regex"

export class AuthCredentialDto {
	@IsNotEmpty()
	@Matches(BD_PHONE_NUMBER_PATTERN, {
		message: "Phone Number Must be Bangladeshi",
	})
	phoneNumber: string

	@IsNotEmpty()
	password: string
}
