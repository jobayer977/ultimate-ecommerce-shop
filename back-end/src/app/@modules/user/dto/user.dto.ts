import { IsOptional, IsString } from "class-validator"

export class UserDto {
	@IsString()
	phoneNumber?: string

	@IsString()
	@IsOptional()
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
