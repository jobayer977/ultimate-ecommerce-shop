import { IsNotEmpty } from "class-validator"

export class AuthCredentialDto {
	@IsNotEmpty()
	phoneNumber: string

	@IsNotEmpty()
	password: string
}
