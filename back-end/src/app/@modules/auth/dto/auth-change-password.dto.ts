import { IsNotEmpty } from "class-validator"

export class AuthChangePasswordDto {
	@IsNotEmpty()
	id: string

	@IsNotEmpty()
	oldPassword: string

	@IsNotEmpty()
	newPassword: string
}
