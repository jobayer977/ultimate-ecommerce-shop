import {
	IsEmail,
	IsIn,
	IsNotEmpty,
	IsOptional,
	IsString,
} from "class-validator"

import { Gender } from "../../../@enums/index"

export class UserInfoDto {
	@IsString({ message: `$value Must be string.` })
	firstName?: string

	@IsString({ message: `$value Must be string.` })
	lastName?: string

	@IsString({ message: `$value Must be string.` })
	city?: string

	@IsString({ message: `$value Must be string.` })
	country?: string

	@IsString({ message: `$value Must be string.` })
	@IsOptional()
	birthDate?: string

	@IsEmail()
	email: string

	@IsNotEmpty({ message: `$Property is Required` })
	@IsIn([Gender.FEMALE, Gender.MALE])
	gender?: Gender
}
