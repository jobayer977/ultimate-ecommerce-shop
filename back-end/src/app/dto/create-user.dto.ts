import { IsString } from "class-validator"

export class CreateUserDto {
	@IsString()
	phoneNumber?: string

	@IsString()
	password?: string

	@IsString()
	firstName?: string

	@IsString()
	lastName?: string

	@IsString()
	gender?: string

	@IsString()
	email?: string
}
